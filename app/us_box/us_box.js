/*
* @Author: huoqishi
* @Date:   2016-07-02 17:00:17
* @Last Modified by:   huoqishi
* @Last Modified time: 2016-07-02 17:15:11
*/

(function(angular){
    // 1.创建正在热映模块
    var app  = angular.module('moviecat.us_box',['ngRoute','moviecat.http-server']);
    // 2.配置路由，在各自的模块中配置路由，最后中主模块中引用，我们自己管理自己的路由规则
    app.config(['$routeProvider',function($routeProvider){
      // 写具体的规则
      $routeProvider.when('/us_box:page?',{
        // 指定一个模板路径,注意，模板字符串文件的路径是主模块所在目录开始计算.是相对于主模块文件所在路径计算的.
        templateUrl:'./us_box/view.html',
        controller:'us_boxController'
      })
    }])
    // 3.创建控制器
    app.controller('us_boxController',[
      '$scope',
      '$http',
      '$routeParams',
      '$route',// 这个服务是用来改变url中锚点值的参数s
      'MyService',
      function($scope,$http,$routeParams,$route,MyService){
      $scope.loading =true;
        var count=10;
        var page=($routeParams.page||'1')-0;
        $scope.nowPage=page;
        var start=(page-1)*count;
        MyService.jsonp('http://api.douban.com/v2/movie/us_box',
             {start:start,count:count},function(data){
              $scope.data=data;
                console.log(data)
                //console.log(data.subjects.length)
              // 告诉angular,数据模型已经发生改变，需要你去同步一下，紧接着给$scope赋值的语句后面
              $scope.loading=false;
              totalPage= Math.ceil(data.subjects.length/count);
              $scope.total=data.subjects.length;//总条数
              $scope.totalPage=totalPage;// 总页数
              $scope.$apply();
            });
        $scope.goPage=function(nowPage){
          // 这里做一些过滤，不允许请求小于等于0的页面，也不允许请求大于最大页数的页码
          if(nowPage<=0||nowPage>totalPage){
            return;
          }
          $route.updateParams({page:nowPage})
        }
    }])
})(angular)