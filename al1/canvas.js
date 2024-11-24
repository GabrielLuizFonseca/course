let canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext('2d')
/*c.fillRect(x, y, width, height)*/
c.fillStyle = 'rgb(255, 0, 0, 0.5)'
c.fillRect(100, 100, 100, 100)
c.fillStyle = 'rgb(0, 0, 255, 0.5)'
c.fillRect(500, 100, 100, 100)
c.fillStyle = 'rgb(86, 226, 43, 0.5)'
c.fillRect(300, 300, 100, 100)
console.log(canvas)

//line
c.beginPath()
c.moveTo(50, 300)
c.lineTo(300, 100)
c.lineTo(400, 300)
c.strokeStyle = "#fa34a3"
c.stroke()

//arc / circle
/*c.arc(x, y, radius, startAngle, endAngle, anticlockwise);*/
/*c.beginPath()
c.arc(300, 300, 30, 0, Math.PI * 2, false)
c.strokeStyle = 'blue'
c.stroke()
*/

for (let i = 0; i < 40; i++){
    let x = Math.random() * window.innerWidth
    let y = Math.random() * window.innerHeight
    c.beginPath()
    c.arc(x, y, 30, 0, Math.PI * 2, false)
    c.strokeStyle = 'green'
    c.stroke()
}