document.getElementById("archlogo").onmouseover = function() {picswap()};
document.getElementById("archlogo").onmouseout = function(){picreverse()};
function picswap()
{
    document.getElementById("archlogo").src = "img/home.png";
    document.getElementById("archlogo").style.width = "100%";
}
function picreverse()
{
    document.getElementById("archlogo").src = "img/archlogo.svg";
    document.getElementById("archlogo").style.width="100%";
}
