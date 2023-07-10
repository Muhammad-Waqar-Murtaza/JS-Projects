const session = document.querySelector('.session')


const tick = () =>{

    const date = new Date()

    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    document.getElementById('hours').innerHTML = hours
    document.getElementById('minutes').innerHTML = minutes
    document.getElementById('seconds').innerHTML = seconds

    if(hours >= 12){
        session.innerHTML = 'PM'
    } else{
        session.innerHTML = 'AM'
    }

    if(hours > 12){
        hours = hours - 12
    }

}

    setInterval(tick, 1000)

