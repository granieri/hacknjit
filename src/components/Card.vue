<template>
  <article class="card">
    <div class="user">
      <span class="username">username</span>
    </div>
    <div class="date">25 September 2018 3:59pm</div>
    <div class="poop_icon"></div>
    <section class="description">Lorem ipsum dolor sit amet</section>
    <section class="interact"></section>
  </article>
</template>

<script>
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
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
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
</style>
