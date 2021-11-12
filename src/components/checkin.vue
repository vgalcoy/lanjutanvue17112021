<template>
    <div id="kertas">
        <div id="content">
            <div id="headline">
                <div id="kotak">
                    <h1>B 1234 PHI</h1>
                    <p>Selasa, 06 Nov 2021</p>
                </div>
            </div>
            <div id="trip">
                <p>Pilih Perjalanan Anda</p>
                <div id="per">
                    <div id="percard">
                        <div id="identity">
                            <h3>John Louis</h3>
                            <p1>08.00</p1>
                        </div>
                        <div id="des">
                            <img id="img1" src="../assets/ic-pickup-point.png" alt="">
                            <img id="panahbiru" src="../assets/ic-next-trip.png" alt="">
                            <img id="img2" src="../assets/ic-destination.png" alt="">
                            <h3 id="tulis1">Graha Elnusa</h3>
                            <h3 id="tulis2">Pickup Point</h3>
                            <h3 id="tulis3">Wisma Mulia</h3>
                            <h3 id="tulis4">Destination</h3>
                        </div>

                    </div>
                    <div id="percard">
                        <div id="identity">
                            <h3>Contoh</h3>
                            <p1>08.00</p1>
                        </div>
                        <div id="des">
                            <img id="img1" src="../assets/ic-pickup-point.png" alt="">
                            <img id="panahbiru" src="../assets/ic-next-trip.png" alt="">
                            <img id="img2" src="../assets/ic-destination.png" alt="">
                            <h3 id="tulis1">Graha Elnusa</h3>
                            <h3 id="tulis2">Pickup Point</h3>
                            <h3 id="tulis3">Wisma Mulia</h3>
                            <h3 id="tulis4">Destination</h3>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <button id="accept" @click.prevent="onAcceptClick()">Check In</button>
    </div>
</template>

<script>
export default {
    name: 'checkin',
    methods: {
      onAcceptClick() {
          this.$router.push('/confirmcheckin');
      },
    },
}
</script>
<style scoped>
#accept{
    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 7px 16px;

position: absolute;
height: 36px;
left: 16px;
right: 16px;
width: 327px;
bottom: 35px;
 text-decoration: none;
    border: none;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
/* secondary/red 100 */
background: #D92534;
border-radius: 6px;
}
#tulis4{
    position: absolute;
width: 140px;
height: 16px;
right: 15px;
top: 300px;

/* caption/caption 2 */
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
text-align: right;

/* neutral/black 60 */
color: #747474;

opacity: 0.8;
}
#tulis3{
 position: absolute;
width: 140px;
height: 16px;
right: 14px;
top: 280px;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 16px;
text-align: right;
color: #171717;
opacity: 0.8;
}
#tulis2{
    position: absolute;
width: 140px;
height: 16px;
left: -22px;
top: 300px;

/* caption/caption 2 */
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;

/* neutral/black 60 */
color: #747474;

opacity: 0.8;
}
#tulis1{
    position: absolute;
width: 140px;
height: 16px;
left: -6px;
top: 280px;

/* subtitle/subtitle 2 */

font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 16px;

/* neutral/black 100 */
color: #171717;

opacity: 0.8;
}
#img2{
        position: absolute;
    width: 20px;
    right: 13px;
    top: 40.69%;
    bottom: 65.67%;
}
#panahbiru{
    position: absolute;
width: 24px;
height: 24px;
left: calc(50% - 24px/2);
top: 249px;

/* semantic/dodger blue 60 */
background: #77BAF8;
border-radius: 100px;
}
#img1{
position: absolute;
width: 20px;
left: 16px;
top: 40.69%;
}
#des{
    
position: static;
width: 296px;
height: 78px;
left: 0px;
top: 32px;


/* Inside Auto Layout */
flex: none;
order: 1;
flex-grow: 0;
margin: 16px 0px;
}
#identity p1{
    position: static;
left: 50%;
right: 0%;
top: 0%;
bottom: 0%;

/* subtitle/subtitle 2 */

font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 16px;
text-align: right;

/* neutral/black 100 */
color: #171717;

opacity: 0.8;

/* Inside Auto Layout */
flex: none;
order: 1;
flex-grow: 0;
margin: 0px 190px;
}
#identity h3{
    position: static;
left: 0%;
right: 50%;
top: 0%;
bottom: 0%;

/* subtitle/subtitle 2 */

font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 16px;

/* neutral/black 100 */
color: #171717;

opacity: 0.8;

/* Inside Auto Layout */
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 0px;
}
#identity{
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;

position: static;
width: 296px;
height: 16px;
left: 0px;
top: 0px;


/* Inside Auto Layout */
flex: none;
order: 0;
flex-grow: 0;
margin: 16px 0px;
}
#percard{
    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 16px;

position: static;
width: 328px;
height: 142px;
left: 0px;
top: 0px;

/* neutral/white 100 */
background: #FFFFFF;

/* neutral/gray 100 */
border: 1.5px solid #E6E6E6;
box-sizing: border-box;
border-radius: 8px;

/* Inside Auto Layout */
flex: none;
order: 0;
flex-grow: 0;
margin: 16px 0px;
}
#per{
    display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: static;
width: 328px;
height: 458px;
left: 0px;
top: 45px;


/* Inside Auto Layout */
flex: none;
order: 1;
flex-grow: 0;
margin: 24px 0px;
}
#trip p{
    position: static;
width: 157px;
height: 21px;
left: 0px;
top: 0px;

/* headline/headline 5 */
font-style: normal;
font-weight: bold;
font-size: 15px;
line-height: 21px;

/* identical to box height */

/* primary/blue 100 */
color: #146BB8;


/* Inside Auto Layout */
flex: none;
order: 0;
flex-grow: 0;
margin: 44px 0px;
}
#trip{
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: static;
width: 328px;
height: 503px;
left: 0px;
top: 119px;


/* Inside Auto Layout */
flex: none;
order: 1;
flex-grow: 0;
margin: 40px 0px;
}
#kertas{
position: relative;
width: 360px;
height: 800px;

/* neutral/white 100 */
background: #FFFFFF;
}
#content{
    display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: absolute;
width: 328px;
height: 622px;
left: 16px;
top: 50px;

}
#headline{
    display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: static;
width: 328px;
height: 79px;
left: 0px;
top: 0px;


/* Inside Auto Layout */
flex: none;
order: 0;
flex-grow: 0;
margin: -37px 0px;
}
#kotak{
    /* Auto Layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0px;

position: static;
width: 145px;
height: 55px;
left: calc(50% - 145px/2 - 91.5px);
top: 0px;


/* Inside Auto Layout */
flex: none;
order: 0;
flex-grow: 0;
margin: 24px 0px;
}
#kotak p{
    position: static;
left: 0%;
right: 0%;
top: 65.45%;
bottom: 0%;

/* body/body 1 */
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;

/* identical to box height */
text-align: center;

color: #6A6A6A;


/* Inside Auto Layout */
flex: none;
order: 1;
flex-grow: 0;
margin: 8px 0px;
}
#kotak h1{
    
position: static;
width: 125px;
height: 28px;
left: 0px;
top: 0px;

/* headline/headline 3 */
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 28px;

/* primary/blue 100 */
color: #146BB8;


/* Inside Auto Layout */
flex: none;
order: 0;
flex-grow: 0;
margin: 8px 0px;
}
</style>