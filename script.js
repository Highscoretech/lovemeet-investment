// data type 
// console.log(12345) // => Integar 
// console.log(";lj1*&&&^%^#@#$%^&*Amusoa")

// // String => "" '' `` 
// // Number => 0 - 9
// // Decimal => 0.1 - 0.9
// // boolean => true / false

// console.log("I am a boy")
// console.log(1 + 9)
// console.log(false)


const myArray = [1,2,3,4,5,6]
// console.log(myArray.indexOf(5)
// myArray[myArray.indexOf(5)] = 9
// console.log(myArray)

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i] + 2)
// }

// object 
// let person = {
//     name: "Amusoa",
//     age: 25,
//     isMale: true,
// }

// window.localStorage.setItem("user", JSON.stringify(person) )

// let myInfo = JSON.parse(window.localStorage.getItem("user"))
// console.log(myInfo)

// const { name } = myInfo
// console.log(name)

// let updatedName = "Joe"
// window.localStorage.setItem("user", JSON.stringify({...myInfo, name: updatedName}))


// window.localStorage.removeItem("user")

// const { age } = person
// console.log(age)

// let myInfo = {
//     name: "Amusoa",
//     age: 25,
//     isMale: true,

// }

// let myOrigin = {
//     state: "Lagos",
//     country: "LA",
//     zip: 12345,
// }
// // console.log(allInfo)

// let allInfo = {...myInfo, ...myOrigin}




// individual 

// let listItem = [1,2,3,4,5,66,4,5,6,78,7,18,7,18,5,696]

// listItem[listItem.indexOf(78)] = 13

// let person = {
//     name: "Amusoa",
//     age: 25,
//     isMale: true,
// }

// window.localStorage.setItem("user", JSON.stringify(person))

// const { name, age, isMale } = person

// const getInfo = JSON.parse(window.localStorage.getItem("user"))
// console.log(JSON.parse(getInfo))


// try{
//     let a = 6
//     a + 2
//     console.log(a)
// }
// catch(error){
//     console.log(error)
// }
const studentFirstName = document.getElementById("student-firstname")
const loadingEl = document.getElementById("loading")
let loading = false
loadingEl.style.display = "none"
async function fetchAllHighscoreStudents(){
    loading = true
    loadingEl.style.display = "block"
    const url = 'https://love-meet.onrender.com/highscore-tech/auth/get-all-students';
    try{
     const response = await fetch(url)
     const data = await response.json()
        console.log(data.allUsers[5].fullName)
     studentFirstName.textContent = data.allUsers[5].fullName
    }
    catch(error){
        console.log(error)
    }
    finally{
        loadingEl.style.display = "none"
        loading = false
    }
}
// fetchAllHighscoreStudents()
const log = console.log


log(99999)

function addTwoNumbers(num1, num2){
    loading = true
    try{
        let a = 6
        a+
        log(a)
    }
    catch(error){
        log(error)
    }
    finally{
        loading = false
        log("I am finally block")
    }

}