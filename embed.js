


function embed_tinychat(params, options)
{
	var data = [];
	for(var i in params)
	{
		data.push(i + "=" + encodeURIComponent(params[i]));
	}
	
  	data = data.join("&");
  	
  	var frame = document.createElement("iframe");
  	frame.src = "http://tinychat.com/embed/chat.html?" + data;
  	frame.style.width="75%";
  	frame.style.height="75%";
  	frame.style.border = "0";
  	frame.frameBorder = "0";
  	
  	var container = document.createElement("div");
  	container.className = "tinychat_embed";
	container.style.height="720px";
  	container.appendChild(frame);
  	
  	if(typeof options == "undefined")
  	{
  		options = {};
  		options.width = "600px";
  		options.height = "700px";
  	}
  	
  	var div = document.createElement("div");
  	div.appendChild(container);
  	
  	var element = document.getElementById('client');
  	if(!element)
  	{
	  	document.write(div.innerHTML);
	}
	else
	{
		element.innerHTML = div.innerHTML;
	}
	
  	if(container.style.width == '')
  	{
  		container.style.width = options.width;
  	}
	
	if(container.style.height == '')
	{  	
  		container.style.height = options.height;
  	}
	
	return frame;
}

if(typeof tinychat != 'undefined')
{
	embed_tinychat(tinychat);
}
