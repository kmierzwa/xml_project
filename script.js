
function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        showPolish(this);
      }
    };
    xmlhttp.open("GET", "project.xml", true);
    xmlhttp.send();
  }

function showPolish(xml) {
    var xmlDoc = xml.responseXML;
    citizens = xmlDoc.getElementsByTagName("Citizen");
    var output = ""
    for(var c of citizens){
        var natValue = c.getElementsByTagName('nationality')[0].childNodes[0].nodeValue
        var name = c.getElementsByTagName('name')[0].childNodes[0].nodeValue
        if (natValue == "Poland") output += name + "</br>";
    }
      document.getElementById("content").innerHTML = output;
}

