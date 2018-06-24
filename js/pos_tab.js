$(function(){
	$("#dgcart").datagrid({
		columns:[[
			{field:'product_name',title:'Name',width:100},
			{field:'qty',title:'Qty',width:100},
			{field:'price',title:'Price',width:100},
			{field:'discount',title:'Discount',width:100},
			{field:'status',title:'Status',width:100}
		]],
		fitColumns:true,
		fit:true,
		border:false,
		toolbar:[{
			iconCls:'icon-print',
			text:'Receipt'
		},"-",{
			iconCls:'icon-edit',
			text:'Discount'
		},"-",{
			iconCls:'icon-no',
			text:'Void Item'
		},"-",{
			iconCls:'icon-cancel',
			text:'Cancel'
		}],
		footer:'#tbcart'
	});

	$("#nb_pay").numberbox({
		buttonText:'PAY',
		buttonIcon:'icon-ok',
		width:300,
		prompt:'Enter Payment Amount Here'
	});
});