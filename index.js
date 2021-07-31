function find_img() {
  console.log("document default collection  : ");
  var collection = document.getElementsByTagName("img");
  console.log(collection);
  console.log("frist img src" + collection[0].src);
  console.log("second img src" + collection[1].src);
}
function find_img2() {
  console.log("document methods : ");
  var img1 = document.getElementById("firstImage");
  var img2 = document.getElementById("secondImg");
  console.log("frist img src" + img1.src);
  console.log("second img src" + img2.src);
}

function find_options() {
  var list = document.getElementsByTagName("option");
  for (var i = 0; i < list.length; i++) {
    console.log("option : " + list[i].text);
  }
}

function find_rows() {
  var table = document.getElementsByTagName("table")[1];
  var rows = table.children[0].children;
  console.log(rows);
}

function find_fontBlue() {
  var fontBlue_element = document.getElementsByClassName("fontBlue");
  console.log(fontBlue_element);
}

function change() {
  var table2 = document.getElementsByTagName("table")[1];
  var td = table2.children[0].children[0].children[0];
  var anchor = td.children[0];
  anchor.setAttribute("href", "http://training.com");
  anchor.innerHTML = "Training";
  console.log(anchor);
}

function find_lastimg() {
  var mydiv = document.getElementById("parent_img");
  var lst_img = mydiv.lastElementChild;
  lst_img.style.border = "10px solid pink";
  console.log("border: " + lst_img.style.border);
}

function find_check() {
  var check = document.getElementsByName("hoppy");
  for (var i = 0; i < check.length; i++) {
    if (check[i].checked) {
      alert(check[i].textContent);
    }
  }
}

function find_example() {
  var mydiv2 = document.getElementById("example");
  mydiv2.style.backgroundColor = "pink";
}

var next = document.getElementsByClassName("gg-arrow-right-o")[0];
var prev = document.getElementsByClassName("gg-arrow-left-o")[0];
var stop = document.getElementsByClassName("gg-play-stop-o")[0];
var replay = document.getElementsByClassName("gg-undo")[0];
var imgobj = this.document.getElementsByTagName("img")[0];

var counter = 1;
next.addEventListener("click", function () {
  counter++;
  if (counter == 9) counter = 1;
  imgobj.src = "images/" + counter + ".jpg";
});

prev.addEventListener("click", function () {
  counter--;
  if (counter == 0) counter = 8;
  imgobj.src = "images/" + counter + ".jpg";
});

var timeid;
replay.addEventListener("click", function () {
  timeid = setInterval(function () {
    counter++;
    if (counter == 9) counter = 1;
    imgobj.src = "images/" + counter + ".jpg";
  }, 500);
});
stop.addEventListener("click", function () {
  clearInterval(timeid);
});

var showtime = document.getElementById("show_time");
var start_time = document.getElementById("start");
var stop_time = document.getElementById("stop");
var time_counter;
var sec_counter = 00;
var min_counter = 00;

start_time.addEventListener("click", function () {
  start_time.disabled = true;
  time_counter = setInterval(function () {
    sec_counter++;

    if (sec_counter == 59) {
      sec_counter = 0;
      min_counter += 1;
    }
    showtime.innerHTML = "0" + min_counter + ":" + "0" + sec_counter;
  }, 1000);
});
stop_time.addEventListener("click", function () {
  start_time.disabled = false;
  clearInterval(time_counter);
});
