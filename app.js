// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const colors = ["('./assets/arctic.jpg')", "url('./assets/beach.jpg')", "url('./assets/mountain.jpg')"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    //get random number between 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    // document.body.style.backgroundColor = colors[randomNumber];
    document.body.style.backgroundImage = colors[randomNumber];

    color.textContent = colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}