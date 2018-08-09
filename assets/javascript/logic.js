//global vars
var randomNum;
var wins = 0;
var losses = 0;
var oldValue = 0;

var startGame = function (){

    //clears crystals upon restarting a game
    $(".crystals").empty();

    var preciousRocks = [
        "assets/images/Precious.jpg",
        "assets/images/Q664-.jpg",
        "assets/images/treasure1.jpg",
        "assets/images/centenary-diamond1.jpg",
    ];

    //computer generates an arbitrary target number at start of game
    randomNum = Math.floor(Math.random() * 100) + 19;

    // console.log(randomNum);

    $("#targetNum").html(randomNum);

    for(var i = 0; i < 4; i++){

        //random num generation for crystals
        var hiddenValue = Math.floor(Math.random() * 10) + 1;
        // console.log(hiddenValue);

        var rock = $("<div>");
            rock.attr({
                "class": 'rock',
                "data-secret": hiddenValue
            });

            rock.css({
                "background-image":"url('" + preciousRocks[i] + "')",
                "background-size":"cover"
            });

        $(".crystals").append(rock);

    }

    $("#oldValue").html("Player Score: " + oldValue);


};

startGame();

$(document).on('click', ".rock", function() {

    // parsing num into integer
    var num = parseInt($(this).attr('data-secret'));

    // console.log(typeof num);

    // tallying the hidden value of crystal clicked to players' current amount
    oldValue += num;

    $("#oldValue").html("Player Score: " + oldValue);

    console.log(oldValue);
    // conditional logic checking on player's success
    if(oldValue > randomNum){
        // console.log("Oops! Try again...");

        //increment the loss count
        losses++;

        //diplay the updated loss column
        $("#losses").html("Losses: " + losses);

        //clears tally after a loss
        oldValue = 0;

        //resets random number and hiddenValues of crystals
        startGame();

    } else if(oldValue === randomNum){
        // console.log("Lucky you!!")
        
        //increment win count
        wins++;

        //display the updated # of wins
        $("#wins").html("Wins: " + wins);

        //clears tally after winning
        oldValue = 0;
        
        $("#oldValue").html(oldValue);

        //resets random number and hiddenValues of crystals
        startGame();

    };

});



