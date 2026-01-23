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
        inputBox.value = inputBox.value + '('
        isOpenParenthesisAvailable = true
        openParenthesis = true
      } else if(isNumberValueAvailable && closeParenthesis) {
        inputBox.value = inputBox.value + ')'
        isOpenParenthesisAvailable = false
        closeParenthesis = false
        openParenthesis = false
      }
    }

    else if(button.id === 'backspace') {
      inputBox.value = inputBox.value.slice(0, -1)
    }

    else if(button.id === 'equal') {
      result = eval(inputBox.value)
      resultPanel.textContent = result
    }

    else if(button.classList[0] === 'operator' && isNumberValueAvailable){
      inputBox.value = inputBox.value + button.value
    }

    else if(button.className === 'dot-button' && isNumberValueAvailable){
      inputBox.value = inputBox.value + button.value
    }

    else if(button.classList[0] === 'number') {
      inputBox.value = inputBox.value + button.value
      isNumberValueAvailable = true
      if(openParenthesis){
        closeParenthesis = true
      }
    }

  })
}