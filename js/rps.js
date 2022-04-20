// Rock Paper Scissors 

// textContent & Forms

const message = document.querySelector('.game_text');
const botRock = document.querySelector('#botRock');
const botPaper = document.querySelector('#botPaper');
const botScissors = document.querySelector('#botScissors');
const botFace = document.querySelector('#botFace');
const botFaceSrc = document.querySelector('#botFace').getAttribute('src');
const botFist = document.querySelector('#botFist');


// Buttons
const play = document.querySelector('#rpsPlay');
const reset = document.querySelector('#rpsReset');
const quit = document.querySelector('#rpsQuit');


// Human Health Bar
const playerScore = document.querySelector('.player_score');
let playerTotal = playerScore.dataset.total;
let playerValue = playerScore.dataset.value;
let playerBar = document.querySelector('.human_bar');
let playerHit = document.querySelector('.human_hit');


// Bot Health Bar
const botScore = document.querySelector('.bot_score');
let botTotal = botScore.dataset.total;
let botValue = botScore.dataset.value;
let botBar = document.querySelector('.bot_bar');
let botHit = document.querySelector('.bot_hit');

// Bot faces
const pngDefault = 'img/avatar/thanos.png';

// Decelerations 

[r,p,s] = ['rock','paper','scissors'] //shortcuts
let h; // Used to call player(human) choice
let b; // used to call bot choice



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

// Highlight Bot Choice

let botChoiceHighlight = () => { // Clean up with classlist!!
    (b === r) ? 
    (botRock.classList.add('bot_choice'),
    botPaper.classList.remove('bot_choice'),
    botScissors.classList.remove('bot_choice')):
    (b === p) ? 
    (botRock.classList.remove('bot_choice'),
    botPaper.classList.add('bot_choice'),
    botScissors.classList.remove('bot_choice')):

    (botRock.classList.remove('bot_choice'),
    botPaper.classList.remove('bot_choice'),
    botScissors.classList.add('bot_choice'));
};


// Health Bar Human => Runs if Bot wins
let botWins = () => {
    let damage = 20; //loses 20pts with every hit 
    let newPlayerValue = playerValue - damage;  
    let humanBarWidth = (newPlayerValue / playerTotal) * 100;
    let humanHitWidth = (damage / playerValue) * 100 + "%";
    // show hit bar and set the width
    // humanHit.css('width', humanHitWidth);
    playerHit.style.width = humanHitWidth;
    playerValue = newPlayerValue;
    message.textContent = "Bot Wins! You lose 20 Points..."
    return
}

// Health Bar Bot => Runs if Human Wins
let humanWins = () => {
    let damage = 20; //loses 20pts with every hit 
    let newBotValue = botValue - damage;  
    let botBarWidth = (newBotValue / botTotal) * 100;
    let botHitWidth = (damage / botValue) * 100 + "%";
    // show hit bar and set the width
    botHit.style.width = botHitWidth;
    botValue = newBotValue;
    message.textContent = "You Wins! Bot loses 20 Points...";
    return
}

// Health bar Tie => Runs if Tie

let tie = () => {
    // Bot health bar
    let botDamage = 10; //loses 10pts with every hit 
    let newBotValue = botValue - botDamage;  
    let botBarWidth = (newBotValue / botTotal) * 100;
    let botHitWidth = (botDamage / botValue) * 100 + "%";
    botHit.style.width = botHitWidth;
    botValue = newBotValue;

    // Player health bar
    let playerDamage = 10; //loses 20pts with every hit 
    let newPlayerValue = playerValue - playerDamage;  
    let humanBarWidth = (newPlayerValue / playerTotal) * 100;
    let humanHitWidth = (playerDamage / playerValue) * 100 + "%";
    playerHit.style.width = humanHitWidth;
    playerValue = newPlayerValue;
    
    message.textContent = "It's a tie! You both lose 10 Points...";
    return
};

// Score Check

let scoreCheck = () => {
    if (playerValue <= 0) { message.textContent = "You're dead! Bot wins...";}
    else if (botValue <= 0) { message.textContent = "Bot is dead! You win...";}
    else { return };
};

// Bot Emojis reactions
let reactDefault = () => { botFace.setAttribute('src',botFaceSrc)}; //returns to default

