<template>
  <div class="navbar-container clearfix">
    <!-- Navbar Barnd -->
    <div class="navbar-header pull-left">
      <div class="topbar-logo topbar-btn">
        <a href="/"><img src="../../assets/logo.png" style="padding-left:8px;width: 50px;"></a>
      </div>
    </div>
    <div class="navbar-header pull-left">
      <span class="version-type">ES6  +  bootstrap  + Vue</span>
    </div>
    <!-- /Navbar Barnd -->
    <div class="navbar-header pull-right version-type" style="position: relative;text-align: right;line-height: 50px;">
      施德胜<span class="glyphicon glyphicon-thumbs-up" style="margin-left: 10px;" aria-hidden="true"></span>
    </div>
  </div>
</template>
<style>
  .version-type{
    color: #ffffff;
    font-size: 20px;
    line-height: 50px;
  }
</style>
<script>
export default {
  name: 'mynav',
  methods: {
  }
}
</script>
