/*
 * @Author: huoqishi
 * @Date:   2016-07-02 17:00:17
 * @Last Modified by:   huoqishi
 * @Last Modified time: 2016-07-04 16:13:16
 */

(function(angular){
    // 1.创建正在热映模块
    var app  = angular.module('moviecat.movie_list',['ngRoute','moviecat.http-server']);

    // 2.配置路由，在各自的模块中配置路由，最后中主模块中引用，我们自己管理自己的路由规则
    app.config(['$routeProvider',function($routeProvider){
        // 写具体的规则
        // 我们需要使用路由参数来动态年 匹配页码,加上问题，匹配不写页码的情况
        // 这里可以使用多个路由参数.
        // 规则 ，先写先匹配
        $routeProvider.when('/:movieType/:page?',{
            // 指定一个模板路径,注意，模板字符串文件的路径是主模块所在目录开始计算.是相对于主模块文件所在路径计算的.
            templateUrl:'./movie_list/view.html',
            controller:'movie_listController'
        })
    }])
    // 3.创建控制器
    app.controller('movie_listController',[
        '$scope',
        '$http',
        '$routeParams',
        '$route',// 这个服务是用来改变url中锚点值的参数s
        'MyService',
        function($scope,$http,$routeParams,$route,MyService){
            console.log($routeParams);
            $scope.loading=true;
            var count = 10;// 表示每请求多少条数据
            var page = ($routeParams.page||'1') -0;
            $scope.nowPage=page;
            var start = (page-1)*count;// 这个表示从第几条数据开始请求
            var totalPage= 0;
            // 需要动态改变的是这个url,最后一部分
            var url ='http://api.douban.com/v2/movie/'+$routeParams.movieType+'?q='+$routeParams.q;
            MyService.jsonp(url,
                {start:start,count:count},function(data){
                    $scope.data=data;
                    console.log(data);
                    // 告诉angular,数据模型已经发生改变，需要你去同步一下，紧接着给$scope赋值的语句后面
                    $scope.loading=false;
                    totalPage= Math.ceil($scope.data.total/count);
                    $scope.total=$scope.data.total;//总条数
                    $scope.totalPage=totalPage;// 总页数
                    $scope.$apply();

                });

            // 这里是实现点按钮分页的代码
            $scope.goPage=function(nowPage){
                // 这里做一些过滤，不允许请求小于等于0的页面，也不允许请求大于最大页数的页码
                if(nowPage<=0||nowPage>totalPage){
                    return;
                }
                // 这个updateParams方法是用来更新url中锚点值里的参数,这个就会重新再匹配规则，不需要再在这里发jsonp请求了。
                // var nextPage = page+1;
                // 要求传入一个对象
                $route.updateParams({page:nowPage})
            }
        }])
})(angular);