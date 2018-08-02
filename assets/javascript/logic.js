//global vars
var randomNum;
var wins = 0;
var losses = 0;
var oldValue = 0;

var startGame = function (){
    randomNum = Math.floor(Math.random() * 100) + 19;
    // console.log(randomNum);

    $("#tally").html('randomNum: ' + randomNum);
    for(var i = 0; i < 4; i++){

        var hiddenValue = Math.floor(Math.random() * 10) + 1;
        // console.log(hiddenValue);

        var rock = $("<div>");
            rock.attr({
                "class": 'rock',
                "data-secret": hiddenValue
            });

        $(".crystals").append(rock);

    }

};


$(".rock").on('click', function() {

    // parsing num into integer
    var num = parseInt($(this).attr('data-secret'));

    // console.log(typeof num);

    // tallying the hidden value of crystal clicked to players' current amount
    oldValue += num;

    console.log(oldValue);
    // conditional logic checking on player's success
    if(oldValue > randomNum){
        // console.log("Oops! Try again...");

        //increment the loss count
        losses++;

        //diplay the updated loss column
        $("#losses").html(losses);

    } else if(oldValue === randomNum){
        // console.log("Lucky you!!")
        
        //increment win count
        wins++;

        //display the updated # of wins
        $("#wins").html(wins);
    };

});



