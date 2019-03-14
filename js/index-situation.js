//数据概览
function indexSituation() {
	//默认设置echarts的宽度
	$('.situation-echarts1').width($('.situation-info4').width());
	$('.situation-echarts2').width($('.situation-info5').width());
	$('.situation-echarts5').width($('.situation-info5').width());
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

	//数据集成情况
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
			},
			formatter:'<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#3bbffb;margin:0 6px;"></span>{b}：<br/><span style="display:inline-block;width:18px;"></span>{c}',
			
		},
		color: ['#3bbffb'],
		
		grid: {
			left: '2%',
			right: '3%',
			bottom: '10px',
			top: '20px',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			data: ['省厅1831系统', '辐射许可证系统', '徐州市环境应急指挥平台', '移动执法系统', '排污申报收费管理系统', '12369投诉系统', '监督性监测系统'],
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
			axisLabel: {//坐标轴的刻度的标签
				textStyle: {
					fontSize: 14,
					color: '#333333',
					textAlign:"left"
				},
				formatter:function(params) {
					var newParamsName = ""; // 最终拼接成的字符串
					var paramsNameNumber = params.length; // 实际标签的个数
					var provideNumber = 5; // 每行能显示的字的个数
					var rowNumber = Math.ceil(paramsNameNumber / provideNumber); // 换行的话，需要显示几行，向上取整
					/**
					 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
					 */
					// 条件等同于rowNumber>1
					if (paramsNameNumber > provideNumber) {
						/** 循环每一行,p表示行 */
						for (var p = 0; p < rowNumber; p++) {
							var tempStr = ""; // 表示每一次截取的字符串
							var start = p * provideNumber; // 开始截取的位置
							var end = start + provideNumber; // 结束截取的位置
							// 此处特殊处理最后一行的索引值
							if (p == rowNumber - 1) {
								// 最后一次不换行
								tempStr = params.substring(start, paramsNameNumber);
							} else {
								// 每一次拼接字符串并换行
								tempStr = params.substring(start, end) + "\n";
							}
							newParamsName += tempStr; // 最终拼成的字符串
						}
			 
					} else {
						// 将旧标签的值赋给新标签
						newParamsName = params;
					}
					//将最终的字符串返回
					return newParamsName;
				},
			},
		
		},
		yAxis: {
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
			},
			
		},
		series: [{
			name: '数据集',
			type: 'bar',
			data: [
				{name:'2018-12-11 10:00',value:16430},
				{name:'2018-12-11 10:00',value:10342},
				{name:'2018-12-11 10:00',value:9337},
				{name:'2018-12-11 10:00',value:10887},
				{name:'2018-12-11 10:00',value:20331},
				{name:'2018-12-11 10:00',value:11002},
				{name:'2018-12-11 10:00',value:18439}
			],
			barWidth: '26',
			itemStyle: {
				normal: {
					barBorderRadius: [6,6,0,0]
				}
			},
			label: {
				normal: {
					show: true,
					interval: 0,
					position:'top',
					formatter:'{text|{c}}',
					rich: {
						value: {
							color: "#333",
							fontSize: 14,
							fontWeight:'bolder',
							padding: 3,
							//icon: 'image://./images/index/u1312.png'
						},
						text:{
							color: "#333",
							fontSize: 14,
							padding: [5,0, 5,0]
						}
					},
			
				
				},
			},
		}]
	};
	var echarts1 = echarts.init(document.getElementById('situation-echarts1'));
	echarts1.setOption(option1);

	//近五年数据总量统计
	var option5 = {
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
		color: ['#3bbffb','#43b368'],
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
			bottom: '50px',
			top: '40px',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			data: ['2015年', '2016年', '2017年', '2018年', '2019年'],
			axisLine: {
				lineStyle: {
					color: '#7a7a7a'
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
		yAxis: {
			type: 'value',
			axisLine: {
				lineStyle: {
					color: '#7a7a7a'
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
		
		series: [
			{
				name: '数据量',
				type: 'bar',
				data: [5, 10, 40, 130, 20, 80],
				barWidth: '26',
				itemStyle: {
					normal: {
						barBorderRadius: [6,6,0,0]
					}
				},
			},
			{
				name: '',
				type: 'line',
				data: [5, 10, 40, 130, 20, 80],
				itemStyle: {
					normal: {
				},
				lineStyle: {
					// color: 'red'
				}
			}
		}]
	}
	var echarts5 = echarts.init(document.getElementById('situation-echarts5'));
	echarts5.setOption(option5);
	//按系统-数据量
	// var option2 = {
	// 	tooltip: {
	// 		confine: true,
	// 		padding: [5, 10, 5, 10],
	// 		backgroundColor: '#fff',
	// 		borderColor: '#d1d1d1',
	// 		borderWidth: 1,
	// 		extraCssText: 'box-shadow: 1px 1px 3px rgba(45, 58, 50, 0.3);',
	// 		textStyle: {
	// 			color: '#333333'
	// 		}
	// 	},
	// 	color: ['#3bbffb'],
	// 	legend: {
	// 		selectedMode: false,
	// 		data: ['数据量'],
	// 		right: 18,
	// 		top: 0,
	// 		itemWidth: 32,
	// 		itemHeight: 11,
	// 		textStyle: {
	// 			fontSize: 14,
	// 			color: '#999',
	// 		}
	// 	},
	// 	grid: {
	// 		left: '2%',
	// 		right: '3%',
	// 		bottom: '15px',
	// 		top: '10px',
	// 		containLabel: true
	// 	},
	// 	xAxis: {
	// 		type: 'value',
	// 		axisLine: {
	// 			lineStyle: {
	// 				color: '#64adff'
	// 			}
	// 		},
	// 		axisTick: {
	// 			show: false
	// 		},
	// 		splitLine: {
	// 			show: false
	// 		},
	// 		axisLabel: {
	// 			textStyle: {
	// 				fontSize: 14,
	// 				color: '#333',
	// 			}
	// 		}
	// 	},
	// 	yAxis: {
	// 		type: 'category',
	// 		data: ['环境统计管理系统', '省环境信息资源中心', '市污染源应急指挥平台', '行政审批系统', '环境总体规划系统', '宜昌地理信息平台', '宜昌市数字化城市管理平台', '宜昌机动车排气检测系统', '移动执法系统'],
	// 		axisLine: {
	// 			lineStyle: {
	// 				color: '#64adff'
	// 			}
	// 		},
	// 		axisTick: {
	// 			show: false,
	// 			alignWithLabel: true
	// 		},
	// 		splitLine: {
	// 			show: false
	// 		},
	// 		axisLabel: {
	// 			textStyle: {
	// 				fontSize: 14,
	// 				color: '#333333',
	// 			}
	// 		}
	// 	},
	// 	series: [{
	// 		name: '数据量',
	// 		type: 'bar',
	// 		data: [5, 10, 40, 130, 20, 80],
	// 		barWidth: '26',
	// 		itemStyle: {
	// 			normal: {
	// 				barBorderRadius: [6,6,0,0]
	// 			}
	// 		},
	// 	}]
	// };
	// var echarts2 = echarts.init(document.getElementById('situation-echarts2'));
	// echarts2.setOption(option2);
	//按部门-数据集
	// var option3 = {
	// 	tooltip: {
	// 		confine: true,
	// 		padding: [5, 10, 5, 10],
	// 		backgroundColor: '#fff',
	// 		borderColor: '#d1d1d1',
	// 		borderWidth: 1,
	// 		extraCssText: 'box-shadow: 1px 1px 3px rgba(45, 58, 50, 0.3);',
	// 		textStyle: {
	// 			color: '#333333'
	// 		}
	// 	},
	// 	color: ['#3bbffb'],
	// 	legend: {
	// 		selectedMode: false,
	// 		data: ['数据集'],
	// 		right: 18,
	// 		top: 0,
	// 		itemWidth: 32,
	// 		itemHeight: 11,
	// 		textStyle: {
	// 			fontSize: 14,
	// 			color: '#999',
	// 		}
	// 	},
	// 	grid: {
	// 		left: '2%',
	// 		right: '3%',
	// 		bottom: '15px',
	// 		top: '10px',
	// 		containLabel: true
	// 	},
	// 	xAxis: {
	// 		type: 'value',
	// 		axisLine: {
	// 			lineStyle: {
	// 				color: '#64adff'
	// 			}
	// 		},
	// 		axisTick: {
	// 			show: false
	// 		},
	// 		splitLine: {
	// 			show: false
	// 		},
	// 		axisLabel: {
	// 			textStyle: {
	// 				fontSize: 14,
	// 				color: '#333',
	// 			}
	// 		}
	// 	},
	// 	yAxis: {
	// 		type: 'category',
	// 		data: ['市环境监测站', '市环境监察支队', '市环境保护研究所', '市大气中心', '市环境信息中心', '市环境信访办', '市水土中心', '市行政审批科', '市环境监控应急指挥中心'],
	// 		axisLine: {
	// 			lineStyle: {
	// 				color: '#64adff'
	// 			}
	// 		},
	// 		axisTick: {
	// 			show: false,
	// 			alignWithLabel: true
	// 		},
	// 		splitLine: {
	// 			show: false
	// 		},
	// 		axisLabel: {
	// 			textStyle: {
	// 				fontSize: 14,
	// 				color: '#333333',
	// 			}
	// 		}
	// 	},
	// 	series: [{
	// 		name: '数据集',
	// 		type: 'bar',
	// 		data: [40, 80, 30, 10, 50, 30],
	// 		barWidth: '26',
	// 		itemStyle: {
	// 			normal: {
	// 				barBorderRadius: [6,6,0,0]
	// 			}
	// 		},
	// 	}]
	// };
	// var echarts3 = echarts.init(document.getElementById('situation-echarts3'));
	// echarts3.setOption(option3);
	//按部门-数据量
	// var option4 = {
	// 	tooltip: {
	// 		confine: true,
	// 		padding: [5, 10, 5, 10],
	// 		backgroundColor: '#fff',
	// 		borderColor: '#d1d1d1',
	// 		borderWidth: 1,
	// 		extraCssText: 'box-shadow: 1px 1px 3px rgba(45, 58, 50, 0.3);',
	// 		textStyle: {
	// 			color: '#333333'
	// 		}
	// 	},
	// 	color: ['#3bbffb'],
	// 	legend: {
	// 		selectedMode: false,
	// 		data: ['数据量'],
	// 		right: 18,
	// 		top: 0,
	// 		itemWidth: 32,
	// 		itemHeight: 11,
	// 		textStyle: {
	// 			fontSize: 14,
	// 			color: '#999',
	// 		}
	// 	},
	// 	grid: {
	// 		left: '2%',
	// 		right: '3%',
	// 		bottom: '15px',
	// 		top: '10px',
	// 		containLabel: true
	// 	},
	// 	xAxis: {
	// 		type: 'value',
	// 		axisLine: {
	// 			lineStyle: {
	// 				color: '#64adff'
	// 			}
	// 		},
	// 		axisTick: {
	// 			show: false
	// 		},
	// 		splitLine: {
	// 			show: false
	// 		},
	// 		axisLabel: {
	// 			textStyle: {
	// 				fontSize: 14,
	// 				color: '#333',
	// 			}
	// 		}
	// 	},
	// 	yAxis: {
	// 		type: 'category',
	// 		data: ['市环境监测站', '市环境监察支队', '市环境保护研究所', '市大气中心', '市环境信息中心', '市环境信访办', '市水土中心', '市行政审批科', '市环境监控应急指挥中心'],
	// 		axisLine: {
	// 			lineStyle: {
	// 				color: '#64adff'
	// 			}
	// 		},
	// 		axisTick: {
	// 			show: false,
	// 			alignWithLabel: true
	// 		},
	// 		splitLine: {
	// 			show: false
	// 		},
	// 		axisLabel: {
	// 			textStyle: {
	// 				fontSize: 14,
	// 				color: '#333333',
	// 			}
	// 		}
	// 	},
	// 	series: [{
	// 		name: '数据量',
	// 		type: 'bar',
	// 		data: [20, 10, 4, 30, 10, 30],
	// 		barWidth: '11',
	// 		itemStyle: {
	// 			normal: {
	// 				barBorderRadius: 11
	// 			}
	// 		}
	// 	}]
	// };
	// var echarts4 = echarts.init(document.getElementById('situation-echarts4'));
	// echarts4.setOption(option4);
	
	//按部门-数据服务
	// var option6 = {
	// 	height: 180,
	// 	tooltip: {
	// 		formatter: function(params) {
	// 			var main = '2018.6.7<br/>最新服务条数：120条<br/>累计服务次数：50次';
	// 			return main;
	// 		}
	// 	},
	// 	series: [{
	// 		type: 'graph',
	// 		layout: 'circular',
	// 		circular: {
	// 			rotateLabel: true
	// 		},
	// 		symbolSize: 15,
	// 		//edgeSymbol: ['none', 'arrow'],
	// 		label: {
	// 			normal: {
	// 				show: true,
	// 				position: 'right',
	// 				color: '#333333',
	// 				fontSize: 14
	// 			}
	// 		},
	// 		lineStyle: {
	// 			normal: {
	// 				curveness: 0.3,
	// 				color: '#898989'
	// 			}
	// 		},
	// 		data: [{
	// 				name: '数据中心',
	// 				symbolSize: 22,
	// 				itemStyle: {
	// 					normal: {
	// 						color: '#ff7f50'
	// 					}
	// 				}
	// 			},
	// 			{
	// 				name: '市民e家',
	// 				itemStyle: {
	// 					normal: {
	// 						color: '#87cefa'
	// 					}
	// 				}
	// 			},
	// 			{
	// 				name: '市污染源监控平台',
	// 				itemStyle: {
	// 					normal: {
	// 						color: '#da70d6'
	// 					}
	// 				}
	// 			},
	// 			{
	// 				name: '市综合指挥平台',
	// 				itemStyle: {
	// 					normal: {
	// 						color: '#32cd32'
	// 					}
	// 				}
	// 			},
	// 			{
	// 				name: '市地理信息平台',
	// 				itemStyle: {
	// 					normal: {
	// 						color: '#6495ed'
	// 					}
	// 				}
	// 			},
	// 			{
	// 				name: '市环保局门户网站',
	// 				itemStyle: {
	// 					normal: {
	// 						color: '#ff69b4'
	// 					}
	// 				}
	// 			}
	// 		],
	// 		links: [{
	// 				source: '数据中心',
	// 				target: '市民e家'
	// 			},
	// 			{
	// 				source: '数据中心',
	// 				target: '市污染源监控平台'
	// 			},
	// 			{
	// 				source: '数据中心',
	// 				target: '市综合指挥平台'
	// 			},
	// 			{
	// 				source: '数据中心',
	// 				target: '市地理信息平台'
	// 			},
	// 			{
	// 				source: '数据中心',
	// 				target: '市环保局门户网站'
	// 			}
	// 		]
	// 	}]
	// };
	// var echarts6 = echarts.init(document.getElementById('situation-echarts6'));
	// echarts6.setOption(option6);
}