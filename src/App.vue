<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  name: 'app'
}
</script>

<style>
  html {overflow-y:scroll;}
  body {margin:0; padding:0px; font:12px"\5B8B\4F53",sans-serif;background:#ffffff;}
  div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,blockquote,p{padding:0; margin:0;}
  li{list-style-type:none;}
  img{vertical-align:top;border:0;}
  ol,ul {list-style:none;}
  h1,h2,h3,h4,h5,h6{font-size:12px; font-weight:normal;}
  address,cite,code,em,th {font-weight:normal; font-style:normal;}
  a{
    text-decoration:none;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    font-size: 14px;
  }

</style>
