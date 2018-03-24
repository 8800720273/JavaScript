var s = [1950, 1990, 1995, 1996, 2000, 2010];
var s1 = s.length;
var i = 0;
var arr = [s1];
while (i < s1) {

    function check(s) {
        var fullAge = 18;
        var age = 2018 - s[i];
        if (age >= 18) {
            return true;
        }
        else {
            return false
        }
    }
    s[i] = check(s);
}
for(var j = 0; j < s1;j++)
{
    console.log(s[i]);
}
console.log()