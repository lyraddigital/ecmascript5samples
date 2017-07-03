var sequence = [3,6,1,9,5,4,8,7,2];
var names = ["Daryl", "Andrew", "Zac", "Michael", "Charlie", "John"];
var players = [
    { "playerId": 3, "name": "Daryl" },
    { "playerId": 6, "name": "Andrew" },
    { "playerId": 1, "name": "Zac" },
    { "playerId": 5, "name": "Michael" },
    { "playerId": 4, "name": "Charlie" },
    { "playerId": 2, "name": "John" }
];

function sortByPlayerId(prevPlayer, currentPlayer) {
    /*
        Positive number if playerId of the previous player is greater than the current player - previous player moved right
        0 if playerId of the previous player is equal to that of the current player - do nothing different
        Negative number if playerId of the previous player is less than the current player - previous player moved left
    */
    return prevPlayer.playerId - currentPlayer.playerId;
}

function sortByNameDescending(prevPlayer, currentPlayer) {
    var prevPlayerNameLowerCase = prevPlayer.name.toLowerCase();
    var currentPlayerNameLowerCase = currentPlayer.name.toLowerCase();

    if (prevPlayerNameLowerCase > currentPlayerNameLowerCase) {
        return -1;
    }
    else if (prevPlayerNameLowerCase < currentPlayerNameLowerCase) {
        return 1;
    }
    else {
        return 0;
    }
}

sequence.sort();
names.sort();
players.sort(sortByNameDescending);

console.log(sequence);
console.log(names);
console.log(players);