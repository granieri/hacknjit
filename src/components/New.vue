<template>
  <div class="addnew">
    <h3>Add a new log</h3>
    <form id="new">
    <div>
      <label for="description">Notes</label>
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
        <option value="0">False alarm</option>
      </select>
      <div class="type_ref" id="modal_btn">
        <a href="#">image reference</a>
      </div>

      <div class="type_popup modal" id="type_modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <img src="../assets/bristol_stool_scale.png" />
        </div>
      </div>
    </div>
    <button class="send">submit</button>
    </form>
 </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'New',
  data () {
    return {
      login: login
    }
  },
  mounted () {
    console.log(login)
    this.$store.dispatch('set_user', login)
    let desc = document.getElementById('description')
    let remaining = document.getElementById('remaining')
    let max = 140
    desc.addEventListener('keyup', (e) => {
      let cur_len = max - e.target.value.length
      remaining.innerHTML = cur_len
      if (cur_len < 20) remaining.style.color = 'red'
      else remaining.style.color = 'black'
    })

    var modal = document.getElementById('type_modal')
    var btn = document.getElementById('modal_btn')
    var span = document.getElementsByClassName('close')[0]

    btn.onclick = function () {
      modal.style.display = 'block'
    }

    span.onclick = function () {
      modal.style.display = 'none'
    }

    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = 'none'
      }
    }

    let send = document.getElementsByClassName('send')[0];
    let type = document.getElementById('type')
    let url = 'http://localhost:8081/'
    send.addEventListener('click', function(e){
      axios.get(url+login.id+'/'+type.value+'/'+ desc.value+'/'+'/here')
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

.type_popup {
  z-index: 999;
}

form {
  padding: 10px;
}

/* modal */
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal-content {
    background-color: #fefefe;
    margin: 5% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    text-align: center;
    width: 80%; /* Could be more or less, depending on screen size */
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
</style>
