const screen1 = document.getElementById("screen-1");
const screen2 = document.getElementById("screen-2");
const screen3 = document.getElementById("screen-3");
const screen4 = document.getElementById("screen-4");
const screen5 = document.getElementById("screen-5");
const add_btn = document.getElementById("add");
const view_btn = document.getElementById("view");
const back1_btn = document.getElementById("back1");
const back2_btn = document.getElementById("back2");
const title_input = document.getElementById("title");
const task_input = document.getElementById("task");
const submit_btn = document.getElementById("submit");
const preview = document.getElementById("preview");
const obj = {};
let array = [];

window.onload = function () {
    setTimeout(function () {
        screen1.style.display = "flex";
        screen2.style.display = "none";
        screen3.style.display = "none";
        screen4.style.display = "none";
        screen5.style.display = "none";
        step2();
    }, 3000);
};

function step2() {
    screen1.style.display = "none";
    screen2.style.display = "flex";
    screen3.style.display = "none";
    screen4.style.display = "none";
    screen5.style.display = "none";
}

add_btn.addEventListener("click", () => {
    screen1.style.display = "none";
    screen2.style.display = "none";
    screen3.style.display = "flex";
    screen4.style.display = "none";
    screen5.style.display = "none";
});

view_btn.addEventListener("click", () => {
    screen1.style.display = "none";
    screen2.style.display = "none";
    screen3.style.display = "none";
    screen4.style.display = "flex";
    screen5.style.display = "none";
});

back1_btn.addEventListener("click", () => {
    step2();
});

back2_btn.addEventListener("click", () => {
    step2();
});

submit_btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (task_input.value.length !== 0 && title_input.value.length !== 0) {
        obj["title"] = title_input.value;
        let splitted = [...task_input.value.split(", ")];
        obj["task"] = splitted;
        obj["time"] = getTime();
        array.push(obj);
        alert("Input successful");
        clearInput();
        console.log(array);
        lastObjView();
        previewList();
    } else {
        alert("empty input");
    }
});

function getTime() {
    let d = new Date();
    let n = d.toLocaleString();
    return n;
}
function clearInput() {
    task_input.value = "";
    title_input.value = "";
}

function previewList() {
    // shows the added list below the add_list screen;

    // Create markup
    preview.innerHTML = array
        .map((e) => {
            return ` <div id="taskcard">
 <div id="titletime">
   <h4>${e.title}</h4>
   <p>${e.time}</p>
  </div>
  <p>${e.task}</p>
</div>
`;
        })
        .join(",");
}
function lastObjView() {
    let last = array.length - 1;
    let lastView = document.getElementById("lastView")
    let lastObj = array[last];
    console.log(lastObj);

    lastView.innerHTML = ` <div class="taskcard">
  <div class="titletime">
<p >You added this task..</p>
    <h4>${lastObj.title}</h4>
    <p>${lastObj.time}</p>
  </div>
  <p>${lastObj.task}</p>
</div>`;
}