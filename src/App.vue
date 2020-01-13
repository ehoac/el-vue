<template>
  <div id='app'>
    <el-container>
      <el-header>
        <div><div class='menu'></div></div>
      </el-header>
      <el-container>
        <el-main>
          <article>
            <header>{{main}}</header>
            <section>
              <div class='i-menu'></div>
              <div class='i-more'></div>
            </section>
          </article>
          
        </el-main>
        <el-aside width='200px'>
          {{aside}}
        </el-aside>
      </el-container>
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

<style lang='scss'>
  .el-header{
    background-color: $s-bgc;
    color: #fff;
    @include d-flex;
    & div{
      align-items: center;
    }
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    & section{
      @include d-flex;
      & div {
        margin: 0 .2em;
      }
    }
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
</style>
