let input=document.querySelector('input')
// console.log(input)

let getValue=(e)=>{
    // console.log(e.target[0].innerText)
    // console.log(input.value)
    let val=e.target.innerText
    input.value +=val
}
let finalRes=()=>{
    let res=eval(input.value)
    input.value=res
}
let clearValue=()=>{
    input.value=""
}