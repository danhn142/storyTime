myApp.controller('storyController', ['$scope', '$location', '$cookies', 'SnippetFactory', '$routeParams', function($scope, $location, $cookies, SnippetFactory, $routeParams){
	$scope.userObj = $cookies.getObject('auth');
	console.log('I am able to load my storyController along with story.html partial');
	var storId = $routeParams.id;
	console.log('this is storId', storId);

	SnippetFactory.getStory(storId, function(data){
		console.log('story controller to get new story', data);
		$scope.story = data;
	})

	SnippetFactory.getSnippets(function(data){
		console.log('all snippets', data)
		$scope.snippets = data;
	})

  $scope.addSnippet = function(){
    console.log('client side story controller create snippet', $scope.snippet);
	$scope.snippet._users = $cookies.getObject('auth')._id;
	console.log('printing cookies id', $scope.snippet._users);
	$scope.snippet._stories = $routeParams.id;
	console.log('printing params id',$routeParams.id);
	console.log('this is the whole snippet', $scope.snippet)

    SnippetFactory.createSnippet($scope.snippet, function(data){
  		$scope.snippet = {};
  		$scope.snippets = data;
  	})

  }
}])
