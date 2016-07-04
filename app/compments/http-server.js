/**
 * Created by Administrator on 2016/7/4.
 */
/*
 * @Author: huoqishi
 * @Date:   2016-07-04 11:20:19
 * @Last Modified by:   huoqishi
 * @Last Modified time: 2016-07-04 11:27:43
 */

(function(angular){
    'use strict';
    // 1.创建模块
    var app = angular.module('moviecat.http-server',[]);

    // 2.创建服务
    app.service('MyService',['$window',function($window){
        this.jsonp=function(url,arg,fn) {
            // 1.合并参数到url中
            // start=2&count=5;

            var queryString = '';
            for(var key in arg){
                queryString+= key+'='+arg[key]+'&'
            }
            url = url+'?'+queryString;
            // 拼接callback参数
            // 给我们的逆名函数一个名字,要记得把随机数里的点去掉.
            var mycallbackName='jsonp_'+Math.random().toString().substr(2);
            // window.mycallback= fn;
            // 在方法执行后移除script标签
            $window[mycallbackName]= function(data){
                fn(data);
                $window.document.body.removeChild(scriptEle); // 这里形成了一个闭包
            }
            url=url+'callback='+mycallbackName;
            // 2.动态的创建script标签
            var scriptEle = $window.document.createElement('script');
            scriptEle.src=url;
            $window.document.body.appendChild(scriptEle);
        }
    }])

})(angular)
