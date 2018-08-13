function permitirDejar(ev)
{
    ev.preventDefault();
}

function arrastrar(ev)
{
    ev.dataTransfer.setData("text", ev.target.id);
}

function dejar(ev)
{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function calificar()
{
	hab1 = document.getElementById('habito1').lastChild.id;
	hab2 = document.getElementById('habito2').lastChild.id;
	hab3 = document.getElementById('habito3').lastChild.id;
	hab4 = document.getElementById('habito4').lastChild.id;
	hab5 = document.getElementById('habito5').lastChild.id;
	hab6 = document.getElementById('habito6').lastChild.id;
	hab7 = document.getElementById('habito7').lastChild.id;

	if (hab1 == "drag1")
	{
		document.getElementById('habito1').style.background = "rgba(30, 220, 100, 0.6)";
	}
	else
	{
		if(hab1 == null)
		{
			document.getElementById('habito1').style.background = "rgba(10, 0, 50, 0.4)";
		}
		else
		{
			document.getElementById('habito1').style.background = "rgba(220, 10, 10, 0.6)";
		}
	}
	if (hab2 == "drag2")
	{
		document.getElementById('habito2').style.background = "rgba(30, 220, 100, 0.6)";
	}
	else
	{
		if(hab2 == null)
		{
			document.getElementById('habito2').style.background = "rgba(10, 0, 50, 0.4)";
		}
		else
		{
			document.getElementById('habito2').style.background = "rgba(220, 10, 10, 0.6)";
		}
	}
	if (hab3 == "drag3")
	{
		document.getElementById('habito3').style.background = "rgba(30, 220, 100, 0.6)";
	}
	else
	{
		if(hab3 == null)
		{
			document.getElementById('habito3').style.background = "rgba(10, 0, 50, 0.4)";
		}
		else
		{
			document.getElementById('habito3').style.background = "rgba(220, 10, 10, 0.6)";
		}
	}
	if (hab4 == "drag4")
	{
		document.getElementById('habito4').style.background = "rgba(30, 220, 100, 0.6)";
	}
	else
	{
		if(hab4 == null)
		{
			document.getElementById('habito4').style.background = "rgba(10, 0, 50, 0.4)";
		}
		else
		{
			document.getElementById('habito4').style.background = "rgba(220, 10, 10, 0.6)";
		}
	}
	if (hab5 == "drag5")
	{
		document.getElementById('habito5').style.background = "rgba(30, 220, 100, 0.6)";
	}
	else
	{
		if(hab5 == null)
		{
			document.getElementById('habito5').style.background = "rgba(10, 0, 50, 0.4)";
		}
		else
		{
			document.getElementById('habito5').style.background = "rgba(220, 10, 10, 0.6)";
		}
	}
	if (hab6 == "drag6")
	{
		document.getElementById('habito6').style.background = "rgba(30, 220, 100, 0.6)";
	}
	else
	{
		if(hab6 == null)
		{
			document.getElementById('habito6').style.background = "rgba(10, 0, 50, 0.4)";
		}
		else
		{
			document.getElementById('habito6').style.background = "rgba(220, 10, 10, 0.6)";
		}
	}
	if (hab7 == "drag7")
	{
		document.getElementById('habito7').style.background = "rgba(30, 220, 100, 0.6)";
	}
	else
	{
		if(hab7 == null)
		{
			document.getElementById('habito7').style.background = "rgba(10, 0, 50, 0.4)";
		}
		else
		{
			document.getElementById('habito7').style.background = "rgba(220, 10, 10, 0.6)";
		}
	}

	if(hab1 == "drag1" && hab2 == "drag2" && hab3 == "drag3" && hab4 == "drag4" && hab5 == "drag5" && hab6 == "drag6" && hab7 == "drag7")
	{
		alert("¡Felicidades!");
	}
}