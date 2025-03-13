let floorArray = []; // Empty array to store floor divs

function getFloors() {
  let floors = Number(document.getElementById("numFloors").value);
  let building = document.getElementById("building");
  let elevators = document.getElementById("elevators");

  if (floors > 0) {
    building.innerHTML = ""; // Clear previous floors
    floorArray = []; // Reset the array

    for (let i = floors; i >= 0; i--) {
      // Use 0-based indexing
      let floor = document.createElement("div");
      floor.className = "floorLevel";
      floor.textContent = `Floor ${i}`; // Floor numbers (1, 2, 3...)

      building.appendChild(floor);
      floorArray.unshift(floor); // Store floor div in array
    }

    // Add elevator back to the building
    building.appendChild(elevators);
    elevators.style.display = "block";

    let fullPageHeight = document.documentElement.offsetHeight;

    elevators.style.top = fullPageHeight - elevators.offsetHeight - 40 + "px";
    console.log("elevator pos: ", elevators.style.top);
  } else {
    alert("Please enter a valid number of floors.");
  }
}

function liftPosition() {
  let liftPosition = Number(document.getElementById("liftPosition").value);
  console.log("lift to be move to floor : ", liftPosition);
  let pos = floorArray[liftPosition].offsetTop;

  console.log("elevator to be moved to : ", pos);
  let elevatorPosition = parseInt(window.getComputedStyle(elevators).top || 0);
  console.log("calculated elevator pos: ", elevatorPosition);

  check(pos, elevatorPosition);
}

function check(toBeMoved, currentPos) {
  let currentTop = parseInt(elevators.style.top) || elevators.offsetTop; // Fallback to offsetTop if not set

  console.log("currentTop", currentTop);

  if (toBeMoved < currentPos) {
    elevators.style.top = toBeMoved - 220 + "px";

    console.log(
      "elevtor top pos",
      parseInt(window.getComputedStyle(elevators).top || 0)
    );
  } else if (toBeMoved > currentPos) {
    elevators.style.top = toBeMoved - 220 + "px";
    console.log(
      "elevtor top pos",
      parseInt(window.getComputedStyle(elevators).top || 0)
    );
  }
}
