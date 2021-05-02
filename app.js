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
