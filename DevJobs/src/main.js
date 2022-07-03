const jobsContainer = document.querySelector(".jobs");
const loadBtn = document.getElementById("load");
const inputTitle = document.getElementById("filter-title");
const inputCountry = document.getElementById("filter-country");
const checkBox = document.getElementById("time");
const searchBtn = document.getElementById("search");
const filterBtn = document.querySelector(".bi-funnel-fill");

const inputCountryMobile = document.querySelector(".modal #filter-country");
const checkBoxMobile = document.querySelector(".modal #time");

// LOAD JOBS //
const loadJobs = async () => {
  const res = await fetch("/data/data.json");
  const jobs = await res.json();
  let output = "";
  jobs.forEach((job) => {
    if (job.id > 12) {
      return;
    } else {
      output += `
    <a class="job" href="/public/jobs.html?jobid=${job.id}">
            <div class="company-img" style="background-color: ${job.logoBackground};">
                <img src="${job.logo}" alt="Comapny">
            </div>
            <div class="job-body">
                <ul class="created-at">
                    <li style="list-style: none;">${job.postedAt}</li>
                    <li>${job.contract}</li>
                </ul>
                <h2 class="position">${job.position}</h2>
                <p class="company-name">${job.company}</p>
                <p class="country">${job.location}</p>
            </div>
        </a>
    `;
    }
  });
  jobsContainer.innerHTML = output;

  /*  // Filter By Title //
  inputTitle.addEventListener("input", (e) =>
    filterJobsByTitle(allJobsContainer, e)
  );

  // Filter by Country //
  inputCountry.addEventListener("input", (e) => {
    filterJobsByCountry(allJobsContainer, e);
  });

  // Filter By Time //
  checkBox.addEventListener("click", (e) => filterByTime(allJobsContainer, e)); */

  /*   // LIGHT MODE AND DARK MODE //
  const h1 = document.querySelectorAll("h1");
  const h2 = document.querySelectorAll("h2");
  const div = document.querySelectorAll("div");
  const jobContainerTheme = document.querySelectorAll(".jobs a.job");
  const input = document.querySelectorAll("input");
  const headerForm = document.querySelector("header .form");
  const inputContainer = document.querySelector(
    '.input-container label[for="time"]'
  );
  const footer = document.querySelector("footer");
  const themeBtn = document.querySelector(".theme button");

  themeBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("light-theme")) {
      e.target.classList.remove("light-theme");
      e.target.classList.add("dark-theme");
      darkTheme(
        e,
        h1,
        h2,
        div,
        jobContainerTheme,
        input,
        headerForm,
        inputContainer,
        footer
      );
    } else if (e.target.classList.contains("dark-theme")) {
      e.target.classList.remove("dark-theme");
      e.target.classList.add("light-theme");
      lightTheme(
        e,
        h1,
        h2,
        div,
        jobContainerTheme,
        input,
        headerForm,
        inputContainer,
        footer
      );
    }
  }); */
};

// LOAD REMAINING JOBS //
const loadMore = async () => {
  const res = await fetch("/data/data.json");
  const jobs = await res.json();
  let output = "";
  jobs.forEach((job) => {
    if (job.id > 12) {
      output = `
            <div class="company-img" style="background-color: ${job.logoBackground};">
                <img src="${job.logo}" alt="Comapny">
            </div>
            <div class="job-body">
                <ul class="created-at">
                    <li style="list-style: none;">${job.postedAt}</li>
                    <li>${job.contract}</li>
                </ul>
                <h2 class="position">${job.position}</h2>
                <p class="company-name">${job.company}</p>
                <p class="country">${job.location}</p>
            </div>
    `;
    } else {
      return "";
    }
    const a = document.createElement("a");
    a.classList.add("job");
    a.setAttribute("href", `/public/jobs.html?jobid=${job.id}`);
    a.innerHTML = output;
    jobsContainer.appendChild(a);
  });
  loadBtn.style.display = "none";

  /* // Filter By Title //
  inputTitle.addEventListener("input", (e) =>
    filterJobsByTitle(allJobsContainer, e)
  );

  // Filter By Country //
  inputCountry.addEventListener("input", (e) => {
    filterJobsByCountry(allJobsContainer, e);
  });

  // Filter By Time //
  checkBox.addEventListener("click", (e) => filterByTime(allJobsContainer, e)); */

  /*   // LIGHT MODE AND DARK MODE //
  const h1 = document.querySelectorAll("h1");
  const h2 = document.querySelectorAll("h2");
  const div = document.querySelectorAll("div");
  const jobContainerTheme = document.querySelectorAll(".jobs a.job");
  const input = document.querySelectorAll("input");
  const headerForm = document.querySelector("header .form");
  const inputContainer = document.querySelector(
    '.input-container label[for="time"]'
  );
  const footer = document.querySelector("footer");
  const themeBtn = document.querySelector(".theme button");

  themeBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("light-theme")) {
      e.target.classList.remove("light-theme");
      e.target.classList.add("dark-theme");
      darkTheme(
        e,
        h1,
        h2,
        div,
        jobContainerTheme,
        input,
        headerForm,
        inputContainer,
        footer
      );
    } else if (e.target.classList.contains("dark-theme")) {
      e.target.classList.remove("dark-theme");
      e.target.classList.add("light-theme");
      lightTheme(
        e,
        h1,
        h2,
        div,
        jobContainerTheme,
        input,
        headerForm,
        inputContainer,
        footer
      );
    }
  }); */
};

