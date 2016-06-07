 $(document).ready(function () {
    div_object = $("#map");
    div_object.height(Math.round(div_object.width()*0.5))
    map();
});
function map() {
    var map_chart = echarts.init(document.getElementById('map'));
    map_option = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['好评数','差评数','中性评论数']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['May_2015',	'Jun_2015','	Jul_2015','	Aug_2015','	Sep_2015','	Oct_2015','	Nov_2015','	Dec_2015','	Jan_2016','	Feb_2016','	Mar_2016','	Apr_2016'
]
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'好评数',
            type:'line',
            stack: '数目',
            data:[1,	2,3,	2,3,23	,30	,33,	18,	24,	24,	77
]
        },
        {
            name:'差评数',
            type:'line',
            stack: '数目',
            data:[3,	2,	4,11	,5,28,10,16,	14	,10	,11	,30
]
        },
        
        {
            name:'中性评论数',
            type:'line',
            stack: '数目',
            data:[0,	0,	0,	1,	3,	11,	5,	1,	4,	6,	5,	19	
]
        }
    ]
};             

    map_chart.setOption(map_option);
}



 $(document).ready(function () {
    div_object = $("#rt");
    div_object.height(Math.round(div_object.width()*0.5))
    rt();
});
function rt() {
    var rt_chart = echarts.init(document.getElementById('rt'));
    rt_option = { tooltip : {
        trigger: 'item',
        formatter: "{b}: {c}"
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : false,
    series : [
        {
            name:'矩形图',
            type:'treemap',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: "{b}"
                    },
                    borderWidth: 1
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            data:[
                {
                    name: '理财',
                    value: 418
                },
                {
                    name: '产品',
                    value: 114
                },
                {
                    name: '收益',
                    value: 120
                },
                {
                    name: '利息',
                    value: 99
                },
                {
                    name: '实用',
                    value: 97
                },
                {
                    name: '投资',
                    value: 92
                },
                {
                    name: '体验',
                    value: 61
                },
                {
                    name: '安全',
                    value: 55
                },
                {
                    name: '提现',
                    value: 48
                },
 {
                    name: '利率',
                    value: 44
                },
{
                    name: '简洁',
                    value: 39
                },
{
                    name: '速度',
                    value: 37
                },
{
                    name: '好评',
                    value: 35
                },
{
                    name: '改进',
                    value: 35
                },
{
                    name: '余额',
                    value: 32
                },
{
                    name: '客服',
                    value: 32
                },
{
                    name: '靠谱',
                    value: 30
                },
{
                    name: '基金',
                    value: 30
                },
{
                    name: '力荐',
                    value: 25
                },
{
                    name: '利息高',
                    value: 23
                },
            ]
        }
    ]
};

        rt_chart.setOption(rt_option);

}              



 $(document).ready(function () {
    div_object = $("#qianxi");
    div_object.height(Math.round(div_object.width()*0.6))
    qianxi();
});
function qianxi() {
    var qianxi_chart = echarts.init(document.getElementById('qianxi'));
    qianxi_option = {   backgroundColor: 'FFFFFF',
				  color: ['gold','aqua','lime'],
				  title : {
					text: '',
					subtext:'',
					x:'center',
					textStyle : {
					  color: '#1b1b1b'
					}
				  },
				  tooltip : {
					trigger: 'item',
					formatter: function (v) {
							if(typeof(v[2])=='number'){
							return(v[1]+': '+v[2])
							}else if(v[2].tooltipValue!=null){
							return v[2].tooltipValue;
						  }else{
							return v[1];
						  }
				  }},
					legend: {
						show:false,
						orient: 'vertical',
						x:'left',
						data:['Data'],
						textStyle:{color:'#D9D9D9'}

					},
				  toolbox: {
					show : true,
					orient : 'vertical',
					x: 'right',
					y: 'center',
					feature : {
					  mark : {show: true},
					  dataView : {show: true, readOnly: false},
					  restore : {show: true},
					  saveAsImage : {show: true}
					}
				  },
				  dataRange: {
					min : -23,
					max : 402,
					calculable : true,
					color: ['orange', 'white'],
					textStyle:{
					  color:'#1b1b1b'
					}
				  },
				  series : [
					{
					name:'Data',
					type:'map',
					mapType: 'china',
					itemStyle:{
					normal:{
					borderColor:'rgba(100,149,237,1)',
					borderWidth: 0.5,
					label:{show:true,textStyle:{color:'#1b1b1b'}},
					},
					emphasis:{label:{show:true,textStyle:{color:'#1b1b1b'}}}
				  },
				  data:[{name:'上海',value:183},
						{name:'云南',value: 17},
						{name:'内蒙古',value:  6},
						{name:'北京',value:285},
						{name:'吉林',value:  3},
						{name:'四川',value: 57},
						{name:'天津',value: 19},
						{name:'宁夏',value:  6},
						{name:'安徽',value: 50},
						{name:'山东',value: 88},
						{name:'山西',value: 10},
						{name:'广东',value:377},
						{name:'广西',value: 17},
						{name:'新疆',value: 11},
						{name:'江苏',value: 48},
						{name:'江西',value: 29},
						{name:'河北',value: 33},
						{name:'河南',value: 43},
						{name:'浙江',value:121},
						{name:'海南',value:  3},
						{name:'湖北',value: 65},
						{name:'湖南',value: 46},
						{name:'甘肃',value:  2},
						{name:'福建',value: 42},
						{name:'贵州',value: 21},
						{name:'辽宁',value: 12},
						{name:'重庆',value: 45},
						{name:'陕西',value: 24},
						{name:'黑龙江',value:  9}]
				  
				  
				  }]
				}
				;
 qianxi_chart.setOption(qianxi_option);

}  