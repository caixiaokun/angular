(function (angular) {
    "use strict";

    // start your ride
    // 在这里我们开始创建主模块
    var app = angular.module('moviecat',[
        // 在主模块中引用的时候，路由规则是先引用，先匹配
        'moviecat.us_box',
        'moviecat.home_page',   // /home_page
        'moviecat.details',   // /deatails/:id
        'moviecat.movie_list',   // /:movieType/:page
        'moviecat.auto-active' //
    ]);
     app.config(['$routeProvider', function ($routeProvider) {
         $routeProvider.otherwise({
             redirectTo:'/home_page'
         })
    }])
    //创建控制
    app.controller('mainController',['$scope','$location',function($scope,$location){
        $scope.query='';
        $scope.search=function(){
            ///v2/movie/search   //?q={text}
            //http://api.douban.com/v2/movie/top250
            /// $scope.query;
            // 传入一个字符串参数，就是用来改变页面的锚点值。
            $location.url('/search?q='+$scope.query);//movie_list里的 $location会检测url变化来触发不同的指令
        }
    }])

})(angular);