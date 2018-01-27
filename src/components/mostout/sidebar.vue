<template>
  <div class="">
    <ul class="">
         <li v-for="(item,index) in sidebarName" v-bind:class="[{active : item.active}]">
              {{item.name}}
              <ul v-for="(children,indexs) in item.children">
                  <li>
                      {{children.name}}
                  </li>
              </ul>
         </li>
        <!--<li class="sidebar-1 active" ><a href="#" :to="{ path: '/index' }">外链学习目录</a></li>
        <li class="sidebar-1"><a :to="{ path: '/my-information' }">个人主页</a></li>
        <li class="sidebar-1"><a :to="{ path: '/job' }">工作历程</a></li>
        <li class="sidebar-1"><a >学习随笔</a>
          <ul>
            <li class=""><a >ES6</a>
                  <ul>
                    <li><a >123</a></li>
                  </ul>
             </li>
             <li><a >Vue</a></li>
          </ul>
        </li>-->
    </ul>
  </div>
</template>
<style></style>
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
