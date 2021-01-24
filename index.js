const readLineSync= require('readline-sync');
const chalk = require('chalk');
function menu()
{

  console.clear();
console.log('************ This is all we offer ************\n ')



console.log('1. URL Encoder\n2. URL Decoder')

const choice=readLineSync.question(chalk.green.bold('Which app you want to use?\n'));
return choice;
}

const choice = menu();
proceedChoice(choice);

function proceedChoice(choice)
{
  //console.log(typeof(choice));
  //https://workat.tech/ide
  console.clear();
switch (choice) {
  case "1":
  const url=readLineSync.question(chalk.green.bold('Enter the url\n'));
    const urlEncoded=urlEncoder(url);
    console.log(urlEncoded);
    break;
  case "2":
  const encodedUrl=readLineSync.question(chalk.green.bold('Enter the encoded url\n'));
    const urlDecoded=urlDecoder(encodedUrl);
    console.log(urlDecoded);
    break;
    default:
  console.log("You have entered the wrong choice!Try Again\n");
  const choice=menu();
  proceedChoice(choice);
  break;
}
const useAgain=readLineSync.question(chalk.green.bold('Enter 1 to  go back to main menu\nEnter any other key exit\n'));

if(useAgain==="1")
{
  const choice=menu();
  proceedChoice(choice);
}


}

//https%3A%2F%2Fworkat.tech%2Fide


function urlEncoder(url)
{ 
return encodeURIComponent(url);

}

function urlDecoder(encodedUrl)
{
return decodeURIComponent(encodedUrl);
}
