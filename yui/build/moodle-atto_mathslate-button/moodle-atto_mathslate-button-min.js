YUI.add("moodle-atto_mathslate-button",function(e,t){M.atto_mathslate=M.atto_mathslate||{},M.atto_mathslate.Button={dialogue:null,selection:null,config:null,display_matheditor:function(t,n){t.preventDefault(),M.editor_atto.is_active(n)||M.editor_atto.focus(n),M.atto_mathslate.selection=M.editor_atto.get_selection();if(M.atto_mathslate.selection!==!1){var r=M.atto_mathslate.dialogue||new M.core.dialogue({visible:!1,modal:!0,close:!0,draggable:!0});r.render();var i=e.guid();r.set("bodyContent",'<div id="'+i+'" ></div>'),r.set("headerContent",M.util.get_string("mathslate","atto_mathslate")),r.show();var s=new M.atto_mathslate.Editor("#"+i);s.insertMath=function(e){e!==""&&(M.editor_atto.set_selection(M.atto_mathslate.selection),document.execCommand("insertHTML",!1,e),r.hide())},MathJax.Hub.Queue(["Typeset",MathJax.Hub,s.node.generateID()]),M.atto_mathslate.dialogue=r}},init:function(e){M.editor_atto.add_toolbar_button(e.elementid,"mathslate",e.icon,e.group,this.display_matheditor,this),M.atto_mathslate.config=e.config},insert_math:function(e){e!==""&&(M.editor_atto.set_selection(M.atto_mathslate.selection),document.execCommand("insertHTML",!1,e))}}},"@VERSION@",{requires:["escape","moodle-atto_mathslate-editor"]});
