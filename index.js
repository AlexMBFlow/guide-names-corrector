const stringCorrector = (text) => {
    let result;
    let firstWord = text[0].toLowerCase();
  
    let replasedText = text
      .replaceAll(" ", "_")
      .replaceAll(",", "")
      .replaceAll("'", "")
      .replaceAll(".webm", "");
    result = firstWord + replasedText.substr(1);
    console.log(result);
  };
  
  //stringCorrector("Speak up, don't be shy.webm");
  //Result: speak_up_dont_be_shy 
  