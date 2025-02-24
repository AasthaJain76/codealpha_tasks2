// Select elements correctly with the dot (.)
let links = document.querySelectorAll('.about');
let tabs = document.querySelectorAll('.tab-contents');

// Add event listener to each 'about' tab
document.querySelectorAll('.about').forEach(item => {
    item.addEventListener('click', function() {
        tabOpen(this.textContent.toLowerCase());  // Passes 'skills', 'experience', or 'education'
    });
});

function tabOpen(tabSelected) {
    // Remove active class from all links
    links.forEach((link) => {
        link.classList.remove('active-section');
    });

    // Remove active class from all tabs
    tabs.forEach((tab) => {
        tab.classList.remove('active-tab');
    });
    const currLink = document.querySelector(`.${tabSelected}`)
    currLink.classList.add('active-section') 
    const currTab = document.getElementById(tabSelected)
    currTab.classList.add('active-tab')
}

function openMenu(){
    const hamburger = document.querySelector('.fa-bars')
    const rightMenu = document.querySelector('header nav ul')
    hamburger.style.display = 'none'
    rightMenu.style.right = "0"
}
function closeMenu(){
    const hamburger = document.querySelector('.fa-bars')
    const rightMenu = document.querySelector('header nav ul')
    hamburger.style.display = 'block'
    rightMenu.style.right = "-200px"
}


//dark theme
function darkMode(){
    document.body.classList.toggle("dark-mode")
    const icon = document.querySelector(".dark-icon")
    const logo = document.querySelector('header .logo > span')
    if(document.body.classList.contains("dark-mode")){
        icon.src = "sun.png"
        logo.style.color = "#fff";
    }
    else{
        icon.src = "moon.png"
        logo.style.color = "black";
    }
}

// gmail

function sendEmail() {
    window.location.href = "mailto:aasthajain7499@gmail.com";
}
