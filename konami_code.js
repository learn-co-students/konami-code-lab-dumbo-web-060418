const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0
  
function init() {
  document.body.addEventListener('keydown', handleKeys)
}

const handleKeys = (e) => {
    console.log(e)
    let key = e.key

    if (key === codes[index]) {
      index++

      if (index === codes.length) {
        alert("congrats")

        index = 0
      }
    } else {
      index = 0
    }
}