/* 
// FILTER ONLY BY COUNTRY //
const filterJobsByCountry = (jobs, e) => {
  let output = "";
  const inputValue = e.target.value.toLowerCase();
  jobs.forEach((job) => {
    const jobCountryContainer = job.children[1].children[3];
    const jobCountry = jobCountryContainer.innerHTML.toLowerCase();
    if (jobCountry.match(inputValue)) {
      const filteredJobs = jobCountryContainer.parentElement.parentElement;
      const div = document.createElement("div");
      div.appendChild(filteredJobs);
      output += div.innerHTML;
      jobsContainer.innerHTML = output;
    }
  });
};

// FILTER ONLY BY TIME //
const filterByTime = (jobs, e) => {
  let output = "";
  const inputValue = e.target.checked;
  if (inputValue) {
    jobs.forEach((job) => {
      const jobCheckedContainer = job.children[1].children[0].children[1];
      const jobChecked = jobCheckedContainer.innerHTML.toLowerCase();
      if (jobChecked == "full time") {
        const filteredJobs =
          jobCheckedContainer.parentElement.parentElement.parentElement;
        const div = document.createElement("div");
        div.appendChild(filteredJobs);
        output += div.innerHTML;
        jobsContainer.innerHTML = output;
      }
    });
  } else if (!inputValue) {
    jobs.forEach((job) => {
      const div = document.createElement("div");
      div.appendChild(job);
      output += div.innerHTML;
      jobsContainer.innerHTML = output;
    });
  }
};
 */

// FILTER ONLY BY TITLE //
const filterJobsByTitle = async (e) => {
  let output = "";
  const inputValue = inputTitle.value.toLowerCase();

  const res = await fetch("/data/data.json");
  const jobs = await res.json();

  jobs.forEach((job) => {
    const jobNames = job.position.toLowerCase();
    if (jobNames.match(inputValue)) {
      output += `
    <a class="job" href="/public/jobs.html?jobid=${job.id}">
            <div class="company-img" style="background-color: ${job.logoBackground};">
                <img src="${job.logo}" alt="Comapny">
            </div>
            <div class="job-body">
                <ul class="created-at">
                    <li style="list-style: none;">${job.postedAt}</li>
                    <li>${job.contract}</li>
                </ul>
                <h2 class="position">${job.position}</h2>
                <p class="company-name">${job.company}</p>
                <p class="country">${job.location}</p>
            </div>
        </a>
    `;
      loadBtn.style.display = "none";
    }
  });
  jobsContainer.innerHTML = output;
};

const filterJobs = async () => {
  let output = "";
  const inputTitleValue = inputTitle.value;
  const inputCountryValue = inputCountry.value;
  const checkBoxValue = checkBox.checked;

  const res = await fetch("/data/data.json");
  const jobs = await res.json();

  jobs.forEach((job) => {
    const jobTitles = job.position.toLowerCase();
    const jobCountries = job.location.toLowerCase();
    const jobTime = job.contract;

    if (
      jobTitles.match(inputTitleValue.toLowerCase()) &&
      jobCountries.match(inputCountryValue.toLowerCase()) &&
      jobTime == `${checkBoxValue ? "Full Time" : "Part Time"}`
    ) {
      output += `
    <a class="job" href="/public/jobs.html?jobid=${job.id}">
            <div class="company-img" style="background-color: ${job.logoBackground};">
                <img src="${job.logo}" alt="Comapny">
            </div>
            <div class="job-body">
                <ul class="created-at">
                    <li style="list-style: none;">${job.postedAt}</li>
                    <li>${job.contract}</li>
                </ul>
                <h2 class="position">${job.position}</h2>
                <p class="company-name">${job.company}</p>
                <p class="country">${job.location}</p>
            </div>
        </a>
    `;
      loadBtn.style.display = "none";
    } else {
      loadBtn.style.display = "none";
    }
  });
  jobsContainer.innerHTML = output;
};

