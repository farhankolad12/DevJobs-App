// GET JOB INFO ONCLICK //
const getJobInfo = async (id) => {
  console.log(id);
  const res = await fetch("/data/data.json");
  const jobs = await res.json();
  let output = "";
  let li = "";
  jobs.forEach((job) => {
    if (job.id == id) {
      output += `
    <header>
      <nav>
        <h1 class="logo">devjobs</h1>
        <div class="theme">
          <i class="bi bi-sun-fill"></i>
          <button class="light-theme">
            <i class="bi bi-circle-fill"></i>
          </button>
          <i class="bi bi-moon-fill"></i>
        </div>
      </nav>
      <div class="company-inner-page">
        <div class="company-inner-img" style="background-color: ${
          job.logoBackground
        };">
          <img src="${job.logo}" alt="Comapnay Logo">
        </div>
        <div class="company-inner-info">
          <h3>${job.company}</h3>
          <p>${job.website}</p>
        </div>
        <button class="company-inner-site">
          <a href="${job.website}">Comapny Site</a>
        </button>
      </div>
    </header>
    <div class="company-information">
    <div class="apply-info">
         <div class="job-body">
                <ul class="created-at">
                    <li style="list-style: none;">${job.postedAt}</li>
                    <li class="contract">${job.contract}</li>
                </ul>
                <h2 class="position">${job.position}</h2>
                <p class="company-name">${job.company}</p>
                <p class="country">${job.location}</p>
            </div>
        <button class="apply-btn">
            <a href="https://example.com/apply">Apply Now</a>
        </button>
    </div>
        <div class="company-description">
            <p>${job.description}</p>
        </div>
        <div class="requirements">
            <h2 style="
      color: #000;margin-bottom:1rem;
            ">Requirements</h2>
            <p>${job.requirements.content}</p>
            <ul>
                ${printItems(job.requirements.items)}
            </ul>
        </div>
        <div class="role">
            <h2 style="
      color: #000;margin-bottom:1rem;
            ">What will you do?</h2>
            <p>${job.role.content}</p>
            <ul>
                ${printItems(job.role.items)}
            </ul>
        </div>
        </div>
        <div class="footer">
        <div class="footer-info">
                <h2 class="position">${job.position}</h2>
                <p class="company-name">${job.company}</p>
        </div>
        <button class="apply-btn">
            <a href="https://example.com/apply">Apply Now</a>
        </button>
        </div>
    `;
    }
    document.querySelector(".body").innerHTML = output;
  });
  const themeBtn = document.querySelector(".theme button");
  const headerInnerPage = document.querySelector("header .company-inner-page");
  const innerPageBtn = document.querySelector(".company-inner-page button");
  const companyInfo = document.querySelector(".company-information ");
  const footerClass = document.querySelector(".footer");

  themeBtn.addEventListener("click", (e) => {
    console.log("CLICK");
    if (e.target.classList.contains("light-theme")) {
      e.target.classList.remove("light-theme");
      e.target.classList.add("dark-theme");
      darkTheme(e, headerInnerPage, innerPageBtn, companyInfo, footerClass);
    } else if (e.target.classList.contains("dark-theme")) {
      e.target.classList.remove("dark-theme");
      e.target.classList.add("light-theme");
      lightTheme(e, headerInnerPage, innerPageBtn, companyInfo, footerClass);
    }
  });
};

const printItems = (items) => {
  const ul = document.createElement("ul");
  items.forEach((item) => {
    ul.innerHTML += `<li>${item}</li>`;
  });
  return ul.innerHTML;
};

const currentURL = window.location.href.split("=");
const id = currentURL[1];

document.addEventListener("DOMContentLoaded", getJobInfo(id));

const darkTheme = (
  e,
  headerInnerPage,
  innerPageBtn,
  companyInfo,
  footerClass
) => {
  document.querySelector(".company-inner-info h3").style.color = "#ffffff";
  document.body.style.backgroundColor = "#121721";
  e.target.style.backgroundColor = "#19202d";

  headerInnerPage.style.backgroundColor = "#19202d";
  headerInnerPage.style.boxShadow = "none";

  innerPageBtn.style.backgroundColor = "#303642";
  innerPageBtn.style.color = "#ffffff";

  companyInfo.style.backgroundColor = "#19202d";

  document
    .querySelector(".requirements h2")
    .style.setProperty("color", "#ffffff", "important");
  document
    .querySelector(".role h2")
    .style.setProperty("color", "#ffffff", "important");
  document
    .querySelector(".job-body .position")
    .style.setProperty("color", "#ffffff", "important");

  footerClass.style.backgroundColor = "#19202d";
  footerClass.style.color = "#ffffff";

  document.querySelector("button .bi-circle-fill").style.marginRight = "0";
  document.querySelector("button .bi-circle-fill").style.marginLeft = "1.5rem";
  document.querySelector("button .bi-circle-fill").style.backgroundColor =
    "#19202d";
};

const lightTheme = (
  e,
  headerInnerPage,
  innerPageBtn,
  companyInfo,
  footerClass
) => {
  document.body.style.backgroundColor = "#f3f7fa";
  e.target.style.backgroundColor = "#ffffff";

  document.querySelector(".company-inner-info h3").style.color = "#000";

  headerInnerPage.style.backgroundColor = "#ffffff";
  headerInnerPage.style.boxShadow = "rgba(149, 157, 165, 0.2) 0px 8px 24px";
  headerInnerPage.style.color = "black";

  innerPageBtn.style.backgroundColor = "#5a64e0";
  innerPageBtn.style.color = "#eef0fc";

  companyInfo.style.backgroundColor = "#ffffff";

  document
    .querySelector(".requirements h2")
    .style.setProperty("color", "#000", "important");
  document
    .querySelector(".role h2")
    .style.setProperty("color", "#000", "important");
  document
    .querySelector(".job-body .position")
    .style.setProperty("color", "#000", "important");

  footerClass.style.backgroundColor = "#ffffff";
  footerClass.style.color = "#19202d";

  document.querySelector("button .bi-circle-fill").style.backgroundColor =
    "#ffffff";
  document.querySelector("button .bi-circle-fill").style.marginRight = "1.5rem";
  document.querySelector("button .bi-circle-fill").style.marginLeft = "0";
};
