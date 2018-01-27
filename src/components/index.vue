<template>
  <div class="page">
    <div class="navbar">
      <div class="navbar-inner">
        <router-view name="mynav"></router-view>
      </div>
    </div>
    <div class="container">
      <div class="container-innerr">
        <div class="row">
          <div class="col-md-3">
            <router-view name="sidebar"></router-view>
          </div>
          <div class="col-md-9">
            <router-view></router-view>
          </div>
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
    background-color: #ffffff;
  }
  .container-innerr{
    width: 1200px;
    display: block;margin: 0 auto;
    position: relative;
  }
</style>
<script>

export default {
  name: 'index',
  methods: {
  }
}
</script>
