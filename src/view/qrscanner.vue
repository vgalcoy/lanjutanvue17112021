<template>
<div class="main">
<div class="cover">
            <a class="back" href="/approval"> <img id="ic-back" src="../assets/back.png" alt=""></a>
            <p>Scan Qr</p>
</div>
<div class="content">
    <div class="flex h-screen">
        <h1>Scan Qr Code</h1>
        <div class="qr m-auto">
        <qrcode-stream :camera="camera" @decode="onDecode" @init="onInit">
            <div v-if="validationSuccess" class="validation-success">
                This is a URL
            </div>

            <div v-if="validationFailure" class="validation-failure">
                This is NOT a URL!
            </div>

            <div v-if="validationPending" class="validation-pending">
                Long validation in progress...
            </div>
        </qrcode-stream>
        </div>
    
    </div>
</div>
</div>
</template>

<script>
import {QrcodeStream} from 'vue3-qrcode-reader'
export default {
  components: { QrcodeStream },
  data () {
    return {
      isValid: undefined,
      camera: 'auto',
      result: null,
    }
  },
  computed: {
    validationPending () {
      return this.isValid === undefined
        && this.camera === 'off'
    },
    validationSuccess () {
      return this.isValid === true
    },
    validationFailure () {
      return this.isValid === false
    }
  },
  methods: {
    paintBoundingBox (detectedCodes, ctx) {
      for (const detectedCode of detectedCodes) {
        const { boundingBox: { x, y, width, height } } = detectedCode
        ctx.lineWidth = 2
        ctx.strokeStyle = '#007bff'
        ctx.strokeRect(x, y, width, height)
      }
    },
    onInit (promise) {
      promise
        .catch(console.error)
        .then(this.resetValidationState)
    },
    resetValidationState () {
      this.isValid = undefined
    },
    async onDecode (content) {
      this.result = content
      this.turnCameraOff()
      // pretend it's taking really long
      await this.timeout(3000)
      this.isValid = content.startsWith('http')
      // some more delay, so users have time to read the message
      await this.timeout(1500)
      this.turnCameraOn()
    },
    turnCameraOn () {
      this.camera = 'auto'
    },
    turnCameraOff () {
      this.camera = 'off'
    },
    timeout (ms) {
      return new Promise(resolve => {
        window.setTimeout(resolve, ms)
      })
    }
  }
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
.cover {
        background-image: url(../assets/cover2.png);
        width: 360px;
        height: 90px;
        left: 0px;
        top: 0px;
        z-index: 1;
    }
.validation-success {
  color: green;
  font-weight: bold;
}
.validation-failure {
  color: red;
  font-weight: bold;
}
.qr{
  width: 250px;
  height: 250px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}
</style>