//Infinite Scroll with sort search in vanilla JS

let container = document.querySelector(".container");

let sort = document.getElementById("sort");

let searchInput = document.getElementById("search");

let currPosition = 0;

let filterData = [];

async function getData() {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts");
  let res = Array.from(await data.json());
  for (let i = 0; i < res.length; i++) {
    filterData.push({ title: res[i].title, id: res[i].id });
  }
  createList(filterData.slice(currPosition, 20));
  currPosition = 20;
}

getData();

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    createList(filterData.slice(currPosition, currPosition + 20));
    if (currPosition + 20 <= filterData.length) currPosition += 20;
  }
});

function sortList(type) {
  if (type == "title")
    filterData.sort(function (a, b) {
      return a.title.localeCompare(b.title);
    });
  else if (type == "point") {
    filterData.sort(function (a, b) {
      return a.id - b.id;
    });
  }
  createList(filterData, true);
}

sort.addEventListener("change", () => {
  if (sort.value != "") sortList(sort.value);
});

searchInput.addEventListener("input", () => {
  let res = filterData.filter((data) => data.title.includes(searchInput.value));
  createList(res, true);
});

function createList(data, change = false) {

  if (change) container.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let item = document.createElement("p");
    item.innerHTML += data[i].id + " " + data[i].title;
    container.appendChild(item);
  }
  change = true;
}
