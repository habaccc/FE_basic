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
        document.getElementById("send").style = "background-color: #FFFFFF; color: #0068FF; cursor: pointer;"
        document.getElementById("send").removeAttribute("disabled")
    }
}

let isStarted = false;

let auth = () => {

    if(isStarted === false) {
        // 타이머가 작동중이 아닐때
        isStarted = true // true로 바꿔주어 작동시킴
        document.getElementById("send").disabled = false
        document.getElementById("send").style = "color: #d2d2d2;"
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0") // 랜덤 번호 생성
        document.getElementById("authNumber").innerText = token
        
        let time = 180
    
        let timer = setInterval(function(){
    
            if(time >= 0){
                let min = Math.floor( time / 60 )
                let sec = String(time % 60).padStart(2, "0")
                document.getElementById("timer").innerText = (min + ":" + sec)
                time = time - 1
            } else { // 0미만이기때문에 위의 if부분을 통과하지 못함
                document.getElementById("send").disabled = true
                isStarted = false
                clearInterval(timer) //clearInterval안에 들어있는 함수를 삭제시켜줌.
            }
    
        },1000)

    } else {
        // 타이머가 작동중일때
    }

}
