// Loads cars onto the road in random lanes, positions, and colors
const loadCars = (numCars, numLanes) => {
    for (let i = 0; i < numCars; i++) {
        const laneNum = Math.floor(Math.random() * numLanes) + 1;
        const lane = document.getElementById(`lane-${laneNum}`);

        const car = document.createElement("div");
        car.classList.add("car");
        car.style.left = `${Math.random() * 92}%`;
        car.style.backgroundColor = `hsl(${Math.random() * 360}, 60%, 60%)`;

        lane.append(car);
    }
};

window.onload = () => {
    loadCars(8, 3);
};