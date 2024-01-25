// 10초 타이머
// let time = 10
undefined
setInterval(function() {

    if(time >= 0){
        console.log(time)
        time = time - 1
    }
    
},1000)
// 3
// VM1234:4 10
// VM1234:4 9
// VM1234:4 8
// VM1234:4 7
// VM1234:4 6
// VM1234:4 5
// VM1234:4 4
// VM1234:4 3
// VM1234:4 2
// VM1234:4 1
// VM1234:4 0

// 3분 타이머
let time = 180
undefined
setInterval(function() {

    if(time >= 0) {
        let min = Math.floor( time / 60 )
        let sec = String(time % 60).padStart(2, "0")
        console.log(min + ":" + sec)
        time = time - 1
    }
    
}, 1000)
// 3
// VM1901:6 3:00
// VM1901:6 2:59
// VM1901:6 2:58
// VM1901:6 2:57
// VM1901:6 2:56
// VM1901:6 2:55
// VM1901:6 2:54
// VM1901:6 2:53
// VM1901:6 2:52
// VM1901:6 2:51
// VM1901:6 2:50