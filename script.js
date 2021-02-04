function ageInDays() {
let birthYear= prompt("what year were you born?");
let ageInDayss = (2020- birthYear)*365;
let h1= document.createElement('h1');
let textAns=document.createTextNode('you are '+ ageInDayss+' days old');
h1.setAttribute('id','ageInDays');
h1.appendChild(textAns);
document.getElementById('flex-box-result').appendChild(h1);

}
function reset(){
    document.getElementById('ageInDays').remove();
}

function genPizza(){
    let image= document.createElement('img');
    let div=document.getElementById('flexPizza');
    image.src="https://media1.giphy.com/media/4ayiIWaq2VULC/giphy.gif";
    div.appendChild(image);
}

function rpsGame(yourChoice){
    console.log(yourChoice);
let humanChoice;
let botChoice;
humanChoice=yourChoice.id;

botChoice=numToChoice(randToRpsInt());
console.log('Computer choice:', botChoice);

results = decideWinner(humanChoice, botChoice);
console.log(results);

message=finalMessage(results);
console.log(message);

rpsFrontEnd(yourChoice.id,botChoice, message);  

}

function randToRpsInt()
{
    return Math.floor(Math.random() * 3);

}
function numToChoice(number)
{
    return['Rock','Paper','Scissors'][number];
}
function decideWinner(yourChoice, computerChoice)
{ let rpsDatabase={
    'Rock':{'Scissors':1, 'Rock':0.5, 'Paper':0},
    'Scissors':{'Scissors':0.5, 'Rock':0, 'Paper':1},
    'Paper':{'Scissors':0, 'Rock':1, 'Paper':0.5}
};
let yourScore= rpsDatabase[yourChoice][computerChoice];
let computerScore= rpsDatabase[computerChoice][yourChoice];
return [yourScore ,computerScore];
}
function finalMessage([yourScore,computerScore]){
    if(yourScore==0){
        return {'message':'You lost!', 'color':'red'};}
else if(yourScore==0.5){
    return{'message':'You tied', 'color':'yellow'};}
    else{
        return{'message':'You won!', 'color':'green'};

    }
}

function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage)
{
let imageDatabase={
    'Rock': document.getElementById('Rock').src,
    'Paper': document.getElementById('Paper').src,
    'Scissors': document.getElementById('Scissors').src
}
document.getElementById('Rock').remove();
document.getElementById('Paper').remove();
document.getElementById('Scissors').remove();
 
let humanDiv=document.createElement('div');
let botDiv=document.createElement('div');
let messageDiv=document.createElement('div');

humanDiv.innerHTML="<img src='"+ imageDatabase[humanImageChoice] + "' height=150 width=150 >"
messageDiv.innerHTML="<h1 style='color: " + finalMessage['color']+ "; font-size:60px; padding:30px; '>" +finalMessage['message']+"</h1>" 
botDiv.innerHTML="<img src='"+ imageDatabase[botImageChoice] + "' height= 150 width=150 >"

document.getElementById('flex-box-rps-div').appendChild(humanDiv);
document.getElementById('flex-box-rps-div').appendChild(messageDiv);
document.getElementById('flex-box-rps-div').appendChild(botDiv);

}
