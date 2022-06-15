function operate() {
  let display = document.getElementById("display");
  console.log(display);

  let buttons = document.getElementsByClassName("button");
  console.log(buttons);

  let btnArray = [...buttons];
  console.log(btnArray);

  let inputLen = 0;
  let initZero = true;
  let currentNum = "";

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
          break;
        case ".":
          if (!currentNum.includes(".")) {
            display.innerText;
            currentNum += ".";
            display.innerText = currentNum;
          }
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
        default:
          display.innerText += e.target.innerText;
          inputLen += 1;
          initZero = false;
          if(display.innerText=='.') {
            display.innerText = '0.';
          }
      }
    });
  });
}
operate();