const filteredJobsMobile = async () => {
  let output = "";
  const inputTitleValue = inputTitle.value;
  const inputCountryValueMobile = inputCountryMobile.value;
  const checkBoxValueMobile = checkBoxMobile.checked;

  const res = await fetch("/data/data.json");
  const jobs = await res.json();

  jobs.forEach((job) => {
    const jobTitles = job.position.toLowerCase();
    const jobCountries = job.location.toLowerCase();
    const jobTime = job.contract;

    if (
      jobTitles.match(inputTitleValue.toLowerCase()) &&
      jobCountries.match(inputCountryValueMobile.toLowerCase()) &&
      jobTime == `${checkBoxValueMobile ? "Full Time" : "Part Time"}`
    ) {
      output += `
    <a class="job" href="/public/jobs.html?jobid=${job.id}">
            <div class="company-img" style="background-color: ${job.logoBackground};">
                <img src="${job.logo}" alt="Comapny">
            </div>
            <div class="job-body">
                <ul class="created-at">
                    <li style="list-style: none;">${job.postedAt}</li>
                    <li>${job.contract}</li>
                </ul>
                <h2 class="position">${job.position}</h2>
                <p class="company-name">${job.company}</p>
                <p class="country">${job.location}</p>
            </div>
        </a>
    `;
      loadBtn.style.display = "none";
    } else {
      loadBtn.style.display = "none";
    }
  });

  jobsContainer.innerHTML = output;
};

const removeModal = (modal) => {
  modal.style.visibility = "hidden";
  document.querySelector("header").style.opacity = "1";
  document.querySelector("main").style.opacity = "1";
  document.querySelector("footer").style.opacity = "1";
  document.querySelector(".load-more").style.opacity = "1";
};

const addModal = (modal) => {
  modal.style.visibility = "visible";
  document.querySelector("header").style.opacity = "0.2";
  document.querySelector("main").style.opacity = "0.2";
  document.querySelector("footer").style.opacity = "0.2";
  document.querySelector(".load-more").style.opacity = "0.2";
};

/* const darkTheme = (
  e,
  h1,
  h2,
  div,
  jobContainerTheme,
  input,
  headerForm,
  inputContainer,
  footer
) => {
  document.body.style.backgroundColor = "#121721";

  h1.forEach((h) => {
    h.style.color = "#ffffff";
  });

  h2.forEach((h) => {
    h.style.color = "#ffffff";
  });

  div.forEach((d) => {
    d.style.color = "#ffffff";
  });

  jobContainerTheme.forEach((job) => {
    job.style.backgroundColor = "#19202d";
    job.style.boxShadow = "none";
  });

  input.forEach((i) => {
    i.style.backgroundColor = "#19202d";
    i.style.boxShadow = "none";
    i.style.color = "#ffffff";
  });

  headerForm.style.backgroundColor = "#19202d";
  headerForm.style.boxShadow = "none";
  headerForm.style.color = "#ffffff";

  inputContainer.style.color = "#ffffff";

  footer.style.backgroundColor = "#19202d";
  footer.style.color = "#ffffff";

  e.target.style.backgroundColor = "#19202d";
  document.querySelector("button .bi-circle-fill").style.marginRight = "0";
  document.querySelector("button .bi-circle-fill").style.marginLeft = "1.5rem";
  document.querySelector("button .bi-circle-fill").style.backgroundColor =
    "#19202d";
  document.querySelector("button").style.backgroundColor = "#19202d";
};

const lightTheme = (
  e,
  h1,
  h2,
  div,
  jobContainerTheme,
  input,
  headerForm,
  inputContainer,
  footer
) => {
  document.body.style.backgroundColor = "#f4f6f8";

  h2.forEach((h) => {
    h.style.color = "#000";
  });

  jobContainerTheme.forEach((job) => {
    job.style.backgroundColor = "#ffffff";
    job.style.boxShadow = "rgba(149, 157, 165, 0.2) 0px 8px 24px";
  });

  input.forEach((i) => {
    i.style.backgroundColor = "#ffffff";
    i.style.boxShadow = "none";
    i.style.color = "#000";
  });

  headerForm.style.backgroundColor = "#ffffff";
  headerForm.style.boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
  headerForm.style.color = "#000";

  inputContainer.style.color = "#000";

  footer.style.backgroundColor = "#ffffff";
  footer.style.color = "#000";

  e.target.style.backgroundColor = "#ffffff";
  document.querySelector("button .bi-circle-fill").style.backgroundColor =
    "#ffffff";
  document.querySelector("button .bi-circle-fill").style.marginRight = "1.5rem";
  document.querySelector("button .bi-circle-fill").style.marginLeft = "0";
  document.querySelector("button").style.backgroundColor = "#ffffff";
}; */

// OPEN MODAL //
filterBtn.addEventListener("click", () => {
  const modal = document.querySelector(".modal-container");
  addModal(modal);
  document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-container")) {
      removeModal(modal);
    } else {
      const searchBtn = document.querySelector(".modal #search");
      searchBtn.addEventListener("click", () => {
        removeModal(modal);
        filteredJobsMobile();
      });
    }
  });
});

// FILTER ONLY BY POSITION IN MOBILE //
const searchBtnMobile = document.querySelector(".filter-icons #search");
searchBtnMobile.addEventListener("click", filterJobsByTitle);

// Filter By All //
searchBtn.addEventListener("click", filterJobs);

// LOAD REMAINING ON CLICK OF BUTTON //
loadBtn.addEventListener("click", loadMore);

// LOAD JOBS ON LOAD BROWSER //
document.addEventListener("DOMContentLoaded", loadJobs);
