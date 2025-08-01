const template="    <input type="checkbox" id="c1" value="1">
    <label for="c1">jimbo</label><br>
    <input type="checkbox" id="c2" value="3">
    <label for="c2">Jiiimbo</label><br>
    <input type="checkbox" id="c3" value="-1">
    <label for="c3">jmbo</label>
</form>"
fetch("imgdata.json")
  .then(response => response.json())
  .then(data => {
    for (const key in data) {
      
    }
  });
