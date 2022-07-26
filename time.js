// Timer fields
const hourElement = document.querySelector('.hour')
const minuteElement = document.querySelector('.minuta')
const secondElement = document.querySelector('.second')
const millisecondElement = document.querySelector('. millisecondElement')

// Buttons
const startButton = document.querySelector('.startButton')
const pauseButton = document.querySelector('.pauseButton')
const stopButton = document.querySelector('.stopButton')

//  Variables
let hour = 00,
    minute = 00,
    second = 00,
    millisecond = 00,
    interval

    function  startTimer() {
        millisecond++
        if(millisecond <9 ){
            millisecondElement.insertAdjacentText = '0' +millisecond
        }
        
    }
