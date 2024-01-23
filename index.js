
let capital = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let small = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let symbol = ['~', '@', '!', '#', '$', '%', '^', '&', '*', '(', ')', '-',]
let digit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let arr = [0,1, 2, 3, 4, 5]
let password = document.getElementsByClassName('password')
let mypassword = '';
let p = ''
let q = ''
let r = ''
let s = ''
// time function
function getTime() {
    setInterval(() => {
        let date = new Date()

        second.innerText = date.getSeconds() + ' ' + 's'
        minute.innerText = date.getMinutes() + ' ' + 'm'
        hour.innerText = date.getHours() + ' ' + 'h'
    }, 1000)
}
getTime()

function capitalL(arr, value) {
    let v = parseInt(value)
    // console.log(arr,value)
    for (let i = 0; i < v; i++) {
        let mathvalue = Math.floor(Math.random() * capital.length);
        mypassword = mypassword + capital[mathvalue]


    }
    return mypassword;
}
function smallL(arr, value) {
    // console.log(arr,value)
    // let v=parseInt(value)
    // // console.log(arr,value)
    for (let i = 0; i < value; i++) {
        let mathvalue = Math.floor(Math.random() * small.length);
        mypassword = mypassword + small[mathvalue]


    }
    return mypassword;

}
function symbolL(arr, value) {
    for (let i = 0; i < value; i++) {
        let mathvalue = Math.floor(Math.random() * symbol.length);
        mypassword = mypassword + symbol[mathvalue]


    }
    return mypassword;
}
function digitL(arr, value) {
    for (let i = 0; i < value; i++) {
        let mathvalue = Math.floor(Math.random() * digit.length);
        mypassword = mypassword + digit[mathvalue]


    }
    return mypassword;
}
function myMain(a, attribute) {
    if (attribute === 'capitalvalue') {
        p = '';
        p = p + a;
        console.log(p)
        console.log(attribute)
    }
    else if (attribute === 'smallvalue') {
        q = '';
        q = q + a;
        console.log(q)
        console.log(attribute)
    }
    else if (attribute === 'symbolvalue') {
        r = '';
        r = r + a;
        console.log(r)
        console.log(attribute)
    }
    else {
        s = '';
        s = s + a;
        console.log(s)
        console.log(attribute)
    }
    console.log(p + q + r + s)
    btn.addEventListener('click', () => {
        containpass.innerText = p + q + r + s;
    })
}
Array.from(password).forEach((ele, i) => {
    ele.innerHTML = arr.map((ele, i) => {
        return `<option>${ele}</option>`
    })
    ele.addEventListener('change', (f) => {
        mypassword = ''

        if (ele.getAttribute('id') === 'capitalvalue') {
            // console.log(ele.getAttribute('id'))
            console.log(f.target.value)
            capitalL(capital, f.target.value)
            myMain(capitalL(), ele.getAttribute('id'))
        }
        else if (ele.getAttribute('id') === 'smallvalue') {

            console.log(ele.getAttribute('id'))
            console.log(f.target.value)
            smallL(small, f.target.value)
            myMain(smallL(), ele.getAttribute('id'))
        }
        else if (ele.getAttribute('id') === 'symbolvalue') {
            console.log(ele.getAttribute('id'))
            console.log(f.target.value)
            symbolL(symbol, f.target.value)
            myMain(symbolL(), ele.getAttribute('id'))
        }
        else {
            console.log(ele.getAttribute('id')) // digit value
            console.log(f.target.value)
            digitL(digit, f.target.value)
            myMain(digitL(), ele.getAttribute('id'))
        }


    })
})
