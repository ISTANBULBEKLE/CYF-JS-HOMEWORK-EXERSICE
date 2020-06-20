
//Nested function with name and date of birth..

function findMyBornYear (age) {
    let currentYear =2020;
    let myBornYear = currentYear - age;
    return myBornYear;
}
console.log('I was born in ' + findMyBornYear(40));

function dateWithMsg (name, age){
    let msg=`My name is ${name} and I was born in ${findMyBornYear(age)}`
    return msg;
}
console.log(dateWithMsg('Ekip',40));