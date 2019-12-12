<template>
  <div id='app'>
    <el-container>
      <el-header>
        {{header}}
      </el-header>
      <el-container>
        <el-aside width='200px'>
          {{aside}}
        </el-aside>
        <el-main>
          {{main}}
        </el-main>
      </el-container>
      <el-footer>
        {{footer}}
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        header: 'header',
        aside: 'aside',
        main: 'main',
        footer:'footer'
      }
    }
  }
</script>

<style>
  .el-header, .el-footer {
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
    }
    
    .el-aside {
      background-color: #D3DCE6;
      color: #333;
      text-align: center;
    }
    
    .el-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
    }
    
    body > .el-container {
      margin-bottom: 40px;
    }
</style>
