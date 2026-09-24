// Print 1-10 when loop button clicked
document.getElementById("btn-loop").onclick = (e) => {
    console.log("Looping button clicked");
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += i + " ";
    }
    document.getElementById("loop-result").textContent = result;
};

//looping through a range of numbers
document.getElementById("btn-loop-range").onclick = (e) => {
    console.log("Looping through a range button clicked");
    const startNum = parseInt(document.getElementById("txt-start").value);
    const endNum = parseInt(document.getElementById("txt-end").value);
    const errorStart = document.getElementById("error-start");
    const errorEnd = document.getElementById("error-end");
    errorEnd.classList.add("hidden");
    const ul = document.getElementById("range-list");

    if(isNaN(startNum) || startNum < 0  || startNum > 5){
        errorStart.innerHTML = "* Invalid";
        errorStart.classList.remove("hidden")
        return;
    }

    if(isNaN(endNum) || endNum < 10  || endNum > 20 || endNum < startNum){
        errorEnd.innerHTML = "* Invalid";
        errorEnd.classList.remove("hidden")
        return;
    }

    ul.innerHTML =""; //Clearing anything that may be in the list already before generating new output

    for(let i = startNum; i < endNum; i++) {
        const li = document.createElement("li");
        li.innerHTML = i;
        ul.appendChild(li);
    }
};

//first array example - toy list
document.getElementById("btn-show-toys").onclick = () => {
    const toys = ["doll", "skateboard", "mini car", "board game", "bracelets"];
    const toyList = document.getElementById("toy-list");

    for(let i = 0; i < toys.length; i++) {
        const p = document.createElement(p);
        p.innerHTML = toys [i]
        toyList.append(p);
    }
}