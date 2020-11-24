AOS.init();

// MOOCs Cards

// const carouselSlide = document.querySelector('.carousel-slide');
// const carouselImages = document.querySelectorAll('.carousel-slide img');

// const prevBtn = document.querySelector('#prevBtn');
// const nextBtn = document.querySelector('#nextBtn');

// let counter = 1;
// const size = carouselImages[0].clientWidth;

// carouselSlide.style.transform = 'translateX('+(-size*counter)+'px)';

// nextBtn.addEventListener('click',() =>{
//   carouselSlide.style.transition = "transform 0.4 ease-in-out";
//   counter++;
//   carouselSlide.style.transform = 'translateX('+(-size*counter)+'px)';

// })

// prevBtn.addEventListener('click',() =>{
//   carouselSlide.style.transition = "transform 0.4 ease-in-out";
//   counter--;
//   carouselSlide.style.transform = 'translateX('+(-size*counter)+'px)';

// })

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Frontend Development with React",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://drive.google.com/file/d/1XOJS6wKsJWNK7AXM_Ov3m6MUmtksf5We/view?usp=sharing",
  },
  {
    title: "Introduction to Soft Skills",
    cardImage: "assets/images/education-page/nptel.png",
    moocLink: "https://drive.google.com/file/d/1L77t7qgJdQRXzkef0NROc0upYpWSjeDm/view?usp=sharing",
  },
  {
    title: "Working with Aurdino",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://drive.google.com/file/d/1NIBN2o1NGUYUSyHwSjE1kwxSIIsIAxJO/view?usp=sharing",
  },
  {
    title: "AWS Specialization",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://drive.google.com/file/d/1hBFCa5o7qcS5THVmj-ysHK3AZTujS9PY/view?usp=sharing",
  },
  {
    title: "Digital Marketing by Google",
    cardImage: "assets/images/education-page/google.png",
    moocLink: "https://drive.google.com/file/d/1jHjIQOspWAO3acLEByf_a3X0RnMrOgKy/view?usp=sharing",
  },
  {
    title: "Search Engine Optimisation",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://drive.google.com/file/d/1dBu7oCb8XiS-e037gLqmMMxuMpajX2US/view?usp=sharing",
  },
  {
    title: "Complete Java BootCamp",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://drive.google.com/file/d/1i0irOgpTHjBc-w3yfiPtxF15hrIGdZci/view?usp=sharing",
  },
  {
    title: "Introduction to AWS IOT",
    cardImage: "assets/images/education-page/aws.png",
    moocLink: "https://drive.google.com/file/d/1oD05_GaJMjDfBcBclFrWGX-a4zubzSJ8/view?usp=sharing",
  },
  
];

const experience = [
  {
    img:"assets/images/education-page/Letsupgrade.jpg"
  },
  {
    img:"assets/images/education-page/c2.jpg"
  },
  {
    img:"assets/images/education-page/c3.png"
  },
  {
    img:"assets/images/education-page/c4.png"
  },
  {
    img:"assets/images/education-page/c1.png"
  },
  {
    img:"assets/images/education-page/c5.jpg"
  },
  {
    img:"assets/images/education-page/c7.png"
  },
  {
    img:"assets/images/education-page/c8.png"
  },
  {
    img:"assets/images/education-page/c9.png"
  },
];

let currentItem = 0;

const img=document.getElementById('image');

const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');

window.addEventListener('DOMContentLoaded',function(){
  showExperience();
})

// show experience based on value of currentItem
function showExperience(){
  const item=experience[currentItem];
  img.src=item.img;
}

// show next experience 
nextBtn.addEventListener('click',function(){
  currentItem++;
  if(currentItem>experience.length){
    currentItem=0;
  }
  showExperience();
})
// show prev experience
prevBtn.addEventListener('click',function(){
  currentItem--;
  if(currentItem<0){
    currentItem=experience.length-1;
  }
  showExperience();
})

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage,moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description}) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);


/* Timeline Section*/

const timeline = document.querySelector(".timeline");
const timelinesection = [
  {
    heading: "Ramdeobaba College of Engineering",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading:"Bachelors of Science, Computer Science & Engineering, (2018-2022)",
    description: "<li>Top 1% in the department</li><li>Current Cgpa : 9.41</li>",
  },

  {
    heading: "M. K. H. Sancheti Public School & Junior College",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading:"Higher Secondary Education, Science Department, (2016-2018)",
    description: "<li>Passed the 12 board examination with 90 Percent(%)</li>",
  },

  {
    heading: "Somalwar Nikalas and High School",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading:"Matriculation examination, SSC 10 Board (2020-2024)",
    description: "<li>Passed the 10 board examination with 94.2 Percent(%)</li>",
  },
];

const showCards2 = () => {
  let output = "";
  timelinesection.forEach(
    ({ heading, image, subheading, description}) =>
      (output += `       
      <div class="timeline" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600">
      <div class="timeline-content">
        <h6 class="center-align font-weight-bolder pt-1">${heading}</h6>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4">
            <img src="${image}" alt="" height="110"
              class=" mt-2 w-100 mx-auto">
          </div>
          <div class="col-lg-8 col-md-8 col-sm-8 px-4">
            <span style="opacity: 0.9; font-size: 15px;">
              ${subheading}
            </span>
            <h6 class="text-muted mt-2" style="font-size: small;">Activities:</h6>
            <ol style="margin-top: -8px; margin-left: -10px; font-size: 12px; list-style: disc;">
              ${description}
            </ol>
          </div>
        </div>
      </div>
    </div>`)
  );
  timeline.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);