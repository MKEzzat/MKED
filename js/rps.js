// Rock Paper Scissors Module

// textContent

const message = document.querySelector('.message_text');
const botTxt = document.querySelector('.bot_selection');

// Buttons
const play = document.querySelector('#play');
const reset = document.querySelector('.reset_game');


// Human Health Bar
const humanHealthForm = document.querySelector('.human_health_bar');
let humanTotal = humanHealthForm.dataset.total;
let humanValue = humanHealthForm.dataset.value;
let humanBar = document.querySelector('.h_bar');
let humanHit = document.querySelector('.h_hit');


// Bot Health Bar
const botHealthForm = document.querySelector('.bot_health_bar');
let botTotal = botHealthForm.dataset.total;
let botValue = botHealthForm.dataset.value;
let botBar = document.querySelector('.b_bar');
let botHit = document.querySelector('.b_hit');


// Human Choice
let hc = () => {
    let humanForm = document.forms[0];
    let humanChoice;
    for (i = 0; i < humanForm.length; i++) {
        if (humanForm[i].checked) {
            humanChoice = humanForm[i].value ;
        }
    }
    return humanChoice
};

// Bot Choice
let bc = () => {
    const botForm = ["rock","paper","scissors"];
    const randomChoice = Math.floor(Math.random() * botForm.length);
    const botChoice = (botForm[randomChoice]);
    return botChoice
};

// Health Bar Human => Runs if Bot wins
let bw = () => {

    if (humanValue <= 0) {
        message.textContent = `You're dead! New Game`;
    return;
    }

    let damage = 20; //loses 20pts with every hit 
    let newHumanValue = humanValue - damage;  
    let humanBarWidth = (newHumanValue / humanTotal) * 100;
    let humanHitWidth = (damage / humanValue) * 100 + "%";
    // show hit bar and set the width
    // humanHit.css('width', humanHitWidth);
    humanHit.style.width = humanHitWidth;
    humanValue = newHumanValue;
    message.textContent = "Bot Wins!"
    return
}

// Health Bar Bot => Runs if Human Wins
let hw = () => {

    if (botValue <= 0) {
        message.textContent = `You win, bot dead!`;
    return;
    }

    let damage = 20; //loses 20pts with every hit 
    let newBotValue = botValue - damage;  
    let botBarWidth = (newBotValue / botTotal) * 100;
    let botHitWidth = (damage / botValue) * 100 + "%";
    // show hit bar and set the width
    botHit.style.width = botHitWidth;
    botValue = newBotValue;
    message.textContent = "Human Wins!"
    return
}

// Run and Compare Choices
play.addEventListener ("click", () => {
    [r,p,s] = ['rock','paper','scissors'] //shortcuts
    h = hc(); // Get human choice
    b = bc(); // Get bot choice
    // Print Choices
    botTxt.textContent = b;
    result =
        ((h === undefined)) ?
        result = "Choose a weapon first..." :
        ((h === r && b === s) || (h === p && b === r) || (h === s && b === p)) ? 
        (hw(), message.textContent = "Human Wins") :
        ((h === r && b === p) || (h === p && b === s) || (h === s && b === r)) ? 
        (bw(), message.textContent = "Bot Wins!") :
        result = "It's a tie! Try again." ;
    // Print Result
    message.textContent = result;  
});

// Reset Game

reset.addEventListener ('click',()=>{
    botValue = 100;
    humanValue = 100;
    humanHit.style.width = 0;
    humanBar.style.width = '100%';
    botHit.style.width = 0;
    botBar.style.width = '100%';
    // clear selection
    let select = document.getElementsByName("select");
	for(var i=0;i<select.length;i++)
    select[i].checked = false;

});



// Health Module

// $(document).ready(function(){
//     var hitBtn = $('button.damage'),
//         reset = $('button.reset'),
//         hBar = $('.health-bar'), // bot_health_bar
//         bar = hBar.find('.bar'), // b_bar
//         hit = hBar.find('.hit'); // b_hit
    
//     hitBtn.on("click", function(){
//       var total = hBar.data('total'), 
//           value = hBar.data('value');
      
//       if (value < 0) {
//               log("you dead, reset");
//         return;
//       }
//       // max damage is essentially quarter of max life
//       var damage = Math.floor(Math.random()*total);
//       // damage = 100;
//       var newValue = value - damage;
//       // calculate the percentage of the total width
//       var barWidth = (newValue / total) * 100;
//       var hitWidth = (damage / value) * 100 + "%";
      
//       // show hit bar and set the width
//       hit.css('width', hitWidth);
//       hBar.data('value', newValue);
      
//       setTimeout(function(){
//         hit.css({'width': '0'});
//         bar.css('width', barWidth + "%");
//       }, 500);
//       //bar.css('width', total - value);
      
//       log(value, damage, hitWidth);
      
//       if( value < 0){
//         log("DEAD");
//       }
//     });
    
//     reset.on('click', function(e){
//       hBar.data('value', hBar.data('total'));
      
//       hit.css({'width': '0'});
      
//           bar.css('width', '100%');
//           log("resetting health to 1000");
//     });
//   });
  
  
  
//   function log(_total, _damage, _hitWidth){
//     var log = $('.log');
    
//     if(_damage !== undefined && _hitWidth !== undefined) {
//         log.append("<div>H:"+_total+" D:"+_damage+" W:"+_hitWidth+" = " + (_total - _damage) + "</div>");
//     } else {
//       log.append("<div>"+_total+"</div>");
//     }
//   };