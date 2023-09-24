//regularFunction();
//arrowFunction();

const arrowFunction = () => {
  console.log("arrowFunction");
};

function regularFunction() {
  console.log("regularFunction");
}

//console.log(b);

const a = 0;
let b = 0;
var c = 0;

let test = 0;
if (test === 0) {
  let test = 3;
  //console.log(test);
}

//testScope === undefined
if (testScope) {
  console.log("success");
} else {
  //console.log("fail");
}

if (true) {
  var testScope = 0; //var - функціональна область видимості
}

{
  const asfasf = 0; //const, let - блочна область видимості
}

//abc() === "success"
//!!"success" == true
if (abc()) {
  //console.log(123);
} else {
  console.log(abc());
}

const dfhdfh = abc(); //"success"
//console.log(dfhdfh);

function abc() {
  return "success";
}

const container = document.getElementById("test");
container.onclick = (e) => {
  e.stopPropagation();
  console.log("container clicked");
  e.target.style["background-color"] = "green";
};

// const body = document.getElementsByTagName("body")[0];
// body.onclick = () => {
//   console.log("body clicked");
// };

// document.onclick = () => {
//   console.log("document clicked");
// };

for (let i = 0; i < 10; i++) {
  const row = document.createElement("div");
  row.setAttribute("style", "display: flex; justify-content: center");
  for (let j = 0; j < 10; j++) {
    const child = document.createElement("div");
    child.setAttribute(
      "style",
      "width: 10px; height: 10px; background-color: red; margin: 5px; cursor: pointer"
    );
    // child.onclick = (e) => {
    //   e.stopPropagation();
    //   console.log(i, j);
    // };

    row.appendChild(child);
    // row.onclick = () => {
    //   console.log(`row ${i} clicked`);
    // };
  }

  container.appendChild(row);
}
