/**  绘制显示进度的饼图
  
   * @param {String} text 设置中间文字
   * @param {Number} val 设置数值百分率
   * @param {String} bg 设置污染率的颜色
*/
function drawpollutionEcharts(text, val, bg){
    const value1 = val * 75 / 100;
    const value2 = 75 - value1;
    const num1 = value1 / 2;
    const num2 = value2 / 2;
    const series = [];
    for (let i = 0; i < num1; i++) {
      series.push(setValue(1, bg), setValue(1, 'transparent'));
    }
    for (let i = 0; i < num2; i++) {
      series.push(setValue(1, '#85cff6'), setValue(1, 'transparent'));
    }
    series.push(setValue(25, 'transparent'));
    const option = {
      title: {
        x: '44%',
        y: '33%',
        subtext: text,
        textAlign: 'center',
        subtextStyle: {
          fontSize:30,
          color: '#fff'
        }
      },
      series: [
		{
			name: '',
			type: 'pie',
			radius: ['74%', '75%'],
			center: ['50%', '50%'],
			startAngle: 225,
			hoverAnimation: false,
			legendHoverLink: false,
			labelLine: {
			  normal: {
				show: false
			  }
			},
			emphasis: {
			  show: false
			},
			data: [setValue(75, '#ffffff'), setValue(25, 'transparent')]
		  },
		{
        name: '',
        type: 'pie',
        radius: ['82%', '93%'],
        center: ['50%', '50%'],
        startAngle: 225,
        hoverAnimation: true,
        legendHoverLink: false,
        labelLine: {
          normal: {
            show: false
          }
        },
        emphasis: {
          show: false
        },
        data: series
	  },
	   {
        name: '',
        type: 'pie',
        radius: ['98%', '99%'],
        center: ['50%', '50%'],
        startAngle: 225,
        hoverAnimation: false,
        legendHoverLink: false,
        labelLine: {
          normal: {
            show: false
          }
        },
        emphasis: {
          show: false
        },
        data: [setValue(75, '#ffffff'), setValue(25, 'transparent')]
      }]
    };

    const pollutionEcharts = echarts.init(
     document.getElementById('air-radio-canvas')
    );
    pollutionEcharts.setOption(option);
}
/**
* 设置echarts显示对象
* @param {numbr} value 值
* @param {String} color 颜色
*/
function setValue(value, color) {
 return {
   value:value,
   itemStyle: {
	 normal: {
	   color:color,
	 }
   }
 };
}