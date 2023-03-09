const now = new Date();
const currentDayOfWeek = now.getDay(); // returns a number between 0 and 6
const isTuesdayToSaturday = currentDayOfWeek >= 2 && currentDayOfWeek <= 6;

let secondarynavbar=false;
if (isTuesdayToSaturday) {
  // set your navbar to true
  secondarynavbar = true;

}


export default secondarynavbar;