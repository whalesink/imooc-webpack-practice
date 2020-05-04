<template>
  <div>
    <label for="page">页码：</label>
    <input type="number" name="page" id="page" v-model="page">
    <label for="num">数量：</label>
    <input type="number" name="num" id="num" v-model="num">
    <button @click="sub(page, num)">提交</button>
    <br>
    <p>respons:</p>
    <textarea cols="80" rows="40" readonly>{{ respons }}</textarea>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'lists',
  data(){
    return {
      page: 1,
      num: 5,
      respons:[]
    }
  },
  methods: {
    // 点击
    sub(page, num){
      // 清空内容
      this.respons.length = 0;

      // 发送get请求
      axios.get('cocoonut.top/list', {
        params:{
          page: page,
          num: num,
        }
      }).then(res => {
          //请求成功
          console.log('请求成功！');
          console.log(res);
          this.respons.push(res.data);


        }).catch(error => {
          //请求失败
          console.log('请求失败');
          console.log(error);
        });
    }
  }
}
</script>

<style scoped>
  textarea{
    background-color: rgb(208, 241, 177);
  }
</style>