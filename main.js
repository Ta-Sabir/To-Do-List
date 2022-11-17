const button = document.querySelector("button");

const section = document.getElementById("section");

const form = document.querySelector("form");

const input = document.querySelector("input");

const icon = document.getElementById("icondark");

const body = document.getElementById("body");

form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  const task = `
    <div class="task">
    <i class="fa-solid fa-star icon1"></i>
    <p class="paragraph"> ${input.value} </p>
    <div>
        <i class="fa-solid fa-trash icon"></i>
        <i class="fa-solid fa-check"></i>
        <!-- <i class="fa-solid fa-heart icon"></i> -->
    </div>
    </div>`;

  section.innerHTML += task;

  input.value = "";
});
section.addEventListener("click", (eo) => {
  switch (eo.target.className) {
    case "fa-solid fa-trash icon":
      eo.target.parentElement.parentElement.remove();
      break;
    case "fa-solid fa-check":
      eo.target.classList = "none";
      const love = `<i class="fa-solid fa-heart icon"></i>`;
      eo.target.parentElement.parentElement
        .getElementsByClassName("paragraph")[0]
        .classList.add("finish");
      eo.target.parentElement.innerHTML += love;
      break;
    case "fa-solid fa-heart icon":
      eo.target.parentElement.parentElement
        .getElementsByClassName("paragraph")[0]
        .classList.remove("finish");
      eo.target.classList = "none";
      const angry = `<i class="fa-solid fa-check"></i>`;
      eo.target.parentElement.innerHTML += angry;
      break;
    case "fa-solid fa-star icon1":
      eo.target.classList.remove("icon1");
      eo.target.classList.add("orange");
      section.prepend(eo.target.parentElement);
      break;
    case "fa-solid fa-star orange":
      eo.target.classList.remove("orange");
      eo.target.classList.add("icon1");
      break;
    default:
      break;
  }
});

icon.addEventListener("click",(eo) => {
    body.classList.toggle("dark")
})