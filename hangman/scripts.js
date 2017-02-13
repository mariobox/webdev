var myWord;
var theHint;
var yourChances;
var i = 0;
var j = 0;
var n = 0;
var p = 0;
var letterGuess;
var wordArray = [];
var temp = "";

function myFunction() {
    myWord = prompt('Give me a word:');
    myWord = myWord.toUpperCase();
    yourChances = prompt('How many chances are you going to give your opponent?');
    theHint = prompt('Give me a hint:');
    yourChances = Number(yourChances);
    wordLength = Number(myWord.length);
    wordArray = myWord.split("");

    // Build the word grid

    $('#myWord').html('<h2>And the word is...</h2>');
    $('#theHint').html('<p>The hint is: ' + theHint + '</p>');
    $('#startButton').css('display', 'none');
    $('.abecedario').css('display', 'inline-block');

    for (i = 0; i < wordLength; i++) {
        $('#myWord').append('<div class="eachLetter"></div>');
        $('.eachLetter').attr('id', function (i) {
            return i;
        });

    }

    // Build life counter

    $('#yourChances').html('<h2>Lives Remaining: <span style="color:red">' + yourChances + '</span></h2>');
    $('#remainingLetters').html('<h2>Remaining Letters</h2>');
    $('#remainingLetters').css('display', 'block');


    $('.abecedario').on('click', function () {
        n = 0;
        temp = $(this).text();
        $(this).css("display", "none");

        for (j = 0; j < myWord.length; j++) {
            if (wordArray[j] == temp) {
                $('#' + j).text(temp);
                n = 1;
                p += 1;
                if (p == myWord.length) {
                    $('#yourChances').html('<h1 style="color:green">YOU WON!</h1>');
                    $('#remainingLetters').css('display', 'none');
                    $('.abecedario').css('display', 'none');
                    $('#theHint').css('display', 'none');
                    $('#playAgain').css('display', 'inline-block');

                }
            }

        }
        if (n == 0) {
            yourChances -= 1;
            $('#yourChances').html('<h2>Lives Remaining: <span style="color:red">' + yourChances + '</span></h2>');
            if (yourChances == 0) {
                $('#yourChances').html('<h1 style="color:red">GAME OVER!</h1>');
                $('#remainingLetters').css('display', 'none');
                $('.abecedario').css('display', 'none');
                $('#theHint').css('display', 'none');
                $('#sorry').text('Sorry, the word was ' + myWord);
                $('#playAgain').css('display', 'inline-block');
            }
        }

    });

}
