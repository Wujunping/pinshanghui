var homeTpl = require('../tpls/home.string');
var scroll = require('../utils/scroll.js');

//定义视图
SPA.defineView('home',{
  //装载模板
  html:homeTpl,

  bindEvents: {
    'show': function(){
      var mySwiper = new Swiper('.swiper-container', {
        //direction: 'horizontal',
        autoplay:2000,
        loop: true,
        autoplayDisableOnInteraction : false,
        pagination: '.swiper-pagination'
      });

      // scroll({
        // scroll: this.widgets.myScroll,
        // vm: vm
      // })
    }
  }
})
