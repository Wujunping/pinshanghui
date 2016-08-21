var detailTpl = require('../tpls/detail.string');
var scroll = require('../utils/scroll.js');
//定义视图
SPA.defineView('detail',{
  //装载模板
  html:detailTpl,
  plugins: [{
    name: 'avalon',
    options: function (vm) {
    vm.livelist = [];
  }
  }],
    bindEvents: {
    'show': function(){
   	var vm = this.getVM();
   	console.log(this);
   	console.log(this.widgets);
    scroll({
    scroll: this.widgets.myScroll,
    vm: vm
    })
    
    }
  }
})