

const openMenue = document.querySelector(".nav-menue i");
const closeMenue = document.querySelector(".close-menue i")


function hamBurger_Menue() {
  const navLinks = document.querySelector('.nav-left');

  openMenue.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-left');
    navLinks.style.display = "block";
  })

  closeMenue.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-left');
    navLinks.style.display = "none";
  })
}






export default hamBurger_Menue;

