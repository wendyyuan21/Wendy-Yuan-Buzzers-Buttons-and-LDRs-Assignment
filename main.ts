let alarm_triggered = false
let sampling_enabled = true
//Minimum light sensor level to trigger alarm 
let ALARM_THRESHOLD = 150

input.onButtonPressed(Button.A, function () {
    //Disable alarm
    alarm_triggered = false
})

input.onButtonPressed(Button.B, function () {
    //Resume sampling only if alarm is disabled by Button A
    if (alarm_triggered == false) {
        sampling_enabled = true
    }
})

function Alarm () {
    //Update alarm trigger state
    alarm_triggered = true
    //Play alarm tone when alarm trigger is set to true
    while (alarm_triggered) {
        music.playTone(Note.GSharp5, 500)
        basic.pause(200)
    }
}

basic.forever(function () {
    if (sampling_enabled == true) {
        let light_level = input.lightLevel()
        if (light_level > ALARM_THRESHOLD) {
            //Stop sampling, set off alarm
            sampling_enabled = false
            Alarm()
        }
    }
})
