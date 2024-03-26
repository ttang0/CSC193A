function changeFontSize()
{
    document.getElementById("textarea1").style.fontSize= "30px";
}
function changeFancy()
{
    alert("Hello, world!");
    document.getElementById("textarea1").style.fontWeight = "bold";
    document.getElementById("textarea1").style.color = "#00008B"
    document.getElementById("textarea1").style.textDecoration = "underline"
}
function changeBoring()
{
    document.getElementById("textarea1").style.fontWeight = "normal";
}
function changeMoo()
{
    document.getElementById("textarea1").style.textTransform = "uppercase";
    var str = document.getElementById("textarea1").value;
    var parts = str.split(" ");
    str = parts.join("Moo  ") + "Moo";
    document.getElementById("textarea1").value = str;
}
