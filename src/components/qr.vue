<template>
    <div class="main">
        <div class="cover">
            <a class="back" href="/approval"> <img id="ic-back" src="../assets/back.png" alt=""></a>
            <p>Scan Qr</p>
        </div>
        <div class="content">
            <div class="head">
                <h1>Selamat Berkendara</h1>
                <p>Scan Qr Code di bawah ini</p>
            </div>
            <div class="opacity">
            </div>
            <div class="scan">
                <img src="../assets/qr-code.svg" alt="">
            </div>
            <p class="code">Enter Code : 123456</p>
            <p class="desc">Arahkan kamera pada barcode yang tersedia </p>
            <div class="nav">
                <router-link to="/qr" id="Qr">Scan QR</router-link>
                <router-link to="/Code" id="Code">Input Code</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'qr',
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
    background: #B1D7FB;
    z-index: 2;
    Width :360px;
    Height : 744px;
    }

    .opacity{
    position: absolute;
    top: 0;
    left: 0;
    background: #171717;
    opacity: 0.3;
    Width :360px;
    Height : 744px;
    z-index: 2;
    }

    .head{
        display: flex;
        justify-content: center;
        width: 176px;
        height: 40px;
        margin: 0 auto;
        flex-direction: column;
        top: 148px;
        z-index: 3;
    }

    .head h1 {
    position: absolute;
    width: 179px;
    top: 127px;
    left: 90px;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    margin: 0 auto;
    text-align: center;
    color: black;
    }

    .head p {
    position: absolute;
    width: 176px;
    top: 148px;
    left: 92px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 19px;
    color: #171717;
    margin-top: 2px;
    text-align: center;
    }

    .scan {
        position: absolute;
        top: 176px;
        left: 48px;
        width: 264px;
        height: 264px;
        background-color: #B1D7FB;
        z-index: 3;
    }

    .scan img {
        position: absolute;
        top: 15px;
        left: 15px;
    }

    .content .code{
    position: absolute;
    left: 27.99%;
    right: 27.99%;
    top: 420px;
    font-style: italic;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #171717;
    flex: none;
    order: 2;
    flex-grow: 0;
    margin: 24px 0px;
    }

    .content .desc {
    position: absolute;
    width: 240px;
    height: 14px;
    left: calc(50% - 240px/2);
    bottom: 89px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    z-index: 3;
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