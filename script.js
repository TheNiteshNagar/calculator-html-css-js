// let buttonValue = ''
let result = ''
let history1 = document.getElementById('history-1')
let history2 = document.getElementById('history-2')
let history3 = document.getElementById('history-3')
let showHistory = false
let history = ''
// let fullScreenButton = document.getElementById('full-screen')
// let themeSwitchButton = document.getElementById('theme-switch')

// let clearButton = document.getElementById('clear')



let lightTheme = true
let buttons = document.querySelectorAll('.button')

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', () => {
    buttonValue = button.id

    if (buttonValue === 'full-screen') {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        document.querySelector('.calculator').requestFullscreen()
      }
    }

    else if (buttonValue === 'theme-switch') {
      
      if(true){
        if(lightTheme){
          document.body.classList.add('dark-theme')
          document.body.querySelector('header').classList.add('dark-theme')
          document.body.querySelector('.calculator').classList.add('dark-theme')
          document.body.querySelector('.display-panel').classList.add('dark-theme')
          document.body.querySelector('.button').classList.add('dark-theme')
          document.body.querySelector('.button-panel').classList.add('dark-theme')
        } else{
          document.body.classList.remove('dark-theme')
          document.body.querySelector('header').classList.remove('dark-theme')
          document.body.querySelector('.calculator').classList.remove('dark-theme')
          document.body.querySelector('.display-panel').classList.remove('dark-theme')
          document.body.querySelector('.button').classList.remove('dark-theme')
          document.body.querySelector('.button-panel').classList.remove('dark-theme')
        }
        lightTheme = !lightTheme
      }
      
    }

    else if (buttonValue === 'clear') {
      document.querySelector('.result-panel').textContent = ''
      showHistory = false
    }

    else if (buttonValue === '=') {
      let inputString = document.querySelector('.result-panel').textContent
      result = eval(inputString)
      
      history = result
      
      if(history) {
        history1.textContent = history
      }
      document.querySelector('.result-panel').textContent = result
    }

    else if (buttonValue === 'uwu') {
      const uwuAudio = new Audio('./public/audio-uwu.mp3')
      uwuAudio.currentTime = 0
      uwuAudio.play()
    }

    else {
      document.querySelector('.result-panel').append(buttonValue)
    }

  })
})