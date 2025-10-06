function กล่อง3 () {
	
}
function แขนลง () {
    PTKidsBITRobot.servoWrite(Servo_Write.P8, P8_SERVO_DOWN)
}
function เลี้ยวซ้าย_90 () {
    PTKidsBITRobot.TurnLINE(
    Turn_Line.Left,
    30,
    Turn_ADC.ADC2,
    350
    )
    PTKidsBITRobot.ForwardTIME(
    100,
    0,
    100,
    0.018,
    0
    )
}
function เดินหน้าก่อนเลี้ยว () {
    PTKidsBITRobot.ForwardTIME(
    220,
    50,
    100,
    0.018,
    0
    )
}
input.onButtonPressed(Button.A, function () {
    กล่อง1()
    กล่อง2()
    กล่อง3()
    กล่อง4()
})
function กล่อง2 () {
	
}
function กล่อง4 () {
	
}
function เก็บกล่อง () {
    PTKidsBITRobot.servoWrite(Servo_Write.P12, P12_SERVO_CLOSE)
    basic.pause(200)
    PTKidsBITRobot.servoWrite(Servo_Write.P8, P8_SERVO_UP)
    basic.pause(200)
    PTKidsBITRobot.motorStop()
    basic.pause(100)
}
function กล่อง1 () {
    PTKidsBITRobot.motorGo(50, 50)
    basic.pause(500)
    PTKidsBITRobot.motorStop()
    PTKidsBITRobot.ForwardLINE(
    Find_Line.Center,
    50,
    100,
    0.018,
    0
    )
    PTKidsBITRobot.ForwardLINE(
    Find_Line.Center,
    50,
    100,
    0.018,
    0
    )
    เดินหน้าก่อนเลี้ยว()
    เลี้ยวซ้าย_90()
    PTKidsBITRobot.ForwardLINE(
    Find_Line.Center,
    50,
    100,
    0.018,
    0
    )
    แขนลง()
    PTKidsBITRobot.ForwardLINE(
    Find_Line.Center,
    50,
    100,
    0.018,
    0
    )
    เก็บกล่อง()
    เดินหน้าก่อนเลี้ยว()
    เลี้ยวขวา_90()
    เลี้ยวขวา_90()
    for (let index = 0; index < 4; index++) {
        PTKidsBITRobot.ForwardLINE(
        Find_Line.Center,
        50,
        100,
        0.018,
        0
        )
    }
    แขนลง_วางกล่อง()
    เดินหน้าก่อนเลี้ยว()
    เลี้ยวซ้าย_90()
    เลี้ยวซ้าย_90()
}
function แขนลง_วางกล่อง () {
    PTKidsBITRobot.servoWrite(Servo_Write.P8, P8_SERVO_DOWN)
    basic.pause(200)
    PTKidsBITRobot.servoWrite(Servo_Write.P12, P12_SERVO_OPEN)
    basic.pause(200)
    PTKidsBITRobot.servoWrite(Servo_Write.P8, P8_SERVO_UP)
    basic.pause(200)
}
function เลี้ยวขวา_90 () {
    PTKidsBITRobot.TurnLINE(
    Turn_Line.Right,
    30,
    Turn_ADC.ADC3,
    350
    )
    PTKidsBITRobot.ForwardTIME(
    100,
    0,
    100,
    0.018,
    0
    )
}
let P12_SERVO_CLOSE = 0
let P12_SERVO_OPEN = 0
let P8_SERVO_DOWN = 0
let P8_SERVO_UP = 0
P8_SERVO_UP = 0
P8_SERVO_DOWN = 90
P12_SERVO_OPEN = 180
P12_SERVO_CLOSE = 135
PTKidsBITRobot.ValueSensorSET([
350,
350,
350,
350,
350,
350
], [
3500,
3500,
3500,
3500,
3500,
3500
])
PTKidsBITRobot.servoWrite(Servo_Write.P8, P8_SERVO_UP)
PTKidsBITRobot.servoWrite(Servo_Write.P12, P12_SERVO_OPEN)
