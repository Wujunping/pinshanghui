var mineTpl = require('../tpls/mine.string');

//定义视图
SPA.defineView('mine',{
  //装载模板
  html:mineTpl,

  plugins: ['delegated'],
  bindActions:{
    'login': function () {
      SPA.open('login', {});
    }
  }

});
