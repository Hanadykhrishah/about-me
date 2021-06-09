'use strict'

let counter = 0;

let userName = prompt ('please Enter Your Name !');
alert ('welcome to my webpage ' + userName );


function userQuestion(question, correctAns, unCorrectAns) {
    let userInput;
    do {
      userInput = prompt(question).toLowerCase();
    } while(userInput !== 'yes' && userInput !== 'y' && userInput !== 'no' && userInput !== 'n');
  
    if(userInput === 'yes' || userInput === 'y') {
      alert ('yes correct Ans');  
     // console.log(correctAns);
     counter ++;
    } else {
      alert ('wrong Ans');  
      //console.log(unCorrectAns);
    }
  }

  userQuestion('Do You Think Iam an Engineer?');
  userQuestion('Do you think I write poetry?');
  userQuestion('Do you think Iam afraid of the sea?' );
 

  function userQuestion2 (questions,unCorrectAns,correctAns) {
    let userInput2 ;

    do {
      userInput2 = prompt(questions).toLowerCase();
    } while(userInput2 !== 'yes' && userInput2 !== 'y' && userInput2 !== 'no' && userInput2 !== 'n');

    if(userInput2 === 'yes' || userInput2 === 'y') {
      alert ('wrong Ans');  
      //console.log(unCorrectAns);
    } else {
      alert ('yes correct Ans');  
      //console.log(correctAns);
      counter ++;
    }

  }
  userQuestion2('Do you think I like to drink coffee?');
  userQuestion2('Do you think I have a pet?');



    
for(let i = 0 ; i < 4; i++)
 {
  let myAge = prompt ('How old do you think I am ?');
    
if ( myAge > 26 ){

    alert ( 'too high');
}

else if ( myAge < 26){

    alert ( 'too low');
 
}
else {
    counter ++;

  alert ('correct answer'); break;}


}
 


alert ('my Age is 26');


  let favFruits = ['banana' ,'strawberries','apple'] ;

for (let i = 0 ; i < 6; i++) {


if (favFruits !== 'banana' && favFruits !== 'strawberries'
 && favFruits !== 'apple' )
 
 {

 favFruits = prompt('What are my favorite fruits?').toLowerCase();

}

else if (favFruits === 'banana' || favFruits === 'strawberries'
|| favFruits === 'apple')

{ 
    counter ++;  

   alert ('correct answer'); break;} 
   
   
}

alert (' My fav fruits is banana and strawberries and apple ');

alert ('your score is ' + counter);

alert('thanks for your time ' + userName + ' see u later ');


























