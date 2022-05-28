const numbers = [1,2,3,4,5,6,7,8,9];
createDom(numbers);
var htmlContent = '';

function sortNum(){
    numbers.sort();
    createDom(numbers);
};
function shufNum(){
    htmlContent = '';
    function shuffleArray(numbers) {
        numbers.sort(() => Math.random() - 0.5);
      }
      shuffleArray(numbers);
      createDom(numbers);
};

function createDom(numbers) {
    htmlContent = '';
    for(var i = 0; i < numbers.length; i++) {
        htmlContent += "<div class='block bg" + numbers[i] +"'>"+"<span>" + numbers[i] + "</span>"+"</div>";
        document.getElementById("demo1").innerHTML = htmlContent;
    }
}
