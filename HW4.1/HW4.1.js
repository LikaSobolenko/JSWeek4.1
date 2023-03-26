function checkSpam() {
  const avatar = document.getElementById("avatar").value;
  const resultDiv = document.querySelector("div.result");
  const myImage = new Image();
  myImage.src = avatar;
  resultDiv.appendChild(myImage);

  const name = document.getElementById("name").value;
  let name2 = name.trim(name);
  let name3 = name2.toLowerCase();
  function capitalize(name3) {
    return name3.replace(/(^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
  }
  let finalName = document.createElement("span");
  finalName.textContent = capitalize(name3);
  resultDiv.appendChild(finalName);

  const text = document.getElementById("exampleFormControlTextarea1").value;
  console.log(text);
  let comment1 = text.replace(/viagra/gi, "***");
  let comment2 = comment1.replace(/XXX/gi, "***");
  let finalComment = document.createElement("div");
  finalComment.textContent = comment2;
  resultDiv.appendChild(finalComment);
}
