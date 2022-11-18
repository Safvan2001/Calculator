function display(num){
    result.value+=num
    // result.vlue=result.value+num

}

function allclear(){
    result.value=""
}

function evaluateexp(){
    // currentexp=result.value
    // result.value=eval(currentexp)

    result.value=eval(result.value)
}

function backspace(){
    result.value=result.value.slice(0,-1)
    
}