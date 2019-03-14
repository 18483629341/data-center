$(function() {
	//绘制污染的情况饼图
	//参数1：污染情况饼图的中建显示数值，参数2：突出部分显示百分比，参数3：突出部分的显示颜色
	drawpollutionEcharts('190', 100, '#de6f3f');
	//tab切换，污染源查询与监控
	$('.map-title-tab p').click(function() {
		var index = $(this).index();
		$(this).addClass('active').siblings('p').removeClass('active');
		$('.map-tab-main').hide();
		$('.map-tab-main').eq(index).show();
	})
	//弹框关闭
	$('.map-alert-close').click(function() {
		$(this).parents('.map-alert').hide();
	})
	/*所有下拉框*/
	$('.selectdiv .select-value').click(function() {
		$(this).parent('.selectdiv').addClass('cur');
		$(this).next('.select-valueall').find('span').click(function() {
			$(this).addClass('active').siblings('span').removeClass('active');
			$(this).parents('.selectdiv').removeClass('cur');
			$(this).parents('.selectdiv').find('.select-value').html($(this).html());
		})
	});
	$('.selectdiv').mouseleave(function() {
		$(this).removeClass('cur');
	});
	//监控情况下的点击效果
	$('.map-tab-main2 .content .btn2').click(function() {
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).addClass('active');
		}
	})
	//收起展开左侧栏
	$('.map-info-show').click(function() {
		if($(this).hasClass('map-info-hide')) {
			$(this).removeClass('map-info-hide');
			$('.map-info').css({
				'margin-left': '0'
			});
		} else {
			$(this).addClass('map-info-hide');
			$('.map-info').css({
				'margin-left': '-450px'
			});
		}
	})
	//循环时间
	var numHtml = '';
	for(var i = 0; i < 24; i++) {
		numHtml += '<span style="width:' + (100 / 24) + '%;">' + i + '</span>'
	}
	$('.map-time .num').html(numHtml);
	/*点击地图上的下拉框，设置年月日*/
	$('.map-time .selectdiv .select-value').click(function() {
		$(this).next('.select-valueall').find('span').click(function() {
			if($(this).html() == '小时') {
				$('.map-time .data').hide().eq(0).show();
				//循环时间
				var numHtml = '';
				for(var i = 0; i < 24; i++) {
					numHtml += '<span style="width:' + (100 / 24) + '%;">' + i + '</span>'
				}
				$('.map-time .num').html(numHtml);
			} else if($(this).html() == '日') {
				$('.map-time .data').hide().eq(1).show();
				//循环时间
				var numHtml = '';
				for(var i = 0; i < 30; i++) {
					numHtml += '<span style="width:' + (100 / 30) + '%;">' + (i + 1) + '</span>'
				}
				$('.map-time .num').html(numHtml);
			} else if($(this).html() == '月') {
				$('.map-time .data').hide().eq(2).show();
				//循环时间
				var numHtml = '';
				for(var i = 0; i < 12; i++) {
					numHtml += '<span style="width:' + (100 / 12) + '%;">' + (i + 1) + '</span>'
				}
				$('.map-time .num').html(numHtml);
			}
		})
	})
	//tab切换，空气站、考核断面、水质自动站
	$('.map-layer-seach .tab li').click(function() {
		var index = $(this).index();
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('.map-layer-seach .tab-main-checkbox').hide();
		} else {
			$(this).addClass('active').siblings('li').removeClass('active');
			$('.map-layer-seach .tab-main-checkbox').hide().eq(index).show();
		}
		//$(this).addClass('active').siblings('li').removeClass('active');

	})
	//弹窗线框图  日/月tab的切换
	$('.air-info-type li').click(function() {
		// var index = $(this).index();
		$(this).addClass('active').siblings('li').removeClass('active');

	})
	//复选，空气站、考核断面、水质自动站中的内容
	$('.tab-main-checkbox p').click(function() {
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).addClass('active');
		}
	})
	//图例按钮点击
	$('.map-widgets1 li.five').click(function() {
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).find('.legend').hide();
		} else {
			$(this).addClass('active');
			$(this).find('.legend').show();
		}
	})
	
	//底图点击
	$('.map-widgets-layer .layer dl').click(function() {
		$(this).addClass('active').siblings('dl').removeClass('active');
	})
	$('.map-widgets-layer').click(function(e) {
		e.stopPropagation();
	})
	//模仿ztree，环境专题图中的点击事件
	$('.layer-word .first p').click(function() {
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).parents('.first').next('.first-main').hide();
		} else {
			$(this).addClass('active');
			$(this).parents('.first').next('.first-main').show();
		}
	})
	$('.layer-word .first span').click(function() {
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).parents('.first').next('.first-main').find('p').removeClass('active');
		} else {
			$(this).addClass('active');
			$(this).parents('.first').next('.first-main').find('p').addClass('active');
		}
	})
	$('.layer-word .first-main p').click(function() {
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).addClass('active');
		}
	})
	/*echarts*/
	//近24小时监测数据趋势图
	var option1 = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				lineStyle: {
					color: '#ddd'
				}
			},
			confine: true,
			padding: [5, 10, 5, 10],
			backgroundColor: '#fff',
			borderColor: '#d1d1d1',
			borderWidth: 1,
			extraCssText: 'box-shadow: 1px 1px 3px rgba(45, 58, 50, 0.3);',
			textStyle: {
				color: '#333333'
			}
		},
		color: ['#fc7727'],
		grid: {
			left: '6%',
			right: '2%',
			bottom: '10px',
			top: '30px',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			data: ['10', '11', '12', '13', '14', '15', '16', '17', '18'],
			axisLine: {
				lineStyle: {
					color: '#c5c5c5'
				}
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				textStyle: {
					fontSize: 14,
					color: '#666666',
				}
			}
		},
		yAxis: {
			name: '单位：mg/m3',
			type: 'value',
			axisLine: {
				lineStyle: {
					color: '#c5c5c5'
				}
			},
			axisTick: {
				show: false
			},
			splitLine: {
				show: false
			},
			axisLabel: {
				textStyle: {
					fontSize: 14,
					color: '#666666',
				}
			},
			nameTextStyle: {
				color: '#999999',
			}
		},
		series: [{
			name: '2018年',
			type: 'line',
			data: [5, 15, 4, 13, 12, 13, 14, 15, 16, 17, 18, 9, 10, 15],
			smooth: true,
			symbolSize: 0
		}]
	};
	var echarts1 = echarts.init(document.getElementById('map-echarts1'));
	echarts1.setOption(option1);
	//近24小时监测数据趋势图
	var option2 = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				lineStyle: {
					color: '#ddd'
				}
			},
			confine: true,
			padding: [5, 10, 5, 10],
			backgroundColor: '#fff',
			borderColor: '#d1d1d1',
			borderWidth: 1,
			extraCssText: 'box-shadow: 1px 1px 3px rgba(45, 58, 50, 0.3);',
			textStyle: {
				color: '#333333'
			}
		},
		color: ['#1a94f3'],
		grid: {
			left: '6%',
			right: '6%',
			bottom: '10px',
			top: '30px',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			data: ['10', '11', '12', '13', '14', '15', '16', '17', '18'],
			axisLine: {
				lineStyle: {
					color: '#c5c5c5'
				}
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				textStyle: {
					fontSize: 14,
					color: '#666666',
				}
			}
		},
		yAxis: {
			name: '单位：mg/m3',
			type: 'value',
			axisLine: {
				lineStyle: {
					color: '#c5c5c5'
				}
			},
			axisTick: {
				show: false
			},
			splitLine: {
				show: false
			},
			axisLabel: {
				textStyle: {
					fontSize: 14,
					color: '#666666',
				}
			},
			nameTextStyle: {
				color: '#999999',
			}
		},
		series: [{
			name: '2018年',
			type: 'line',
			data: [5, 15, 4, 13, 12, 13, 14, 15, 16, 17, 18, 9, 10, 15],
			smooth: true,
			symbolSize: 0,
			markLine: {
				silent: true,
				symbolSize: 0,
				label: {
					show: false,
					position: 'start'
				},
				data: [{
					yAxis: 10,
					label: {
						show: false,
						position: 'start'
					},
					itemStyle: {
						normal: {
							color: '#e6ce2c',
						}
					}
				}]
			}
		}]
	};
	var echarts2 = echarts.init(document.getElementById('map-echarts2'));
	echarts2.setOption(option2);
})
/**  绘制显示进度的饼图
  
   * @param {String} text 设置中间文字
   * @param {Number} val 设置数值百分率
   * @param {String} bg 设置污染率的颜色
*/
function drawpollutionEcharts(text, val, bg){
    const value1 = val * 75 / 100;
    const value2 = 75 - value1;
    const num1 = value1 / 2;
    const num2 = value2 / 2;
    const series = [];
    for (let i = 0; i < num1; i++) {
      series.push(setValue(1, bg), setValue(1, 'transparent'));
    }
    for (let i = 0; i < num2; i++) {
      series.push(setValue(1, '#85cff6'), setValue(1, 'transparent'));
    }
    series.push(setValue(25, 'transparent'));
    const option = {
      title: {
        x: '44%',
        y: '28S%',
        subtext: text,
        textAlign: 'center',
        subtextStyle: {
          fontSize:30,
		  color: '#333',
		  fontWeight:'bolder',
        }
      },
      series: [
		{
			name: '',
			type: 'pie',
			radius: ['74%', '75%'],
			center: ['50%', '50%'],
			startAngle: 225,
			hoverAnimation: false,
			legendHoverLink: false,
			labelLine: {
			  normal: {
				show: false
			  }
			},
			emphasis: {
			  show: false
			},
			data: [setValue(75, '#eee'), setValue(25, 'transparent')]
		  },
		{
        name: '',
        type: 'pie',
        radius: ['82%', '93%'],
        center: ['50%', '50%'],
        startAngle: 225,
        hoverAnimation: true,
        legendHoverLink: false,
        labelLine: {
          normal: {
            show: false
          }
        },
        emphasis: {
          show: false
        },
        data: series
	  },
	   {
        name: '',
        type: 'pie',
        radius: ['98%', '99%'],
        center: ['50%', '50%'],
        startAngle: 225,
        hoverAnimation: false,
        legendHoverLink: false,
        labelLine: {
          normal: {
            show: false
          }
        },
        emphasis: {
          show: false
        },
        data: [setValue(75, '#eee'), setValue(25, 'transparent')]
      }]
    };

    const pollutionEcharts = echarts.init(
     document.getElementById('poll-radio-canvas')
    );
    pollutionEcharts.setOption(option);
}
/**
* 设置echarts显示对象
* @param {numbr} value 值
* @param {String} color 颜色
*/
function setValue(value, color) {
 return {
   value:value,
   itemStyle: {
	 normal: {
	   color:color,
	 }
   }
 };
}