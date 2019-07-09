<template>
  <el-col>
    <el-menu
      :default-active="onRoutes"
      class="el-menu-vertical-demo"
      style="border: 0px;text-align: left"
      :collapse="isCollapse" unique-opened router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index">
            <template slot="title"><i :class="item.icon"></i><span>{{ item.title }}</span></template>
            <el-menu-item-group v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
              <template v-if="subItem.subs">
                <el-submenu :index="subItem.index">
                  <template slot="title"><span>{{ subItem.title }}</span></template>
                  <el-menu-item v-for="(subItemC,ic) in subItem.subs" :key="ic" :index="subItemC.index">
                    {{subItemC.title}}
                  </el-menu-item>
                </el-submenu>
              </template>
              <template v-else>
                <el-menu-item  :index="subItem.index"><span>{{ subItem.title }}</span></el-menu-item>
              </template>
            </el-menu-item-group>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index">
            <i :class="item.icon"></i><span>{{ item.title }}</span>
          </el-menu-item>
        </template>
        <!--<p :title="item.title">{{item.title }}</p>-->
      </template>
    </el-menu>
  </el-col>
</template>

<script>
  export default {
    name: "NavMenu",
    data() {
      return {
        isCollapse: false,
        uniqueOpened:true,
        items: [
          {
            icon: 'el-icon-date',
            index: '1',
            title: '我的商户',
            subs: [
              {
                index: 'businessInquiry',
                title: '商户查询'
              },
              {
                index: 'businessInformationMaintenance',
                title: '商户池信息维护'
              }
            ]
          },
          {
            icon: 'el-icon-setting',
            index: '2',
            title: '我的员工',
            subs: [
              {
                index: "login",
                title: "员工管理",
              },
              {
                index: "orderlist",
                title: "新增员工",
              },
              {
                index: "orderlist",
                title: "角色",
              },
              {
                index: "orderlist",
                title: "角色组",
              },
              {
                index: "orderlist",
                title: "管辖范围",
              },
            ]
          },
          {
            icon: 'el-icon-news',
            index: '3',
            title: '下级机构',
            subs: [
              {
                index: "ServeOrderList",
                title: "机构列表",
              }
            ]
          },
          {
            icon: 'el-icon-star-on',
            index: '4',
            title: '工作台',
            subs: [
              {
                index: 'UserList',
                title: '任务'
              },
              {
                index: 'AddUser',
                title: '任务审核'
              },
              {
                index: 'MessageLists',
                title: '任务管理'
              }
            ]
          },
          {
            icon: 'el-icon-document',
            index: '5',
            title: 'POS机管理',
            subs: [
              {
                index: 'PicChange',
                title: 'POS机管理'
              },
              {
                index: 'DocHosManager',
                title: 'POS机查询'
              },
              {
                index: 'DocHosManager',
                title: 'POS机故障查询'
              },
              {
                index: 'DocHosManager',
                title: 'POS机类型配置'
              },
              {
                index: 'DocHosManager',
                title: 'POS机终端显示配置'
              }
            ]
          },
          {
            icon: 'el-icon-document',
            index: '6',
            title: '机具摊销管理',
            subs: [
              {
                index: 'PicChange',
                title: 'POS机具摊销明细查询'
              },
              {
                index: 'DocHosManager',
                title: 'ERP系统同步'
              }
            ]
          },
          {
            icon: 'el-icon-document',
            index: '7',
            title: '计费模型',
            subs: [
              {
                index: 'PicChange',
                title: '机构计费模型',
                subs: [
                  {
                    index: 'DocHosManager',
                    title: '代理商分润模型'
                  }
                ]
              },
              {
                index: 'DocHosManager',
                title: '商户计费模型',
                subs: [
                  {
                    index: 'DocHosManager',
                    title: '间联商户费率模型'
                  }
                ]
              }
            ]
          },
          {
            icon: 'el-icon-document',
            index: '8',
            title: '参数设置',
            subs: [
              {
                index: 'PicChange',
                title: '任务配置'
              },
              {
                index: 'DocHosManager',
                title: '敏感信息控制',
                subs: [
                  {
                    index: 'DocHosManager',
                    title: '合作机构'
                  },
                  {
                    index: 'DocHosManager',
                    title: '一级代理'
                  },
                  {
                    index: 'DocHosManager',
                    title: '分销商'
                  }
                ]
              },
              {
                index: 'PicChange',
                title: '审核拒绝理由模板'
              },
            ]
          }
        ]
      }
    },
    computed: {
      onRoutes() {
        return this.$route.path.replace('/','');
      }
    },
    methods: {
      handleOpen() {

      },
      handleClose() {

      },
      changeFlag(flag) {
        this.isCollapse = flag;
      }
    },
    created() {
      // window.onresize = (()=>{
      //   let width = document.body.clientWidth;
      //   if (width<1000){
      //     this.isCollapse = true;
      //   }else {
      //     this.isCollapse = false;
      //   }
      // })
    }
  }
</script>

<style scoped lang="less">
  .navbar {
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

    .hamburger-container {
      line-height: 46px;
      height: 100%;
      float: left;
      cursor: pointer;
      transition: background .3s;
      -webkit-tap-highlight-color: transparent;

      &
      :hover {
        background: rgba(0, 0, 0, .025)
      }

    }

    .breadcrumb-container {
      float: left;
    }

    .errLog-container {
      display: inline-block;
      vertical-align: top;
    }

    .right-menu {
      float: right;
      height: 100%;
      line-height: 50px;

      &
      :focus {
        outline: none;
      }

      .right-menu-item {
        display: inline-block;
        padding: 0 8px;
        height: 100%;
        font-size: 18px;
        color: #5a5e66;
        vertical-align: text-bottom;

        &
        .hover-effect {
          cursor: pointer;
          transition: background .3s;

          &
          :hover {
            background: rgba(0, 0, 0, .025)
          }

        }
      }

      .avatar-container {
        margin-right: 30px;

        .avatar-wrapper {
          margin-top: 5px;
          position: relative;

          .user-avatar {
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 10px;
          }

          .el-icon-caret-bottom {
            cursor: pointer;
            position: absolute;
            right: -20px;
            top: 25px;
            font-size: 12px;
          }

        }
      }
    }
  }

  .el-submenu.is-active .el-submenu__title {
    overflow: hidden;
  }

</style>
