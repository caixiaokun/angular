/**
 * Created by Administrator on 2016/7/4.
 */
(function(angular){
    // 1.´´½¨Ê×Ò³µÄÄ£¿é
    var app = angular.module('moviecat.home_page',['ngRoute']);

    // 2.¸ø¶¨Ò»¸öÂ·ÓÉ¹æÔò
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/home_page',{
            templateUrl:'./home_page/view.html',
            // controller:'home_pageController'
        })
    }])
 //      app.controller('home_pageController',[
 //       	var mySwiper = new Swiper('#SW-c',{
	// 	autoplay : 2000,
	// 	initialSlide :2,
	// })
 //    ])
})(angular)