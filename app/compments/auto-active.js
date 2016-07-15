/**
 * Created by Administrator on 2016/7/5.
 */
(function (angular) {
    var app = angular.module('moviecat.auto-active', []);
    //app.directive('autoActive',['$location', function ($loaction) {
    app.directive('autoActive', ['$location',function($location) {
        return{
            link: function(scope, element, attributes) {
                // element���Զ���ָ�����ڱ�ǩ��jqLite����
                // attributes,���Զ���ָ�����ڱ�ǩ���������Եļ��ϣ��Ǹ�object����.
                scope.location = $location;
                scope.$watch('location.url()', function (newValue,oldValue) {
                    var hash = element.children()[0].href.split('#')[1];
                    console.log(hash);
                    //startsWith�ж�һ���ַ��Ƿ�������һ���ַ���ͷ
                    if(newValue.startsWith(hash)){
                        element.parent().children().removeClass('active');
                        element.addClass('active');
                    }
                })
            }
        }
    }])
})(angular)