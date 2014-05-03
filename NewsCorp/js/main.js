/**
 * Created by mgiam_000 on 5/3/14.
 */
var $pathToData = 'json/example.json'; //EXAMPLE JSON FILE. TO BE CHANGED WITH ACTUAL JSON FEED
var newsCorpApp = angular.module('newsCorpApp', []);

newsCorpApp
    .controller('module', ['$scope', '$http', function(scope, http){
        scope.news = {};
        scope.blogs = {};
        scope.getData = function(){
            http
                .get($pathToData)
                .success(function(data){
                    scope.news = data.news;
                    scope.blogs = data.blogs;
                })
        }
        scope.getData();
    }])
    .directive('module', function() {
        return {
            restrict: 'E',
            scope: {
                moduleTitle : '@title',
                dataType: '=type',
                count : '@count'
            },
            templateUrl: 'template/template.html'
        }
    }
);