let reactCry = () => {
    const pngCry = 'img/faces/cry.png';
    botFace.setAttribute('src',pngCry);
    setTimeout( reactDefault, 1600 );
};
let reactDevil = () => {
    const pngDevil = 'img/faces/devil.png';
    botFace.setAttribute('src',pngDevil);
    setTimeout( reactDefault, 1600 );
};
let reactFacepalm = () => {
    const pngFacepalm = 'img/faces/facepalm.png';
    botFace.setAttribute('src',pngFacepalm);
    setTimeout( reactDefault, 1600 );
};
let reactFunny = () => {
    const pngFunny ='img/faces/funny.png';
    botFace.setAttribute('src',pngFunny);
    setTimeout( reactDefault, 1600 );
};
let reactThinking = () => {
    const pngThinking ='img/faces/thinking.png';
    botFace.setAttribute('src',pngThinking);
    setTimeout( reactDefault, 1600 );
};

let reactDead = () => {
    const pngDead ='img/faces/zombie.png';
    botFace.setAttribute('src',pngDead);
    setTimeout( reactDefault, 1600 );
};

// Fist Animation

const fistDefault = 'img/hands/fist.png';


let fistPlayerDefault = () => {play.setAttribute('src',fistDefault)}
let fistBotDefault = () => {botFist.setAttribute('src',fistDefault)}

let fistPlayer = () => {
    const fistRock = 'img/hands/rock.gif';
    const fistPaper = 'img/hands/paper.gif';
    const fistScissors = 'img/hands/scissors.gif';
    if (h == r) { play.setAttribute('src',fistRock)}
    else if (h == p) { play.setAttribute('src',fistPaper)}
    else {play.setAttribute('src',fistScissors);};
    setTimeout( fistPlayerDefault, 1200 );
};

let fistBot = () => {
    const fistRock = 'img/hands/rock.gif';
    const fistPaper = 'img/hands/paper.gif';
    const fistScissors = 'img/hands/scissors.gif';
    if (b == r) { botFist.setAttribute('src',fistRock)}
    else if (b == p) { botFist.setAttribute('src',fistPaper)}
    else {botFist.setAttribute('src',fistScissors);};
    setTimeout( fistBotDefault, 1200 );
};

// Game Code

let game = () => {
    h = hc(); // Get human choice
    b = bc(); // Get bot choice
    // Get winner
    if ((h === undefined)) { reactFacepalm(); message.textContent = "Choose a weapon first..." ;} 
    else if (playerValue <= 0) { reactDevil(); message.textContent = "You're dead! Bot wins...";}
    else if (botValue <= 0) { reactDead(); message.textContent = "Bot is dead! You win...";}
    else if ((h === r && b === s) || (h === p && b === r) || (h === s && b === p))
    {humanWins(); reactCry(); fistPlayer(); fistBot(); botChoiceHighlight(); }
    else if ((h === r && b === p) || (h === p && b === s) || (h === s && b === r))
    {botWins(); reactFunny(); fistPlayer(); fistBot(); botChoiceHighlight();}
    else {tie(), reactThinking(); fistPlayer(); fistBot(); botChoiceHighlight();}
    scoreCheck();
};

// Reset Code

let rpsReset = () => {
    botValue = 100;
    playerValue = 100;
    playerHit.style.width = 0;
    playerBar.style.width = '100%';
    botHit.style.width = 0;
    botBar.style.width = '100%';
    // clear selection
    let select = document.getElementsByName("select");
	for(var i=0;i<select.length;i++)
    select[i].checked = false;
    // Clear bot selection
    botRock.removeAttribute('class','bot_choice');
    botPaper.removeAttribute('class','bot_choice');
    botScissors.removeAttribute('class','bot_choice');
    // Reset text
    message.textContent = "Choose your weapon. Click your fist when ready!";
};

// Quit Code

let rpsQuit = () => {
    heroSection.classList.remove('off');
    gameSection.classList.add('off');
};

// Game EventListeners

play.addEventListener ("click", game);
reset.addEventListener ("click", rpsReset);
quit.addEventListener('click', () => { rpsReset(); rpsQuit();});

// quit.addEventListener('click', () => { resetGame(); quitGame();});