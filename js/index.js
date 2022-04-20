
// PRELOADER
// Uses timeout function, not for production.

const loader = document.querySelector('.preloader');
window.addEventListener('load', function(){
    this.setTimeout(function(){ 
        loader.style.display = 'none';
    }, 900);
})

// Login Section

//// Avatar Menu
const loginSection = document.querySelector('.login_section');
const userSection = document.querySelector('.user_section');
const avatarUp = document.querySelector('.menu_up');
const avatarDn =  document.querySelector('.menu_down');
const avatarPanel = document.querySelector('.avatar_panel');


let avatarOpen = () => {
    avatarUp.classList.remove('off');
    avatarDn.classList.add('off');
    avatarPanel.classList.remove('off');
    userSection.classList.add('off');
};

let avatarClose = () => {
    avatarUp.classList.add('off');
    avatarDn.classList.remove('off');
    avatarPanel.classList.add('off');
    userSection.classList.remove('off');
};

avatarDn.addEventListener('click', avatarOpen);
avatarUp.addEventListener('click', avatarClose);

const onAvatarClick = async (e) => { //Select Avatar
    let userAvatar = e.currentTarget.getAttribute('src');
    avatar.setAttribute('src', userAvatar);
    // Close Avatar Menu after 
    avatarClose();
};

const avatars = document.querySelectorAll('.avatar');
avatars.forEach(avatar => avatar.addEventListener('click', onAvatarClick));

//// USER SECTION

const submit = document.querySelector('#submit');
const heroSection = document.querySelector('.hero_section');
const avatarHeader = document.querySelector('.hero_section');
const userHeader = document.querySelector('.user_toolbar_name');
const userTbImg = document.querySelector('.user_toolbar_img');
const appTbAr = document.querySelector('.app_arrow');
const appTbUp = document.querySelector('.app_arrow_up');
const appTbDn = document.querySelector('.app_arrow_down');
const userTbAr = document.querySelector('.user_arrow');
const userTbUp = document.querySelector('.user_arrow_up');
const userTbDn = document.querySelector('.user_arrow_down');

let userName;
let userAvatar;
let time = new Date().getHours();


submit.addEventListener ('click', () => {
    // Get Username & Avatar
    userName = document.getElementById('name').value;
    userAvatar = avatar.getAttribute('src');

    // Sections to hide
    loginSection.classList.add('off');
    userTbImg.classList.add('off');
    
    // Sections to enable
    heroSection.classList.remove('off');
    appTbAr.classList.remove('off');
    userTbAr.classList.remove('off');


    // Set user Avatar
    avatarDisplay.setAttribute('src',userAvatar);
    const playerGameAvatar = document.querySelector('.player_avatar_src') 
    playerGameAvatar.setAttribute('src',userAvatar);
    const playerGameName = document.querySelector('.player_name') 
    playerGameName.textContent = userName
    // Set user Greeting & Name
    document.getElementById('userHello').textContent = 
    time >= 18 ? 'Good evening,':
    time >= 12 ? 'Good afternoon,':
    'Good morning,';
    userDisplay.textContent = userName;
    userHeader.textContent = userName;
    // userGameName.textContent = userName;
});

// HERO SECTION
//// OPEN & CLOSE APPS

const gameSection = document.querySelector('.game_section');
const csSection = document.querySelector('.comingSoon_section');

const rpsCard = document.querySelector('#rpsBtn');
const csCard = document.querySelectorAll('#csBtn');



const runRPS = async (e) => {
    heroSection.classList.add('off');
    gameSection.classList.remove('off');
};

const runCS = async (e) => {
    heroSection.classList.add('off');
    csSection.classList.remove('off');
};

const runHP = async (e) => {
    heroSection.classList.remove('off');
    csSection.classList.add('off');
};

//// Cards EventListeners
rpsCard.addEventListener ("click", runRPS);
csCard.forEach(cs => cs.addEventListener('click', runCS));

//// Coming Soon Section
const quitCS = document.querySelector('#quitCS');
quitCS.addEventListener('click',runHP)

// MENU SECTION

const userMenu = document.querySelector('.user_toolbar_menu');
const logOutBtn = document.querySelector('#logOut');

const openUserMenu = async (e) => {
    userTbUp.classList.remove('off');
    userTbDn.classList.add('off');
    userMenu.classList.remove('off');
};

const closeUserMenu = async (e) => {
    userTbUp.classList.add('off');
    userTbDn.classList.remove('off');
    userMenu.classList.add('off');
};

const logOut = async (e) => {
   location.reload(); 
};



userTbDn.addEventListener('click',openUserMenu);
userTbUp.addEventListener('click',closeUserMenu);
logOutBtn.addEventListener('click',logOut);