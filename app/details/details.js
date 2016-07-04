/**
 * Created by Administrator on 2016/7/4.
 */
(function (angular) {
    var app = angular.module('moviecat.details',['ngRoute','moviecat.http-server']);
    // 2.����·�ɹ���
    app.config(['$routeProvider',function($routeProvider){
        // /details // �����һ��id��������ʾĳһ������ĵ�Ӱ
        $routeProvider.when('/details/:id',{
            templateUrl:'./details/view.html',
            controller:'detailsController'
        });
    }]);
    //����������
    app.controller('detailsController',[
        '$scope',
        '$routeParams',
        'MyService',
        function($scope,$routeParams,MyService){
           MyService.jsonp('http://api.douban.com/v2/movie/subject/'+$routeParams.id,{}, function (data) {
               $scope.data=data;
               $scope.$apply();//����֪ͨangular��ͬ�����ݵ�
           })
        }
    ])
})(angular)