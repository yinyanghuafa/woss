
function pop(obj){function tanchuang(obj){
	$('body').append('<div id="mry-opo"><div id="mry-opo-title"></div><table><tr><td>姓名</td><td>性别</td><td>评分</td><td>账号状态</td><td>电话</td></tr></table><div  id="mry-opo-content"></div></div>');var div = $('#mry-opo');$('#mry-opo-title').text(obj.title);$('#mry-opo-content').text(obj.content);div.css('width',obj.width+'px');div.css('height',obj.height+'px');div.css('margin-left',-(parseInt(obj.width)/2)+'px');div.css('margin-top',-(parseInt(obj.height)/2)+'px');div.css('background',obj.backgorund);$('#mry-mask').css('display','block');}function del(){$('#mry-opo').append('<a href="javascript:void(0)" deletes="mry-opo" style="position:absolute;right:10px;top:6px;color:#fff;font-size:12px;">X</a>');	$('[deletes=mry-opo]').click(function(){$('#mry-opo,#mry-mask').remove();});}$('body').append('<div id="mry-mask" deletes="mry-opo"></div>');var ject=obj;ject.width = parseInt(obj.width)||300;ject.height = parseInt(obj.height)||300;ject.title=obj.title||'来自提示信息';	ject.content = obj.content||'';ject.backgorund=obj.backgorund||'#fff';tanchuang(ject);del();}