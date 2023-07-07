const checkAnswers = ['B','B','B','B']

const checkform = document.querySelector('.quiz-form')
const result = document.querySelector('.result')
const text = document.getElementById('span')

checkform.addEventListener('submit', (e)=>{

    e.preventDefault()

    let score = 0;
    const userAnswers = [checkform.q1.value, checkform.q2.value, checkform.q3.value, checkform.q4.value]

    userAnswers.forEach((answer, index) =>{

        if(answer === checkAnswers[index]){
            score += 25
        }

    })

    scrollTo(0,0)

    result.classList.remove('d-none')

    let output = 0;
    const animation = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`
        if(output === score){
            clearInterval(animation);
        } else output++
    }, 10);

    

}) 