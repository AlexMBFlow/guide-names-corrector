const stringCorrector = (text) => {
  let result;
  let firstWord = text[0].toLowerCase();

  let replasedText = text
    .replaceAll(" ", "_")
    .replaceAll(",", "")
    .replaceAll("'", "")
    .replaceAll(".webm", "")
    .replaceAll(".mp4", "");
  result = firstWord + replasedText.substr(1);
  console.log(result);
};

stringCorrector("Speak up, don't be shy.mp4.webm");

  
  //stringCorrector("Speak up, don't be shy.mp4.webm");
  //Result: speak_up_dont_be_shy 
  
