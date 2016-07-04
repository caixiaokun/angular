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
    // 1.����ģ��
    var app = angular.module('moviecat.http-server',[]);

    // 2.��������
    app.service('MyService',['$window',function($window){
        this.jsonp=function(url,arg,fn) {
            // 1.�ϲ�������url��
            // start=2&count=5;

            var queryString = '';
            for(var key in arg){
                queryString+= key+'='+arg[key]+'&'
            }
            url = url+'?'+queryString;
            // ƴ��callback����
            // �����ǵ���������һ������,Ҫ�ǵð��������ĵ�ȥ��.
            var mycallbackName='jsonp_'+Math.random().toString().substr(2);
            // window.mycallback= fn;
            // �ڷ���ִ�к��Ƴ�script��ǩ
            $window[mycallbackName]= function(data){
                fn(data);
                $window.document.body.removeChild(scriptEle); // �����γ���һ���հ�
            }
            url=url+'callback='+mycallbackName;
            // 2.��̬�Ĵ���script��ǩ
            var scriptEle = $window.document.createElement('script');
            scriptEle.src=url;
            $window.document.body.appendChild(scriptEle);
        }
    }])

})(angular)
