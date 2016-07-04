/**
 * Created by Administrator on 2016/7/4.
 */
(function (angular) {
    var app = angular.module('moviecat.details',['ngRoute','moviecat.http-server']);
    // 2.配置路由规则
    app.config(['$routeProvider',function($routeProvider){
        // /details // 这里给一个id参数，表示某一个具体的电影
        $routeProvider.when('/details/:id',{
            templateUrl:'./details/view.html',
            controller:'detailsController'
        });
    }]);
    //创建控制器
    app.controller('detailsController',[
        '$scope',
        '$routeParams',
        'MyService',
        function($scope,$routeParams,MyService){
           MyService.jsonp('http://api.douban.com/v2/movie/subject/'+$routeParams.id,{}, function (data) {
               $scope.data=data;
               $scope.$apply();//用来通知angular来同步数据的
           })
        }
    ])
})(angular)