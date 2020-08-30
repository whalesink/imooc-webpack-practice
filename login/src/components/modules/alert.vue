<template>
  <div v-show="isShow">
      <div class="alert">
          <div class="flex">{{msg}}</div>
          <div class="btnCommon success" @click="close">确定</div>
      </div>
      <div class="mask" @click="closeMask()"></div>
  </div>
</template>

<script>
export default {
    props: {
        msg: {
            type: String,
            default: 'alert message'
        },

        isShow: {
            type: Boolean,
            default: false
        }
    },

    methods: {
        close(){
            this.isShow = false
        },

        closeMask(){
            this.close();
        }
    }
};
</script>

<style lang="scss" scoped>
$btn-main: #009688;
$btn-dark: darken($btn-main, 5%);

    .alert{
        width: 300px;
        height: 150px;
        position: fixed;
        background-color: #fff;
        left: 50%;
        top: 50%;
        margin: -75px 0 0 -150px;
        padding: 20px 10px;
        box-shadow: 0 5px 8px rgba(0, 0, 0, 0.212);
        z-index: 1000;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        user-select: none;
        border-radius: 4px;
    }

    .flex{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btnCommon{
        width: 105px;
        height: 32px;
        text-align: center;
        line-height: 32px;
        border-radius: 6px;
        &.success{
            background: #009688;
            color: #fff;
            &:hover{
                background-color: $btn-dark;
            }
        }
    }

    .mask{
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.288);
        left: 0;
        top: 0;
        overflow: hidden;
        z-index: 500;
    }
</style>