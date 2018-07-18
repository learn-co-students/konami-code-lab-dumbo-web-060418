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

let index = 0;

function init() {
  // your code here
  document.body.addEventListener('keydown', function(e){
    // e.preventDefault();
    // e.stopPropagation();
    e.stopImmediatePropagation();
    const key = e.key;
    console.log('key:', key);
      if (key === codes[index]){
        // console.log('key:', key);
        index++;
        if (index === codes.length){
          alert("Yay!");

          index = 0;
        }
      }else {
        index = 0;
      }

    })
}

init();
