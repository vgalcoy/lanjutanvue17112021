<template>
    <div id = "kertas">
        <div id ="container">
            <div id="headline">
                <div id="id">
                    <p id="tulis1">B 1234 PHI</p>
                    <p id="tulis2">Selasa, 06 Nov 2021</p>
                    <p id="atom">Complete</p>
                </div>
            </div>
            <div id="percard">
                        <div id="identity">
                            <h3>John Louis</h3>
                            <p1>08.00</p1>
                        </div>
                        <div id="des">
                            <img id="img1" src="../assets/ic-pickup-point.png" alt="">
                            <img id="panahbiru" src="../assets/ic-next-trip.png" alt="">
                            <img id="img2" src="../assets/ic-destination.png" alt="">
                            <h3 id="tulis5">Graha Elnusa</h3>
                            <h3 id="tulis6">Pickup Point</h3>
                            <h3 id="tulis3">Wisma Mulia</h3>
                            <h3 id="tulis4">Destination</h3>
                        </div>

                    </div>
            <div id="union">
                 <svg id =eclipse1 height="50" width="50">
                    <circle cx="25" cy="25" r="20"  fill="#146BB8" />
                </svg> 
                <div id="divided"></div>
                <svg id =eclipse2 height="50" width="50">
                    <circle cx="25" cy="25" r="20"  fill="#146BB8" />
                </svg> 
            </div>
            <div id="mbil">
                <img id="img7" src="../assets/tas.png" alt="">
            </div>
            <button id="accept" @click.prevent="onAcceptClick()">Check Out</button>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'confirmcheckin',
    methods: {
      onAcceptClick() {
          this.$router.push('/qr');
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
width: 287px;
text-decoration: none;
    border: none;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
position: absolute;
height: 36px;
left: 13px;
right: 40px;
bottom: 58px;

/* secondary/red 100 */
background: #D92534;
border-radius: 6px;
}
#img7{
    position: static;
width: 248px;
height: 193px;
left: 0px;
top: 0px;


/* Inside Auto Layout */
flex: none;
order: 0;
flex-grow: 0;
margin: 2px 0px;
}
#mbil{
    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;

position: absolute;
width: 248px;
height: 205px;
left: calc(50% - 248px/2);
bottom: 142px;
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
margin: 0px 132px;
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
margin: 0px 18px;
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
width: 278px;
height: 142px;
left: 2px;
top: 0px;
background: #FFFFFF;
border: 1.5px solid #E6E6E6;
box-sizing: border-box;
border-radius: 8px;
flex: none;
    flex-grow: 0;
order: 0;
flex-grow: 0;
margin: 188px 17px;
}
#img2{
        position: absolute;
width: 20px;
right: 25px;
top: 30.69%;
bottom: 65.67%;
}
#panahbiru{
    position: absolute;
width: 24px;
height: 24px;
left: calc(50% - 24px/2);
top: 226px;

/* semantic/dodger blue 60 */
background: #77BAF8;
border-radius: 100px;
}
#img1{
position: absolute;
width: 20px;
left: 27px;
top: 30.69%;
}
#tulis4{
    position: absolute;
width: 140px;
height: 16px;
right: 27px;
top: 281px;

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
right: 26px;
top: 261px;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 16px;
text-align: right;
color: #171717;
opacity: 0.8;
}
#tulis6{
        position: absolute;
    width: 140px;
    height: 16px;
    left: -6px;
    top: 281px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #747474;
    opacity: 0.8;
}
#tulis5{
        position: absolute;
    width: 140px;
    height: 16px;
    left: 0px;
    top: 261px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #171717;
    opacity: 0.8;
}
#atom{
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 8px;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;

/* identical to box height */
text-align: right;

/* neutral/white 100 */
color: #FFFFFF;
position: static;
width: 66px;
height: 16px;
left: 33.5px;
top: 79px;

/* semantic/gold 80 */
background: #4EC738;
border-radius: 10px;

/* Inside Auto Layout */
flex: none;
order: 1;
flex-grow: 0;
margin: 24px 0px;
}
#tulis2{
    position: static;
left: 0%;
right: 0%;
top: 65.45%;
bottom: 0%;

/* body/body 1 */
font-style: normal;
font-weight: normal;
font-size: 15px;
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
#tulis1{
    position: static;
width: 125px;
height: 28px;
left: 11.5px;
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
#id{
    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;

position: static;
width: 145px;
height: 55px;
left: calc(50% - 145px/2);
top: 0px;


/* Inside Auto Layout */
flex: none;
order: 0;
flex-grow: 0;
margin: 24px 0px;
}
#headline{
    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
position: absolute;
width: 139px;
height: 101px;
left: 84px;
top: 31px;
}
#divided{
position: absolute;
width: 232px;
height: 0px;
left: 34px;
top: 22px;
border: 1px dashed #8BC4F9;
}
#eclipse1{
    position: absolute;
    left: -26px;
}
#eclipse2{
    position: absolute;
    left: 277px;
}

#union{
position: absolute;
width: 307px;
height: 50px;
left: 4.92px;
top: 345.61px;

background:white;
}
#kertas{
position: relative;
width: 360px;
height: 800px;

/* primary/blue 100 */
background: #146BB8;
}
#container{
    position: absolute;
width: 312px;
height: 752px;
left: 24px;
top: 24px;

/* primary/white 100 */
background: #FFFFFF;

/* flat shadow */
box-shadow: 0px 0px 5px rgba(69, 93, 121, 0.15);
}
</style>