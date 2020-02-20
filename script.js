'use strict'

/*IF conditional
IF A is equal B then to do something*/ 

let age = 25;
let name = "Carlos Gomez";

/*
//Relational Operators

    > greater
    < smaller
    >= greater or equal
    <= smaller or equal
    == equal
    != different
*/
if(age >= 18)
{
    console.log(name + " is " +age+ " years old, is adult");

    if(age <= 33)
    {
        console.log("You are still millennial");
    }else if(age >= 70)
    {
        console.log("You are elder");
    }else
    {
        console.log("You are't millennial")
    }
}
else
{
    console.log(name+ " is " +age+ " years old, is under-age");
}

/*
//Logic Operators

AND: &&
OR: ||
DENY: !
*/

//DENY
let year = 2018;

if(year != 2016)
{
    console.log("The year isn't 2016 really is "+year);
}
//AND
if(year >= 2000 && year <= 2020 && year != 2018)
{
    console.log("We're at the present time");
}else
{
    console.log("We're at the postmodern era");
}
//OR
if(year == 2008 || (year >= 2018 && year == 2028))
{
    console.log("The year finish in 8");
}else
{
    console.log("The year isn't register")
}



