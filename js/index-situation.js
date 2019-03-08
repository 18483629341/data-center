//数据概览
function indexSituation() {
	//默认设置echarts的宽度
	$('.situation-echarts1').width($('.situation-info4').width());
	$('.situation-echarts2').width($('.situation-info5').width());
	//按系统、按部门tab切换
	$('.main-info-module .mim-title .tab li').click(function() {
		var index = $(this).index();
		$(this).addClass('active').siblings('li').removeClass('active');
		$(this).parents('.main-info-module').find('.situation-info-tab').hide();
		$(this).parents('.main-info-module').find('.situation-info-tab').eq(index).show();
	})
	//数据集与数据量tab切换
	$('.situation-echarts-tab li').click(function() {
		var index = $(this).index();
		$(this).addClass('active').siblings('li').removeClass('active');
		$(this).parents('.situation-info4').find('.situation-echarts-tab-main').hide();
		$(this).parents('.situation-info4').find('.situation-echarts-tab-main').eq(index).show();
	})
	/*echarts*/
	//按系统-数据集
	var option1 = {
		tooltip: {
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
		color: ['#3bbffb'],
		legend: {
			selectedMode: false,
			data: ['数据集'],
			right: 18,
			top: 0,
			itemWidth: 32,
			itemHeight: 11,
			textStyle: {
				fontSize: 14,
				color: '#999',
			}
		},
		grid: {
			left: '2%',
			right: '3%',
			bottom: '15px',
			top: '10px',
			containLabel: true
		},
		xAxis: {
			type: 'value',
			axisLine: {
				lineStyle: {
					color: '#64adff'
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
					color: '#333',
				}
			}
		},
		yAxis: {
			type: 'category',
			data: ['环境统计管理系统', '省环境信息资源中心', '市污染源应急指挥平台', '行政审批系统', '环境总体规划系统', '宜昌地理信息平台', '宜昌市数字化城市管理平台', '宜昌机动车排气检测系统', '移动执法系统'],
			axisLine: {
				lineStyle: {
					color: '#64adff'
				}
			},
			axisTick: {
				show: false,
				alignWithLabel: true
			},
			splitLine: {
				show: false
			},
			axisLabel: {
				textStyle: {
					fontSize: 14,
					color: '#333333',
				}
			}
		},
		series: [{
			name: '数据集',
			type: 'bar',
			data: [50, 100, 40, 30, 20, 30],
			barWidth: '11',
			itemStyle: {
				normal: {
					barBorderRadius: 11
				}
			}
		}]
	};
	var echarts1 = echarts.init(document.getElementById('situation-echarts1'));
	echarts1.setOption(option1);
	//按系统-数据量
	var option2 = {
		tooltip: {
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
		color: ['#3bbffb'],
		legend: {
			selectedMode: false,
			data: ['数据量'],
			right: 18,
			top: 0,
			itemWidth: 32,
			itemHeight: 11,
			textStyle: {
				fontSize: 14,
				color: '#999',
			}
		},
		grid: {
			left: '2%',
			right: '3%',
			bottom: '15px',
			top: '10px',
			containLabel: true
		},
		xAxis: {
			type: 'value',
			axisLine: {
				lineStyle: {
					color: '#64adff'
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
					color: '#333',
				}
			}
		},
		yAxis: {
			type: 'category',
			data: ['环境统计管理系统', '省环境信息资源中心', '市污染源应急指挥平台', '行政审批系统', '环境总体规划系统', '宜昌地理信息平台', '宜昌市数字化城市管理平台', '宜昌机动车排气检测系统', '移动执法系统'],
			axisLine: {
				lineStyle: {
					color: '#64adff'
				}
			},
			axisTick: {
				show: false,
				alignWithLabel: true
			},
			splitLine: {
				show: false
			},
			axisLabel: {
				textStyle: {
					fontSize: 14,
					color: '#333333',
				}
			}
		},
		series: [{
			name: '数据量',
			type: 'bar',
			data: [5, 10, 40, 130, 20, 80],
			barWidth: '11',
			itemStyle: {
				normal: {
					barBorderRadius: 11
				}
			}
		}]
	};
	var echarts2 = echarts.init(document.getElementById('situation-echarts2'));
	echarts2.setOption(option2);
	//按部门-数据集
	var option3 = {
		tooltip: {
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
		color: ['#3bbffb'],
		legend: {
			selectedMode: false,
			data: ['数据集'],
			right: 18,
			top: 0,
			itemWidth: 32,
			itemHeight: 11,
			textStyle: {
				fontSize: 14,
				color: '#999',
			}
		},
		grid: {
			left: '2%',
			right: '3%',
			bottom: '15px',
			top: '10px',
			containLabel: true
		},
		xAxis: {
			type: 'value',
			axisLine: {
				lineStyle: {
					color: '#64adff'
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
					color: '#333',
				}
			}
		},
		yAxis: {
			type: 'category',
			data: ['市环境监测站', '市环境监察支队', '市环境保护研究所', '市大气中心', '市环境信息中心', '市环境信访办', '市水土中心', '市行政审批科', '市环境监控应急指挥中心'],
			axisLine: {
				lineStyle: {
					color: '#64adff'
				}
			},
			axisTick: {
				show: false,
				alignWithLabel: true
			},
			splitLine: {
				show: false
			},
			axisLabel: {
				textStyle: {
					fontSize: 14,
					color: '#333333',
				}
			}
		},
		series: [{
			name: '数据集',
			type: 'bar',
			data: [40, 80, 30, 10, 50, 30],
			barWidth: '11',
			itemStyle: {
				normal: {
					barBorderRadius: 11
				}
			}
		}]
	};
	var echarts3 = echarts.init(document.getElementById('situation-echarts3'));
	echarts3.setOption(option3);
	//按部门-数据量
	var option4 = {
		tooltip: {
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
		color: ['#3bbffb'],
		legend: {
			selectedMode: false,
			data: ['数据量'],
			right: 18,
			top: 0,
			itemWidth: 32,
			itemHeight: 11,
			textStyle: {
				fontSize: 14,
				color: '#999',
			}
		},
		grid: {
			left: '2%',
			right: '3%',
			bottom: '15px',
			top: '10px',
			containLabel: true
		},
		xAxis: {
			type: 'value',
			axisLine: {
				lineStyle: {
					color: '#64adff'
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
					color: '#333',
				}
			}
		},
		yAxis: {
			type: 'category',
			data: ['市环境监测站', '市环境监察支队', '市环境保护研究所', '市大气中心', '市环境信息中心', '市环境信访办', '市水土中心', '市行政审批科', '市环境监控应急指挥中心'],
			axisLine: {
				lineStyle: {
					color: '#64adff'
				}
			},
			axisTick: {
				show: false,
				alignWithLabel: true
			},
			splitLine: {
				show: false
			},
			axisLabel: {
				textStyle: {
					fontSize: 14,
					color: '#333333',
				}
			}
		},
		series: [{
			name: '数据量',
			type: 'bar',
			data: [20, 10, 4, 30, 10, 30],
			barWidth: '11',
			itemStyle: {
				normal: {
					barBorderRadius: 11
				}
			}
		}]
	};
	var echarts4 = echarts.init(document.getElementById('situation-echarts4'));
	echarts4.setOption(option4);
	//按系统-数据服务
	var option5 = {
		height: 180,
		tooltip: {
			formatter: function(params) {
				var main = '2018.6.7<br/>最新服务条数：120条<br/>累计服务次数：50次';
				return main;
			}
		},
		series: [{
			type: 'graph',
			layout: 'circular',
			circular: {
				rotateLabel: true
			},
			symbolSize: 15,
			//edgeSymbol: ['none', 'arrow'],
			label: {
				normal: {
					show: true,
					position: 'right',
					color: '#333333',
					fontSize: 14
				}
			},
			lineStyle: {
				normal: {
					curveness: 0.3,
					color: '#898989'
				}
			},
			data: [{
					name: '数据中心',
					symbolSize: 22,
					itemStyle: {
						normal: {
							color: '#ff7f50'
						}
					}
				},
				{
					name: '市民e家',
					itemStyle: {
						normal: {
							color: '#87cefa'
						}
					}
				},
				{
					name: '市污染源监控平台',
					itemStyle: {
						normal: {
							color: '#da70d6'
						}
					}
				},
				{
					name: '市综合指挥平台',
					itemStyle: {
						normal: {
							color: '#32cd32'
						}
					}
				},
				{
					name: '市地理信息平台',
					itemStyle: {
						normal: {
							color: '#6495ed'
						}
					}
				},
				{
					name: '市环保局门户网站',
					itemStyle: {
						normal: {
							color: '#ff69b4'
						}
					}
				}
			],
			links: [{
					source: '数据中心',
					target: '市民e家'
				},
				{
					source: '数据中心',
					target: '市污染源监控平台'
				},
				{
					source: '数据中心',
					target: '市综合指挥平台'
				},
				{
					source: '数据中心',
					target: '市地理信息平台'
				},
				{
					source: '数据中心',
					target: '市环保局门户网站'
				}
			]
		}]
	};
	var echarts5 = echarts.init(document.getElementById('situation-echarts5'));
	echarts5.setOption(option5);
	//按部门-数据服务
	var option6 = {
		height: 180,
		tooltip: {
			formatter: function(params) {
				var main = '2018.6.7<br/>最新服务条数：120条<br/>累计服务次数：50次';
				return main;
			}
		},
		series: [{
			type: 'graph',
			layout: 'circular',
			circular: {
				rotateLabel: true
			},
			symbolSize: 15,
			//edgeSymbol: ['none', 'arrow'],
			label: {
				normal: {
					show: true,
					position: 'right',
					color: '#333333',
					fontSize: 14
				}
			},
			lineStyle: {
				normal: {
					curveness: 0.3,
					color: '#898989'
				}
			},
			data: [{
					name: '数据中心',
					symbolSize: 22,
					itemStyle: {
						normal: {
							color: '#ff7f50'
						}
					}
				},
				{
					name: '市民e家',
					itemStyle: {
						normal: {
							color: '#87cefa'
						}
					}
				},
				{
					name: '市污染源监控平台',
					itemStyle: {
						normal: {
							color: '#da70d6'
						}
					}
				},
				{
					name: '市综合指挥平台',
					itemStyle: {
						normal: {
							color: '#32cd32'
						}
					}
				},
				{
					name: '市地理信息平台',
					itemStyle: {
						normal: {
							color: '#6495ed'
						}
					}
				},
				{
					name: '市环保局门户网站',
					itemStyle: {
						normal: {
							color: '#ff69b4'
						}
					}
				}
			],
			links: [{
					source: '数据中心',
					target: '市民e家'
				},
				{
					source: '数据中心',
					target: '市污染源监控平台'
				},
				{
					source: '数据中心',
					target: '市综合指挥平台'
				},
				{
					source: '数据中心',
					target: '市地理信息平台'
				},
				{
					source: '数据中心',
					target: '市环保局门户网站'
				}
			]
		}]
	};
	var echarts6 = echarts.init(document.getElementById('situation-echarts6'));
	echarts6.setOption(option6);
}