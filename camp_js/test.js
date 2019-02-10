// //console.log("はじめてのジャバスクリプト");
// //console.log(23+5);
// //console.log(2000-1800);
// //console.log("18+5");

// var name="白山　冬輝";
// console.log(name);
// console.log("白山冬輝");


// var point=90;
// if(point>=80){
//    console.log("素晴らしい！おめでとう！")
// }else{
//     console.log("もっと頑張りましょう")
// };

// var number = Math.floor(Math.random()*5);
// if(number==0){
//     console.log("１です")
// }else if(number==1){
//     console.log("2です")
// }else if(number==2){
//     console.log("3です")
// }else if(number==3){
//     console.log("４です")
// }else{
//     console.log("５です")
// };

// console.log(number);


// $(document).ready(function(){
//     // $("#test").on("click",function() {
//     // $('#test').html('あああああ');
//     // $('#test').css('color','red');
//     setInterval
    
//     $('#test').fadeOut(2000);
//     $('#test').fadeIn(2000);
// });


$(document).ready(function(){
    $("#hide").on("click",function(){
        $("#ex").fadeOut(2000)
    })
});

$(document).ready(function(){
    $("#show").on("click",function(){
        $("#ex").fadeOut(2000)
        $("#ex").fadeIn(2000)
    })
});

