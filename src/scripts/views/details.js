var detailsTpl = require('../tpls/details.string');

//定义视图
SPA.defineView('details',{
  //装载模板
  html:detailsTpl,
  plugins: [{
    name: 'avalon',
    options: function (vm) {
    vm.detailslist ={};
    vm.xianshi=true;
    vm.yinc=false;
  }
  },'delegated'],
  bindEvents: {
    'show': function(){
	    var that = this;
	   	var vm = this.getVM();
   	$.ajax({
   		type:"get",
   		url:"/api/1-2.php",
   		//async : true,
   		success:function(res){
   			//console.log(res.result.list[that.param.index]);
				vm.detailslist = res.result.list[that.param.index];  
   		}
   	});
  // swiper
      var mySwiper = new Swiper('#home-swiper', {
        loop: false,
        //autoplay:300
//      onSlideChangeStart: function(swiper){
//        var index = swiper.activeIndex;
//        $('#home-nav li').eq(index).addClass('active').siblings().removeClass('active');
//      }
    });
    //console.log(this.widgets["dts-scroll"].y);
    var aa=this.widgets["dts-scroll"]
    aa.on("scroll",function(){
    	  console.log(that.widgets["dts-scroll"].y);
    	  var y=Math.abs(that.widgets["dts-scroll"].y);
    	  if(y>320){
//  	  	vm.xianshi=false;
//  			vm.yinc=true;
    			
    	  }
    })
    } 
  },
	bindActions: {
	'back': function () {
	      this.hide();
	    }
	}
 

})
