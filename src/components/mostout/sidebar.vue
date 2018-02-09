<template>
  <div class="">
    <ul class="nav sidebar-menu">
         <li v-for="item in sidebarName" v-bind:key="item.name" v-bind:class="[{active : item.active}]">
              {{item.name}}
              <ul v-for="children in item.children" :key="item.path">
                  <li>
                      {{children.name}}
                  </li>
              </ul>
         </li>
    </ul>
  </div>
</template>
<style>
  .sidebar-menu li.active{
      color: #3bc0c3;
  }
  .sidebar-menu li{
    cursor: pointer;
  }
</style>
<script>
export default {
  name: 'sidebar',
  data () {
    return {
      sidebarName: [
        {
          name: '外链学习目录',
          path: '/index',
          active: true
        },
        {
          name: '学习随笔',
          path: '/learn',
          active: false,
          children: [
            {
              name: 'ES6',
              path: '/learn/ES6',
              active: false
            },
            {
              name: 'vue',
              path: '/learn/vue',
              active: false
            }
          ]
        }
      ]
    }
  },
  mounted: {},
  methods: {
  }
}
</script>
