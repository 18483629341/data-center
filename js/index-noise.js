//土壤与固废
function indexNoise() {
	/*echarts*/
		//交通噪音统计
		var waterData1=[ //!!!!!需要后台传入的数据
			{value:68.4, name:'地表水达标数量'},
			{value:15, name:'地表水非达标数量'}
		]
		var option21=setOptionfun(['#f07810','#f5f4e8'],'{value|{c}dB}\n{text|平均等效声级}',waterData1);
		var myChart21 = echarts.init(document.getElementById('noise-echarts1'));
		myChart21.setOption(option21);
		PieAutoHighLight(myChart21,waterData1);
		//区域噪声声源构成占比
	var option2 = {
		color: ['#32cd32', '#87cefa', '#ff7f50', '#bf62bb', '#fa7b14', '#ff483f'],
		legend: {
			selectedMode: false,
			data: [{
					name: '生活',
					icon: 'image://./images/index/echartsNoise1.png'
				},
				{
					name: '交通',
					icon: 'image://./images/index/echartsNoise2.png'
				},
				{
					name: '施工',
					icon: 'image://./images/index/echartsNoise3.png'
				},
				{
					name: '工业',
					icon: 'image://./images/index/echartsNoise4.png'
				}
			],
			right: 20,
			top: 80,
			width:60,
			itemGap: 20,
			itemWidth: 30,
			itemHeight: 13,
			textStyle: {
				fontSize: 14,
				//color: '#999',
			}
		},
		tooltip:{
			
				show: true,
				backgroundColor:'rgba(0,0,0,0.5)',
				padding:[3,8,3,8],
				textStyle: {
					fontSize: '14',
					color: '#fff',
				},
				formatter: "{b}<br/>声源占比{d}%<br/>平均等效声级：{c}dB"
		
		},
		series: [{
			name: '-',
			type: 'pie',
			center:['40%','50%'],
			radius: ['0%', '65%'],
			avoidLabelOverlap: false,
			hoverAnimation: false,
			label: {
				normal: {
					show: true,
					formatter: "{b}"

				},
				emphasis: {
					show: true,
				}
			},
			data: [{
					value: 54.5,
					name: '生活'
				},
				{
					value: 34.5,
					name: '交通'
				},
				{
					value: 21.5,
					name: '施工'
				},
				{
					value: 15.6,
					name: '工业'
				}
			]
		}]
	};
	var echarts2 = echarts.init(document.getElementById('noise-echarts2'));
	echarts2.setOption(option2);
	var option3 = {
		color:['#48e0e4','#e40475'],
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		legend: {
			selectedMode: false,
			data: ['昼间', '夜间'],
			
			bottom: 6,
			itemGap: 75,
			itemWidth:40,
			textStyle: {
				fontSize: 14,
				color: '#999',
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '50px',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			data: ['疗养区','居民区','混合区','工业区','交通干线上市两侧区'],
			split:{
				lineStyle:{
					color:'#c9c9c9'
				}
			},
			axisLine:{
				lineStyle:{
					color:'#73a0c1'
				}
			}
		},
		yAxis: {
			name:"(dB)",
			type: 'value',
			boundaryGap: [0, 0.2],
			max:80,
			axisLine:{
				lineStyle:{
					color:'#73a0c1'
				}
			}
		},
		
		series: [
			{
				name: '昼间',
				type: 'bar',
				barWidth:18,
				itemStyle: {
					normal: {
						barBorderRadius: [9,9,0,0],
					}
				},
				data: [43, 50, 55, 61, 64]
			},
			{
				name: '夜间',
				type: 'bar',
				barWidth:18,
				itemStyle: {
					normal: {
						barBorderRadius: [9,9,0,0],
					}
				},
				data: [41, 46, 48, 57, 61]
			}
		]
	};
	var echarts3 = echarts.init(document.getElementById('noise-echarts3'));
	echarts3.setOption(option3);
}
// 指定饼状图的配置项和数据
function setOptionfun(colors, format, data){
	//达标的数据和不达标的数据组成的数组     //!!!!!!!需要后台引入的数据
	var option = {
		 grid: {
			 top: 0,
		 },
		 color: colors,
		 //backgroundColor:'#eec60a',
		 series: [
			{
				 name: '访问来源',
				 type: 'pie',
				 startAngle: 0,
				 center: ['50%', '50%'],
				 radius: ['75%', '90%'],
				 avoidLabelOverlap: false,
				 hoverAnimation:false,
				 startAngle:0,
				 clockwise:false,

				 label: {
 
					 normal: {
						 show: false,
						 position: 'center',
						 color: '#ffffff',
						 align: 'center',
						 verticalAlign: 'middle',
						 formatter:format ,
						 rich: {
							 value: {
								 color: "#fff",
								 fontSize: 30,
								 fontWeight:'bolder',
								 padding: 3
							 },
							 text:{
								 color: "#fff",
								 fontSize: 14,
								 padding: [5,0, 5,0]
							 }
						 },
					 },
					 emphasis: {
						 show: true,
						 
					 }
				 },
				 labelLine: {
					 normal: {
						 show: false,
					 }
				 },
				 data: data
			 }
 
		 ]
	 };
 return option;
 }
 //至少高亮显示一个饼图中的一个item
 function PieAutoHighLight(chartNum,data){
	 setTimeout(function() {
		 chartNum.dispatchAction({
			 type: 'highlight',
			 seriesIndex: 0,
			 dataIndex: 0
		 });
	 
		 chartNum.on('mouseover', function(params) {
			 console.log('over');
			 if (params.name == data[0].name) {
				 chartNum.dispatchAction({
					 type: 'highlight',
					 seriesIndex: 0,
					 dataIndex: 0
				 });
			 } else {
				 chartNum.dispatchAction({
					 type: 'downplay',
					 seriesIndex: 0,
					 dataIndex: 0
				 });
			 }
		 });
	 
		 chartNum.on('mouseout', function(params) {
			 console.log('out');
			 chartNum.dispatchAction({
				 type: 'highlight',
				 seriesIndex: 0,
				 dataIndex: 0
			 });
		 });
	 }, 1000);
 }