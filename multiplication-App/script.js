const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);
const questionEl=document.getElementById("question");
const formEl =document.getElementById("form");
questionEl.innerText = `what is ${num1} muntiply by ${num2} ?`;
const scorEl=document.getElementById("score");
const inputEl=document.getElementById("input");
const correct=num1*num2;
let score =JSON.parse(localStorage.getItem("score"));
if(!score){
  score=0;
}
scorEl.innerText=`score : ${score}`;
formEl.addEventListener("submit",()=>{
      const userAns=+inputEl.value;
      if(userAns==correct) {
        score++;
        updatelocalstorage();
      }
      else{
        score--;
        updatelocalstorage();
      }
});
 function updatelocalstorage(){
    localStorage.setItem("score",JSON.stringify(score));
 }

