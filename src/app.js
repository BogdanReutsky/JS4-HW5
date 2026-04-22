import { alert, success, error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

const titleEl = document.querySelector(".title")
const buttonEl = document.querySelector(".btn")
const letterEl = document.querySelector(".letter")

const keys = ["a","b","d","f","g","h","j","k","l","p"]
let currentKeyIndex = 0
letterEl.textContent = keys[currentKeyIndex]

document.addEventListener("keydown", (event)=>{
if(event.key === keys[currentKeyIndex]){
  success({ text: "Правильно, продовжуй",
    delay: 500
   });

    currentKeyIndex += 1
  
  letterEl.textContent = keys[currentKeyIndex]

}else{
  error({ text: "Неправильно, спробуй ще раз",
    delay: 500
  });
}
})

document.addEventListener("keypress", (event)=>{
  event.preventDefault()
})


buttonEl.addEventListener("click", (event)=>{
  currentKeyIndex = 0
  letterEl.textContent = keys[currentKeyIndex]
})

const ctx = document.getElementById('myChart');

const chartJs = {
 labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
  ],
};

const config = {
  type: 'line',
  data: chartJs,
  options: {}
};

const salesChart = new Chart(
  document.getElementById('myChart'),
  config
);