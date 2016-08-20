var indexTpl = require('../tpls/index.string');

//定义视图
SPA.defineView('index',{
  //装载模板
  html:indexTpl,

  bindEvents: {
    'show': function(){
      var mySwiper = new Swiper('.swiper-container', {
        //direction: 'horizontal',
        autoplay:2000,
        loop: true,
        autoplayDisableOnInteraction : false,
        pagination: '.swiper-pagination'
      });
      
    }
  }

})
