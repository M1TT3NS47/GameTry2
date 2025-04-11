console.log("idndex.js loaded")

const canvas = document.getElementById("canvas").inner
const ctx = canvas.getContext("2d")

let x = 0;
let y = 0;

function update(){
  ctx.fillRect(x, y, 50, 50)
  reqestAnimationFrame(update)
}
update()
