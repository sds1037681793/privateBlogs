<template>
  <div class="page" style="background-color: #edf1f2">
    <div class="navbar">
      <div class="navbar-inner">
        <router-view name="mynav"></router-view>
      </div>
    </div>
    <div class="container">
      <div class="container-innerr">
        <div class="page-sidebar">
          <router-view name="sidebar"></router-view>
        </div>
        <div class="page-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
    .navbar{
      background-color: #3bc0c3;
      border-radius: 0;
    }
    .navbar-inner{
      width: 1200px;
      display: block;
      margin: 0 auto;
    }

  .container{

  }
  .container-innerr{
    width: 1200px;
    display: block;margin: 0 auto;
    position: relative;
  }
  .page-sidebar{
    width: 150px;
    max-width: 150px;
    background-color: #fff;
    border-left: 0;
    border-right: 0;
    position: static;
    float: left;
    padding: 20px 10px;
  }
  .page-content{
    margin: 0;
    float: right;
    width: 1040px;
    background-color: #ffffff;
    padding: 20px;
  }
</style>
<script>

export default {
  name: 'index',
  methods: {
  }
}
</script>
