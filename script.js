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
let firstValue = ''   //to check is first value is operator or dot or any other non numeric value? 
let isOpenParenthesisAvailable = false      // check is there any open parenthesis is avalaible or not
let isNumberValueAvailable = false
const buttons = document.querySelectorAll('button')
// Array.from(buttons).forEach(button => {
//   button.addEventListener('click', ()=>{
//     console.log(typeof(button))
//   })
// })

// buttons.forEach(button => {
//   button.addEventListener('click', ()=>{
//     alert('chacha')
//   })
// })

for (const index in buttons) {
  if (!Object.hasOwn(buttons, index)) continue;
  
  const button = buttons[index];
  button.addEventListener('click', ()=>{

    if(button.id === 'clear') {
      inputBox.value = ''
    } 
    
    else if(button.id === 'parenthesis') {
      if(!isOpenParenthesisAvailable) {
        inputBox.value = inputBox.value + '('
        isOpenParenthesisAvailable = true
      } else if(isNumberValueAvailable) {
        inputBox.value = inputBox.value + ')'
        isOpenParenthesisAvailable = false
      }
    }

    else if(button.id === 'backspace') {
      inputBox.value = inputBox.value.slice(0, -1)
    }

    else if(button.id === 'equal') {
      
    }




  })
}