var has_sorted=false;$(document).ready(function(){$(".closebtn").click(function(){self.close();});$("#save-reorder").click(function(){$(this).hide();var data="";$(".user_uploads a").each(function(idx,element){var pk=$(element).data("pk");data=data+pk+":"+idx+"|";});$('#id_reorder_photos_order').val(data);$.post(reorder_endpoint,$('#reorder_photos_form').serialize(),function(status){if(status=="OK"){window.location.href=photo_set_detail_url;}});has_sorted=false;});$(".warning").click(function(){if(!has_sorted){return true;}
return confirm(gettext("Looks like you changed the items order and haven't save your changes. Do you want to proceed without saving?"));});$("a.deletion").click(function(){return confirm(gettext("Deleting a photoset or video also deletes all photos contained in it. Are you sure you want to delete this photoset/video ?"));});$("span.delete-image").live("click",function(){var answer=confirm(gettext("Are you sure you want to delete this photo?"));if(answer){$(this).parent().remove();$.get(image_deletion_url.replace('1',$(this).parent().data("pk")),function(data){if(data!="OK"){alert(gettext("There was a problem when deleting this photo"));}});return false;}
return false;});$(".user_upload .tooltip").live("click",function(){return $(this).parent().find("a:first").click();});$(".user_upload").live({mouseenter:function(){$(this).find(".tooltip").show();},mouseleave:function(){$(this).find(".tooltip").hide();}});});