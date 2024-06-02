/*=============== SHOW MENU ===============*/

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
}
 
showMenu('nav-toggle','nav-menu')

/*=============== Random Data Text Pick ===============*/

var textArray = [
    "Strømforbrug: 19 Watt",
    "Strømforbrug: 25 Watt",
    "Strømforbrug: 32 Watt"
];

var randomNumber = Math.floor(Math.random() * textArray.length);

document.getElementById("randomNumber").innerHTML = textArray[randomNumber];

var textArray1 = [
    "Opvarmer: 67 m2",
    "Opvarmer: 80 m2",
    "Opvarmer: 103 m2"
];

var randomNumber = Math.floor(Math.random() * textArray1.length);

document.getElementById("randomNumber1").innerHTML = textArray1[randomNumber];

var textArray2 = [
    "Indre Temperatur: 414 grader",
    "Indre Temperatur: 447 grader",
    "Indre Temperatur: 421 grader"
];

var randomNumber = Math.floor(Math.random() * textArray2.length);

document.getElementById("randomNumber2").innerHTML = textArray2[randomNumber];

var textArray3 = [
    "Driftsområde: 3 kW",
    "Driftsområde: 6 kW",
    "Driftsområde: 7 kW"
];

var randomNumber = Math.floor(Math.random() * textArray3.length);

document.getElementById("randomNumber3").innerHTML = textArray3[randomNumber];

