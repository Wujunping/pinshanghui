// var categotyTpl = require('../tpls/categoty.string');
//
// //定义视图
// SPA.defineView('categoty',{
//   //装载模板
//   html:categotyTpl
//
// })
var indexSearch = require('../tpls/category.string');

SPA.defineView('category', {
  html: indexSearch,
  // 定义插件
  	plugins: [{
    name: 'avalon',
    options: function (vm) {
      vm.livelist = [];
      vm.livelist1 = [];
      vm.livelist2= [];
      vm.livelist3 = [];
      vm.livelist4 = [];
    }
  },
  //点击事件的插件
    'delegated'],

  // 绑定视图事件
  bindEvents: {
    'show': function () {
      // 获得vm
      var vm = this.getVM();
      // ajax拉取数据
      $.ajax({
        url: '/api/yijian.php',
        type: 'get',
        data: {
          type: 'more',
          pageNo: 3
        },
        success: function (res) {
          //console.log(res.result.list[0].cat_list);
          //返回商品数据
          vm.livelist = res.result.list[0].cat_list;
          vm.livelist1 = res.result.list[1].cat_list;
          vm.livelist2 = res.result.list[2].cat_list;
          vm.livelist3 = res.result.list[3].cat_list;
          vm.livelist4 = res.result.list[4].cat_list;
        }
      });
		}
  },
    // 绑定tap事件
  bindActions: {
    'switch': function (el) {
    	console.log($(el.el));
      console.log($(el.el).index());
      $(el.el).addClass("active").siblings().removeClass('active');
      $('#index2-nav ul').eq($(el.el).index()).addClass('active1').siblings().removeClass('active1');
      //$('#index1-nav li').eq($(el.el).index()).addClass('active')
       // .siblings().removeClass('active');
    }
  }
});
