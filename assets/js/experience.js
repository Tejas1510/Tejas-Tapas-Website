//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Lead React Devloper",
    cardImage: "assets/images/experience-page/codingclub.png",
    place: "O(1) Coding Club",
    time: "(May, 2020 - present)",
    desp: "<li>Worked to make a website for coding club by using React, Materail UI, Bootstrap at frontend and Django at Backend.</li> <li>Made the complete homepage having functionality like subscibe to club, Post and read a Blog, Add and participate in daily contest, Post Interview experience.</li> <li>Documented the complete project hosted on heroku and Nelify and currently woking on scalability and maintenance</li>",
  },
  {
    title: "Student Developer",
    cardImage: "assets/images/experience-page/letsupgrade.png",
    place: "Hack with LetsUpgrade",
    time: "(7 sept-28 sept, 2019)",
    desp: "<li>Worked on making a Learnzilla E-Learning App</li><li>We made a web app built with React, Materail UI, Bootstrap at frontend and Django at Backend where teacher can post assignments, marks attendance and conduct classes.</li><li>The students on the other hand can view their progress, see daily attendance, submit assignmnnts and attend classes.</li>",
  },
  {
    title: "Marketing Manager & Research Intern",
    cardImage: "assets/images/experience-page/codingclubindia.png",
    place: "Coding Club India",
    time: "(11th May 2020 - 5th July 2020)",
    desp:"<li>Worked as a pat of Growth Hacker team at Coding Club India.</li><li>Worked and Implemented various ways to increase the reach of coding club by organising workshops, live sessions and coding contest</li> <li>Ranked in top 10 among 236 participant as the best Reaseach and Marketing Intern and awarded Cash Prize and certificate.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Build with LetsUpgrade",
    cardImage: "assets/images/experience-page/letsupgrade-open.png",
    description:
      "I contributed to a project named Online Job Portal over a period of 2 months.",
  },
  {
    title: "Hakincodes Contributor Hack",
    cardImage: "assets/images/experience-page/hackincode.png",
    description:
      "I contributed to a project named Awesome-Portfolio website where we build portfolio boilerplate to be used by everyone",
  },
  {
    title: "30 days of Google Cloud",
    cardImage: "assets/images/experience-page/googlecloud.png",
    description:
      "Participated in 30 days google cloud program",
  },
  {
    title: "Autumn of Open Source AOS 2020",
    cardImage: "assets/images/experience-page/aos.png",
    description:
      "I contributed to a project named Hacking-tool-script where we build awesome python script which can be used by everyone.",
  },
  {
    title: "HackChennai",
    cardImage: "assets/images/experience-page/hackchennai.png",
    description:
      "Participated in 36 hour hackathon organised by SRM HackerEarth.",
  },
  {
    title: "Eduthon",
    cardImage: "assets/images/experience-page/eduthon.png",
    description:
      "Participated in 48 hour hackathon organised by IIIT Lucknow named Eduthon",
  },
  
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="background-image: url(${cardImage});background-repeat: no-repeat, repeat; background-size: cover; background-position: center;">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2>
          <p class="copy">${description}</p></div>
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card


const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
  {
    title: "Progate Mentor Program",
    image: "assets/images/experience-page/progate.png",
    time: "06/2020 - 08/2020",
    desp: "<li>Progate is an online platform to learn programming.</li><hr /><li>I mentored more than 100 students by providing them live access to java and python classes .</li>",
  },
  {
    title: "Hack with Code Warrior",
    image: "assets/images/experience-page/1.jpg",
    time: "1/12/2020-22/12/2020",
    desp: "<li>Code Warriors aims to connect learners from all over the globe with high-quality educators.</li><hr /><li>I mentored participants in hackathon solving their problems, judging their first evaluation and providing valuable advice to them. </li>",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
