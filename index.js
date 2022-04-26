/*  function scuberGreetingForFeet, if ride in feet is less than 400, gives ride for free
    -if ride is over 2500 feet = 'no can do'
    -if ride < 400 and less than 2000, ride = $20
    -if number > 2000, ride = $30
    -ride not possible if over 2500 ft
*/

function scuberGreetingForFeet(number){
  if (number <= 400){
    return 'This one is on me!'
  }
  else if (number > 2500){
    return 'No can do.'
  }
  else if (number > 400 && number <= 2000){
    return 'That will be twenty bucks.'
  }
 else if (number > 2000){
  return 'I will gladly take your thirty bucks.'
 }
 }
//describe('ternaryCheckCity(), returns "Ok, sounds good." when the city is NYC'

function ternaryCheckCity(city){
  return city === 'NYC'?'Ok, sounds good.':'No go.'
}


//switchOnCharmFromTip() should return "Thank you so much." if the tip case 'generous'
//should return "Thank you." if the tip case 'not as generous'
// should return "Bye." if anything else (default)

function switchOnCharmFromTip(tip){
 switch (tip){
   case 'generous':
     return 'Thank you so much.'
     break;
   case 'not as generous':
     return 'Thank you.'
     break;
   default:
     return 'Bye.'
     break;
 }
}
