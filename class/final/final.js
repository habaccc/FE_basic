const changeFocus1 = () => {
    
    let phone1 = document.getElementById("p1").value

    if(phone1.length === 3) {
        document.getElementById("p2").focus()
    }
}

const changeFocus2 = () => {

    let phone2 = document.getElementById("p2").value

    if(phone2.length === 4) {
        document.getElementById("p3").focus()
    }
}

const changeFocus3 = () => {

    let p1 = document.getElementById("p1").value
    let p2 = document.getElementById("p2").value
    let p3 = document.getElementById("p3").value

    if(p1.length === 3 && p2.length === 4 && p3.length === 4) {
        document.getElementById("token__btn").style = "background-color: #FFFFFF; color: #0068FF; border: 1px solid #d2d2d2; cursor: pointer;"
        document.getElementById("token__btn").removeAttribute("disabled")
    }
}

const getToken = () => {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("token").innerText = token
    
    document.getElementById("token__btn").style = "background-color: #FFFFFF; cursor: default;"
    document.getElementById("token__btn").setAttribute("disabled", "true")
    document.getElementById("token__confirm__btn").style = "background-color: #0068FF; color: #ffffff; border: 1px solid #d2d2d2; cursor: pointer;"
    getTokenTimer()
}

let intervall;
const getTokenTimer = () => {
    let timer = 10
    interval = setInterval(() => {
        if(timer >= 0){
            const min = Math.floor(timer / 60)
            const sec = timer % 60

            document.getElementById("timer").innerText = min + ":" + String(sec).padStart(2, "0")
            timer -= 1
        } else {
            document.getElementById("token").innerText = "000000"
            document.getElementById("token__btn").style = ""
            document.getElementById("token__btn").setAttribute("disabled", "true")

            document.getElementById("timer").innerText = "3:00"
            document.getElementById("token__confirm__btn").style = ""
            document.getElementById("token__confirm__btn").setAttribute("disabled", "true")

            clearInterval(interval)
        }
    }, 1000)
}

const getTokenTimerConfirm = () => {
    clearInterval(interval)
    document.getElementById("token__confirm__btn").style = "background-color: #FFFFFF; cursor: default;"
    document.getElementById("token__confirm__btn").setAttribute("disabled", "true")
    document.getElementById("token__confirm__btn").innerText = "인증완료"
    alert("인증이 완료되었습니다.")

    document.getElementById("signup__btn").style = "background-color: #FFFFFF; color: #0068FF; border: 1px solid #0068FF ;cursor: pointer;"
    document.getElementById("signup__button").removeAttribute("disabled")
}
