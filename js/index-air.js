//空气质量
function indexAir() {
	/**  绘制显示进度的饼图**/
	drawpollutionEcharts('138', 24, '#fff200');
	//默认设置echarts的宽度
	$('.air-echarts1').width($('.air-info3').width());
	/*      线图的相关的tab切换    */
	//初始化：污染物list的下标
	var activeIndex = 0;
	//初始化：'去年同比'和'上月环比'下标
	var activeType = 1;
	$('.air-info-tab li').click(function () {
		//重置污染物list的下标
		activeIndex = parseInt($(this).index());
		$(this).addClass('active').siblings('li').removeClass('active');
		//根据activeIndex和activeType展示同比和环比来重组option
		switch (activeIndex) {
			case 0:
				newOption = getAirOption(LineObj0, activeType )
				break;
			case 1:
				newOption = getAirOption(LineObj1, activeType)
				break;
			case 2:
				newOption = getAirOption(LineObj2, activeType )
				break;
			case 3:
				newOption = getAirOption(LineObj3, activeType)
				break;
			case 4:
				newOption = getAirOption(LineObj4, activeType)
				break;
			case 5:
				newOption = getAirOption(LineObj5, activeType)
				break;
			default:
				newOption = getAirOption(LineObj6, activeType)
				break;
		}
		
		echarts1.setOption(newOption);
	})
	$('.air-info-type li').click(function () {
		//重置'去年同比'和'上月环比'下标
		activeType = parseInt($(this).index()) + 1;
	
		$(this).addClass('active').siblings('li').removeClass('active');
		var newOption = null;
		//根据activeIndex和activeType展示同比和环比来重组option
		switch (activeIndex) {
			case 0:
				newOption = getAirOption(LineObj0, activeType )
				break;
			case 1:
				newOption = getAirOption(LineObj1, activeType)
				break;
			case 2:
				newOption = getAirOption(LineObj2, activeType )
				break;
			case 3:
				newOption = getAirOption(LineObj3, activeType)
				break;
			case 4:
				newOption = getAirOption(LineObj4, activeType)
				break;
			case 5:
				newOption = getAirOption(LineObj5, activeType)
				break;
			default:
				newOption = getAirOption(LineObj6, activeType)
				break;

		}
		echarts1.setOption(newOption);
	})
	/*echarts*/
	//AQI
	var LineObj0 = { //！！！！！！！！！！！！！！需要后台传入的数据
		name: '',
		xData: ['04-10', '04-11', '04-12', '04-13', '04-14', '04-15', '04-16', '04-17', '04-18'],
		unit: "",
		targetValue: '', //目标值，如果为无目标值就不写此属性
		seriesData: [{
				name: "AQI当前值",
				arr: [5, 15, 4, 13, 12, 13, 14, 15, 16, 17, 18, 9, 10, 15]
			},
			{
				name: "AQI去年同期",
				arr: [7, 8, 19, 13, 8, 10, 4, 3, 2, 3, 4, 5, 6, 5]
			},
			{
				name: "AQI上月同期",
				arr: [5, 6, 7, 13, 19, 8, 10, 4, 3, 2, 3, 4, 10, 5]
			}
		]
	}
	//参数1：数据来源；参数2：设置同比和环比切换显示的类型下标：分别为属性 1 和 2
	var option = getAirOption(LineObj0, 1);
	var echarts1 = echarts.init(document.getElementById('air-echarts1'));
	echarts1.setOption(option);
	//PM2.5
	var LineObj1 = { //！！！！！！！！！！！！！！需要后台传入的数据
		name: '',
		xData: ['04-10', '04-11', '04-12', '04-13', '04-14', '04-15', '04-16', '04-17', '04-18'],
		unit: "单位：ug/m3",
		targetValue: 10, //目标值，如果为无目标值就不写此属性
		seriesData: [{
				name: "PM2.5当前值",
				arr: [15, 16, 17, 18, 9, 5, 15, 4, 13, 12, 13, 14, 10, 15]
			},
			{
				name: "PM2.5去年同期",
				arr: [7, 8, 19, 10, 8, 10, 4, 3, 2, 3, 4, 5, 6, 5]
			},
			{
				name: "PM2.5上月同期",
				arr: [5, 6, 7, 8, 19, 8, 10, 4, 3, 2, 3, 4, 10, 5]
			}
		]
	}
	//PM10
	var LineObj2 = { //！！！！！！！！！！！！！！需要后台传入的数据
		name: '',
		xData: ['04-10', '04-11', '04-12', '04-13', '04-14', '04-15', '04-16', '04-17', '04-18'],
		unit: "单位：ug/m3",
		targetValue: 10, //目标值，如果为无目标值就不写此属性
		seriesData: [{
				name: "PM10当前值",
				arr: [5, 15, 4, 13, 12, 13, 14, 15, 16, 17, 18, 9, 10, 15]
			},
			{
				name: "PM10去年同期",
				arr: [7, 8, 19, 10, 8, 10, 4, 3, 2, 3, 4, 5, 6, 5]
			},
			{
				name: "PM10上月同期",
				arr: [5, 6, 7, 8, 19, 8, 10, 4, 3, 2, 3, 4, 10, 5]
			}
		]
	}
	//CO
	var LineObj3 = { //！！！！！！！！！！！！！！需要后台传入的数据
		name: '',
		xData: ['04-10', '04-11', '04-12', '04-13', '04-14', '04-15', '04-16', '04-17', '04-18'],
		unit: "单位：mg/m3",
		targetValue: 10, //目标值，如果为无目标值就不写此属性
		seriesData: [{
				name: "CO当前值",
				arr: [5, 15, 4, 13, 12, 13, 14, 15, 16, 17, 18, 9, 10, 15]
			},
			{
				name: "CO去年同期",
				arr: [10, 4, 3, 2, 3, 7, 8, 19, 10, 8, 4, 5, 6, 5]
			},
			{
				name: "CO上月同期",
				arr: [5, 6, 7, 8, 19, 8, 10, 4, 3, 2, 3, 4, 10, 5]
			}
		]
	}
	//NO2
	var LineObj4 = { //！！！！！！！！！！！！！！需要后台传入的数据
		name: '',
		xData: ['04-10', '04-11', '04-12', '04-13', '04-14', '04-15', '04-16', '04-17', '04-18'],
		unit: "单位：ug/m3",
		targetValue: 10, //目标值，如果为无目标值就不写此属性
		seriesData: [{
				name: "NO2当前值",
				arr: [5, 15, 4, 13, 12, 13, 14, 15, 16, 17, 18, 9, 10, 15]
			},
			{
				name: "NO2去年同期",
				arr: [7, 8, 19, 10, 8, 10, 4, 3, 2, 3, 4, 5, 6, 5]
			},
			{
				name: "NO2上月同期",
				arr: [19, 8, 10, 4, 3, 2, 5, 6, 7, 8, 3, 4, 10, 5]
			}
		]
	}
	//SO2
	var LineObj5 = { //！！！！！！！！！！！！！！需要后台传入的数据
		name: '',
		xData: ['04-10', '04-11', '04-12', '04-13', '04-14', '04-15', '04-16', '04-17', '04-18'],
		unit: "单位：ug/m3",
		targetValue: 10, //目标值，如果为无目标值就不写此属性
		seriesData: [{
				name: "SO2当前值",
				arr: [5, 15, 4, 13, 12, 13, 14, 15, 16, 17, 18, 9, 10, 15]
			},
			{
				name: "SO2去年同期",
				arr: [7, 8, 19, 10, 8, 10, 4, 3, 2, 3, 4, 5, 6, 5]
			},
			{
				name: "SO2上月同期",
				arr: [4, 3, 2, 3, 4, 5, 6, 7, 8, 19, 8, 10, 10, 5]
			}
		]
	}
	//O3
	var LineObj6 = { //！！！！！！！！！！！！！！需要后台传入的数据
		name: '',
		xData: ['04-10', '04-11', '04-12', '04-13', '04-14', '04-15', '04-16', '04-17', '04-18'],
		unit: "单位：ug/m3",
		targetValue: 10, //目标值，如果为无目标值就不写此属性
		seriesData: [{
				name: "O3当前值",
				arr: [15, 16, 17, 18, 9, 5, 15, 4, 13, 12, 13, 14, 10, 15]
			},
			{
				name: "O3去年同期",
				arr: [7, 8, 19, 10, 8, 10, 4, 3, 2, 3, 4, 5, 6, 5]
			},
			{
				name: "O3上月同期",
				arr: [5, 6, 7, 8, 19, 8, 10, 4, 3, 2, 3, 4, 10, 5]
			}
		]
	}
}

