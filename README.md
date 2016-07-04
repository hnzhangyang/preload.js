# preload
图片预加载组件
  依赖sea.js 当然你也可以单独提取出来 兼容IE7+

具备以下特性

 - 支持进度条，实时返回图片加载进度
 - 单个图片加载完成后回调
 - 全部图片加载完成后回调
 - 容错，某个图片地址错误不会影响preload的正常使用



##Examples

```html
  //请先把所有图片地址构成一个对象
  <script>
    var imgUrlData={'img1.jpg','img2.jpg','img3.jpg'}
  //组件依赖sea.js
    seajs.use('preload',function(preLoader){
	    var fn = new preLoader({
		    data:data,
		    start:function(){
			    console.log('start');
		    },
		    callback:function(i,total){
			    console.log('i:'+i+'  total:'+total);
		    },
		    complete:function(){
			    console.log('complete');
		    }
	    })
		  fn.begin();
    });
  </script>
```
##主要参数
```html
  //设置属性
	setOption:function(options){
        this.options={
            data : [], 	     //用于存放资源地址的数组
            baseUrl:'./js/', //基准URL，如果资源地址不是以HTTP,HTTPS开头 则在资源地址前面加上该基准URL
            start:null,      //预加载开始时调用的函数
			callback:null,   //每次预加载成功调用的回调函数，该函数有两个参数，第一个参数index是该资源的索引，第二个参数total是资源总数
			complete:null 	 //资源全部预加载完成时调用的函数
        }
        Extend(this.options, options || {});
    }
```
##Notes
-不需要sea.js的直接把preLoader对象提取出来即可
