var ageRam = prompt("Enter the age of Ram");
var heightRam = prompt("Enter the height of Ram");
var ageSita = prompt("Enter the Age Of sita");
var heightSita = prompt("Enter the Heght of Sita");
if ((ageRam * 5) + heightRam > (ageSita * 5) + heightSita)
{
    alert("Ram is winner");
}else if((ageRam * 5) + heightRam == (ageSita * 5) + heightSita)
{
    alert("Draw");
}
else
{
    alert("Sita is winner");
}