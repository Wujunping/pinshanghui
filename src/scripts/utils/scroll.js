// pullToRefresh
 var pg=1;
module.exports = function (opt) {
	
  opt.eleHeadAndFoot = $('#home-swiper');
  opt.objRefreshAjax = {
    url: '/api/47.php',
    type: 'get',
    success: function (res) {
    	console.log(res.result.list);
      opt.vm.goodslist = res.result.list.concat(opt.vm.goodslist);
    }
  };
  opt.objMoreAjax = {
    url: '/api/47.php',
    type: 'get',
    success: function (res) {
        opt.vm.goodslist.pushArray(res.result.list);

        myScroll.refresh();
        myScroll.scrollTo(0, self.y + topSize);
        foot.removeClass('down');
        foot.attr('src', '/pinshanghui/images/arrow.png');
    }
  };

   //var myScroll = this.widgets.myScroll;
  var myScroll = opt.scroll;
  var topSize = 35;
	//console.log(myScroll);
  var ele = opt.eleHeadAndFoot;
  var head = ele.find('.head img'),
      topImgHasClass = head.hasClass('up');
  var foot = ele.find('.foot img'),
      bottomImgHasClass = head.hasClass('down');

  myScroll.on('scroll', function () {
    var y = this.y,
    maxY = this.maxScrollY - y;
    if (y >= 0) {
      $('.head').show();
      !topImgHasClass && head.addClass('up');
      return '';
    }
    if (maxY >= 0) {
      $('.foot').show();
      !bottomImgHasClass && foot.addClass('down');
      return '';
    }
  });

  myScroll.on('scrollEnd', function () {
    if (this.y >= -topSize && this.y < 0) {
      myScroll.scrollTo(0, -topSize);
      head.removeClass('up');
    } else if (this.y >= 0) {
      head.attr('src', '/pinshanghui/images/ajax-loader.gif');
      //TODO ajax下拉刷新数据

      $.ajax({
        url: opt.objRefreshAjax.url,
        type: opt.objRefreshAjax.type,
        data: opt.objRefreshAjax.data,
        success: function (res) {
          opt.objRefreshAjax.success(res);
        }
      })

      setTimeout(function () {
        myScroll.scrollTo(0, -topSize);
        head.removeClass('up');
        head.attr('src', '/pinshanghui/images/arrow.png');
      }, 1000);
    }

    var maxY = this.maxScrollY - this.y;
    var self = this;
    if (maxY > -topSize && maxY < 0) {
      myScroll.scrollTo(0, self.maxScrollY + topSize);
      foot.removeClass('down')
    } else if (maxY >= 0) {
      foot.attr('src', '/pinshanghui/images/ajax-loader.gif');
     
      // ajax上拉加载数据
      
      	 $.ajax({
        url: '/api/2.php',
        type: 'get',
    	success: function (res) {
         
          
          if(pg==1){
          	 opt.vm.goodslist.pushArray(res.result.list);
          	pg=0;
          	
          }
      	 	
			
          myScroll.refresh();
          myScroll.scrollTo(0, self.y + topSize);
          foot.removeClass('down');
          foot.attr('src', '/pinshanghui/images/arrow.png');
         
        }
        
        
      	});
      
     
    }
  });
};
