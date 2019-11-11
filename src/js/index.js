
let option = {
widthStart : 9.4,
widthEnd : 0.8,
colorStart : Flw.Color.createWithHex( '#153906' ),
colorEnd : Flw.Color.createWithHex( '#52910b' ),
maxDeepness : 3,
maxDeepnessVar : 2,
maxDeepnessTwisted : 5,
maxDeepnessTwistedVar : 0,
maxDeepnessMajor : 2,
maxDeepnessMajorVar : 2,
maxDeepnessMaster : 5,
maxDeepnessMasterVar : 4,
headSize : 117,
headSizeVar : 37.5,
leafSize : 30,
leafSizeVar : 10,
headColor : Flw.Color.createWithHex( '#2f090d' ),
headColorTintVar : 28.3,
headColorValueVar : 0.168,
headColorSatVar : 0.11,
leafColor : Flw.Color.createWithHex( '#246410' ),
leafColorTintVar : 24.200000000000003,
leafColorValueVar : 0.2,
leafColorSatVar : 0.2,
radius : 70,
radiusVar : 70,
globalDirection : 1.5707963267948966,
growVelocity : 0.195,
strokeBranchWidth : 0,
strokeBranchColor : '#5c5c5c',
strokeLeafWidth : 0.1,
strokeLeafColor : '#161616',
strokeHeadWidth : 0.2,
strokeHeadColor : '#1b1b1b',
}



var container = document.getElementById('container');

var flower = Flw.ControledFlower.create( container, option  );


var deltaProgress = 100;
var maxProgress = 1000;

var btn = document.getElementById('btn');
var popup = document.getElementById('container_popup');
var span = document.getElementById('container_popup_value');
let anime = false;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function add(value){
    while(anime){
        await sleep(200);
    }


    anime= true;
    popup.style.top =  95+"%";
    popup.style.opacity= 1;
    
    span.textContent=value;

    flower.tick( deltaProgress / maxProgress );
    setTimeout(function(){
        popup.style.opacity= 0;

        setTimeout(function(){
            popup.style.top =0;
            anime = false;
        },1200);
    },1200);

}


var mqtt = require('mqtt')
var client  = mqtt.connect({
  clientId: 'web-client',
  host: '192.168.0.43',
  port: 9001,
})

client.on('connect', function () {
  client.subscribe('test', function (err) {
    if (!err) {
      client.publish('test', 'Hello mqtt')
    }
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})
btn.addEventListener('click', function(){
    add(deltaProgress);
})
