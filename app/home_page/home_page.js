/**
 * Created by Administrator on 2016/7/4.
 */
(function(angular){
    // 1.������ҳ��ģ��
    var app = angular.module('moviecat.home_page',['ngRoute']);

    // 2.����һ��·�ɹ���
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/home_page',{
            templateUrl:'./home_page/view.html'
        })
    }])
})(angular)