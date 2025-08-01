let jid=0
let jvalue=1
//jvalue with no number will be the page my website is on so it is left still with no declaration as I will pull it from the button and not thinking about it yet, this is also a virtual simulator that will simulate page logic but without ever leaving the same html playground
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
let head;
let body;
fetch("htmlwrapping.json")
  .then(response => response.json())
  .then(data => {
    for (const key in data){
      if(key==='head'){
        head=data[key];
    }
      if(key==='body'){
        body=data[key];
    }
      if(key==="1" && key===jvalue){
        head=head+data[key];
    }
  }});
fetch("imgdata.json")
  .then(response => response.json())
  .then(data => {
    for (let i = (jvalue - 1) * 3; i < jvalue * 3 + 1; i++) {
      head=head+template(jid,data[key])
      jid+=3
    }
  });
