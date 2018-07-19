var randomNum;
var lose;
var win;

//random number generator
randomNum = Math.floor(Math.random() * 101) + 19;

for(var i=0; i<4; i++){
    //random number generation
    var random = Math.floor(Math.random() * 11) + 1;
    // console.log(random);

    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal',
        "arbitrary": random
    })

    $(".crystals").append(crystal);
}

$(".crystal").on('click', function(){
    // console.log($(this));

    //to add the value of crystal to previous tally

    var num = parseInt($(this).attr('arbitrary'));
});