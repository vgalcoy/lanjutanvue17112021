<template>
  <div class="cover">
      <a class="back" href="/approval"> <img id="ic-back" src="../assets/back.png" alt=""></a>
      <img src="../assets/img_cover_approval_center.png" alt="">
    
    <div class="content">
        <button class="card" @click.prevent="onPostsClick()">
            <div class="card-right">
                <h1>38</h1>
                <p>Outstanding Approval</p>
            </div>
            <div class="card-left">
                <img src="../assets/img_outstanding_approval.png" alt="">
            </div>
        </button>
        <div class="form">
            <h1>Menunggu Persetujuan</h1>
            <p>Segera tindak lanjuti permintaan anda</p>
            <div class="itreq">
                <div class="logoit"></div>
                <h2>IT Request Tracking</h2>
                <button class="request" id="it" @click.prevent="onReqClick()">
                    <h3>30</h3>
                    <p>Request</p>
                </button>
            </div>
            <div class="trreq">
                <div class="logotr"></div>
                <h2>Training Request</h2>
                <div class="request" id="tr">
                    <h3>08</h3>
                    <p>Request</p>
                </div>
            </div>
        </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'Approval',
  methods: {
      onPostsClick() {
          this.$router.push('/out');
      },
      onReqClick() {
          this.$router.push('/itRequest');
      },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cover{
    width: 360px;
    height: 640px;
}

.cover .back{
    position: absolute;
    left: 4.44%;
    right: 88.89%;
    top: 1%;
    bottom: 94%;
}

.back #ic-back{
    position: absolute;
    top: 6px;
    left: 3px;
    width: 16px;
    height: 16px;
    z-index: 2;
}
.cover img{
    position: absolute;
    width: 360px;
    height: 198px;
    left: 0px;
    top: 0px;
    z-index: -1;
}

.content{
    position: absolute;
    width: 360px;
    height: 475px;
    top: 165px;
    left: 0;
    z-index: 2;
    border-radius: 30px 30px 0 0;
    background-color: white;
}

.card{
    border: none;
    cursor: pointer;
    position: static;
    width: 328px;
    height: 85px;
    left: 0px;
    top: 0px;
    background: #F1F5FC;
    border-radius: 12px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0 15px;
    margin-top: 34px;
    overflow: hidden;
    
}

.card-right h1{
    position: static;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    text-align: right;
    color: #146BB8;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 2px 0px;
    padding-top: 15px;
    padding-right: 16px;
}

.card-right p{
    position: static;
    left: 0%;
    right: 0%;
    top: 69.81%;
    bottom: 0%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
    color: #171717;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 2px 0px;
    padding-right: 16px;
}

.card-left img{
    position: absolute;
    width: 84px;
    height: 70px;
    left: 26px;
    top: 42px;
    z-index: 3;
}

.form h1{
    position: static;
    width: 158px;
    height: 19px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #171717;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin-top: 32px;
    margin-left: 16px;
    margin-bottom: 0;
}

.form p{
    position: static;
    width: 215px;
    height: 16px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #6A6A6A;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin-top: 2px;
    margin-left: 4px;
}

.itreq{
    display: flex;
}

.trreq{
    display: flex;
}

.itreq .logoit{
    position: static;
    width: 44px;
    height: 44px;
    left: 0px;
    top: 0px;
    background: #F1F5FC;
    border-radius: 14px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 16px;
    margin-top: 34px;
    background: url(../assets/ic_it_request_tracking.png);
    background-size: 44px;
    background-position: center;
}

.trreq .logotr{
    position: static;
    width: 44px;
    height: 44px;
    left: 0px;
    top: 0px;
    background: #F1F5FC;
    border-radius: 14px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 16px;
    margin-top: 28px;
    background: url(../assets/ic_training_request.png);
    background-size: 44px;
    background-position: center;
}

h2{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #171717;
    width: 172px;
}

.itreq h2{
    position: static;
    left: 0%;
    right: 0%;
    top: 236px;
    bottom: 0%;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 8px 0px;
    margin-top: 48px;
}

.trreq h2{
    position: static;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 8px 0px;
    margin-top: 41px;
}

.request h3{
    position: static;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: right;
    color: #D92534;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 2px 0px;
    width: 52px;
    margin-top: 34px;
    margin-left: 32px;
}

.request p{
    position: static;
    left: 0%;
    right: 0%;
    top: 57.89%;
    bottom: 0%;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    text-align: right;
    color: #6A6A6A;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 2px 0px;
    width: 52px;
    margin-left: 32px;
}

#it {
    border: none;
    background-color: white;
}
</style>
