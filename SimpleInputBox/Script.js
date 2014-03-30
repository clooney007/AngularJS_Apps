function gameList($scope){
    $scope.games = [
        {name:"World of Warcraft",rate:5},
        {name:"Diablo 3", rate:3},
        {name:"Dota 2", rate:5},
        {name:"The Elder Scroll 5", rate:4},
        {name:"The Elder Scroll Online", rate:3},
        {name:"pvz", rate:3}
    ];

    //Add new game to $scope.games list
        $scope.AddGame = function () {
            //check if the game is already in the list
            var exist = false;

            for (var i = 0, len = $scope.games.length; i < len; i++) {
                if ($scope.gameName === $scope.games[i].name) {
                    exist = true;
                }
            }

            if (exist) {
                //alert if game exist
                alert("This game is already in the list!");
            } else {
                //add the game, if game is not exist
                $scope.games.unshift({ name: $scope.gameName, rate: 3 });
                $scope.gameName = "";
            }
        };
}