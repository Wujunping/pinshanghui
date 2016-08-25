var cartTpl = require('../tpls/cart.string');

//定义视图
SPA.defineView('cart',{
  //装载模板
  html:cartTpl,
  plugins: ['delegated'],
  bindActions:{
    
  }

});
