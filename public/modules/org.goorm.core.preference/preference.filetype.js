/**
 * Copyright Sung-tae Ryu. All rights reserved.
 * Code licensed under the GPL v2 License:
 * http://www.goorm.org/License
 **/org.goorm.core.preference.filetype=function(){this.add_button=null,this.del_button=null,this.save_button=null,this.self=null},org.goorm.core.preference.filetype.prototype={init:function(){self=this,self.init_filetype_tab(),this.add_button=new YAHOO.widget.Button("filetype_add",{onclick:{fn:this.add}}),this.del_button=new YAHOO.widget.Button("filetype_delete",{onclick:{fn:this.del}}),this.save_button=new YAHOO.widget.Button("filetypesave",{onclick:{fn:this.save}})},add:function(){$(".filetype_contents").find(".filetype_list").append("<div style='padding:3px;' class='newExt'>New Extention</div>"),$(".filetype_contents").find(".filetype_list").scrollTop(9999999),$(".filetype_contents").find(".filetype_list").find(".newExt").click(function(){$(".filetype_contents").find(".filetype_list").children().each(function(){$(this).css("background-color","#fff")}),$(this).css("background-color","#b3d4ff"),$(".filetype_contents").find(".filetype_detail").children().each(function(){$(this).remove()}),self.create_filetype_detail("",null,"",null,null)})},del:function(){$(".filetype_contents").find(".filetype_list").children().each(function(){if($(this).attr("class")==$(".filetype_contents").find(".file_extension").val()){var e=[];for(var t=0;t<core.filetypes.length;t++)core.filetypes[t].file_extension!=$(this).attr("class")&&e.push(core.filetypes[t]);core.filetypes=e,$(this).remove()}}),$(".filetype_contents").find(".filetype_detail").children().each(function(){$(this).remove()})},save:function(){var e=!1;if($(".filetype_contents").find(".filetype_detail").find(".file_extension").length!=0){for(var t=0;t<core.filetypes.length;t++)core.filetypes[t].file_extension==$(".filetype_contents").find(".filetype_detail").find(".file_extension").val()&&(e=!0,core.filetypes[t].editor=$(".filetype_contents").find(".filetype_detail").find(".editor").attr("value"),core.filetypes[t].type=$(".filetype_contents").find(".filetype_detail").find(".type").attr("value"),core.filetypes[t].mode=$(".filetype_contents").find(".filetype_detail").find(".mode").attr("value"),core.filetypes[t].description=$(".filetype_contents").find(".filetype_detail").find(".description").val());if(e==0&&$(".filetype_contents").find(".filetype_detail").find(".file_extension").val()!=""){var n={file_extension:$(".filetype_contents").find(".filetype_detail").find(".file_extension").val(),editor:$(".filetype_contents").find(".filetype_detail").find(".editor").attr("value"),description:$(".filetype_contents").find(".filetype_detail").find(".description").val(),type:$(".filetype_contents").find(".filetype_detail").find(".type").attr("value"),mode:$(".filetype_contents").find(".filetype_detail").find(".mode").attr("value")};core.filetypes.push(n);var r=$(".filetype_contents").find(".filetype_detail").find(".file_extension").val();$(".filetype_contents").find(".filetype_list").find(".newExt").html(r),$(".filetype_contents").find(".filetype_list").find(".newExt").attr("class",r),$(".filetype_contents").find("."+r).click(function(){self.save(),$(".filetype_contents").find(".filetype_list").children().each(function(){$(this).css("background-color","#fff")}),$(this).css("background-color","#b3d4ff"),$(".filetype_contents").find(".filetype_detail").children().each(function(){$(this).remove()});var e=$(this).attr("class"),t=self.get_filetype_info(e,"editor"),n=self.get_filetype_info(e,"description"),r=self.get_filetype_info(e,"type"),i=self.get_filetype_info(e,"mode");self.create_filetype_detail(e,t,n,r,i)})}}},get_filetype_info:function(e,t){for(var n=0;n<core.filetypes.length;n++)if(core.filetypes[n].file_extension==e){if(t=="editor")return core.filetypes[n].editor;if(t=="description")return core.filetypes[n].description;if(t=="type")return core.filetypes[n].type;if(t=="mode")return core.filetypes[n].mode}},init_filetype_tab:function(){$.getJSON("configs/filetype/filetype.json",function(data){core.filetypes=eval(data);var filetypes=core.filetypes;for(var i=0;i<core.filetypes.length;i++){var extName=filetypes[i].file_extension,editor=filetypes[i].editor,description=filetypes[i].description,type=filetypes[i].type,mode=filetypes[i].mode;$(".filetype_contents").find(".filetype_list").append("<div style='padding:3px;' class="+extName+">"+extName+"</div>"),$(".filetype_contents").find("."+extName).click(function(){self.save(),$(".filetype_contents").find(".filetype_list").children().each(function(){$(this).css("background-color","#fff")}),$(this).css("background-color","#b3d4ff"),$(".filetype_contents").find(".filetype_detail").children().each(function(){$(this).remove()});var e=$(this).attr("class"),t=self.get_filetype_info(e,"editor"),n=self.get_filetype_info(e,"description"),r=self.get_filetype_info(e,"type"),i=self.get_filetype_info(e,"mode");self.create_filetype_detail(e,t,n,r,i)})}})},create_filetype_detail:function(e,t,n,r,i){$(".filetype_contents").find(".filetype_detail").append("<div style='width:100%;'>Extention Name</div>"),$(".filetype_contents").find(".filetype_detail").append("<div style='width:100%; margin-top:4px;'><input class='file_extension' style='width:280px;' value='"+e+"' /></div>"),$(".filetype_contents").find(".filetype_detail").append("<div style='width:100%; margin-top:7px;'>Editor</div>"),$(".filetype_contents").find(".filetype_detail").append("<div style='width:100%; margin-top:4px;'><select class='editor' style='width:280px;'><option value='Editor'>Editor</option><option value='Designer'>Designer</option><option value='Rule_Editor'>Rule_Editor</option></select></div>"),$(".filetype_contents").find(".filetype_detail").find("option").each(function(){$(this).attr("value")==t&&$(this).attr("selected","selected")}),$(".filetype_contents").find(".filetype_detail").append("<div style='width:100%; margin-top:7px;'>Type</div>"),$(".filetype_contents").find(".filetype_detail").append("<div style='width:100%; margin-top:4px;'><select class='type' style='width:280px;'><option value='Code'>Code</option><option value='uml'>uml</option><option value='ui'>ui</option><option value='xml'>xml</option></select></div>"),$(".filetype_contents").find(".filetype_detail").find("option").each(function(){$(this).attr("value")==r&&$(this).attr("selected","selected")}),$(".filetype_contents").find(".filetype_detail").append("<div style='width:100%; margin-top:7px;'>Syntax Highlighting Mode</div>"),$(".filetype_contents").find(".filetype_detail").append("<div style='width:100%; margin-top:4px;'><select class='mode' style='width:280px;'><option value='text/javascript'>text/javascript</option><option value='application/json'>application/json</option><option value='application/xml'>application/xml</option><option value='text/html'>text/html</option><option value='text/css'>text/css</option><option value='text/x-python'>text/x-python</option><option value='application/x-httpd-php'>application/x-httpd-php</option><option value='text/x-php'>text/x-php</option><option value='text/x-diff'>text/x-diff</option><option value='text/x-csrc'>text/x-csrc</option><option value='text/x-c++src'>text/x-c++src</option><option value='text/x-java'>text/x-java</option><option value='text/x-groovy'>text/x-groovy</option><option value='text/stex'>text/stex</option><option value='text/x-haskell'>text/x-haskell</option><option value='text/x-ruby'>text/x-ruby</option><option value='text/x-coffeescript'>text/x-coffeescript</option><option value='text/x-stsrc'>text/x-stsrc</option><option value='text/x-plsql'>text/x-plsql</option><option value='text/x-lua'>text/x-lua</option><option value='text/x-scheme'>text/x-scheme</option><option value='text/x-clojure'>text/x-clojure</option><option value='text/x-rst'>text/x-rst</option><option value='text/x-yaml'>text/x-yaml</option><option value='application/x-sparql-query'>application/x-sparql-query</option><option value='application/x-sparql-query'>application/x-sparql-query</option><option value='text/velocity'>text/velocity</option><option value='text/x-rsrc'>text/x-rsrc</option></select></div>"),$(".filetype_contents").find(".filetype_detail").find("option").each(function(){$(this).attr("value")==i&&$(this).attr("selected","selected")}),$(".filetype_contents").find(".filetype_detail").append("<div style='width:100%; margin-top:7px;'>Description</div>"),$(".filetype_contents").find(".filetype_detail").append("<div style='width:100%; margin-top:4px;'><textarea class='description' style='resize: none; width:280px; height:90px; overflow:auto;'>"+n+"</textarea></div>")}};