export default {
	name : '热更新包管理',
	actionUrl : {
		list : '/version/list.json',
		add : '/version/add.json',
	},
	pagination : {
		limit : 10
	},
	table : {
		cols : [
			{
				name : '版本号',
				key : 'versionNum',
				form : {
					type : 'text',
					disabled : true
				}
			},
			{
				name : '热更包MD5',
				key : 'hotUpdatePackageMd5',
			},
			{
				name : '热更包大小',
				key : 'hotUpdatePackageSize',
			},	
			{
				name : '更新类型',
				key : 'updateType',
				form : {
					type : 'select',
					data : [
				        {id : '1', name : '热更新'},
				        {id : '2', name : '兼容性更新'},
				        {id : '3', name : '强制更新'}
				    ]
				}
			},
			{
				name : '热更新zip包',
				key : 'hotUpdateZip',
				getText : function(val,data){
					return '<a href="'+data.hotUpdatePackageUrl+'" target="_blank">'+data.hotUpdatePackageFile+'</a>'
				},
				form : {
					html : function(){
						return '<input name="hotUpdateZip" class="form-control" type="file"/>';
					},
					getValue : function(elm){
						return false;
					},
					setValue : function(elm,val){
						return false;
					}
				}
			}
		]		
	}
}