
jQuery("#navgrid").jqGrid({
    data: mydata,
    datatype: "json",
    height: 250,
    width: 980,
    colNames: ['Inv No', 'Date', 'Client', 'Amount', 'Tax', 'Total', 'Notes', 'Foto', 'descriptionPt'],
    colModel: [
   		{ name: 'id', index: 'id', sorttype: "int", editable: true },
   		{ name: 'invdate', index: 'invdate', sorttype: "date", editable: true },
   		{ name: 'name', index: 'name',  editable: true },
   		{ name: 'amount', index: 'amount',  align: "right", sorttype: "float", editable: true },
   		{ name: 'tax', index: 'tax',  align: "right", sorttype: "float", editable: true },
   		{ name: 'total', index: 'total',  align: "right", sorttype: "float", editable: true },
   		{ name: 'note', index: 'note', sortable: false, editable: true },
        //{ name: 'image', index: 'images', formatter: unitsInStockFormatter, editable: true },
        { name: 'image', index: 'images', editable: true },
        { name: 'imageDescriptionPt', index: 'images[0].descriptionPt',  editable: true }
    ],
    multiselect: false,
    caption: "",
    //pager: '#pagernav',
    sortname: 'name',
    grouping: true,
    groupingView: {
        groupField: ['name']
    },
});

var addprm = {
    width: 800,
    height: 500,
    top: 100,
    left: 50,
    reloadAfterSubmit: true,
    closeAfterAdd: true
};


$("#navgrid").navGrid('#pagernav', {
    add: true, addtext: 'Add', edit: true, edittext: 'Edit', del: true,
    deltext: 'Delete', search: false, refresh: true
},
 addprm // add
 );

var mydata = [
		{
		    id: "1", invdate: "2007-10-01", name: "Daniela", note: "nota", amount: "200.00", tax: "10.00", total: "210.00", 
		    images:
                {
                    itemImagem:
                        [
                            {
                                //image: "teste1",
                                descriptionPt: "Imagem Principal PT",
                                descriptionEn: "Imagem Principal EN",
                                descriptionEs: "Imagem Principal ES"
                            }
                        ]
                    //itemImagem:
                    //    [
                    //        {
                    //            image: "teste2",
                    //            descriptionPt: "Imagem Secundaria PT",
                    //            descriptionEn: "Imagem Secundaria EN",
                    //            descriptionEs: "Imagem Secundaria ES"
                    //        }
                    //    ],
                    //itemImagem:
                    //    [
                    //        {
                    //            image: "teste3",
                    //            descriptionPt: "Imagem Terciaria PT",
                    //            descriptionEn: "Imagem Terciaria EN",
                    //            descriptionEs: "Imagem Terciaria ES"
                    //        }
                    //    ]
                }, aticve: true
		},
		{ id: "2", invdate: "2007-10-02", name: "test2", note: "note2", amount: "300.00", tax: "20.00", total: "320.00", images: "", aticve: false },
		{ id: "3", invdate: "2007-09-01", name: "test3", note: "note3", amount: "400.00", tax: "30.00", total: "430.00", images: "", aticve: true },
		{ id: "4", invdate: "2007-10-04", name: "test", note: "note", amount: "200.00", tax: "10.00", total: "210.00", images: "", aticve: false },
		{ id: "5", invdate: "2007-10-05", name: "test2", note: "note2", amount: "300.00", tax: "20.00", total: "320.00", images: "", aticve: true },
		{ id: "6", invdate: "2007-09-06", name: "test3", note: "note3", amount: "400.00", tax: "30.00", total: "430.00", images: "", aticve: false },
		{ id: "7", invdate: "2007-10-04", name: "test", note: "note", amount: "200.00", tax: "10.00", total: "210.00", images: "", aticve: true },
		{ id: "8", invdate: "2007-10-03", name: "test2", note: "note2", amount: "300.00", tax: "20.00", total: "320.00", images: "", aticve: false },
		{ id: "9", invdate: "2007-09-01", name: "test3", note: "note3", amount: "400.00", tax: "30.00", total: "430.00", images: "", aticve: true }
];
for (var i = 0; i <= mydata.length; i++) {
    jQuery("#navgrid").jqGrid('addRowData', i + 1, mydata[i]);
    //alert(mydata[i]);
}

