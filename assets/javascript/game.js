//global vars
var randomNum;
var wins = 0;
var losses = 0;
var oldValue = 0;

var restart = function() {
    $(".crystals").empty();

    //crystal images
}

//random number generator---since both max and min are included, ((max-min) + 1) + min is used here
randomNum = Math.floor(Math.random() * 102) + 19;

for(var i = 0; i < 4; i++){
    //random number generation
    // var random = Math.floor(Math.random() * 12) + 1;
    // console.log(random);

    var rock = $("<div>");
        rock.attr("class", 'rock');
    //     rock.attr({
    //     // "class": "rock",
    //     // "arbitrary": random
    // })

    $(".crystals").append(rock);
};

$(".rock").on('click', function(){
    // console.log($(this));

    //value of each crystal
    var value = parseInt($(this).attr('arbitrary'));

    //to add the value of crystal to previous tally
    oldValue += value;

    if(oldValue === randomNum){
        // console.log("Congrats on winning the bet!!");
        wins++;

        $("success").html("wins");
    } else if (oldValue > randomNum) {
        // console.log("Oops, you guessed wrong!");
        losses++;
        $("failure").html("losses");
    };

});