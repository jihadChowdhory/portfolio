// Slide changing functionality
const handleNextCount = () => {
  let count = document.getElementById("count");
  if (parseFloat(count.innerText) < 3) {
    count.innerText = parseFloat(count.innerText) + 1;
    changeProject(count.innerText);
  }
};
const handlePreviousCount = () => {
  let count = document.getElementById("count");
  if (parseFloat(count.innerText) > 1) {
    count.innerText = parseFloat(count.innerText) - 1;
    changeProject(count.innerText);
  }
};

const changeProject = (count) => {
  if (count === "2") {
    document.getElementById("project-1").style.display = "none";
    document.getElementById("project-2").style.display = "flex";
    document.getElementById("project-3").style.display = "none";
  } else if (count === "3") {
    document.getElementById("project-1").style.display = "none";
    document.getElementById("project-2").style.display = "none";
    document.getElementById("project-3").style.display = "flex";
  } else {
    document.getElementById("project-1").style.display = "flex";
    document.getElementById("project-2").style.display = "none";
    document.getElementById("project-3").style.display = "none";
  }
};

// Responsive navigation bar functionality
let isDisplaying = false;
const dropDownMenu = () => {
  isDisplaying = !isDisplaying;
  if (isDisplaying) {
    document.getElementById("hamburger").style.display = "none";
    document.getElementById("cross").style.display = "block";
    document.getElementById("side-nav").style.display = "flex";
  } else {
    document.getElementById("hamburger").style.display = "block";
    document.getElementById("cross").style.display = "none";
    document.getElementById("side-nav").style.display = "none";
  }
};

// Active navigation styling
const active = (e) => {
  const target = document.getElementById(e);
  target.classList.add("active");
  const link1 = document.getElementById("work-link");
  const link2 = document.getElementById("about-link");
  const link3 = document.getElementById("download-resume-link");
  const link4 = document.getElementById("contact-link");
  const links = [link1, link2, link3, link4];
  for (let i = 0; i < links.length; i++) {
    const link = links[i].id;
    if (link != target.id) {
      const removingTarget = document.getElementById(link);
      removingTarget.classList.remove("active");
    }
  }
};

// Email sending Functionality
const send = () => {
  const name = document.getElementById("user_name").value;
  const number = document.getElementById("contact_number").value;
  const email = document.getElementById("user_email").value;
  const msg = document.getElementById("message").value;
  var templateParams = {
    user_name: name,
    contact_number: number,
    user_email: email,
    message: msg,
  };

  emailjs.send("service_wpl11w5", "contact_form", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      document.getElementById("success").style.display = "block";
      document.getElementById("failed").style.display = "none";
    },
    function (error) {
      console.log("FAILED", error);
      document.getElementById("failed").style.display = "block";
      document.getElementById("success").style.display = "none";
    }
  );
};

const handleHide = (e) => {
  document.getElementById(e).style.display = "none";
};
