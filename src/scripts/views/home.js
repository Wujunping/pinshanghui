var homeTpl = require('../tpls/home.string');

//定义视图
SPA.defineView('home',{
  //装载模板
  html:homeTpl,

  plugins: [{
    name: 'avalon',
    options: function (vm) {
      vm.livelist = [];
      vm.livelist2=[];
    },
  },'delegated'],


  bindEvents: {
    'show': function(){
      // 获得vm
      var vm = this.getVM();

      // ajax拉取数据
      $.ajax({
        url: '/api/home.php',
        type: 'get',
        data: {
          type: 'more',
          pageNo: 1
        },
        success: function (res) {
          vm.livelist = res.result.chanpin[0].list;
          vm.livelist2 = res.result.liebiao;
          // console.log(res.result.liebiao);
        }
      });

      var mySwiper = new Swiper('.swiper-container', {
        //direction: 'horizontal',
        autoplay:2000,
        loop: true,
        autoplayDisableOnInteraction : false,
        pagination: '.swiper-pagination'
      });

      var myScroll=this.widgets["myScroll"];
      var that=this;
      myScroll.on("scroll",function(){
        if(that.widgets["myScroll"].y < (-176)){
          $(".homesearch").addClass("seactive");
          console.log(111);
        }else{
          $(".homesearch").removeClass("seactive");
          console.log(222);
        }
      });
    }
  },

  bindActions:{
    'detail': function () {
      SPA.open('detail', {});
    },
    'details': function () {
      SPA.open('details', {});
    }
  }

})
