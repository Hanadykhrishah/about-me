'use strict'

let userName = prompt ('please Enter Your Name !');
alert ('welcome to my webpage ' + userName );

let Qus1 = prompt ('Do You Think Iam an Engineer?').toLowerCase();

if( Qus1 === 'yes' || Qus1 === 'y')
{
    //console.log (Qus1);
    alert ( 'yes,correct answer');
}
else if( Qus1 === 'no' || Qus1 === 'n')
{
   alert ('wrong answer, really I am Electrical Engineer');
} 
else
{
    alert ('please type (yes) or (no) or (y) or (n)');
}

let Qus2 = prompt ('Do you think I write poetry?').toLowerCase();

if( Qus2 === 'yes' || Qus2 === 'y')
{
    //console.log (Qus2);
    alert ( 'yes,correct answer');
}
else if( Qus2 === 'no' || Qus2 === 'n')
{
   alert ('wrong answer, I will show you some of my poems next time!!');
} 
else
{
    alert ('please type (yes) or (no) or (y) or (n)');
}

let Qus3 = prompt ('Do you think I like to drink coffee?').toLowerCase();


if( Qus3 === 'yes' || Qus3 === 'y')
{
    alert ( 'wrong answer,I tend to drink tea');
}
else if( Qus3 === 'no' || Qus3 === 'n')
{
   alert ('correct answer!!');

} 
else
{
    alert ('please type (yes) or (no) or (y) or (n)');
}

let Qus4= prompt ('Do you think Iam afraid of the sea?').toLowerCase();

if( Qus4 === 'yes' || Qus4 === 'y')

{
    //console.log (Qus4);
    alert ( 'yes,correct answer');
}
else if( Qus4 === 'no' || Qus4 === 'n')
{
   alert ('wrong answer, really I am afraid of the sea !');
} 
else
{
    alert ('please type (yes) or (no) or (y) or (n)');
}

let Qus5= prompt ('Do you think I have a pet?').toLowerCase();


if( Qus5 === 'yes' || Qus5 === 'y')
{
    alert ( 'wrong answer,I have a phobia of pets');
}

else if( Qus5 === 'no' || Qus5 === 'n')
{
   alert ('correct answer!!');

}
else
{
    alert ('please type (yes) or (no) or (y) or (n)');
}

alert('thanks for your time ' + userName + ' see u later ')













