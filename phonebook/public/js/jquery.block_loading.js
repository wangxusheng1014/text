$.fn.extend({
	blockLoading:function(){	
			
		function block(el){
			this.el=$(el);
		}
		
		block.prototype={			
			show:function(){
				$(this.el).addClass("show_loading");
			},
			hide:function(){
				$(this.el).removeClass("show_loading");
			}
		}
		
		return new block(this);
	}
})
