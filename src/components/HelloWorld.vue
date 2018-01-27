<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h4>QQ：1037681793 </h4>
    <h4>git：<a href="https://github.com/sds1037681793" target="_blank">https://github.com/sds1037681793</a></h4>
    <h4>CSS</h4>
    <ul>
      <li>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to my Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
