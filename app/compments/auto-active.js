/**
 * Created by Administrator on 2016/7/5.
 */
(function (angular) {
    var app = angular.module('moviecat.auto-active', []);
    //app.directive('autoActive',['$location', function ($loaction) {
    app.directive('autoActive', ['$location',function($location) {
        return{
            link: function(scope, element, attributes) {
                // element是自定义指令所在标签的jqLite对象。
                // attributes,是自定义指令所在标签的所有属性的集合，是个object对象.
                scope.location = $location;
                scope.$watch('location.url()', function (newValue,oldValue) {
                    var hash = element.children()[0].href.split('#')[1];
                    console.log(hash);
                    //startsWith判断一个字符是否是以另一个字符开头
                    if(newValue.startsWith(hash)){
                        element.parent().children().removeClass('active');
                        element.addClass('active');
                    }
                })
            }
        }
    }])
})(angular)