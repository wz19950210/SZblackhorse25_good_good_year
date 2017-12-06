$(function(){
	$.get('http://172.20.10.2:9091/api/gettopics',function(data){
		console.log(data);
		$('#main .content').html(template('temp',data));
	})
})