function unitsInStockFormatter(cellvalue, options, rowObject) {
    if (rowObject.aticve === true) {
        return "<img src='Content/js/1.png' alt'Vai dar certo Dani :D'/>";
    }
    else {
        return "<img src='Content/js/2.png' alt'Vai dar certo Dani :D'/>";
    }
};









//jQuery("#navgrid").jqGrid({
//    url: 'Aluno/',
//    datatype: "json",
//    mtype: "POST",
//    //colNames: ['Matrícula', 'Nome', 'Idade'],
//    //colModel: [
//   	//	{ name: 'AlunoId', index: 'AlunoId', width: 55, editable: false, editoptions: { readonly: true, size: 10 } },
//   	//	{ name: 'Nome', index: 'Nome', width: 80, editable: true, editoptions: { size: 10 } },
//   	//	{ name: 'Idade', index: 'Idade', width: 90, editable: true, editoptions: { size: 25 } }
//    //],
//    colNames: ['Active', 'Active', 'Default', 'Default', 'Imagem', 'UploadTwo','ImagemTeste'],
//    colModel: [
//    {name:'active', align:'center', hidden:true, editable:true, edittype:'select',
//        editoptions:{value:'Yes:Yes;No:No'}, defval:'Yes', editrules:{edithidden:true, searchhidden:true}, width:80 },
//    { name: 'activeimage', align: 'center', sortable: false, search: false, editable: true, width: 80, editoptions: { value: 'Daniela' } },
//    {name:'default', align:'center', hidden:true, editable:true, edittype:'select',
//        editoptions:{value:'Yes:Yes;No:No'}, editrules:{edithidden:true, searchhidden:true}, width:80 },
//    { name: 'defaultimage', align: 'center', sortable: false, search: false, editable: false, width: 80, editoptions: { value: 'Mara' } },
//    { name: 'File', align: 'center', sortable: false, search: false, editable: false, width: 80 },
//    {
//        name: 'FileTwo', align: 'center', hidden: true, editable: true, edittype: 'file', custom:true,
//        editrules: { edithidden: true}, editoptions:{enctype: "multipart/form-data"}, width: 80
//    },
//    {
//        name: 'Imagem', align: 'left', fixed: true, search: false, formatter: unitsInStockFormatter
//    }
//    ],
//    rowNum: 10,
//    rowList: [10, 20, 30],
//    pager: '#pagernav',
//    sortname: 'id',
//    viewrecords: true,
//    sortorder: "desc",
//    caption: "",
//    editurl: "Alunos/Edit",
//    height: 300,
//    width: 300
//});
//var addprm = {
//    width: 450,
//    height: 200,
//    top: 125,
//    left: 50,
//    reloadAfterSubmit: true,
//    closeAfterAdd: true
//};

//function unitsInStockFormatter(cellvalue, options, rowObject) {
//    //var para = cellvalue.split(" ");
//    //var path = '@url.Content("~/Images/")';
//    //var pat = "<img src='~/Images/bullet.png' alt'Vai dar certo Dani :D'/>";
//    //return pat;
//        var cellValueInt = parseInt(cellvalue);
//        if (cellValueInt > 10)
//            "<img src='http://files.wlturismo.com.br/200000905-79bbf7ab5b-public/sao%20luiz%2070.jpg' alt='my image' />"
//        else if (cellValueInt > 0)
//            "<img src='http://files.wlturismo.com.br/200000905-79bbf7ab5b-public/sao%20luiz%2070.jpg' alt='my image' />"
//        else
//            "<img src='http://files.wlturismo.com.br/200000905-79bbf7ab5b-public/sao%20luiz%2070.jpg' alt='my image' />"

//    //alert("Oi Dani!");
//    //return "<img src='http://files.wlturismo.com.br/200000905-79bbf7ab5b-public/sao%20luiz%2070.jpg' alt='my image' />"
//};

////alert();

//$("#navgrid").navGrid('#pagernav', {
//    add: true, addtext: 'Add', edit: true, edittext: 'Edit', del: true,
//    deltext: 'Delete', search: false, refresh: true
//},
// //editprm, // edit
// addprm // add
// //delprm // delete
// );


////jQuery("#navgrid").jqGrid('navGrid', '#pagernav',
////{}, //options
////{ height: 300, reloadAfterSubmit: false }, // edit options
////{ height: 300, reloadAfterSubmit: false }, // add options
////{ reloadAfterSubmit: false }, // del options
////{} // search options
////);