
//jvalue with no number will be the page my website is on so it is left still with no declaration as I will pull it from the button and not thinking about it yet, this is also a virtual simulator that will simulate page logic but without ever leaving the same html playground
let jid=0
let pjvalue=0
let jvalue=1
function loadPage(){if(pjvalue!==jvalue){
  function template(jid, jvalue1, jvalue2, jvalue3, jvalue4, jvalue5){ 
  return `<form>
    <label>${jvalue1}</label><br>
    <img src="${jvalue2}"><br>

    <input type="checkbox" id="c${jid}" value="1">
    <label for="c${jid}">${jvalue3}</label><br>

    <input type="checkbox" id="c${jid + 1}" value="3">
    <label for="c${jid + 1}">${jvalue4}</label><br>

    <input type="checkbox" id="c${jid + 2}" value="-1">
    <label for="c${jid + 2}">${jvalue5}</label>
  </form>
`};
let head="";
let body="";
fetch("htmlwrapping.json")
  .then(response => response.json())
  .then(data => {
head = data["head"] || "";
body = data["body"] || "";

        // Optional page-specific head content
        if (data[String(jvalue)]) {
          head += data[String(jvalue)];
        }

        return fetch("imgdata.json");
      })
  
  .then(response => response.json())
  .then(data => {
  for (let i = (jvalue - 1) * 3 + 1; i < jvalue * 3 + 1; i++){
    let pageData = data[String(i)];

        if (Array.isArray(pageData) && pageData.length >= 5) {
          body += template(
            jid,
            pageData[0], // label
            pageData[1], // image src
            pageData[2], // option A
            pageData[3], // option B
            pageData[4]  // option C
          );
          jid += 3;
        } else {
          body += `<p>No data found for page ${jvalue}.</p>`;
        }};
document.body.innerHTML = body
pjvalue=jvalue})};
if (pjvalue===jvalue){console.log("false positive")}
};
loadPage()
