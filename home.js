let words = ["Welcome to my portfolio!!", "I'm Adebayo Yusuf, Am a fronted Developerr", "I write html, CSS, Javascript and frameworks like React, VueJS, Nest, Nextt"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;
let delayAfterTyping = 3000;


function loop() {
  let el = document.getElementById("ritup");

  if (!isDeleting && j <= words[i].length) {
    current = words[i].substring(0, j++);
  } else if (isDeleting && j >= 0) {
    current = words[i].substring(0, j--);
  }

  el.innerHTML = current + '<span class="cursor">|</span>';
  

  if (!isDeleting && j === words[i].length){
    isDeleting = true;
    setTimeout (loop, delayAfterTyping);
    return;
  }
  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }
  

  setTimeout(loop, isDeleting ? 40 : 80);
}

loop();



function goToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth"});
}
