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

document.body.addEventListener('onmousedown', ()=>tester())

  function tester() {
  alert("HI")
}


function init() {
  // your code here



  let index = 0;
  document.body.addEventListener('keydown', (e) =>{
    debugger
    const key = e.key

  if (codes[index] === key ) {
    index++

    if (index === codes.length) {
      alert('hi');

      index = 0
    }
  } else {
    index = 0
  }
})




}
