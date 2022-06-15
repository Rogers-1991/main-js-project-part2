function operate() {
  let display = document.getElementById("display");
  console.log(display);

  let buttons = document.getElementsByClassName("button");
  console.log(buttons);

  let btnArray = [...buttons];
  console.log(btnArray);

  let inputLen = 0;

  btnArray.map((button) => {
    button.addEventListener("click", (e) => {
      console.log("clicked");
      console.log(e);
      console.log(e.target);
      console.log(e.target.innerText);
      if (inputLen == 0) {
        display.innerText = "";
      }
      switch (e.target.innerText) {
        case "AC":
          display.innerText = "0";
          inputLen = 0;
          break;
        case "←":
          if (display.innerText) {
            display.innerText = display.innerText.slice(0, -1);
          }
          break;
        case "=":
          inputLen = 0;
          try {
            display.innerText = eval(display.innerText);
          } catch {
            display.innerText = "error!";
          }
          break;
        default:
          display.innerText += e.target.innerText;
          inputLen += 1;
      }
    });
  });
}
operate();
