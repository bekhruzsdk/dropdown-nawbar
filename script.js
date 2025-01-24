const name_input = document.getElementById("all_names");
const age_input = document.getElementById("abt_age");
const btn_add = document.getElementById("add_user");

const ul = document.createElement("ul");
document.body.appendChild(ul);

const children = [];

displayUsersList();

btn_add.onclick = () => {
  const name = name_input.value;
  const age = age_input.value;
  if (name === "botir") {
    alert("botir is banned");
    return;
  }
  if (name === "") {
    alert("enter your name");
    return;
  }

  if (age === "") {
    alert("enter your age");
    return;
  }
  if (age < 18) {
    alert("you must be 18 or over");
    return;
  }
  const newChild = {
    name: name,
    age: age,
  };

  children.push(newChild);
  displayUsersList();

  name_input.value = "";
  age_input.value = "";
};

function displayUsersList() {
  ul.innerHTML = "";
  const usersCountEl = document.createElement("h3");
  if (children.length > 0) {
    usersCountEl.innerText = "Users: " + children.length;
  } else {
    usersCountEl.innerText = "No Users";
  }
  ul.appendChild(usersCountEl);

  children.forEach((child) => {
    const list = document.createElement("li");

    const nameElement = document.createElement("div");
    nameElement.innerText = child.name;

    const ageElement = document.createElement("div");
    ageElement.innerText = "Age: " + child.age;

    list.appendChild(nameElement);
    list.appendChild(ageElement);
    ul.appendChild(list);
  });
}
