let auth = () => {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0") // 랜덤 번호 생성
    document.getElementById("target").innerText = token
    document.getElementById("target").style.color = "#" + token

    let time = 5

    setInterval(function(){

        if(time >= 0){
            let min = Math.floor( time / 60 )
            let sec = String(time % 60).padStart(2, "0")
            document.getElementById("timer").innerText = (min + ":" + sec)
            time = time - 1
        } else { // 0미만이기때문에 위의 if부분을 통과하지 못함
            document.getElementById("finish").disabled = true
        }

    },1000)

}
