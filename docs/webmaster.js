const template = (jvalue, jvalue1, jvalue2, jvalue3, jvalue4, jvalue5) => `
  <form>
    <label>${jvalue1}</label><br>
    <img src="${jvalue2}"><br>

    <input type="checkbox" id="c${jvalue}" value="1">
    <label for="c${jvalue}">${jvalue3}</label><br>

    <input type="checkbox" id="c${jvalue + 1}" value="3">
    <label for="c${jvalue + 1}">${jvalue4}</label><br>

    <input type="checkbox" id="c${jvalue + 2}" value="-1">
    <label for="c${jvalue + 2}">${jvalue5}</label>
  </form>
`;
let head;
let body;
fetch("htmlwrapping.json")
  .then(response => response.json())
  .then(data => {
    for (const key in data){
      if(key='head'){
        head=data[key];
    }
      if(key='body'){
        body=data[key];
    }
      if(key="1" jvalue){
        head=head+data[key];
    }
  }});
fetch("imgdata.json")
  .then(response => response.json())
  .then(data => {
    for (jvalue-1*3<const key in data<jvalue*3+1) {
      template=
    }
  });
