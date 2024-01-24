// 반복문

const children = ["철수", "영희", "훈이"]
// undefined

for(let i = 0; i < 3; i++) {
    console.log(children[i] + "입니다")
}
// VM2616:2 철수입니다
// VM2616:2 영희입니다
// VM2616:2 훈이입니다
// undefined

for(let i = 0; i < 4; i++) {
    console.log(children[i] + "입니다")
}
// VM2621:2 철수입니다
// VM2621:2 영희입니다
// VM2621:2 훈이입니다
// VM2621:2 undefined입니다
// undefined

children.length
// 3

for(let i = 0; i < children.length; i++) {
    console.log(children[i] + "입니다")
}
// VM2677:2 철수입니다
// VM2677:2 영희입니다
// VM2677:2 훈이입니다
// undefined


let persons = [
    {name: "철수", age: 17},
    {name: "영희", age: 22},
    {name: "도우너", age: 5},
    {name: "그루트", age: 65},
    {name: "도비", age: 3}
]
// undefined

for(let count = 0; count < persons.length; count++) {

    if(persons[count].age >= 19) {
        console.log("성인입니다")
    } else {
        console.log("미성년자입니다")
    }
}
// VM3297:6 미성년자입니다
// VM3297:4 성인입니다
// VM3297:6 미성년자입니다
// VM3297:4 성인입니다
// VM3297:6 미성년자입니다
// undefined

for(let count = 0; count < persons.length; count++) {

    if(persons[count].age >= 19) {
        console.log(persons[count].name+"님은 성인입니다")
    } else {
        console.log(persons[count].name+"님은 미성년자입니다")
    }
}
// VM3554:6 철수님은 미성년자입니다
// VM3554:4 영희님은 성인입니다
// VM3554:6 도우너님은 미성년자입니다
// VM3554:4 그루트님은 성인입니다
// VM3554:6 도비님은 미성년자입니다
// undefined


const fruits = [
    {number: 1, title: "레드향"},
    {number: 2, title: "샤인머스캣"},
    {number: 3, title: "산청딸기"},
    {number: 4, title: "한라봉"},
    {number: 5, title: "사과"},
    {number: 6, title: "애플망고"},
    {number: 7, title: "딸기"},
    {number: 8, title: "천혜향"},
    {number: 9, title: "과일선물세트"},
    {number: 10, title: "귤"}
]
// undefined

for (let k = 0; k < fruits.length; k++) {
    console.log(fruits[k].number + " " + fruits[k].title)
}
// VM3845:2 1 레드향
// VM3845:2 2 샤인머스캣
// VM3845:2 3 산청딸기
// VM3845:2 4 한라봉
// VM3845:2 5 사과
// VM3845:2 6 애플망고
// VM3845:2 7 딸기
// VM3845:2 8 천혜향
// VM3845:2 9 과일선물세트
// VM3845:2 10 귤
// undefined

for (let k = 0; k < fruits.length; k++) {
    console.log(`${fruits[k].number} ${fruits[k].title}`)
}
// VM3867:2 1 레드향
// VM3867:2 2 샤인머스캣
// VM3867:2 3 산청딸기
// VM3867:2 4 한라봉
// VM3867:2 5 사과
// VM3867:2 6 애플망고
// VM3867:2 7 딸기
// VM3867:2 8 천혜향
// VM3867:2 9 과일선물세트
// VM3867:2 10 귤
// undefined

for (let k = 0; k < fruits.length; k++) {
    console.log(`과일 차트 ${fruits[k].number}위는 ${fruits[k].title}입니다`)
}
// VM3903:2 과일 차트 1위는 레드향입니다
// VM3903:2 과일 차트 2위는 샤인머스캣입니다
// VM3903:2 과일 차트 3위는 산청딸기입니다
// VM3903:2 과일 차트 4위는 한라봉입니다
// VM3903:2 과일 차트 5위는 사과입니다
// VM3903:2 과일 차트 6위는 애플망고입니다
// VM3903:2 과일 차트 7위는 딸기입니다
// VM3903:2 과일 차트 8위는 천혜향입니다
// VM3903:2 과일 차트 9위는 과일선물세트입니다
// VM3903:2 과일 차트 10위는 귤입니다
// undefined