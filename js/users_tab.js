$(function(){
	$("#dg_users").datagrid({
		title:'Users',
		fit:true,
		pagination:true,
		columns:[[
			{field:'id',title:'ID',width:100},
			{field:'firstname',title:'First Name',width:100},
			{field:'lastname',title:'Last Name',width:100}
		]],
		fitColumns:true,
		toolbar:[{
			iconCls:'icon-add',
			text:'Add'
		},"-",{
			iconCls:'icon-edit',
			text:'Edit'
		},"-",{
			iconCls:'icon-remove',
			text:'Remove'
		}]
	});
});