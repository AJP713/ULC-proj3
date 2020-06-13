/* Adam Prado  6/10/20
The goal is to train the dog as much as possible before it dies at 40.  But to train him he has to be full, happy and not need a walk.
Over time he loses happiness and needs food and to walk more.  Clicking the matching button will relieve that measure.
If any measure gets very bad it will warn you in red.
To do well you pretty much have to spam the buttons, maybe not the most fun game ever.


*/


console.log("Just making sure this works");
// initial variable values
let age = 0;  
let happy = 50;
let hungry = 50;
let walk = 20;
let trick = 0;

//sets the buttons to a variable
let petButton = document.querySelector("#petB");
let feedButton = document.querySelector("#feedB");
let trainButton = document.querySelector("#trainB");
let walkButton = document.querySelector("#walkB");
let statusDis = document.querySelector("#status");

//sets each display element to a variable
let displayImg = document.querySelector("#display");
let ageDis = document.querySelector("#ageS");
let happyDis = document.querySelector("#happyS");
let hungryDis = document.querySelector("#hungryS");
let walkDis = document.querySelector("#walkS");
let trickDis = document.querySelector("#trickS");

console.log(feedButton);
console.log(`the age is ${age}`);

//pets the dog to increase happiness
petButton.addEventListener("click", e => {
  console.log(`Pet button pressed!`);
  happy += 5;
  console.log(`happy score is ${happy} so`);
  checkHappy();
});

//feeds the dog unless he is completely full.
feedButton.addEventListener("click", e => {
  console.log(`Feed button clicked`);
  checkHungry();
  if (hungry < 0) {
    hungryDis.innerHTML = `He's full.`;
  } else {
    hungry -= 10;
    console.log(`hungry score is ${hungry}`);
  }
});

//if happy, hungry and walk are all good enough he can train.
trainButton.addEventListener("click", e => {
  if (happy > 80 && hungry < 40 && walk < 40) {
    trick++;
    happy -= 20;
    hungry += 20;
    trickDis.innerHTML = `Dog knows ${trick} tricks`;
    console.log(`Dog knows ${trick} tricks`);
    statusDis.innerHTML = `He leaned a new trick!! Great job.`;
    displayImg.innerHTML = `<img src="https://cdn.glitch.com/a0079b63-6987-48c7-803b-058fa5dfdf56%2Ftrick.jpg?v=1591837881004" >`;
  } else {
    statusDis.innerHTML = `He needs something before training. Try to pet, feed or walk him.`;
    console.log(`He needs something`);
  }
});

//walk button sets walk back to 0 
walkButton.addEventListener('click', e => {
  if(walk>80){
    walk = 0;
    happy += 20
    displayImg.innerHTML = `<img src="https://cdn.glitch.com/a0079b63-6987-48c7-803b-058fa5dfdf56%2Fwalking.jpg?v=1592018964491" >`;
    walkDis.classList.remove('danger');
  }else{
    walk = 0;
    walkDis.classList.remove('danger');
  }
  
})

//this is the timer, ever 1.5 seconds it increases all variables and checks for status updates in the categories.
setInterval(a => {
  if (age < 40) {
    age++;
    happy += -3;
    hungry+= 2;
    walk+= 3;
    ageDis.innerHTML = `Dog is ${age} years old`;
    checkHappy();
    checkHungry();
    checkWalk();
  } else {
    dead();
  }
}, 1500);

// checks for which message to display for hunger
let checkHappy = () => {
  if (happy > 80) {
    happyDis.innerHTML = `The dog is very happy`;
    displayImg.innerHTML = `<img src="https://cdn.glitch.com/a0079b63-6987-48c7-803b-058fa5dfdf56%2Fhappy.jpg?v=1591837794577">`;
  } else if (happy > 60) {
    happyDis.innerHTML = `The dog is happy`;
    displayImg.innerHTML = `<img src="https://cdn.glitch.com/a0079b63-6987-48c7-803b-058fa5dfdf56%2Fnormal.jpg?v=1591837769347"  >`;
  } else if (happy > 30) {
    happyDis.innerHTML = `The dog is sad. He needs some love.`;
    displayImg.innerHTML = `<img src="https://cdn.glitch.com/a0079b63-6987-48c7-803b-058fa5dfdf56%2Fbark.jpg?v=1591837881039"  >`;
      happyDis.classList.remove('danger')
  } else {
    happyDis.innerHTML = `The dog is angry.  You should probably pet him.`;
    happyDis.classList.add('danger')
    displayImg.innerHTML = `<img src="https://cdn.glitch.com/a0079b63-6987-48c7-803b-058fa5dfdf56%2Fangry.jpg?v=1591837979352" >`;
  }
};

// checks what to display for hunger
let checkHungry = () => {
  if (hungry < 20) {
    hungryDis.innerHTML = `Dog is full.`;
  } else if (hungry < 50) {
    hungryDis.innerHTML = `Dog is a little hungry.`;
    hungryDis.classList.remove('danger');
  } else {
    hungryDis.innerHTML = `Dog very hungry. Feed him`;
    hungryDis.classList.add('danger');
    happy -= 1;
  }
};

let checkWalk = () => {
  if (walk > 80){
      walkDis.innerHTML = `The dog peed everywhere and .  You have to walk him`;
       walkDis.classList.remove('danger');
    walkDis.classList.add('danger');
     displayImg.innerHTML = `<img src="https://cdn.glitch.com/a0079b63-6987-48c7-803b-058fa5dfdf56%2Fpeed.jpg?v=1591838091886" >`;
      happy -= 2
      } else if (walk >60){
         walkDis.classList.remove('danger');
        walkDis.innerHTML = `The dog will need to walk soon`;
      } else {
        walkDis.innerHTML = `The dog does not need a walk yet.`;
      }
};

//displays once he reaches 40
let dead = () => {
  statusDis.innerHTML = `He died, but learned ${trick} tricks in his life.`;
  displayImg.innerHTML = `<img src="https://cdn.glitch.com/a0079b63-6987-48c7-803b-058fa5dfdf56%2Ftombstone.jpg?v=1591838157115" >`;
};
