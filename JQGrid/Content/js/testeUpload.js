

$(function() {
        $(document).ready(function() {
            jQuery("#your_grid_id").jqGrid({
                url: 'your_url',
                datatype: 'json',
                mtype: 'post',
                pager: 'your_pager_id',
                colNames: ["Description", "File"],
                colModel: 
                    [{name: "file_to_upload", index: "file_to_upload", edittype: "file"}]
            })
           .navGrid("#your_pager_id",{{... ... ...}},
           {
                jqModal:true,closeAfterEdit: true,recreateForm:true,onInitializeForm : function(formid){
                    $(formid).attr('method','POST');
                    $(formid).attr('action','');
                    $(formid).attr('enctype','multipart/form-data');
                }, 
                afterSubmit : function(response, postdata){
                       $.ajaxFileUpload({
                          url: 'your_file_url_where_upload_operates', 
                          secureuri:false,
                          fileElementId:'file_to_upload',
                          dataType: 'json',
                          success: function (data, status) {
                              alert("Upload Complete.");
                          }
                       });
                   }
                }},
                {
                jqModal:true,closeAfterAdd: true,recreateForm:true,onInitializeForm : function(formid){
                    $(formid).attr('method','POST');
                    $(formid).attr('action','');
                    $(formid).attr('enctype','multipart/form-data');
                }, afterSubmit : function(response, postdata){
                       $.ajaxFileUpload({
                          url: 'your_file_url_where_upload_operates', 
                          secureuri:false,
                          fileElementId:'file_to_upload',
                          dataType: 'json',
                          success: function (data, status) {
                              alert("Upload Complete.");
                          }
                       });
                   }
                }
      )});
       });
    });