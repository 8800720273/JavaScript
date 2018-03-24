
function calculateAge(BirthYear)
{
    var age = 2018 - BirthYear;
    return age;
}
function Retire(age)
{
    var Retirement = 62 - age;
    return Retirement;

}
var Name = prompt("Enter the Your Name");
var BirthYear = prompt("Enter Your YearOfBirth");
var re = calculateAge(BirthYear)
var Retire = Retire(re);
if (Retire > 0) {
    alert(Name + "  is "+ re +"  Year Old  And   Year Left for  Retirment  is  " + Retire);
} else {
    alert(Name+" is already Retired ")
}