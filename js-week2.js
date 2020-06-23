
///////////////////////////////////////////////////////////////////////////////
// Atanas average module score;

let studentModuleScores = [77, 35, 50, 61, 68, 65, 80, 71, 40, 60];
let moduleScoresTotal= 0;
let averageScore; 
function averageModuleScore ( ){
  for (let i = 0; i < studentModuleScores.length; i++){
    moduleScoresTotal= moduleScoresTotal + studentModuleScores[i];
    averageScore = moduleScoresTotal/studentModuleScores.length;
  }
return `The average module score for Atanas is ${averageScore}.`; 
}
console.log(averageModuleScore());
/////////////////////////////////////////////////////////////////////////////////

/* Atanas Sum with loops - large numbers - the power of loops is best 
used at large calculations - could you calculate the sum of the numbers 
between 50 - 500 (incl. both). How much is that? */

let totalNumbers = 0;
function addNumbers (){
for (let i = 50; i <= 500; i++){
    totalNumbers = totalNumbers + i;
}
return `The sum of the numbers between 50 and 500 is ${totalNumbers}`;
}
console.log(addNumbers());

//////////////////////////////////////////////////////////////////////////////////

