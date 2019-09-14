//infoTab, info, content, expandButton


if (document.getElementById('infoTab')) {
	document.getElementById('infoTab').appendChild(e);
}

var collapsed = false;
function onExpandCollapse()
{
	if (collapsed)
	{
		document.getElementById('info').style.width = '400px';
		document.getElementById('content').style.right = '401px';
		document.getElementById('expandButton').innerHTML = ">";
		collapsed = false;
	}
	else
	{
		document.getElementById('info').style.width = '0px';
		document.getElementById('content').style.right = '0px';
		document.getElementById('expandButton').innerHTML = "<";
		collapsed = true;
	}
}
