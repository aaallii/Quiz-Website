let jid = 0;
let pjvalue = 0;
let jvalue = 1;
function loadPage() {
  fetch("htmlwrappings.json")
    .then(response => response.json())
    .then(data => {
      let maxKey = 0;
      for (let key in data) {
      let numKey = parseInt(key, 10);
      if (!isNaN(numKey) && numKey > maxKey) {
          maxKey = numKey;}}
      maxpage = maxKey;
      // Check if we're trying to go to a new page AND that data exists
      if (pjvalue !== jvalue && data[String(jvalue)]) {
        loadPageb(); // Load page content
      } else {
        jvalue = pjvalue; // Revert if no data
        console.log("No data available for this page. Staying on current page.");
      }
    });
}

function loadPageb() {
  function template(jid, jvalue1, jvalue2, jvalue3, jvalue4, jvalue5, nameNum) {
  let firststring = `<form id="b${nameNum}" onchange="Score('d${nameNum}',${nameNum})">
    <label>${jvalue1}</label><br>
    <img src="${jvalue2}"><br>`;

  let laststring = `</form>`;

  let string1 = `<input type="radio" id="c${jid}" name="d${nameNum}" value="3">
    <label for="c${jid}">${jvalue3}</label>`;

  let string2 = `<input type="radio" id="c${jid + 1}" name="d${nameNum}" value="1">
    <label for="c${jid + 1}">${jvalue4}</label>`;

  let string3 = `<input type="radio" id="c${jid + 2}" name="d${nameNum}" value="-1">
    <label for="c${jid + 2}">${jvalue5}</label>`;

  let options = [string1, string2, string3];

  // Shuffle the array randomly
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }

  let fullForm = firststring + options.join('') + laststring;
  return fullForm;
};

  let preContent = "";  // Formerly head
  let postContent = ""; // Formerly body
  let mainContent = "";

  fetch("htmlwrappings.json")
    .then(response => response.json())
    .then(data => {
      preContent = data["head"] || "";
      postContent = data["body"] || "";

      if (data[String(jvalue)]) {
        preContent += data[String(jvalue)];
      }

      return fetch("imgdata.json");
    })
    .then(response => response.json())
    .then(data => {
      jid=(jvalue - 1) * 9;
      for (let i = (jvalue - 1) * 3 + 1; i < jvalue * 3 + 1; i++) {
        const pageData = data[String(i)];

        if (Array.isArray(pageData) && pageData.length >= 5) {
          if(jvalue<maxpage){mainContent += template(
            jid,
            pageData[0],
            pageData[1],
            pageData[2],
            pageData[3],
            pageData[4],
            i
          );
          jid += 3;
        }} else if(jvalue===maxpage){
          loadPagec()
        }else {
          mainContent += `<p>No data found for page ${jvalue}.</p>`;
        }
      }

      document.body.innerHTML = preContent + mainContent + postContent;
      pjvalue = jvalue;
    });
}
let scores=[0,0,0,0,0,0,0,0,0,0,0,0,0]
let totals=0
function Score(name,where){
  const radios = document.getElementsByName(name);
  let selectedValue = 0;
  
  for (const radio of radios) {
    if (radio.checked) {
      selectedValue = parseInt(radio.value, 10);
      break;
    }
  }

  if (selectedValue !== 0) {
    console.log("Selected value: " + selectedValue);
    scores[where]= selectedValue;
  } else {
    console.log("No option selected.");
    scores[where]=0;
  }
  totals=0
  for (let i = 0; i < scores.length; i++){
  totals+=parseInt(scores[i]);
}
  console.log(totals);
}
function loadPagec(){
};
loadPage();
//load please