/**  根据数据 初始化线图的option
 * @param {obj} Obj 设置图形展示的所有相关数据的对象
 * @param {Number} val 设置同比和环比切换显示的类型：为属性seriesData的 1 和 2
 */
function getAirOption(obj, i) {
	var index=parseInt(i);

	var seriesData=obj['seriesData'];
	var legendArr=[];
	//若有目标值时，线图的图例上显示'目标值'项；若没有目标值时，线图的图例上不显示'目标值'项；
	if (!!obj.targetValue) { //当此属性不为‘’/0/null或不存在时
		legendArr = ['目标值', seriesData[0].name,seriesData[index].name]
	} else {
		legendArr = [seriesData[0].name, seriesData[index].name]
	}
	var option = {
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
			formatter: function (params) {
				var labelType = null;
				if (index === 1) {
					labelType = '同比去年';
				} else {
					labelType = '环比上月';
				}
				var increase = (params[0].value - params[1].value) / params[1].value;
				increase = parseFloat(increase * 100).toFixed(1);
				var main = null;
				//提示框第一行显示内容样式设置
				if (increase > 0) {
					main = params[0].name + labelType + '<img src="images/index/jt_icon.png" style="vertical-align: -1px;margin: 0 2px;"/>' + increase + '%';
				} else if (increase < 0) {
					main =  params[0].name +labelType + '<img src="images/index/jt_icon2.png" style="vertical-align: -1px;margin: 0 2px;"/>' + increase + '%';
				} else {
					main =  params[0].name +labelType + '持平';
				}
				//提示框第二行显示内容样式设置
				main += '<br><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#3bbffb;margin-right:6px;"></span>' + params[0].seriesName + '：' + params[0].value;
				//提示框第三行显示内容样式设置
				main += '<br><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#e6ce2c;margin-right:6px;"></span>' + params[1].seriesName + '：' + params[1].value
				return main;
			}
		},
		color: ['#43b368', '#3bbffb', '#e6ce2c'],
		legend: {
			selectedMode: false,
			data: legendArr,
			right: 18,
			top: 18,
			itemGap: 20,
			itemHeight: 9,
			textStyle: {
				fontSize: 14,
				color: '#999',
			}
		},
		grid: {
			left: '4%',
			right: '4%',
			bottom: '30px',
			top: '85px',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			data: obj.xData,
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
			name: obj.unit,
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
			name: seriesData[0].name,
			type: 'line',
			data:seriesData[0].arr,
			smooth: true,
			symbolSize: 0
		}, {
			name:seriesData[index].name,
			type: 'line',
			data:seriesData[index].arr,
			smooth: true,
			symbolSize: 0
		}]

	};
	//若有目标值时，线图增加显示目标值的黄色虚线增加到series中，若没有目标值时，线图不添加此虚线的设置；
	if (!!obj.targetValue) {
		var obj ={
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
					yAxis:obj.targetValue,
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
		}
		option.series.push(obj);
	}
	return option;
}

//将分数改为百分比的格式
function transToRadio(num) {
	return parseFloat(num * 100).toFixed(1);
}