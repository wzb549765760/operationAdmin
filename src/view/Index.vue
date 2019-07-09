<template>
  <div>
    <el-container>
      <el-header>
        <head-party></head-party>
      </el-header>
      <div class="content">
        <el-aside :width="tags">
          <nav-menu ref="navMenuChild"></nav-menu>
        </el-aside>
        <el-main>
          <tag-main></tag-main>
          <div class="content_main">
            <transition name="el-zoom-in-center">
              <router-view></router-view>
            </transition>
          </div>
        </el-main>
      </div>
    </el-container>
  </div>
</template>

<script>
  import NavMenu from './NavMenu'
  import TagMain from './TagMain'
  import HeadParty from './HeadParty'

  export default {
    name: "Index",
    data() {
      return {
        tags: "230px",
        showFlag: true
      };
    },
    components: {
      TagMain,
      NavMenu,
      HeadParty
    },
    methods: {
      getwidth() {
        let width = document.body.clientWidth;
        if (width < 1000) {
          this.tags = "64px";
          this.showFlag = true;
        } else {
          this.tags = "230px";
          this.showFlag = false;
        }
        this.$refs.navMenuChild.changeFlag(this.showFlag);
      }
    },
    mounted() {
      this.getwidth();
      window.onresize = (() => {
        this.getwidth();
      });
    }
  }
</script>
<style scoped lang="less">
  @import "../assets/css/base/base.less";

  .el-header {
    background-color: @color-blue;
    width: 100%;
  }
  .el-aside {
    /*background-color: rgb(84, 92, 100);*/
    border: 1px solid #e5e5e5;
  }

  .el-main {
    padding: 0px;
    position: relative;
  }

  .el-container {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    overflow: auto;
  }

  .content {
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    overflow: auto;
  }

  .content_main {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    height: auto;
    min-height: calc(100vh - 132px);
    position: absolute;
    background-color: #e5e5e5;
  }


</style>
