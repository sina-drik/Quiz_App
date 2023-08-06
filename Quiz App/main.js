// Document Elements 
const startButton=document.getElementById('start-btn');
const nextButton=document.querySelector('.next-btn');
const questionContainer=document.getElementById('question_container')
const questionText=document.querySelector('.question_p')
const answerContainer=document.querySelector('.answer_buttons')


// Event listeners
startButton.addEventListener('click',startGame)
nextButton.addEventListener('click',showTheNextQuestion)
answerContainer.addEventListener('click',CheckIfTheAnswerIsCorrect)

// Variables
let currectAnswer;
let answerChosen=true;
let allButtons;
let randomNumber;
let questionListCounter=0;
let answers=[];
let questionList=[
    {
        question:'what is 2+2 ?',
        answer: [
            {text:'4',correct:true},
            {text:'8',correct:false},
            {text:'2',correct:false},
            {text:'10',correct:false}
        ]
    },
    {
        question:'who is the best football player in the history ?',
        answer: [
            {text:'Messi',correct:false},
            {text:'Maradona',correct:false},
            {text:'C.ronaldo',correct:true},
            {text:'Pele',correct:false}
        ]
    },
    {
        question:'something else ?',
        answer: [
            {text:'x',correct:false},
            {text:'y',correct:true},
            {text:'z',correct:false},
            {text:'w',correct:false}
        ]
    },
    {
        question:'is it okay ?',
        answer: [
            {text:'no',correct:false},
            {text:'yes',correct:false},
            {text:'so-so',correct:true},
            {text:'why not',correct:false}
        ]
    }
]

// Functions
function startGame(){
    questionContainer.classList.remove('hide');
    startButton.classList=' hide';
    showOptionsAndwQuetions();
    
}

function showOptionsAndwQuetions(){
    questionText.innerText=questionList[questionListCounter].question;
    questionList[questionListCounter].answer.forEach((e)=>{
       answers.push(e.text)
    })
    answerContainer.innerText=''
    
    for(let q=0;q<answers.length;q++){
        let x=document.createElement('button');
        x.innerText=answers[q];
        x.className='btn option'
        if(answerContainer){
            answerContainer.append(x)
        }else{
            console.log('error')
        }
    }
    // const arrayOfCurrentButtons = Array.from(currentButtons);

}

function showTheNextQuestion(){
    answers=[];
    questionListCounter++;
    if(questionListCounter<questionList.length){
        nextButton.classList.add('hide');
        showOptionsAndwQuetions();
    }else{
        nextButton.classList.add('hide');
        alert('it was last the question')
    }
}

function CheckIfTheAnswerIsCorrect(item){
    let textOfButton=item.target.textContent
    let trueobject= questionList[questionListCounter].answer.filter((e)=>{
        return e.correct===true;
    })
    for (let value of Object.values(trueobject)) {
        currectAnswer=value.text
    }
    if(textOfButton===currectAnswer){
        console.log('you are right');
        item.target.style.backgroundColor = "green";
        nextButton.classList.remove('hide');
    }else{
        console.log('wrong')
        item.target.style.backgroundColor = "red";
        nextButton.classList.remove('hide');
    }
}


