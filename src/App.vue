<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <router-link v-for="(route, index) in routes" :key="route.path" :to="route.path" :index="index">
            <el-submenu v-if="route.children && route.children.length > 0">
              <el-menu-item v-for="(child, cindex) in route.children" :key="child.path" :index="index + '-' + cindex">
                <i v-if="route.icon" :type="route.icon"></i> {{ child.name }}
              </el-menu-item>
            </el-submenu>
            <el-menu-item v-if="route.children || route.children.length <= 0" :index="index">
              <i v-if="route.icon" :type="route.icon"></i>{{ route.name }}
            </el-menu-item>
          </router-link>
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">
              <router-link to="/login"></router-link>
            </el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4">
            <router-link to="/login">登 录</router-link>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-aside width="200px">{{ aside }}</el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: "header",
      aside: "aside",
      main: "main",
      footer: "footer",
      activeIndex: "1",
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key)
      console.log(keyPath)
    },
  },
  computed: {
    routes: function() {
      return this.$router.options.routes.filter((route) => {
        return route.path !== "*"
      })
    },
  },
}
</script>

<style lang="scss">
.el-header {
  background-color: $main-bgc;
  color: $main-fc;
  @include d-flex;
  & div {
    align-items: center;
  }
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  & section {
    @include d-flex;
    & div {
      margin: 0 0.2em;
    }
  }
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
