
let score = 0;
let finalAns;
 let scoreElements = document.querySelector('.score > span')
 scoreElements.innerHTML = score
const genQuestion = () => {
    let a = Math.floor(Math.random() * 20+1);
    let b = Math.floor(Math.random() * 11);
    if(a<b){
        let temp = a;
        a = b;
        b = temp;
    }
    let sum = a+b;
    let sub = a-b;
    let mul = a*b;
    let task = [sum,sub, mul]
    let operator = ['+', '-', '*']
    let randomIndex = Math.floor(Math.random() * task.length);
    let finalOperator = operator[randomIndex]
    finalAns = task[randomIndex];
    document.querySelector('.questions').innerHTML = `What is answer of ${a} ${finalOperator} ${b} ?`
}
const verification = (e)=>{
    e.preventDefault()
    let userAns = Number(document.querySelector('#inputData').value)
    console.log(finalAns, userAns, score)
    if(userAns === finalAns){
        score ++;
    }
    else{
        score --;
    }
    scoreElements.innerHTML = score
    document.querySelector('#inputData').value = ''
    genQuestion()
}

const myForm = document.querySelector('#myform');
window.addEventListener('load', genQuestion);
myForm.addEventListener('submit', verification )