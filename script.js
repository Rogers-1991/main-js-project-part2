function operate() {
  let display = document.getElementById('display');
  console.log(display);
  
  let buttons = document.getElementsByClassName('button');
  console.log(buttons); 
  
  let btnArray = [...buttons];
  console.log(btnArray);
  
  btnArray.map(button => {
    button.addEventListener('click', (e) => {
      console.log('clicked');
      console.log(e);
      console.log(e.target);
      console.log(e.target.innerText);
      switch(e.target.innerText) {
        case 'AC':
          display.innerText = '0';
          break;
        case '←':
          if (display.innerText) {
            display.innerText = display.innerText.slice(0, -1);
          }
          break;
        case '=':
          try {
            display.innerText = eval(display.innerText);
          } catch {
              display.innerText = "error!";
          }
          break;
        default:
            display.innerText += e.target.innerText; 
      }
    });
  });
}
operate();



