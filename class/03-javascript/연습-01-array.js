let classmates = ["철수", "영희", "훈이"]
// undefined
classmates
// (3) ['철수', '영희', '훈이']
classmates[0]
// '철수'
classmates[1]
// '영희'
classmates[2]
// '훈이'
classmates.includes("훈이")
// true
classmates.includes("맹구")
// false
classmates
// (4) ['철수', '영희', '훈이', '맹구']
classmates.length
// 3
classmates.pop()
// '맹구'
classmates.length
// 3
classmates
// (3) ['철수', '영희', '훈이']

let developer = ["공부", "복습", "끈기", "노력", "섬세함"]

developer[2]
// '끈기'
let dream = ["커리어점프", "성공", "할수있다"]
// undefined
dream.concat(developer)
// (8) ['커리어점프', '성공', '할수있다', '공부', '복습', '끈기', '노력', '섬세함']
let result = developer.concat(dream)
// undefined
result
// (8) ['공부', '복습', '끈기', '노력', '섬세함', '커리어점프', '성공', '할수있다']