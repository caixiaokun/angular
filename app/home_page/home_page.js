/**
 * Created by Administrator on 2016/7/4.
 */
(function(angular){
    // 1.创建首页的模块
    var app = angular.module('moviecat.home_page',['ngRoute']);

    // 2.给定一个路由规则
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/home_page',{
            templateUrl:'./home_page/view.html'
        })
    }])
})(angular)