<template>
    <div class="main">
        <div class="cover">
            <a class="back" href="/approval"> <img id="ic-back" src="../assets/back.png" alt=""></a>
            <p>Scan Qr</p>
        </div>
        <div class="content">
            <div class="head">
                <img src="../assets/img-input-code.png" alt="">
                <h1>Masukan Kode</h1>
                <p>Silahkan klik tombol di bawah ini</p>
            </div>
            <button @click.prevent="onInputClick()">Input</button>
            <div class="nav">
                <router-link to="/qr" id="Qr">QR Code</router-link>
                <router-link to="/Code" id="Code">Enter Code</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Code',
    methods: {
      onInputClick() {
          this.$router.push('/input');
      },
    },
}
</script>


<style scoped>
    .main{
        position: absolute;
        left: 0;
        top: 0;
        width: 360px;
        height: auto;
    }

    .cover {
        background-image: url(../assets/cover2.png);
        width: 360px;
        height: 90px;
        left: 0px;
        top: 0px;
        z-index: 1;
    }

    .cover .back {
    position: absolute;
    left: 16px;
    top: 16px;
    }

    .back #ic-back{
    position: absolute;
    width: 16px;
    height: 16px;
    }

    .cover p {
        position: absolute;
        top: 16px;
        left: 56px;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: #FFFFFF;
        margin: 0;
    }

    .content{
    position: absolute;
    left: 0%;
    right: 0%;
    top: 56px;
    bottom: 0px;
    background: white;
    z-index: 2;
    Width :360px;
    Height : 744px;
    }

    .content .head img{
        margin-top: 34px;
    }

    .head h1{
    position: static;
    width: 144px;
    height: 23px;
    left: 71.5px;
    top: 0px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #171717;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 4px auto;
    }

    .head p {
    position: static;
    width: 287px;
    height: 19px;
    left: 0px;
    top: 27px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    color: #6A6A6A;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 4px auto;
    }

    .content button{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: static;
    height: 36px;
    left: 75.5px;
    right: 75.5px;
    top: calc(50% - 36px/2 + 138px);
    background: #D92534;
    border-radius: 6px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 32px auto;
    border: none;
    color: white;
    padding: 7px 51.5px;
    }


    .nav{
    position: absolute;
    height: 69px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: #FFFFFF;
    box-shadow: 0px 0px 5px rgba(69, 93, 121, 0.15);
    border-radius: 30px 30px 0px 0px;
    z-index: 3;
    }

    .nav a {
        color: black;
    }

    .nav #Qr{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
    position: absolute;
    width: 148px;
    left: 12px;
    top: 13px;
    text-decoration: none;
    font-size: 16px;
    border-radius: 100px;
    }

    .nav #Code{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
    position: absolute;
    width: 148px;
    left: 170px;
    top: 13px;
    text-decoration: none;
    font-size: 16px;
    border-radius: 100px;
    }

    .nav a.router-link-exact-active {
    color: white;
    background-color: #146BB8;
    padding: 5px 7px;
    border-radius: 10px;
    }

    
</style>