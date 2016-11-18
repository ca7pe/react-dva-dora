export default {
	name : 'manifest模板管理',
	actionUrl : {
		list : '/manifest_template/list.json',
		add : '/manifest_template/upload.json'
	},
	pagination : {
		limit : 10
	},
	table : {
		cols : [
			{
				name : '模板文件',
				key : 'templateFile',
				getText : function(val,data){
					return '<a href="'+data.templateFileUrl+'" target="_blank">'+val+'</a>'
				},
				form : {
					html : function(){
						return '<input name="templateFile" class="form-control" type="file"/>';
					},
					getValue : function(elm){
						return false;
					},
					setValue : function(elm,val){
						return false;
					}
				}
			},
			{
				name : '模板类型',
				key : 'isDefault',
				form : {
					type : 'select',
					data : [
				        {id : '0', name : '自定义模板'},
				        {id : '1', name : '默认模板'}
				    ],
				    hidden : true
				}
			}
		]
	}
}