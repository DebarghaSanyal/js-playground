console.log("Hi! This is event!");


// inline event handeling
// onclick    single mouse click
// ondblclick     double mouse click
// onmouseover      hover
// read more    https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

let eve = document.querySelector(".navUl");
let times = 1;
eve.onmouseover = () => {
    console.log(`Nav hover ${times++} times.`);
};

let evt = document.querySelector("#count_click");
click = 1;
evt.onclick = (e) => {
    console.log(`Button clicked ${click++} times.`);
    // event object
    console.log(e);     // holds all data about the event
    console.log(e.type, e.target);
    // console.log();
};

// event listener
{
    // better way to handel events
    // unlike normal methods using event listeners we can execute multiple tasks and they won't get overriden 
    // even the inline function also gets executed befor this one

    let evt = document.querySelector("#count_click1");
    evt.style.marginTop = "30px";
    let clk = 1, hvr = 1;
    evt.addEventListener("click", () => {             //  ("event",arrowFunction)
        console.log(`Click = ${clk++}`);
        evt.style.padding = "10px";
        evt.style.borderRadius = "20px";
        evt.style.color = "white";
        evt.style.backgroundColor = "rgb(23, 23, 163)";
    });
    evt.addEventListener("mouseover", () => {
        console.log(`Hover = ${hvr++}`);
    });
}

// event remover
{
    // to remove a event listener we need to pass the same callback 
    // let e = document.querySelector(".classOfsomething");

    // const eventlis = () => {                 // to asure the same callback reference we need to store it and then use the eventlis in other arrow functions
    //     console.log("event occure");
    // }
    // e.addEventListener("click", eventlis);
    // e.addEventListener("mouseover", eventlis);
    // // remove 
    // e.removeEventListener("click", eventlis);
}

// theme change ===========================================================

let id = document.querySelector("#theme");
id.addEventListener("click", () => {
    let b = document.querySelector("body");
    if (b.style.backgroundColor === "black") {
        b.style.backgroundColor = "rgb(5, 16, 60)";
    }
    else
        b.style.backgroundColor = "black";
});