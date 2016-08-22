var indexTpl = require('../tpls/index.string');

//定义视图
SPA.defineView('index',{
  //装载模板
  html:indexTpl,
  plugins: ['delegated'],
  modules: [{
    name: 'content',
    container: '#m-container',
    views: ['home', 'category', 'cart', 'mine','detail','list','login','register'],
    defaultTag: 'home'
  }],
  bindActions: {
    'switch': function (el, data) {
      this.modules.content.launch(data.name);
      $('#index-nav li').eq($(el.el).index()).addClass('active')
        .siblings().removeClass('active');
    }
  }

})
