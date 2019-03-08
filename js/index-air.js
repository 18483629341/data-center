//空气质量
function indexAir() {
	/**  绘制显示进度的饼图**/
	drawpollutionEcharts('138', 24, '#fff200');
	//默认设置echarts的宽度
	$('.air-echarts1').width($('.air-info3').width());
	//tab切换
	$('.air-info-tab li').click(function() {
		var index = $(this).index();
		$(this).addClass('active').siblings('li').removeClass('active');
		$(this).parents('.air-info').find('.air-info-tab-main').hide();
		$(this).parents('.air-info').find('.air-info-tab-main').eq(index).show();
	})
	/*echarts*/
	//AQI
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
			},
			formatter: function(params) {
				var main = params[0].name + '同比去年<img src="images/index/jt_icon.png" style="vertical-align: -1px;margin: 0 2px;"/>8.9%';
				for(var i = 0; i < params.length; i++) {
					main += '<br>' + params[i].marker + params[i].seriesName + '：' + params[i].value
				}
				return main;
			}
		},
		color: ['#43b368', '#3bbffb'],
		legend: {
			selectedMode: false,
			data: ['2018年', '2017年'],
			right: 18,
			top: 8,
			itemGap: 20,
			itemHeight: 9,
			textStyle: {
				fontSize: 14,
				color: '#999',
			}
		},
		grid: {
			left: '2%',
			right: '2%',
			bottom: '15px',
			top: '60px',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			data: ['04-10', '04-11', '04-12', '04-13', '04-14', '04-15', '04-16', '04-17', '04-18'],
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
		}, {
			name: '2017年',
			type: 'line',
			data: [8, 10, 4, 3, 2, 3, 4, 5, 6, 7, 8, 19, 10, 5],
			smooth: true,
			symbolSize: 0
		}]
	};
	var echarts1 = echarts.init(document.getElementById('air-echarts1'));
	echarts1.setOption(option1);
	//PM2.5
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
			},
			formatter: function(params) {
				var main = params[0].name + '同比去年<img src="images/index/jt_icon.png" style="vertical-align: -1px;margin: 0 2px;"/>8.9%';
				for(var i = 0; i < params.length; i++) {
					main += '<br>' + params[i].marker + params[i].seriesName + '：' + params[i].value
				}
				return main;
			}
		},
		color: ['#43b368', '#3bbffb', '#e6ce2c'],
		legend: {
			selectedMode: false,
			data: ['目标值', '2018年', '2017年'],
			right: 18,
			top: 8,
			itemGap: 20,
			itemHeight: 9,
			textStyle: {
				fontSize: 14,
				color: '#999',
			}
		},
		grid: {
			left: '2%',
			right: '2%',
			bottom: '15px',
			top: '75px',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			data: ['04-10', '04-11', '04-12', '04-13', '04-14', '04-15', '04-16', '04-17', '04-18'],
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
			name: '单位：ug/m3',
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
		}, {
			name: '2017年',
			type: 'line',
			data: [8, 10, 4, 3, 2, 3, 4, 5, 6, 7, 8, 19, 10, 5],
			smooth: true,
			symbolSize: 0
		}, {
			name: '目标值',
			type: 'line',
			data: [],
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
	var echarts2 = echarts.init(document.getElementById('air-echarts2'));
	echarts2.setOption(option2);
	var echarts3 = echarts.init(document.getElementById('air-echarts3'));
	echarts3.setOption(option2);
	var echarts4 = echarts.init(document.getElementById('air-echarts4'));
	echarts4.setOption(option2);
}