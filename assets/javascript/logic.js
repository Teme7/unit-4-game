//global vars
var randomNum;
var wins = 0;
var losses = 0;
// var oldValue = 0;

randomNum = Math.floor(Math.random() * 100) + 19;
// console.log(randomNum);

$("#tally").html('randomNum: ' + randomNum);
for(var i = 0; i < 4; i++){

    var value = Math.floor(Math.random() * 10) + 1;
    // console.log(value);

    var rock = $("<div>");
        rock.attr({
            "class": 'rock',
            "data-random": value
        });

    $(".crystals").append(rock);

}

$(".rock").on('click', function() {
    console.log($(this));
});



