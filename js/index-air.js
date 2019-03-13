//空气质量
function indexAir() {
	/**  绘制显示进度的饼图**/
	drawpollutionEcharts('138', 24, '#fff200');
	//默认设置echarts的宽度
	$('.air-echarts1').width($('.air-info3').width());
	/*      线图的相关的tab切换    */
	//污染物list的下标
	var activeIndex=0;
	//展示'去年同比'和'上月环比'下标
	var activeType=0;
	$('.air-info-tab li').click(function() {
		var index = $(this).index();
		//重置污染物list的下标
		activeIndex= $(this).index();
		$(this).addClass('active').siblings('li').removeClass('active');
		//根据activeIndex和activeType展示同比和环比来重组option
		switch(activeIndex){
			case 0:return getAirOption(LineObj0,activeType+1)
					break;
			case 1:return getAirOption(LineObj1,activeType+1)
				   break;
			case 2:return getAirOption(LineObj2,activeType+1)
				   break;
			case 3:return getAirOption(LineObj3,activeType+1)
				   break;
			case 4:return getAirOption(LineObj4,activeType+1)
				   break;
			case 5:return getAirOption(LineObj5,activeType+1)
				   break;
			case 6:return getAirOption(LineObj6,activeType+1)
			       break;
			       
		}
		var newOption= getAirOption('LineObj'+activeIndex,activeType+1);
		echarts1.setOption(newOption);
	})
	$('.air-info-type li').click(function() {
		var index = $(this).index();
		//重置'去年同比'和'上月环比'下标
		activeType= $(this).index();
		$(this).addClass('active').siblings('li').removeClass('active');
		var newOption=null;
		///根据activeIndex和activeType展示同比和环比来重组option
		switch(activeIndex){
			case 0:return newOption=getAirOption(LineObj0,activeType+1)
					break;
			case 1:return newOption=getAirOption(LineObj1,activeType+1)
				   break;
			case 2:return newOption=getAirOption(LineObj2,activeType+1)
				   break;
			case 3:return newOption=getAirOption(LineObj3,activeType+1)
				   break;
			case 4:return newOption=getAirOption(LineObj4,activeType+1)
				   break;
			case 5:return newOption=getAirOption(LineObj5,activeType+1)
				   break;
			case 6:return newOption=getAirOption(LineObj6,activeType+1)
			       break;
			       
		}
		echarts1.setOption(newOption);
	})
	/*echarts*/
	//AQI
	var LineObj0={               //！！！！！！！！！！！！！！需要后台传入的数据
		name:'',
		xData:['04-10', '04-11', '04-12', '04-13', '04-14', '04-15', '04-16', '04-17', '04-18'],
		unit:"",
		targetValue:'',//目标值，如果为无目标值就不写此属性
        seriesData:[
			{name:"2018年",arr:[5, 15, 4, 13, 12, 13, 14, 15, 16, 17, 18, 9, 10, 15]},
			{name:"2017年",arr:[ 7, 8, 19, 10, 8, 10, 4, 3, 2, 3, 4, 5, 6, 5]},
			{name:"同期上月",arr:[ 5, 6, 7, 8, 19,8, 10, 4, 3, 2, 3, 4, 10, 5]}
		]
	}
	//参数1：数据来源；参数2：设置同比和环比切换显示的类型下标：分别为属性 1 和 2
	var option=getAirOption(LineObj0,1);
	var echarts1 = echarts.init(document.getElementById('air-echarts1'));
	echarts1.setOption(option);
	//PM2.5
	var LineObj1={               //！！！！！！！！！！！！！！需要后台传入的数据
		name:'',
		xData:['04-10', '04-11', '04-12', '04-13', '04-14', '04-15', '04-16', '04-17', '04-18'],
		unit:"单位：ug/m3",
		targetValue:10,//目标值，如果为无目标值就不写此属性
        seriesData:[
			{name:"2018年",arr:[ 15, 16, 17, 18, 9,5, 15, 4, 13, 12, 13, 14, 10, 15]},
			{name:"2017年",arr:[ 7, 8, 19, 10, 8, 10, 4, 3, 2, 3, 4, 5, 6, 5]},
			{name:"同期上月",arr:[ 5, 6, 7, 8, 19,8, 10, 4, 3, 2, 3, 4, 10, 5]}
		]
	}
	//PM10
	var LineObj2={               //！！！！！！！！！！！！！！需要后台传入的数据
		name:'',
		xData:['04-10', '04-11', '04-12', '04-13', '04-14', '04-15', '04-16', '04-17', '04-18'],
		unit:"单位：ug/m3",
		targetValue:10,//目标值，如果为无目标值就不写此属性
        seriesData:[
			{name:"2018年",arr:[5, 15, 4, 13, 12, 13, 14, 15, 16, 17, 18, 9, 10, 15]},
			{name:"2017年",arr:[ 7, 8, 19, 10, 8, 10, 4, 3, 2, 3, 4, 5, 6, 5]},
			{name:"同期上月",arr:[ 5, 6, 7, 8, 19,8, 10, 4, 3, 2, 3, 4, 10, 5]}
		]
	}
	//CO
	var LineObj3={               //！！！！！！！！！！！！！！需要后台传入的数据
		name:'',
		xData:['04-10', '04-11', '04-12', '04-13', '04-14', '04-15', '04-16', '04-17', '04-18'],
		unit:"单位：mg/m3",
		targetValue:10,//目标值，如果为无目标值就不写此属性
        seriesData:[
			{name:"2018年",arr:[5, 15, 4, 13, 12, 13, 14, 15, 16, 17, 18, 9, 10, 15]},
			{name:"2017年",arr:[ 7, 8, 19, 10, 8, 10, 4, 3, 2, 3, 4, 5, 6, 5]},
			{name:"同期上月",arr:[ 5, 6, 7, 8, 19,8, 10, 4, 3, 2, 3, 4, 10, 5]}
		]
	}
	//NO2
	var LineObj4={               //！！！！！！！！！！！！！！需要后台传入的数据
		name:'',
		xData:['04-10', '04-11', '04-12', '04-13', '04-14', '04-15', '04-16', '04-17', '04-18'],
		unit:"单位：ug/m3",
		targetValue:10,//目标值，如果为无目标值就不写此属性
        seriesData:[
			{name:"2018年",arr:[5, 15, 4, 13, 12, 13, 14, 15, 16, 17, 18, 9, 10, 15]},
			{name:"2017年",arr:[ 7, 8, 19, 10, 8, 10, 4, 3, 2, 3, 4, 5, 6, 5]},
			{name:"同期上月",arr:[ 5, 6, 7, 8, 19,8, 10, 4, 3, 2, 3, 4, 10, 5]}
		]
	}
	//SO2
	var LineObj5={               //！！！！！！！！！！！！！！需要后台传入的数据
		name:'',
		xData:['04-10', '04-11', '04-12', '04-13', '04-14', '04-15', '04-16', '04-17', '04-18'],
		unit:"单位：ug/m3",
		targetValue:10,//目标值，如果为无目标值就不写此属性
        seriesData:[
			{name:"2018年",arr:[5, 15, 4, 13, 12, 13, 14, 15, 16, 17, 18, 9, 10, 15]},
			{name:"2017年",arr:[ 7, 8, 19, 10, 8, 10, 4, 3, 2, 3, 4, 5, 6, 5]},
			{name:"同期上月",arr:[ 5, 6, 7, 8, 19,8, 10, 4, 3, 2, 3, 4, 10, 5]}
		]
	}
	//O3
	var LineObj6={               //！！！！！！！！！！！！！！需要后台传入的数据
		name:'',
		xData:['04-10', '04-11', '04-12', '04-13', '04-14', '04-15', '04-16', '04-17', '04-18'],
		unit:"单位：ug/m3",
		targetValue:10,//目标值，如果为无目标值就不写此属性
        seriesData:[
			{name:"2018年",arr:[5, 15, 4, 13, 12, 13, 14, 15, 16, 17, 18, 9, 10, 15]},
			{name:"2017年",arr:[ 7, 8, 19, 10, 8, 10, 4, 3, 2, 3, 4, 5, 6, 5]},
			{name:"同期上月",arr:[ 5, 6, 7, 8, 19,8, 10, 4, 3, 2, 3, 4, 10, 5]}
		]
	}
}
/**  绘制显示进度的饼图
   * @param {obj} Obj 设置图形展示的所有相关数据的对象
   * @param {Number} val 设置同比和环比切换显示的类型：为属性seriesData的 1 和 2
*/
function getAirOption(obj,i){
	console.log(!!obj.targetValue);
	   if(!!obj.targetValue){//当对象存在时且数据不为‘’/0/null时
			legendData= ['目标值',obj.seriesData[0].name, obj.seriesData[i].name]
	    }else{
			legendData= [obj.seriesData[0].name, obj.seriesData[i].name]
		}
		console.log(legendData);
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
			formatter: function(params) {
				
				var increase=(params[0].value-params[1].value)/params[1].value;
				increase=parseFloat(increase*100).toFixed(1);
				var main=null;
				if(increase>0){
                    main = params[0].name + '同比去年<img src="images/index/jt_icon.png" style="vertical-align: -1px;margin: 0 2px;"/>'+increase+'%';
				}else if(increase<0){
					main = params[0].name + '同比去年<img src="images/index/jt_icon2.png" style="vertical-align: -1px;margin: 0 2px;"/>'+increase+'%';
				}else{
                    main = params[0].name + '同比去年持平';
				}
				for(var i = 0; i < params.length; i++) {
					main += '<br>' + params[i].marker + params[i].seriesName + '：' + params[i].value
				}
				return main;
			}
		},
		color: ['#43b368', '#3bbffb', '#e6ce2c'],
		legend: {
			selectedMode: false,
			data:legendData,
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
			right: '4%',
			bottom: '15px',
			top: '75px',
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
			name:obj.seriesData[0].name,
			type: 'line',
			data: obj.seriesData[0].arr,
			smooth: true,
			symbolSize: 0
		}, {
			name: obj.seriesData[i].name,
			type: 'line',
			data: obj.seriesData[i].arr,
			smooth: true,
			symbolSize: 0
		}] 
		
	};
	if(!!obj.targetValue){
	 	var obj={
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
					yAxis: obj.targetValue,
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
function transToRadio(num){
    return parseFloat(num*100).toFixed(1);
}