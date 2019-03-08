//土壤与固废
function indexSoil() {
	/*echarts*/
	//各区域疑似土壤地块数量统计
	var option1 = {
		tooltip: {
			confine: true,
			padding: [5, 10, 5, 10],
			backgroundColor: '#fff',
			borderColor: '#d1d1d1',
			borderWidth: 1,
			extraCssText: 'box-shadow: 1px 1px 3px rgba(45, 58, 50, 0.3);',
			textStyle: {
				color: '#333333',
				align: 'center'
			},
			formatter: '<span style="color:#666">2017年</span><br/>{b0}疑似污染地块数: {c0}个'
		},
		color: ['#13a6e3'],
		legend: {
			selectedMode: false,
			data: ['疑似污染地块'],
			show: false
		},
		grid: {
			left: '0%',
			right: '2%',
			bottom: '15px',
			top: '15px',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			data: ['夷陵区', '西陵区', '伍家岗区', '点军区', '高新区', '猇亭区', '宜都市', '枝江市', '当阳市', '远安县', '兴山县', '秭归县', '长阳县', '五峰县'],
			axisLine: {
				show: false
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
			name: '',
			type: 'value',
			show: false
		},
		series: [{
			name: '疑似污染地块',
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
	var echarts1 = echarts.init(document.getElementById('soil-echarts1'));
	echarts1.setOption(option1);
	//固废企业数量统计
	var formatterValue = 0; //固废企业数量统计
	var option2 = {
		color: ['#63cba6', '#4d8bf3'],
		legend: {
			selectedMode: false,
			data: ['危险废物企业', '一般工业废物企业'],
			show: false
		},
		series: [{
			type: 'pie',
			radius: ['68%', '80%'],
			hoverAnimation: false,
			avoidLabelOverlap: false,
			label: {
				normal: {
					position: 'center',
					show: true,
					textStyle: {
						fontSize: '14',
						color: '#333'
					},
					formatter: function(params) {
						if(params.dataIndex == 0) {
							formatterValue = params.value;
							return '';
						} else {
							var num = formatterValue + params.value;
							var main = '{numstyle|' + num + '家}\n固废企业数量统计';
							return main;
						}
					},
					rich: {
						numstyle: {
							color: '#333',
							padding: [20, 0, 0, 0],
							fontSize: 18,
							fontWeight: 'bold'
						}
					}
				}
			},
			data: [{
					value: 159,
					name: '危险废物企业'
				},
				{
					value: 38,
					name: '一般工业废物企业'
				}
			]
		}]
	};
	var echarts2 = echarts.init(document.getElementById('soil-echarts2'));
	echarts2.setOption(option2);
	//各区域固废产生量统计
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
			formatter: '<span style="color:#666;padding-left:60px;">2017年</span><br/>{b0}一般固废产生量: {c0}吨<br/>{b1}危险废物产生量: {c1}吨'
		},
		color: ['#4d8bf3', '#62caa4'],
		legend: {
			selectedMode: false,
			data: ['一般固废产生量', '危险废物产生量'],
			show: false
		},
		grid: {
			left: '0%',
			right: '2%',
			bottom: '15px',
			top: '15px',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			data: ['夷陵区', '西陵区', '伍家岗区', '点军区', '高新区', '猇亭区', '宜都市', '枝江市', '当阳市', '远安县', '兴山县', '秭归县', '长阳县', '五峰县'],
			axisLine: {
				show: false
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
			name: '',
			type: 'value',
			show: false
		},
		series: [{
			name: '一般固废产生量',
			type: 'bar',
			data: [5, 10, 4, 3, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5],
			barWidth: '22',
			itemStyle: {
				normal: {
					barBorderRadius: 22
				}
			},
			stack: '产生量'
		}, {
			name: '危险废物产生量',
			type: 'bar',
			data: [5, 2, 4, 3, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5],
			barWidth: '22',
			itemStyle: {
				normal: {
					barBorderRadius: 22
				}
			},
			stack: '产生量'
		}]
	};
	var echarts3 = echarts.init(document.getElementById('soil-echarts3'));
	echarts3.setOption(option3);
}