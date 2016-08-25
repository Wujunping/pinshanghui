var detailTpl = require('../tpls/detail.string');

//定义视图
SPA.defineView('detail',{
  //装载模板
  html:detailTpl,
  plugins: [{
    name: 'avalon',
    options: function (vm) {
    vm.goodslist = [];
  }
  },'delegated'],
    bindEvents: {
    'show': function(){
    var that = this;
   	var vm = this.getVM();
   	var id=that.param.id;
   		if(id==20||id==34||id==39){
   			id=66
   		}if(id==="217-1"||id==="217-2"||id==="217-3"||id==="217-4"||id==="217-6"){
   			console.log(11);
   			id=10;
   		}
   
   	$.ajax({
   		type:"get",
   		url:"/api/"+id+".php",
// 		data: {
//        id: that.param.id
//      },
   		success:function(res){
					vm.goodslist = res.result.list;
			
 	       
   		}
   	});
   	console.log(this.widgets.myScroll);
    scroll({
    scroll: this.widgets.myScroll,
    vm: vm
<<<<<<< HEAD
    })

    }
  }
})
=======
    }); 
    } 
  },
   // 绑定tap事件
  bindActions: {
       // 绑定tap
    'goto.details': function (el, data) {
    	console.log($(el.el).index());
      SPA.open('details', {
	      param: {
	        //id: data.id,
	        index:$(el.el).index()
	       
	      }
      });
    },
    "back":function(){
    	this.hide();
    }
    }
})
>>>>>>> peng
