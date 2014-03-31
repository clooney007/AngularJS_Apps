function Ctrl($scope) {
$scope.items = ['settings', 'home', 'other'];
$scope.selection = $scope.items[0];
}


function switchCtr($scope){
	$scope.levels = ["admin", "member", "visitor"];
	$scope.selection = $scope.levels[1];
}
