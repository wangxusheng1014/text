jQuery.validator.addMethod("mobile", function(value, element, param) {
	//	var reg=/^1[0-9]{10}$/;
	var reg = new RegExp("^1[0-9]{10}$");
	if(reg.test(value)) {
		return true;
	} else {
		return false;
	}
}, "请输入合法的手机号");

var phoneBook = {
	//配置
	config: {
		server: '',
		ports: {
			list: '/list',
			login: '/user/login',
			create: '/create',
			remove: '/remove',
			update: "/update"
		}
	},
	//数据
	data: {
		list: [],
		keyword: "",
		token: "",
		boo:true,
	},
	//DOM节点
	elements: {
		list_view: undefined,
		items: []
	},
	//模板
	template: {
		//		列表
		list: function() {
			return $('<ul class="row card_list"></ul>');
		},
		//		元素
		item: function(record) {
			var str = [
				'<li class="col-sm-6 col-md-4 card_item">',
				'<div class="card">',
				'<div class="row">',
				'<div class="info col-sm-3 col-xs-4">',
				'<span class="name">@{name}</span>',
				'<span class="remark ">@{remark}</span>',
				'</div>',
				'<div class="tel col-sm-6 col-xs-6">',
				'<div class="phone ">',
				'<span class="glyphicon glyphicon-phone-alt"></span>',
				'<span class="hidden-xs">@{phone}</span>',
				'<a href="tel:@{phone}" class="hidden-sm hidden-md hidden-lg">@{phone}</a>',
				'</div>',
				'<div class="mobile ">',
				'<span class="glyphicon glyphicon-phone"></span>',
				'<span class="hidden-xs">@{mobile}</span>',
				'<a href="tel:@{mobile}" class="hidden-sm hidden-md hidden-lg">@{mobile}</a>',
				'</div>',
				'</div>',
				'<div class="qrcode hidden-xs col-sm-3" data-qrcode="@{wechatURL}">',
				'<span class="wx_title">微信</span>',
				'</div>',

				'<div class="control col-xs-2">',
				'<button type="button" class="edit">',
				'<i class="glyphicon glyphicon-edit"></i>',
				'</button>',
				'<button type="button" class="remove">',
				'<i class="glyphicon glyphicon glyphicon-remove"></i>',
				'</button>',
				'</div>',
				'</div>',
				'</div>',
				'</li>'

			];
			var $el = $(
				str.join("").replace("@{name}", record.name)
				.replace("@{remark}", record.remark)
				.replace(/@{phone}/g, record.phone)
				.replace(/@{mobile}/g, record.mobile)
				.replace("@{wechatURL}", record.weichatUrl)
			);

			$el.data("record_id", record._id);
			$el.find(".remove").data({
				"_id": record._id,
				"name": record.name
			});
			$el.find(".edit").data({
				"record": record
			});
			record.weichatUrl && $el.find(".qrcode").qrcode(record.weichatUrl);
			if(!window.localStorage.getItem("token")) {
				$el.find(".control").remove();
			}
			return $el;
		}
	},
	//	创建列表DOM
	createList: function(list) {

		this.elements.items = [];
		for(var i = 0; list[i]; i++) {
			this.elements.items.push(this.template.item(list[i]));
		}

		this.elements.list_view.html("");
		this.elements.list_view.append(this.elements.items);
	},
	//	加载列表数据
	getList: function(callback) {
		var me = this;

		$("#list_box").blockLoading().show();
		$.ajax({
			url: me.config.server + me.config.ports.list,
			type: "get",
			dataType: "json",
			data: {
				keyword: me.data.keyword,
				token: me.data.token
			},
			success: function(response) {				
				me.data.list = response.list;
				me.data.boo = response.boo;
				callback.call(me, response);
				if(me.data.boo){
					//已验证身份
					$(".no_login").hide()
					$(".need_login").show()
					me.createList(me.data.list);
				}else{
					//没验证身份
					$(".no_login").show()
					$(".need_login").hide()					
					me.createList(me.data.list);
					$(".control").hide()
				}
			},
			complete:function(){
				$("#list_box").blockLoading().hide();
			}
		});
	},
	//	登录动作
	doLogin: function() {
		var me = this;
		$.ajax({
			url: me.config.server + me.config.ports.login,
			type: 'post',
			dataType: 'json',
			data: $("#form_login").serialize(),
			success: function(response) {
				if(response.token!=401){
					window.localStorage.setItem("token", response.token);
					me.data.token = response.token;
					me.data.list = response.list.list;
					me.getList(me.createList);
					me.initView();
					$("#pop_login").modal("hide");

				}else{
					alert("用户名或密码错误");
				}
			}
		})
	},
	//	取消登录状态
	doLogout: function() {
		var me = this;
		me.data.token = "";
		window.localStorage.removeItem("token");
		me.initView();
	},
	//	初始化视图
	initView: function() {
		var me = this;
		if(!!me.data.token) {
			//已验证身份
			$(".no_login").hide()
			$(".need_login").show()
		} else {
			//没验证身份
			$(".no_login").show()
			$(".need_login").hide()
		}
		me.createList(me.data.list);
	},
	//	显示添加表单
	hadner_show_add: function() {
		$("#pop_add").modal("show");
		$("#pop_add").find(".has-error").removeClass("has-error");
		$("#pop_add").find(".has-success").removeClass("has-success");
		$("#pop_add").find(".help-block").html("");

		$('#form_create').get(0).reset();
	},
	//	显登录表单
	handler_login: function() {
		$("#pop_login").modal("show");
	},
	//	向服务器提交添加
	handler_do_create: function() {
		var me = this;
		if($("#form_create").valid()) {
			$.ajax({
				url: me.config.server + me.config.ports.create,
				type: "post",
				dataType: "json",
				data: $("#form_create").serialize()+"&token="+me.data.token,
				success: function(response) {
					me.data.boo = response.boo;
					if(me.data.boo){
						$("#pop_add").modal("hide");
						me.getList(me.createList);
					}else{
						$("#pop_add").modal("hide");
						$("#pop_login").modal("show");
					}
				}
			});
		}

	},
	//	请求删除一条
	handler_remove: function(id, name) {
		var me = this;

		$.bs_confirm({
			title: '删除联系人',
			message: '删除后不可恢复，你确认要删除“' + name + '”吗？',
			enter_callback: function() {
				$.ajax({
					type: "post",
					url: me.config.server + me.config.ports.remove,
					data: {
						_id: id,
						token:me.data.token
					},
					success: function(response) {
						me.data.boo = JSON.parse(response).boo;
						if(me.data.boo){
							me.getList(me.createList);
						}else{
							$("#pop_login").modal("show");
						}	
					}
				});
			}
		});
	},
	//	显示编辑界面
	handler_show_update: function(el) {

		var record=$(el).data("record");
		var modal=$("#pop_edit");
		var form=$("#form_edit");
		
		form[0].reset();
		form.find("[name='name']").val(record.name);
		form.find("[name='phone']").val(record.phone);
		form.find("[name='mobile']").val(record.mobile);
		form.find("[name='remark']").val(record.remark);
		form.find("[name='weichatUrl']").val(record.weichatUrl);
		form.find("[name='id']").val(record._id);
		
		modal.modal("show");
		
	},
	//	提交修改内容
	handler_do_submit_update: function() {
		var me=this;
		if($("#form_create").valid()) {
			$.ajax({
				url: me.config.server + me.config.ports.update,
				type: "post",
				dataType: "json",
				data: $("#form_edit").serialize()+"&token="+me.data.token,
				success: function(response) {
					me.data.boo = response.boo;
					if(me.data.boo){
						$("#pop_edit").modal("hide");
						me.getList(me.createList);
					}else{
						$("#pop_edit").modal("hide");
						$("#pop_login").modal("show");
					}					
				}
			});
		}
	},
	//	初始化整个界面
	init: function(target) {
		var me = this;

		this.data.token = window.localStorage.getItem("token");

		var $targetEl = $(target);
		this.elements.list_view = this.template.list();
		$targetEl.html("");
		$targetEl.append(this.elements.list_view);
		this.getList(this.createList);

		me.initView();
		//为按钮加挂事件
		//显示添加按钮
		$("#btn_add").on("click", function() {
			me.hadner_show_add();
		})
		//		显示登录按钮
		$("#show_login").on("click", function() {
			me.handler_login();
		})
		//执行搜索
		$("#doSearch").on("click", function() {
			me.data.keyword = $("#keyword").val();
			me.getList(me.createList);
			$("#navbar-collapse").collapse("hide")
		});
		//在搜索input上回车时的动作
		$("#form_search").on("submit", function(e) {
			me.data.keyword = $("#keyword").val();
			me.getList(me.createList);
			//取消默认行为
			e.preventDefault();
			$("#navbar-collapse").collapse("hide")
			//			e.stopPropagation();
		});
		//登录按钮
		$("#btn_doLogin").on("click", function() {
			me.doLogin();
			$("#navbar-collapse").collapse("hide");
		});
		//登出按钮
		$("#do_logout").on("click", function() {
			me.doLogout();
			$("#navbar-collapse").collapse("hide");
		});
		//		添加按钮
		$("#btn_create").on('click', function() {
			me.handler_do_create();
			$("#navbar-collapse").collapse("hide");
		});
		//		列表中的删除按钮事件
		me.elements.list_view.on("click", ".remove", function() {
			me.handler_remove($(this).data("_id"), $(this).data("name"));
		});
		//		列表中的编辑按钮的事件
		me.elements.list_view.on("click", ".edit", function() {
			me.handler_show_update(this);
		});
		//编辑界面的提交按钮
		$("#btn_update").on("click",function(){	
			me.handler_do_submit_update();
		});

		//启动验证插件
		$("#form_create").validate({
			rules: {
				name: {
					required: true,
					minlength: 2,
				},
				phone: {
					required: true,
					number: true
				},
				mobile: {
					required: true,
					number: true,
					mobile: true
				},
				weichatUrl: {
					url: true
				},
				remark: {
					maxlength: 5
				}
			},
			success: function(l, el) {
				var parent = $(el).parent().parent();
				parent.removeClass("has-error");
				parent.addClass("has-success");
				parent.find(".help-block").html("");
			},
			errorPlacement: function(err, el) {
				var parent = $(el).parent().parent();
				parent.addClass("has-error");

				parent.find(".help-block").html(err.html());
			}
		});
		
		//启动验证插件
		$("#form_edit").validate({
			rules: {
				name: {
					required: true,
					minlength: 2,
				},
				phone: {
					required: true,
					number: true
				},
				mobile: {
					required: true,
					number: true,
					mobile: true
				},
				weichatUrl: {
					url: true
				},
				remark: {
					maxlength: 5
				}
			},
			success: function(l, el) {
				var parent = $(el).parent().parent();
				parent.removeClass("has-error");
				parent.addClass("has-success");
				parent.find(".help-block").html("");
			},
			errorPlacement: function(err, el) {
				var parent = $(el).parent().parent();
				parent.addClass("has-error");

				parent.find(".help-block").html(err.html());
			}
		});
	}

}

$(function() {
	phoneBook.init("#list_container")
});