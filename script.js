const numbers = [1,2,3,4,5,6,7,8,9];

const obj = [
    {Number : 1 , color : "#6F98A8" },
    {Number : 2 , color : "#2B8EAD" },
    {Number : 3 , color : "#72C3DC" },
    {Number : 4 , color : "#6F98A8" },
]
document.getElementById("demo1").innerHTML = numbers;
function sortNum(){
    numbers.sort();
    document.getElementById("demo1").innerHTML = numbers;
};
function shufNum(){
    function shuffleArray(numbers) {
        numbers.sort(() => Math.random() - 0.5);
      }
      shuffleArray(numbers);
      document.getElementById("demo1").innerHTML = numbers;
    //   numbers.forEach(el => {
    //     document.getElementById('demo1').innerHTML += `<div class="col-4">${el}</div><br />`;
    //  });
};