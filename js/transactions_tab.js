$(function(){
	$("#dgcurrent").datagrid({
		title:'Current Day Transactions',
		fit:true,
		pagination:true,
		toolbar:[{
			iconCls:'icon-print',
			text:'Receipt'
		}]
	});

	$("#dgprevious").datagrid({
		title:'Previous Transactions',
		fit:true,
		pagination:true
	});
});