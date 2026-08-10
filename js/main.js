var TRANSITION_DURATION_MS = 4500;
var EXPANDED_WIDTH = "1000%";
var COLLAPSED_WIDTH = "10%";

var columns = $(".column");
var currentIndex = 0;
var playing = false;
var pauseButton = document.getElementById("pause");
pauseButton.style.display = "block";

function rotate() {
  var previousIndex = currentIndex;
  currentIndex = currentIndex < columns.length - 1 ? currentIndex + 1 : 0;
  $(columns[previousIndex]).animate({ width: COLLAPSED_WIDTH }, TRANSITION_DURATION_MS);
  $(columns[currentIndex]).animate({ width: EXPANDED_WIDTH }, TRANSITION_DURATION_MS, function () {
    if (playing) rotate();
  });
}

function playSlideshow() {
  pauseButton.innerHTML = "Pause";
  playing = true;
  $(columns[currentIndex]).animate({ width: EXPANDED_WIDTH }, TRANSITION_DURATION_MS, function () {
    if (playing) rotate();
  });
}

function pauseSlideshow() {
  pauseButton.innerHTML = "Play";
  playing = false;
  columns.stop(true, false);
}

pauseButton.onclick = function () {
  if (playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};
