var column = $(".column");
current = 0;
function Rotator() {
  $(column[current]).animate({ width: "1000%" }, 8000);
  $(column[current]).queue(function () {
    current = current < column.length - 1 ? current + 1 : 0;
    Rotator();
    $(this).dequeue().animate({ width: "10%" }, 8000);
  });
}

var playing = false;
var pauseButton = document.getElementById("pause");
pauseButton.style.display = "block";

function playSlideshow() {
  pauseButton.innerHTML = "Pause";
  playing = true;
  $(column[current]).animate({ width: "1000%" }, 8000);
  $(column[current]).queue(function () {
    current = current < column.length - 1 ? current + 1 : 0;
    Rotator();
    $(this).dequeue().animate({ width: "10%" }, 8000);
  });
}

function pauseSlideshow() {
  pauseButton.innerHTML = "Play";
  playing = false;
  $(column[current]).stop(true);
}

pauseButton.onclick = function () {
  if (playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};
