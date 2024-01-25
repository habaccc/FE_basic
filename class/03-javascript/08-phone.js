// 전화번호 입력시 자동으로 input 포커스를 옮겨주는 로직
// 첫번째 input은 3자, 두번째, 세번째 input은 각 4자씩 입력을 하면 자동으로 포커스가 옮겨짐.

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