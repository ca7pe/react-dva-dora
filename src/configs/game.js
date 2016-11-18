export default {
	name : '游戏',
	actionUrl : {
		list : '/game/list.json',
		add : '/game/add.json',
		mod : '/game/mod.json',
	},
	pagination : {
		limit : 10
	},
	table : {
		cols : [
			{
				name : '游戏ID',
				key : 'id',
				form : {
					type : 'text',
					hidden : true
				}
			},
			{
				name : '游戏名称',
				key : 'appName',
				form : {
					type : 'text'
				}
			},
			{
				name : '游戏代码',
				key : 'appCode',
				form : {
					type : 'text'
				}
			},
			{
				name : '平台',
				key : 'plat',
				form : {
					type : 'select',
					data : [
				        {id : '0', name : '安卓'},
				        {id : '1', name : 'iOS'}
				    ]
				}
			},
			{
				name : '操作',
				key : 'control',
				getText : function(){
					return '<div class="btnWrp">\
								<button class="btn btn-link editBtn" type="button">编辑</button>\
							</div>';
				}
			}
		]		
	}
}