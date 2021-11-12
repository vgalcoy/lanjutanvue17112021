<template>
    <div class="main">
    <a id="exit" href="/Code">
    <img src="../assets/exit.svg" alt=""></a>
    </div>
    <div class="content">
        <p>Masukkan Kode</p>
        <input v-model="message" placeholder="Masukkan Kode">
    </div>
    <div class="button">
        <button id="accept" @click.prevent="onAcceptClick()">OK</button>
        <button id="cancel" @click.prevent="onCancelClick()">Cancel</button>
    </div>
</template>

<script>
export default {
    name: 'Input',
    methods: {
      onAcceptClick() {
          this.$router.push('/checkin');
      },
      onCancelClick() {
          this.$router.push('/Code');
      },
  },
}
</script>

<style scoped>
    .main{
        width: 360px;
        height: auto;
    }
    #exit{
    position: absolute;
    right: 20px;
    top: 18px;
    }
    #exit img{
        width: 14px;
        height: 14px;
    }

    .content p{
    position: absolute;
    width: 244px;
    height: 23px;
    left: -30px;
    top: 90px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #146BB8;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0;
    }

    input{
    position: absolute;
    left: 16px;
    right: 16px;
    top: 137px;
    bottom: 615px;
    width: 328px;
    height: 48px;
    background: #FFFFFF;
    border: 1px solid #DCDCDC;
    box-sizing: border-box;
    border-radius: 5px;
    }

    .button{
    position: absolute;
    width: 328px;
    height: 76px;
    left: 16px;
    top: 657px;
    }

    #accept{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 7px 16px;
    position: absolute;
    width: 328px;
    height: 36px;
    left: calc(50% - 328px/2);
    bottom: 107px;
    background: #D92534;
    border-radius: 6px;
    text-decoration: none;
    border: none;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
    }

    #cancel{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 7px 16px;
        position: absolute;
        width: 328px;
        height: 36px;
        left: calc(50% - 328px/2);
        bottom: 67px;
        background: #FFFFFF;
        border-radius: 6px;
        text-decoration: none;
        border: none;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
        text-align: center;
        color: #6A6A6A;
    }
</style>