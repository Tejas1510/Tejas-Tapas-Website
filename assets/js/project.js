/* Project Cards */

const projectcards = document.querySelector(".projectcards");
const projects = [
  {
    title: "LearnZilla E Learning App",
    cardImage: "assets/images/project-page/learnzila.png",
    description:
      "A E learning Web App built with React, Django and Material UI which connects teacher and student at one place",
    Previewlink: "https://learnzillaedu.netlify.app/",
    Githublink: "https://github.com/Tejas1510/LearnZilla-E-Learning-Platform",
  },
  {
    title: "Awesome React Project",
    cardImage: "assets/images/project-page/react.png",
    description:
      "A awesome collection of React, Django, Angular and Javascript Projects",
    Previewlink: "https://github.com/Tejas1510/Awesome-Javascript-and-React-Project",
    Githublink: "https://github.com/Tejas1510/Awesome-Javascript-and-React-Project",
  },
  {
    title: "Marine Ship Implementer",
    cardImage: "assets/images/project-page/shipimplement.png",
    description:
      "A application based on Closest Pair Algorithm to find two nearest ship and avoid collision",
    Previewlink: "https://marineshipimplementation.netlify.app/",
    Githublink: "https://github.com/Tejas1510/Marine-Ship-React-Final",
  },
  {
    title: "Hacking tool Script ",
    cardImage: "assets/images/project-page/hacking.png",
    description:
      "Hacking Scripts contains amazing and awesome scripts written in Python, JavaScript, Java, Nodejs, and more.",
    Previewlink: "https://github.com/Tejas1510/Hacking-Scripts",
    Githublink: "https://github.com/Tejas1510/Hacking-Scripts",
  },
  {
    title: "Recipe App",
    cardImage: "assets/images/project-page/recipe.jpg",
    description:
      "A React App which helps to search for any recipe and satisfy your craving 😋",
    Previewlink: "https://recepiereactapp.netlify.app/",
    Githublink: "https://recepiereactapp.netlify.app/",
  },
  {
    title: "Personal Porfolio",
    cardImage: "assets/images/project-page/portfolio.png",
    description:
      "A web Resume built using Javascript",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Android Projects",
    cardImage: "assets/images/project-page/android.png",
    description:
      "A collection of Android Projects to help developer built awesome Apps",
    Previewlink: "https://github.com/Tejas1510/Android-Project",
    Githublink: "https://github.com/Tejas1510/Android-Project",
  },

  {
    title: "Covid Awareness Website",
    cardImage: "assets/images/project-page/covid.png",
    description:
      "A covid awareness website which helps to get details about symtoms and precaution and other detais",
    Previewlink: "https://covidawareness.netlify.app/index.html",
    Githublink: "https://github.com/Tejas1510/Covid-Awareness-Website",
  },
];

const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, description, Previewlink, Githublink }) =>
      (output += `       
    <div class="column skill-card card">
      <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
        <div class="header">
        </div>
        <div class="data">
          <div class="content">
          <div class="title-div">
            <h1 class="title"><a href="#">${title}</a></h1>
            </div>
            <p class="text">${description}</p>
            <ul class="menu-content">
              <li><a href="${Previewlink}" target="_blank" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
              <li><a href="${Githublink}" target="_blank" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>`)
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
