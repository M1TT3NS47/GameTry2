console.log("idndex.js loaded")

const canvas = document.getElementById("canvas").inner
const ctx = canvas.getContext("2d")



function update(){
  ctx.fillRect(0, 0, 50, 50)
  reqestAnimationFrame(update)
}
update()
