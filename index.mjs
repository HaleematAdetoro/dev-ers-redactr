// import startApp from './app.mjs';

// document.addEventListener('DOMContentLoaded', startApp); 

let initialMessage = document.getElementById('initial_message')
let toRedact = document.getElementById('toRedact-id') 
let defaultRedacter = "***"
const button = document.getElementById('redact-btn')
const copyButton = document.getElementById('copy-btn')
button.addEventListener("click", isClicked)
let counter = 0

function isClicked(){
  const startTime = performance.now()
  let messageStrings = initialMessage.value.split(' ')
  console.log(messageStrings)
    let redactList = toRedact.value.toLowerCase().split(' ')
  console.log(redactList)
  isDefaultRedacter()
  let charCount = 0

  for (let i in messageStrings){
    if (redactList.includes(messageStrings[i].toLowerCase()) == true){
      charCount += messageStrings[i].length
      messageStrings[i] = defaultRedacter
      counter++
      
    }
  } 
  document.getElementById('redacted_message').innerHTML = messageStrings.join(" ")
  document.getElementById('a').innerHTML = messageStrings.length
  document.getElementById('b').innerHTML = counter
  document.getElementById('c').innerHTML = charCount
  const endTime = performance.now()
  document.getElementById('d').innerHTML = endTime - startTime
}

function isDefaultRedacter(){
  let redacter = document.getElementById('redacter-id')
  if(redacter.value == ""){
    console.log(defaultRedacter)
    return  
  }else{
    defaultRedacter = redacter.value
    console.log(defaultRedacter)
  }
}

copyButton.addEventListener("click", copy)
function copy() {
  var copyText = document.getElementById("redacted_message");
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
  navigator.clipboard.writeText(copyText.value);
}
