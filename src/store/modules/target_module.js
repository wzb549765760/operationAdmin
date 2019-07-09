/**
 * Created by 开心 on 2018/8/1.
 */
import Vue from "vue";
import axios from 'axios'
import qs from 'qs'

export default {
  state: {
    targetHistoryList: []
  },
  mutations: {
    addTarget(state, obj) {
      let flag = false, name = obj.name, url = obj.url;
      state.targetHistoryList.forEach((v, k) => {
        if (v.name == name && v.url == url) {
          flag = true;
        }
      });
      if (!flag) {
        state.targetHistoryList.push({
          name, url
        })
      }
    },
    removeTarget(state, index) {
      state.targetHistoryList.splice(index, 1);
    }
  },
  actions: {
    addTarget(context, obj) {
      context.commit("addTarget", obj);
    },
    removeTarget(context, index) {
      context.commit("removeTarget", index);
    }
  }
}
