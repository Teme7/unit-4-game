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
        "assets/images/Amethystemadagascar2.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6wTKLqGlq2QtXM31-qn2f7EkMYrqRi0UrnjRetDyHX2zczkN4",
        // "assets/images/Q664-.jpg"
        "https://www.hamiltonjewelers.com/blog/wp-content/uploads/2011/10/Centenary-Diamond.jpg"
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
        $("#losses").html("Oops! You lost: " + losses);

        //clears tally after a loss
        oldValue = 0;

        //resets random number and hiddenValues of crystals
        startGame();

    } else if(oldValue === randomNum){
        // console.log("Lucky you!!")
        
        //increment win count
        wins++;

        //display the updated # of wins
        $("#wins").html("Lucky you!! You won: " + wins);

        //clears tally after winning
        oldValue = 0;
        
        $("#oldValue").html(oldValue);

        //resets random number and hiddenValues of crystals
        startGame();

    };

});



