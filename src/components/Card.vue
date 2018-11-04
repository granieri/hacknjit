<template>
  <article class="card">
    <div class="user">
      <span class="username">{{ first }} {{ last }}</span>
    </div>
    <div class="date">{{ date }}</div>
    <div class="poop_icon"></div>
    <section class="description">{{ desc }}</section>
    <section class="interact"></section>
  </article>
</template>

<script>
export default {
  name: 'card',
  props: ['first', 'last', 'desc', 'type', 'date']
}
</script>

<style scoped>
.card {
  width: 100%;
  background: #fff;
  margin: 2vh 0;
}

.user {
  background: #7a5c3d;
  height: 7vh;
  padding: 0 15px;
  display: flex;
  align-items: center;
  color: #fff;
}

.date{
  color: #000;
  font-size: .8em;
  padding: 5px 10px;
}

.description {
  padding: 5px;
}

.poop_icon {
  float: right;
  height: 50px;
  width: 50px;
  background: #000;
  margin: 5px;
}

.interact {
  border-top: 3px solid #ccaa87;
  background: #f7e3cf;
  width: 100%;
  height: 4vh;
  clear: both;
}

@media only screen and (min-width: 500px){
  .card {
    width: 30vw;
    min-width: 300px;
    margin: 2vh 2vw;
    box-shadow: 5px 5px 0px 0px rgba(143,143,143,1);
  }
}
</style>
