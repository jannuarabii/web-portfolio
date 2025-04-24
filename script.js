const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle input');
  const navLinks = document.querySelector('.wrapper-menu');
  const menuLinks = document.querySelectorAll('.wrapper-menu a'); 

  menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.checked = false;
      navLinks.classList.remove('active');

      menuLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  document.addEventListener('click', function (e) {
    const isClickInside = navLinks.contains(e.target) || menuToggle.parentElement.contains(e.target);
    if (!isClickInside) {
      menuToggle.checked = false;
      navLinks.classList.remove('active');
    }
  });
});


const skills = [
  { icon: "bx bx-shape-circle", color: "#353535", name: "Graphic Design" },
  { icon: "bx bxs-cookie", color: "#353535", name: "UI/UX Design" },
  { icon: "bx bxl-visual-studio", color: "#353535", name: "Frontend Developer" },
  { icon: "bx bxs-hot", color: "#353535", name: "Website Animator" }
];

const track = document.getElementById("skillsTrack");


for (let i = 0; i < 3; i++) {
  skills.forEach(skill => {
    const item = document.createElement("div");
    item.className = "skill-item";
    item.innerHTML = `
      <i class='${skill.icon}' style="color: ${skill.color};"> </i>
      <span>${skill.name}</span>
    `;
    track.appendChild(item);
  });
}

document.querySelectorAll('.skill-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    track.style.animationPlayState = 'paused';
  });
  item.addEventListener('mouseleave', () => {
    track.style.animationPlayState = 'running';
  });

  item.addEventListener('touchstart', () => {
    track.style.animationPlayState = 'paused';
  });
  item.addEventListener('touchend', () => {
    track.style.animationPlayState = 'running';
  });
});



document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.goals-swiper', { 
      slidesPerView: 4,
      spaceBetween: 0,
      loop: true,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      breakpoints: {
          0: { slidesPerView: 1 },
          481: { slidesPerView: 2 },
          769: { slidesPerView: 3 },
          1025: { slidesPerView: 4 }
      }
  });
});

 