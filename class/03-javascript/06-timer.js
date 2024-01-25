// 타이머가 작동 중인지 아닌지 확인
let isStarted = false;

let auth = () => {

    if(isStarted === false) {
        // 타이머가 작동중이 아닐때
        isStarted = true // true로 바꿔주어 작동시킴
        document.getElementById("finish").disabled = false
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0") // 랜덤 번호 생성
        document.getElementById("target").innerText = token
        document.getElementById("target").style.color = "#" + token
    
        let time = 180
    
        let timer = setInterval(function(){
    
            if(time >= 0){
                let min = Math.floor( time / 60 )
                let sec = String(time % 60).padStart(2, "0")
                document.getElementById("timer").innerText = (min + ":" + sec)
                time = time - 1
            } else { // 0미만이기때문에 위의 if부분을 통과하지 못함
                document.getElementById("finish").disabled = true
                isStarted = false
                console.log("타이머 작동중")
                clearInterval(timer) //clearInterval안에 들어있는 함수를 삭제시켜줌.
            }
    
        },1000)

    } else {
        // 타이머가 작동중일때
    }

}

