$(document).ready(function () {
    var currentTotal, numToMatch;
    var wins = 0;
    var losses = 0;

    resetGame();

    $(".crystals").on("click", function () {
        currentTotal += parseInt($(this).val());
        $("#currentTotal").html(currentTotal);

        if (currentTotal === numToMatch) {
            alert("You Win!");
            wins++;
            resetGame();
        }

        if (currentTotal > numToMatch) {
            alert("You Lose!");
            losses++;
            resetGame();
        }

        });

        if (currentTotal === numToMatch) {
        alert("You Win!");
        wins++;
        resetGame();
        }

        if (currentTotal > numToMatch) {
        alert("You Lose!");
        losses++;
        resetGame();
        }

    function resetGame() {
        currentTotal = 0;
        numToMatch = Math.floor(Math.random() * 120) + 19;
        $("#blueCrystal").val(Math.floor(Math.random() * 12) + 1);
        $("#greenCrystal").val(Math.floor(Math.random() * 12) + 1);
        $("#purpleCrystal").val(Math.floor(Math.random() * 12) + 1);
        $("#redCrystal").val(Math.floor(Math.random() * 12) + 1);
        $("#numToMatch").html(numToMatch);
        $("#currentTotal").html(currentTotal);
        $("#wins").html(wins);
        $("#losses").html(losses);
        }

});