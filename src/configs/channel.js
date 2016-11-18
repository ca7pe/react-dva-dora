export default {
	name : '渠道',
	actionUrl : {
		list : '/channel/list.json',
		add : '/channel/add.json',
		mod : '/channel/mod.json'
	},
	pagination : {
		limit : 10
	},
	table : {
		cols : [
			{
				name : 'ID',
				key : 'id',
				form : {
					type : 'text',
					hidden : true
				}
			},
			{
				name : '渠道代码',
				key : 'channelCode',
				form : {
					type : 'text'
				}
			},{
				name : '渠道名字',
				key : 'channelName',
				form : {
					type : 'text'
				}
			},{
				name : '整包url',
				key : 'appUrl',
				form : {
					type : 'text'
				}
			},
			{
				name : '是否默认渠道',
				key : 'isDefault',
				form : {
					type : 'select',
					data : [
				        {id : '0', name : '否'},
				        {id : '1', name : '是'}
				    ]
				}
			},
			{
				name : '操作',
				key : 'control',
				getText : function(){
					return '<div class="btnWrp">\
								<button class="btn btn-link editBtn" type="button">编辑</button>\
								<button class="btn btn-link delBtn hidden" type="button">删除</button>\
							</div>';
				}
			}
		]		
	}
}