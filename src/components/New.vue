<template>
  <div class="addnew">
    <h3>Add a new log</h3>
    <form id="new">
    <div>
      <label for="description">Description</label>
      <textarea id="description" maxlength="240" />
      <div class="char_count"><span id="remaining">140</span>/140 remaining</div>
    </div>
    <div>
      <label for="type">Select type</label>
      <select id="type">
        <option value="1">Type 1 - Hard lumps</option>
        <option value="2">Type 2 - Lumpy and long</option>
        <option value="3">Type 3 - Sausage-shaped with cracks</option>
        <option value="4">Type 4 - Smooth sausage</option>
        <option value="5">Type 5 - Soft blobs</option>
        <option value="6">Type 5 - Mushy, ragged</option>
        <option value="7">Type 7 - Liquid</option>
      </select>
      <div class="type_ref">
        <a href="#">see type descriptions</a>
      </div>

      <div class="type_popup">
        <table>
          <tbody>
            <tr>
              <td>Type 1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <button class="send">submit</button>
    </form>
 </div>
</template>

<script>
export default {
  name: 'New',
  data () {
    return {
    }
  },
  mounted () {
    let desc = document.getElementById("description")
    let remaining = document.getElementById("remaining")
    let max = 140
    desc.addEventListener("keyup", (e) => {
      let cur_len = max - e.target.value.length;
      remaining.innerHTML = cur_len;
      if(cur_len < 20) remaining.style.color = "red";
      else remaining.style.color = "black";
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.addnew {
  margin-top: 2vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  height: 75vh;
  align-items: center;
}

textarea {
  width: 100%;
}

.char_count {
  text-align: right;
  font-size: .8em;
}

.type_ref {
  text-align: center;
}

.send{
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  background: #39f;
  border: none;
  padding: 10px;
  border-radius: 3px;
  letter-spacing: 2px;
  font-size: 1em;
  display: block;
  width: 30vw;
  margin: 2vh auto;
}

.send:hover{
  cursor: pointer;
  background: #0073e6;
  color: #d9d9d9;
  transition: background 0.5s;
}

.send:active{
  background: #ff4d94;
}

.type_ref {
  display: none;
}

form {
  padding: 10px;
}

</style>
