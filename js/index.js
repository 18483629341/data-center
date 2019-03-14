$(function() {
	//左侧大tab切换；数据概览、空气质量、水环境质量、污染源，土壤与固废注释掉了
	$('.index-main-tab dl').click(function() {
		var index = $(this).index();
		$(this).addClass('active').siblings('dl').removeClass('active');
		$('.main-info').hide();
		$('.main-info').eq(index).show();
		if(index == 0) {
			indexSituation();
		} else if(index == 1) {
			indexAir();
		} else if(index == 2) {
			indexWater();
		} else if(index == 3) {
			indexNoise();	
		}else if(index == 4){
			indexPollution();
		}
	});
	indexSituation();
	//进度条上的tip显示
	$('.assess p').click(function(e) {
		e.stopPropagation();
		var show = $(this).attr('data-show');
		if(show == 'true') {
			$(this).parents('.assess').find('.assess-num').hide();
			$(this).attr({
				'data-show': 'false'
			});
		} else {
			$(this).parents('.assess').find('.assess-num').show();
			$(this).attr({
				'data-show': 'true'
			});
		}
	})
	//空气质量中的图例点击
	$('.map-legend p').click(function() {
		if($('.map-legend ul').is(':hidden')) {
			$('.map-legend ul').show();
		} else {
			$('.map-legend ul').hide();
		}
	})
})

