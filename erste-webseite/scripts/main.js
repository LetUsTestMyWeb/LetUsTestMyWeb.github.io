var myImage = document.querySelector("img");

myImage.onclick = function ()
{
    var mySrc = mySrc = myImage.getAttribute("src");
    if (mySrc === "bilder/cat.jpg")
    {
        myImage.setAttribute("src", "bilder/cat1.jpg");
    }
    else
    {
        myImage.setAttribute("src", "bilder/cat.jpg");
    }
}

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName()
{
    var myName = prompt("Bitte geben Sie Ihren Name ein.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Wilkommen auf meiner Webseite, " + myName + "!";
}

if (!localStorage.getItem("name"))
{
    setUserName();
}
else
{
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Wilkommen auf meiner Webseite, " + storedName + "!";
}

myButton.onclick = function ()
{
    setUserName();
}