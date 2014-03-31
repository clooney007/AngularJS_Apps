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
            var add = true;
            var error = "";

            //check if the input is empty
            if ($scope.gameName == null) {
                add = false;
                error = "Enter a game name!";
            }

            //check if the game is already in the list
            for (var i = 0, len = $scope.games.length; i < len; i++) {
                if ($scope.gameName === $scope.games[i].name) {
                    add = false;
                    error = "This game is already in the list!";
                }
            }

            if (add) {
                //add the game, if game is not exist
                $scope.games.unshift({ name: $scope.gameName, rate: 3 });
                $scope.gameName = "";
            } else {
                //alert error
                alert(error);
            }
        };
}