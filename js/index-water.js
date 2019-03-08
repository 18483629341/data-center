//水环境
function indexWater() {
	/*echarts*/
	//水环境月度总体概况
	var option1 = {
		legend: {
			selectedMode: false,
			data: ['I类', 'II类', 'III类', 'IV类', 'V类', '劣V类'],
			show: false
		},
		color: ['#9ff3ff', '#1ebef9', '#5ec95e', '#ffcb16', '#fa7b14', '#ff483f'],
		series: [{
			name: '-',
			type: 'pie',
			radius: ['66%', '83%'],
			avoidLabelOverlap: false,
			hoverAnimation: false,
			label: {
				normal: {
					show: true,
					textStyle: {
						fontSize: '14',
						color: '#333333'
					},
					formatter: "{b} ({d}%)"
				}
			},
			data: [{
					value: 335,
					name: 'I类'
				},
				{
					value: 310,
					name: 'II类'
				},
				{
					value: 234,
					name: 'III类'
				},
				{
					value: 135,
					name: 'IV类'
				},
				{
					value: 148,
					name: 'V类'
				},
				{
					value: 135,
					name: '劣V类'
				}
			]
		}]
	};
	var echarts1 = echarts.init(document.getElementById('water-echarts1'));
	echarts1.setOption(option1);
	//监测河流水质现状
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
			formatter: '{b0}达标断面数: {c0}个<br/>{b1}超标断面数: {c1}个'
		},
		color: ['#5ec95e', '#faaa43'],
		legend: {
			selectedMode: false,
			data: ['达标', '超标'],
			right: 15,
			top: 6,
			itemGap: 20,
			textStyle: {
				fontSize: 14,
				color: '#999',
			}
		},
		grid: {
			left: '0%',
			right: '1%',
			bottom: '15px',
			top: '40px',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			data: ['长江干流', '清江', '沮漳河', '香溪河', '运河', '善溪冲', '桥边河', '柏临河', '下牢溪', '茅坪河', '沙河', '叱溪河', '九畹溪', '青干河', '太平溪', '童庄河', '沮漳河', '香溪河', '运河', '善溪冲', '下牢溪', '茅坪河'],
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
			show: false,
			type: 'value',
		},
		series: [{
			name: '达标',
			type: 'bar',
			data: [5, 15, 4, 3, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 5, 15, 4, 3, 2, 3, 4, 5],
			stack: 'sum',
			barWidth: '22',
			itemStyle: {
				normal: {
					barBorderRadius: 22,
					label: {
						show: true,
						position: 'inside',
					}
				}
			}
		}, {
			name: '超标',
			type: 'bar',
			data: [5, 10, 4, 3, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, '-', '-', '-', '-', '-', '-', '-', '-'],
			stack: 'sum',
			barWidth: '22',
			itemStyle: {
				normal: {
					barBorderRadius: 22,
					label: {
						show: true,
						position: 'inside',
					}
				}
			}
		}]
	};
	var echarts2 = echarts.init(document.getElementById('water-echarts2'));
	echarts2.setOption(option2);
}