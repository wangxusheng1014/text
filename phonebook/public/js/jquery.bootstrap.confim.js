//function bs_confirm(config)
$.extend($,{
	bs_confirm: function(config) {

		var modal_core = function(config) {
			var me = this;
			this.config = config;
			this.dom = {
				modal: null,
				btn_close: null,
				btn_cancel: null,
				btn_enter: null
			}

			this.createDom();
			this.dom.btn_cancel.on("click", function() {
				me.hide();
				if(me.config.cancel_callback) {
					me.config.cancel_callback();
				}
			});
			this.dom.btn_close.on("click", function() {
				me.hide();
				if(me.config.cancel_callback) {
					me.config.cancel_callback();
				}
			});

			this.dom.btn_enter.on("click", function() {
				me.hide();
				if(me.config.enter_callback) {
					me.config.enter_callback();
				}
			});
		}

		modal_core.prototype = {
			template: function(title, message, enter_text, cancel_text) {

				title = title || "确认操作";
				message = message || '确认操作';
				enter_text = enter_text || '确认';
				cancel_text = cancel_text || '取消';

				var html = [
					'<div class="modal fade" tabindex="-1" role="dialog" data-backdrop="static">',
					'<div class="modal-dialog" role="document">',
					'<div class="modal-content">',
					'<div class="modal-header">',
					'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>',
					'<h4 class="modal-title">{@title}</h4>',
					'</div>',
					'<div class="modal-body">',
					'{@message}',
					'</div>',
					'<div class="modal-footer">',
					'<button type="button" class="btn btn-default btn_cancel" data-dismiss="modal">{@cancel_text}</button>',
					'<button type="button" class="btn btn-primary btn_enter">{@enter_text}</button>',
					'</div>',
					'</div>',
					'</div>',
					'</div>'
				];

				return html.join("")
					.replace("{@title}", title)
					.replace("{@message}", message)
					.replace("{@cancel_text}", cancel_text)
					.replace("{@enter_text}", enter_text);
			},
			createDom: function() {
				var el = $(this.template(
					this.config.title,
					this.config.message,
					this.config.enter_text,
					this.config.cancel_text
				));

				this.dom.modal = el;
				this.dom.btn_cancel = el.find(".btn_cancel");
				this.dom.btn_close = el.find(".close");
				this.dom.btn_enter = el.find(".btn_enter");

				$("body").append(el);

			},
			show: function() {
				this.dom.modal.modal("show");
			},
			hide: function() {
				var me = this;
				this.dom.modal.modal("hide");
				window.setTimeout(function() {
					me.dom.modal.remove();
				}, 500)
			}
		}

		var cfm = new modal_core(config);
		cfm.show();
	}
});