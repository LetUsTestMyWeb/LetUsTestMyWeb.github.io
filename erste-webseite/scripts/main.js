var myImage = document.querySelector("img");

myImage.onclick = function ()
{
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "bilder/catBig.jpg")
    {
        myImage.setAttribute("src", "bilder/cat1Big.jpg");
    }
    else
    {
        myImage.setAttribute("src", "bilder/catBig.jpg");
    }
}

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName()
{
    var myName = prompt("Bitte geben Sie Ihren Name ein.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Willkommen auf meiner Webseite, " + myName + "!";
}

if (!localStorage.getItem("name"))
{
    setUserName();
}
else
{
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Willkommen auf meiner Webseite, " + storedName + "!";
}

myButton.onclick = function ()
{
    setUserName();
}

//var nachObenButton = document.getElementById("nachOben");
document.getElementById("nachOben").onclick = function ()
{
    scrollTo(0,0);
}

var userSearch = document.getElementById("usSer");
