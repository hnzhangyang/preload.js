# preload
图片预加载组件
- 依赖sea.js 当然你也可以单独提取出来 
- 兼容IE7+ 以及主流浏览器

具备以下特性
 - 支持进度条，实时返回图片加载进度
 - 单个图片加载完成后回调
 - 全部图片加载完成后回调
 - 容错，某个图片地址错误不会影响 preload 的正常使用

## 目录
- [usage](#usage)
- [param](#param)
  * [data](#data)
  * [baseUrl](#baseUrl)
  * [start](#start)
  * [begin](#begin)
  * [callback](#callback)
  * [complete](#complete)
- [Notes](#Notes)
## usage

```html
  <script>
  // preload 接受一个需要被预加载的图片数组
    var imgUrlArr = ['img1.jpg','img2.jpg','img3.jpg'];

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
## param
### data
必填，用于存放资源地址的数组
### baseUrl
基准URL，如果资源地址不是以HTTP,HTTPS开头 则在资源地址前面加上该基准URL,默认值 ''
### start
预加载启动时的钩子函数
### begin
调用 begin 启动预加载
### callback
每次预加载成功调用的回调函数，该函数有两个参数，第一个参数index 是该资源的索引，第二个参数 total 是资源总数
### complete
资源全部预加载完成时的钩子函数

## Notes
 - 不需要sea.js的直接把preLoader对象提取出来即可
