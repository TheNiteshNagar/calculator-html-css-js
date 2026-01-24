// features buttons 
document.querySelector('.uwu-button').addEventListener('click', ()=>{
  const uwuPlay = new Audio('./public/audios/audio-uwu.mp3')
  uwuPlay.currentTime = 0
  uwuPlay.play() 
})

document.querySelector('.theme-switch-button').addEventListener('click', ()=>{
  alert('Dark Theme Is The Best Theme 😤')
})

document.querySelector('.full-screen-button').addEventListener('click', ()=>{
  if(document.fullscreenElement){
    document.exitFullscreen()
  } else{
    document.body.requestFullscreen()
  }
})


// calculator button
let inputBox = document.querySelector('input')    // input box 
let firstNumValue = ''   //to check is first value is operator or dot or any other non numeric value? 
let isOpenParenthesisAvailable = false      // check is there any open parenthesis is avalaible or not
let isNumberValueAvailable = false
let result = ''
let resultPanel = document.querySelector('.result-panel')
const buttons = document.querySelectorAll('button')
let openParenthesis = false
let closeParenthesis = false

// Helper function to insert text at cursor position
function insertAtCursor(text) {
  const start = inputBox.selectionStart
  const end = inputBox.selectionEnd
  const currentValue = inputBox.value
  
  // Insert text at cursor position, replacing any selected text
  inputBox.value = currentValue.substring(0, start) + text + currentValue.substring(end)
  
  // Set cursor position after the inserted text
  const newCursorPos = start + text.length
  inputBox.setSelectionRange(newCursorPos, newCursorPos)
  
  // Focus the input box to maintain cursor position
  inputBox.focus()
}


for (const index in buttons) {
  if (!Object.hasOwn(buttons, index)) continue;
  
  const button = buttons[index];
  button.addEventListener('click', ()=>{

    if(button.id === 'clear') {
      inputBox.value = ''
      resultPanel.textContent = ''
      isNumberValueAvailable = false
    } 
    
    else if(button.id === 'parenthesis') {
      if(!isOpenParenthesisAvailable) {
        insertAtCursor('(')
        isOpenParenthesisAvailable = true
        openParenthesis = true
      } else if(isNumberValueAvailable && closeParenthesis) {
        insertAtCursor(')')
        isOpenParenthesisAvailable = false
        closeParenthesis = false
        openParenthesis = false
      }
    }

    else if(button.id === 'backspace') {
      inputBox.value = inputBox.value.slice(0, -1)
    }

    else if(button.id === 'equal') {
      // Check if input panel is not empty before evaluating
      if(inputBox.value.trim()) {
        resultPanel.textContent = eval(inputBox.value)
        inputBox.value = ''
      }
    }

    else if(button.classList[0] === 'operator' && isNumberValueAvailable && inputBox.value){
      insertAtCursor(button.value)
    }

    else if(button.className === 'dot-button' && isNumberValueAvailable){
      insertAtCursor(button.value)
    }

    else if(button.classList[0] === 'number') {
      insertAtCursor(button.value)
      isNumberValueAvailable = true
      if(openParenthesis){
        closeParenthesis = true
      }
    }

  })
}

document.querySelector('.result-panel').addEventListener('click', ()=>{
  if(resultPanel.textContent){
    inputBox.value = resultPanel.textContent
    // Set cursor position at the end of the text
    const length = inputBox.value.length
    inputBox.setSelectionRange(length, length)
    inputBox.focus()
  }
})