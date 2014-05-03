/**
 * Created by mgiam_000 on 5/3/14.
 */
var $pathToData = 'json/example.json'; //EXAMPLE JSON FILE. TO BE CHANGED WITH ACTUAL JSON FEED
var newsCorpAppModule1 = angular.module('newsCorpApp', []);

newsCorpAppModule1.controller('module1', ['$scope', '$http', function(scope, http){
    scope.data = {
        articles : {}
    };
    scope.getData = function(){
        //var articles = scope.data.articles;
        http
            .get($pathToData)
            .success(function(data){
                scope.data.articles = data
            })
    }
}]);