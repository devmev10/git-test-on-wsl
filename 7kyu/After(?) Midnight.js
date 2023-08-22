// Instructions
// Write a function that takes a negative or positive integer, which represents the number of minutes before (-) or after (+) Sunday midnight, and returns the current day of the week and the current time in 24hr format ('hh:mm') as a string.

// Examples
//       0  =>  should return 'Sunday 00:00'
//      -3  =>  should return 'Saturday 23:57'
//      45  =>  should return 'Sunday 00:45'
//     759  =>  should return 'Sunday 12:39'
//    1236  =>  should return 'Sunday 20:36'
//    1447  =>  should return 'Monday 00:07'
//    7832  =>  should return 'Friday 10:32'
//   18876  =>  should return 'Saturday 02:36'
//  259180  =>  should return 'Thursday 23:40' 
// -349000  =>  should return 'Tuesday 15:20'
// My Solution

function dayAndTime(minutes) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // Calculate the total minutes elapsed from Sunday midnight
    const totalMinutes = (minutes % (7 * 24 * 60) + 7 * 24 * 60) % (7 * 24 * 60);
    
    const dayIndex = Math.floor(totalMinutes / (24 * 60));
    const hour = Math.floor((totalMinutes % (24 * 60)) / 60);
    const minute = totalMinutes % 60;
    
    const dayOfWeek = daysOfWeek[dayIndex];
    const formattedTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    
    return `${dayOfWeek} ${formattedTime}`;
  }