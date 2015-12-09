app.controller("FlashCardController", function($scope) {
    $scope.answerQuestion=function(answer){
    	$scope.answered = true;
    	if(answer.correct){
    		$scope.answeredCorrectly = true;
    	}else{
    		$scope.answeredCorrectly = false;
    	}
    	console.log($scope.answeredCorrectly)
    };

})
