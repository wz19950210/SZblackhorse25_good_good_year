$(function(){
    //获取轮播图数据
    $.get('http://127.0.0.1:9091/api/getlunbo',function(data){
    	$('.swiper-container .swiper-wrapper').html(template('temp',data));
    	slide();
    })
      // banner轮播函数
    function slide() {
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            // 如果需要分页器
            pagination: '.swiper-pagination',
            autoplay: 2000,
            autoplayDisableOnInteraction: false,
        })        
    }
    //点击切换数据
    $('#main .tab .title a').on('click',function(e){
    	e.preventDefault();
    	var idx=$(this).index();
    	     //获取tab数据
  $.get('http://172.20.10.2:9091/api/gethometab/'+(idx+1),function(data){
    		$('#main .content').html(template('temp',data));
    })
    	$(this).addClass('active').siblings('a').removeClass('active');	    
    }) 
    //默认第一页
    idx=0;
     $.get('http://172.20.10.2:9091/api/gethometab/'+(idx+1),function(data){
    		$('#main .content').html(template('temp',data));
    })
//   nav栏的显示与隐藏
$('.list-bar .icon').on('click',function(){
//	alert(1);
	$('.nav').slideToggle();
})
 })