function operate() {
  let display = document.getElementById("display");
  console.log(display);

  let buttons = document.getElementsByClassName("button");
  console.log(buttons);

  let btnArray = [...buttons];
  console.log(btnArray);

  let inputLen = 0;
  let initZero = true;

  btnArray.map((button) => {
    button.addEventListener("click", (e) => {
      if (inputLen == 0) {
        display.innerText = "";
      }
      switch (e.target.innerText) {
        case "AC":
          display.innerText = "0";
          inputLen = 0;
          initZero = true;
          document.getElementById("dec").disabled = false;
          break;
        case "←":
          if (display.innerText) {
            display.innerText = display.innerText.slice(0, -1);
            if (display.innerText.length == 0) {
              initZero = true;
            }
          }
          break;
        case "=":
          inputLen = 0;
          try {
            display.innerText = eval(display.innerText);
            initZero = true;
          } catch {
            display.innerText = "error!";
          }
          break;
        case "0":
          if (initZero == true) {
            display.innerText = inputLen;
            break;
          }
        case ".":
          if(display.innerText == '.')
          document.getElementById("dec").disabled = true;
          break;
        default:
          display.innerText += e.target.innerText;
          inputLen += 1;
          initZero = false;
          document.getElementById("dec").disabled = false;
      }
    });
  });
}
operate();
