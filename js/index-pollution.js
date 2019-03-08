//污染源
function indexPollution() {
	//默认设置echarts的宽度
	$('.pollution-echarts2').width($('.pollution-info3').width());
	//tab切换
	$('.pollution-echarts-tab li').click(function() {
		var index = $(this).index();
		$(this).addClass('active').siblings('li').removeClass('active');
		$('.pollution-tab-main').hide();
		$('.pollution-tab-main').eq(index).show();
	})
	/*echarts*/
	//建设项目主要行业审批数量统计
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
		color: ['#ffc000', '#469dee'],
		legend: {
			selectedMode: false,
			data: ['同比新增项目数', '项目数'],
			right: 10,
			top: 0,
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
			top: '34px',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			data: ['制浆造纸', '化肥', '钢铁', '电镀', '炼焦', '水泥', '制革', '火电', '水泥'],
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
			name: '单位：个',
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
			name: '同比新增项目数',
			type: 'line',
			data: [5, 15, 4, 3, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5],
			smooth: true,
			symbolSize: 6,
			lineStyle: {
				width: 3
			},
			itemStyle: {
				normal: {
					borderWidth: 2
				}
			}
		}, {
			name: '项目数',
			type: 'bar',
			data: [5, 10, 4, 3, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5],
			barWidth: '22',
			itemStyle: {
				normal: {
					barBorderRadius: 22
				}
			}
		}]
	};
	var echarts1 = echarts.init(document.getElementById('pollution-echarts1'));
	echarts1.setOption(option1);
	//已发证企业大气排放总许可量，大气
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
		color: ['#63cba6'],
		legend: {
			selectedMode: false,
			data: ['已发证企业大气排放总许可量'],
			show: false
		},
		grid: {
			left: '6%',
			right: '2%',
			bottom: '15px',
			top: '34px',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			data: ['颗粒物', 'SO2', 'NOx', 'VOCs', '氨(氨气)'],
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
			name: '单位：万吨/年',
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
			name: '已发证企业大气排放总许可量',
			type: 'bar',
			data: [50, 100, 40, 30, 20, 30],
			barWidth: '22',
			itemStyle: {
				normal: {
					barBorderRadius: 22
				}
			}
		}]
	};
	var echarts2 = echarts.init(document.getElementById('pollution-echarts2'));
	echarts2.setOption(option2);
	//已发证企业大气排放总许可量，废水
	var option3 = {
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
		color: ['#63cba6'],
		legend: {
			selectedMode: false,
			data: ['已发证企业大气排放总许可量'],
			show: false
		},
		grid: {
			left: '6%',
			right: '2%',
			bottom: '15px',
			top: '34px',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			data: ['CODcr', '氨氮', '总磷'],
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
			name: '单位：万吨/年',
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
			name: '已发证企业大气排放总许可量',
			type: 'bar',
			data: [50, 100, 40, 30, 20, 30],
			barWidth: '22',
			itemStyle: {
				normal: {
					barBorderRadius: 22
				}
			}
		}]
	};
	var echarts3 = echarts.init(document.getElementById('pollution-echarts3'));
	echarts3.setOption(option3);
	//近7日在线企业超标数统计
	var option4 = {
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
				var main = params[0].name;
				for(var i = 0; i < params.length - 1; i++) {
					main += '<br>' + params[i].marker + params[i].seriesName + '：' + params[i].value
				}
				return main;
			}
		},
		color: ['#4bc3d3', '#fff'],
		legend: {
			selectedMode: false,
			data: [{
					name: '监控企业数',
					icon: 'roundRect'
				},
				{
					name: '超标企业数',
					icon: 'image://./images/index/echartsicon1.png'
				}
			],
			right: 10,
			top: 0,
			itemGap: 20,
			itemWidth: 30,
			itemHeight: 13,
			textStyle: {
				fontSize: 14,
				color: '#999',
			}
		},
		grid: {
			left: '2%',
			right: '2%',
			bottom: '15px',
			top: '34px',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			data: ['05-11', '05-12', '05-13', '05-14', '05-15', '05-16', '05-17'],
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
		}, {
			type: 'category',
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				show: false
			},
			splitArea: {
				show: false
			},
			splitLine: {
				show: false
			},
			data: ['05-11', '05-12', '05-13', '05-14', '05-15', '05-16', '05-17'],
		}],
		yAxis: {
			name: '单位：家',
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
			name: '监控企业数',
			type: 'bar',
			data: [120, 160, 100, 160, 160, 140, 200],
			barWidth: '37',
			xAxisIndex: 1,
			itemStyle: {
				normal: {
					barBorderRadius: 37,
					label: {
						show: true,
						position: 'top',
						textStyle: {
							color: '#4bc3d3'
						}
					}
				}
			}
		}, {
			name: '监控企业数',
			type: 'bar',
			data: [60, 80, 50, 80, 80, 70, 100],
			barWidth: '36',
			stack: 'sum',
			itemStyle: {
				normal: {
					barBorderRadius: 36,
				}
			}
		}, {
			name: '超标企业数',
			type: 'bar',
			stack: 'sum',
			data: [60, 80, 50, 80, 80, 70, 100],
			barWidth: '36',
			itemStyle: {
				normal: {
					barBorderWidth: 6,
					barBorderColor: '#4bc3d3',
					barBorderRadius: 36,
					label: {
						show: true,
						position: 'inside',
						textStyle: {
							color: '#333'
						}
					}
				}
			}
		}]
	};
	var echarts4 = echarts.init(document.getElementById('pollution-echarts4'));
	echarts4.setOption(option4);
}