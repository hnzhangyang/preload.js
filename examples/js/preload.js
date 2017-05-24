

define(function (require, exports, module) {

//定义工具函数
var Class = {
    create: function () {
        return function () {
            this.init.apply(this,arguments);
        }
    }
}
var Extend = function(destination, source) {
	for (var property in source) {
		destination[property] = source[property];
	}
}

var preLoader=Class.create();

preLoader.prototype={
	
	//初始化属性
	init:function(options){
		this.setOption(options);
		this.data = this.options.data;
		this.start = this.options.start;
		this.baseUrl = this.options.baseUrl;
		this.callback = this.options.callback;
		this.complete = this.options.complete;
	},
	
	//设置属性
	setOption:function(options){
        this.options={
            data : [], 	     //用于存放资源地址的数组
            baseUrl:'', //基准URL，如果资源地址不是以HTTP,HTTPS开头 则在资源地址前面加上该基准URL
            start:null,      //预加载开始时调用的函数
			callback:null,   //每次预加载成功调用的回调函数，该函数有两个参数，第一个参数index是该资源的索引，第二个参数total是资源总数
			complete:null 	 //资源全部预加载完成时调用的函数
        }
        Extend(this.options, options || {});
    },
    
    //开始
    begin:function(){
    	var that=this,
    		total=this.data.length,
    		index=1;
    	this.start&&this.start();
    	for(var i=0;i<this.data.length;i++){
    		var img=new Image();
	    	img.onload=function(){
	    		that.callback&&that.callback(index,total);
	    		index===total&&that.complete&&that.complete();
	    		index++;
	    	};
	    	img.onerror=function(){
	    		that.callback&&that.callback(index,total);
	    		index===total&&that.complete&&that.complete();
	    		index++;
	    	};
	    	this.data[i].indexOf('https://')!==0&&this.data[i].indexOf('http://')!==0?this.data[i]=this.baseUrl+this.data[i]:this.data[i];
	    	img.src=this.data[i];
    	}
    }
    
}

return preLoader;

})