var vm = new Vue({
	el:'#wrapper',
	data:{
		message:'Time tick-ticks away.',
		getRandomColor: '#03a9f4',
		textList:[]
	},
	mounted: function() {
		this.$nextTick(function() {
			this.getAjax();
		});
	},
	methods:{
		getColor:function(){
			var letters = '0123456789ABCDEF';
    		var color = '#';
    		for(var i = 0;i<6;i++){
    			color += letters[Math.floor(Math.random() * 16)];
    		}
    		return color
		},
		getAjax:function(){
			var _this = this;
			var url = "https://www.easy-mock.com/mock/590f0c36f926ef14e269df35/lojze/list";
			axios.get(url)
			.then(function(respone){
			    var res = respone.data;
			    if (res.status =="0") {
		          	_this.textList = res.result;
		        }
			})

		}

	},
	beforeMount:function(){
        console.log('3-beforeMount 挂载之前');
    },
    updated:function(){
        console.log('6-updated 被更新后');
    },


})