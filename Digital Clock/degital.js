// ! Function to display current time
let displaytime = () => {

    let timer = new Date();

    let hours = timer.getHours();
    let hour12 = hours;

    if (hour12 > 12) {
        hour12 -= 12;
        ampm.innerHTML = 'PM';
    } else {
        ampm.innerHTML = 'AM';
    }

    document.getElementById("hour").innerHTML = pairzero(hour12);

    let min = timer.getMinutes();
    document.getElementById("minutes").innerHTML = pairzero(min);

    let seconds = timer.getSeconds();
    document.getElementById("seconds").innerHTML = pairzero(seconds);

    // ! Use toLocaleDateString with options for custom formatting
    let options = {
        weekday: 'long',    // e.g., Monday
        year: 'numeric',    // e.g., 2025
        month: 'long',      // e.g., October
        day: 'numeric'      // e.g., 12
    };

    let formattedDate = timer.toLocaleDateString(undefined, options);

    // ! Update the date element with formatted string
    document.querySelector(".date").innerHTML = formattedDate;
}

// ! Function to add leading zero if number < 10
let pairzero = (num) => {
    return num < 10 ? "0" + num : num;
}

// ! Update clock every 500 milliseconds
setInterval(displaytime, 500);
