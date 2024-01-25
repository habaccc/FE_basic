// function auth() {
//     const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
//     document.getElementById("target").innerText = token
// }

// const auth = () => {
//     const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0") // 랜덤 번호 생성
//     const colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16) // 랜덤 색상 생성
//     document.getElementById("target").innerText = token
//     document.getElementById("target").style.color = colorCode
// }

const auth = () => {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0") // 랜덤 번호 생성
    document.getElementById("target").innerText = token
    document.getElementById("target").style.color = "#" + token
}

