<template>
  <div>
    <el-row>
      <div class="tagLists">
        <el-tag
          v-for="(tag,index) in tags"
          :key="tag.name"
          :type="getTagType(index)"
          closable @close="closeTag(index)" @click="toUrl(index)">
          {{tag.name}}
        </el-tag>
      </div>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "TagMain",
    data() {
      return {
        tags: this.$store.state.targetModule.targetHistoryList
      };
    },
    methods:{
      closeTag(index){
        this.$store.dispatch("removeTarget",index);
      },
      toUrl(index){
        let obj = this.tags[index];
        this.$router.push({path: obj.url});
      },
      getTagType(index){
        let obj = this.tags[index];
        let url = obj.url;
        let path = "/"+this.$route.path.replace('/','');
        if(path == url){
          return "";
        }
        return "info";
      }
    }
  }
</script>

<style scoped>
  .el-tag{
    float: left;
    margin-right: 5px;
    margin-top: 20px;
    cursor: pointer;
  }
  .tagLists{
    width: 100%;
    height: 32px;
  }
  .el-row{
    padding: 0 20px;
    height: 72px;
    overflow-x: scroll;
    box-sizing: border-box;
  }
</style>
