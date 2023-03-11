const now = new Date();
const currentDay = now.getDay(); // returns a number between 0 and 6
const currentHour = now.getHours();

let secondarynavbar=false;
if (currentDay >= 2 && currentDay <= 6) { // Tuesday is 2, Saturday is 6
  if (currentDay === 6 && currentHour < 12) { // Before noon on Saturday
    secondarynavbar = true;
  } else if (currentDay !== 6) { // Any other day than Saturday
    secondarynavbar = true;
  }
}


export default secondarynavbar;