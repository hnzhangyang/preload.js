# preload
图片预加载组件
  依赖sea.js 当然你也可以单独提取出来 兼容IE7+

具备以下特性

 - 支持进度条，实时返回图片加载进度
 - 单个图片加载完成后回调
 - 全部图片加载完成后回调
 - 容错，某个图片地址错误不会影响preload的正常使用



##Examples

###imageLoad

```html
  //请先把所有图片地址构成一个对象
  <script>
    var imgUrlData={'img1.jpg','img2.jpg','img3.jpg'}
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
