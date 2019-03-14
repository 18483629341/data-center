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
			},
			formatter: function(params) {
				var main = params[0].name;
				for(var i = 0; i < params.length - 1; i++) {
					main += '<br>' + params[i].marker + params[i].seriesName + '：' + params[i].value
				}
				return main;
			}
		},
		color: ['#00ccff', '#fff'],
		legend: {
			selectedMode: false,
			data: [{
					name: '污染源数量',
					icon: 'roundRect'
				},
				{
					name: '标准源匹配数量',
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
		xAxis: [
			{
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
			}, 
			{
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
			}
		],
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
			name: '污染源数量',
			type: 'bar',
			data: [99, 58, 55, 60, 68, 70,96],
			barWidth: '30',
			xAxisIndex: 1,
			itemStyle: {
				normal: {
					barBorderRadius: 37,
					label: {
						show: true,
						position: 'top',
						textStyle: {
							color: '#00ccff'
						}
					}
				}
			}
		}, {
			name: '污染源数量',
			type: 'bar',
			data: [33, 20, 20,30, 25, 33, 28],
			barWidth: '29',
			stack: 'sum',
			itemStyle: {
				normal: {
					barBorderRadius: 36,
				}
			}
		}, {
			name: '标准源匹配数量',
			type: 'bar',
			stack: 'sum',
			data: [66, 38, 35, 30, 43, 37,68],
			barWidth: '29',
			itemStyle: {
				normal: {
					barBorderWidth: 6,
					barBorderColor: '#00ccff',
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
			},
			formatter: function(params) {
				var main = params[0].name;
				for(var i = 0; i < params.length - 1; i++) {
					main += '<br>' + params[i].marker + params[i].seriesName + '：' + params[i].value
				}
				return main;
			}
		},
		color: ['#139de5', '#fff'],
		legend: {
			selectedMode: false,
			data: [{
					name: '发证企业',
					icon: 'roundRect'
				},
				{
					name: '未发证企业',
					icon: 'image://./images/index/echartsicon2.png'
				}
			],
			right: 10,
			top: 0,
			itemGap: 25,
			itemWidth: 28,
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
		xAxis: [
			{
				type: 'category',
				data:  ['能源', '火力发电', '矿产', '化工', '制造业'],
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
			{
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
				data: ['能源', '火力发电', '矿产', '化工', '制造业'],
			}
		],
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
			name: '发证企业',
			type: 'bar',
			data: [55, 109, 59, 99, 111],
			barWidth: '30',
			xAxisIndex: 1,
			itemStyle: {
				normal: {
					barBorderRadius: 30,
					label: {
						show: true,
						position: 'top',
						textStyle: {
							color: '#139de5'
						}
					}
				}
			}
		}, {
			name: '发证企业',
			type: 'bar',
			data: [36, 80, 40, 70, 78],
			barWidth: '29',
			stack: 'sum',
			itemStyle: {
				normal: {
					barBorderRadius: 30,
				}
			}
		}, {
			name: '未发证企业',
			type: 'bar',
			stack: 'sum',
			data: [19,29,19,29,33],
			barWidth: '29',
			itemStyle: {
				normal: {
					barBorderWidth: 6,
					barBorderColor: '#139de5',
					barBorderRadius: 30,
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
		xAxis: [
			{
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
			}, 
			{
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
			}
		],
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
			name: '发证企业',
			type: 'bar',
			data: [55, 109, 59, 99, 111],
			barWidth: '30',
			xAxisIndex: 1,
			itemStyle: {
				normal: {
					barBorderRadius: 37,
					label: {
						show: true,
						position: 'top',
						textStyle: {
							color: '#139de5'
						}
					}
				}
			}
		}, {
			name: '发证企业',
			type: 'bar',
			data: [36, 80, 40, 70, 78],
			barWidth: '36',
			stack: 'sum',
			itemStyle: {
				normal: {
					barBorderRadius: 36,
				}
			}
		}, {
			name: '未发证企业',
			type: 'bar',
			stack: 'sum',
			data: [19,29,19,29,33],
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
		color: ['#3f7ce2', '#fff'],
		legend: {
			selectedMode: false,
			data: [{
					name: '监控企业数',
					icon: 'roundRect'
				},
				{
					name: '超标企业数',
					icon: 'image://./images/index/echartsicon3.png'
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
		xAxis: [
			{
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
			}, 
			{
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
			}
		],
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
			barWidth: '33',
			xAxisIndex: 1,
			itemStyle: {
				normal: {
					barBorderRadius: 37,
					label: {
						show: true,
						position: 'top',
						textStyle: {
							color: '#3f7ce2'
						}
					}
				}
			}
		}, {
			name: '监控企业数',
			type: 'bar',
			data: [60, 80, 50, 80, 80, 70, 100],
			barWidth: '32',
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
			barWidth: '32',
			itemStyle: {
				normal: {
					barBorderWidth: 6,
					barBorderColor: '#3f7ce2',
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