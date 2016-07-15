
(function(angular){

    var app = angular.module('home_pageControllors',['ngRoute']);
    app.controllers('home_pageControllors',function(){
    	var mySwiper = new Swiper('.swiper-container',{
			effect : 'cube',
			cube: {
			slideShadows: true,
			shadow: true,
			shadowOffset: 100,
			shadowScale: 0.6
			}
			})
    })
})(angular)