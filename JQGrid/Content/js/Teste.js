
jQuery("#listsg11").jqGrid({
    data: mydataGrid,
    datatype: "json",
    height: 190,
    colNames:['Inv No','Date', 'Client', 'Note', 'Amount','Tax','Total'],
    colModel:[
   		{name:'id',index:'id', width:55},
   		{name:'invdate',index:'invdate', width:90},
   		{ name: 'name', index: 'name', width: 100 },
        {name:'note',index:'note', width:150, sortable:false},
   		{name:'amount',index:'amount', width:80, align:"right"},
   		{name:'tax',index:'tax', width:80, align:"right"},		
   		{name:'total',index:'total', width:80,align:"right"}			
    ],
    rowNum:8,
    rowList:[8,10,20,30],
    pager: '#pagersg11',
    sortname: 'id',
    viewrecords: true,
    sortorder: "desc",
    multiselect: false,
    subGrid: true,
    caption: "Grid as Subgrid",


    subGridRowExpanded: function(subgrid_id, row_id) {
        // we pass two parameters
        // subgrid_id is a id of the div tag created whitin a table data
        // the id of this elemenet is a combination of the "sg_" + id of the row
        // the row_id is the id of the row
        // If we wan to pass additinal parameters to the url we can use
        // a method getRowData(row_id) - which returns associative array in type name-value
        // here we can easy construct the flowing
        var subgrid_table_id, pager_id;
        subgrid_table_id = subgrid_id+"_t";
        pager_id = "p_"+subgrid_table_id;
        $("#" + subgrid_id).html("<table id='" + subgrid_table_id + "' class='scroll'></table><div id='" + pager_id + "' class='scroll'></div>");

        jQuery("#"+subgrid_table_id).jqGrid({
            url:mydataSubGrid +"?q=2&id="+row_id,
            datatype: "json",
            colNames: ['No','Item','Qty','Unit','Line Total'],
            colModel: [
				{name:"num",index:"num",width:80,key:true},
				{name:"item",index:"item",width:130},
				{name:"qty",index:"qty",width:70,align:"right"},
				{name:"unit",index:"unit",width:70,align:"right"},
				{name:"total",index:"total",width:70,align:"right",sortable:false}
            ],
            rowNum:20,
            pager: pager_id,
            sortname: 'num',
            sortorder: "asc",
            height: '100%'
        });
        jQuery("#"+subgrid_table_id).jqGrid('navGrid',"#"+pager_id,{edit:true,add:true,del:true})
    },
    subGridRowColapsed: function(subgrid_id, row_id) {
        // this function is called before removing the data
        //var subgrid_table_id;
        //subgrid_table_id = subgrid_id+"_t";
        //jQuery("#"+subgrid_table_id).remove();
    }
});
jQuery("#listsg11").jqGrid('navGrid', '#pagersg11', { add: true, edit: true, del: true });


var mydataGrid = [
		{ id: "2", invdate: "2007-10-02", name: "test2", note: "note2", amount: "300.00", tax: "20.00", total: "320.00" },
		{ id: "3", invdate: "2007-09-01", name: "test3", note: "note3", amount: "400.00", tax: "30.00", total: "430.00" },
		{ id: "4", invdate: "2007-10-04", name: "test", note: "note", amount: "200.00", tax: "10.00", total: "210.00" },
		{ id: "5", invdate: "2007-10-05", name: "test2", note: "note2", amount: "300.00", tax: "20.00", total: "320.00" },
		{ id: "6", invdate: "2007-09-06", name: "test3", note: "note3", amount: "400.00", tax: "30.00", total: "430.00" },
		{ id: "7", invdate: "2007-10-04", name: "test", note: "note", amount: "200.00", tax: "10.00", total: "210.00" },
		{ id: "8", invdate: "2007-10-03", name: "test2", note: "note2", amount: "300.00", tax: "20.00", total: "320.00" },
		{ id: "9", invdate: "2007-09-01", name: "test3", note: "note3", amount: "400.00", tax: "30.00", total: "430.00" }
];
for (var i = 0; i <= mydataGrid.length; i++) {
    jQuery("#listsg11").jqGrid('addRowData', i + 1, mydataGrid[i]);
}


var mydataSubGrid = [
        { id: "1", num: "123", item: "test2", qty: "12", unit: "300.00", total: "320.00" },
		{ id: "2", num: "321", item: "test3", qty: "10", unit: "400.00", total: "430.00" },
		{ id: "4", num: "111", item: "test", qty: "9", unit: "200.00", total: "210.00" },
		{ id: "4", num: "222", item: "test2", qty: "4", unit: "300.00", total: "320.00" }
];
for (var i = 0; i <= mydataSubGrid.length; i++) {
    jQuery("#listsg11").jqGrid('addRowData', i + 1, mydataSubGrid[i]);
}