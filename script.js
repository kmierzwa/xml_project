  function loadXMLDoc1() {
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
          var email = c.getElementsByTagName('email')[0].childNodes[0].nodeValue    
          var phone = c.getElementsByTagName('phone')[0].childNodes[0].nodeValue
          var nationality = c.getElementsByTagName('nationality')[0].childNodes[0].nodeValue         
          
          if (natValue == "Poland") output += name +"\t"+ email  + phone + nationality+"</br>";
          
      }
    
        document.getElementById("content").innerHTML = output;

    }

 function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
        showOthers(this);
      
      }
      
    };
    xmlhttp.open("GET", "project.xml", true);
    xmlhttp.send();
   }

   function showOthers(xml) {
    var xmlDoc = xml.responseXML;
    citizens = xmlDoc.getElementsByTagName("Citizen");
    var output = ""
    for(var c of citizens){
         var natValue = c.getElementsByTagName('nationality')[0].childNodes[0].nodeValue
         var name = c.getElementsByTagName('name')[0].childNodes[0].nodeValue
         var email = c.getElementsByTagName('email')[0].childNodes[0].nodeValue
         var phone = c.getElementsByTagName('phone')[0].childNodes[0].nodeValue
         var nationality = c.getElementsByTagName('nationality')[0].childNodes[0].nodeValue
         if (natValue != "Poland") output += name + email + phone + nationality + "</br>";
          
     }
    
      document.getElementById("content").innerHTML = output;

   }
   function loadXMLDoc2() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
        inhabitants(this);
      
      }
      
    };
    xmlhttp.open("GET", "project.xml", true);
    xmlhttp.send();
   }

   function inhabitants(xml) {
    var xmlDoc = xml.responseXML;
    citizens = xmlDoc.getElementsByTagName("Citizen");
    var output = ""
    for(var c of citizens){
         var name = c.getElementsByTagName('name')[0].childNodes[0].nodeValue
         var nationality = c.getElementsByTagName('nationality')[0].childNodes[0].nodeValue
        output += name + nationality + "</br>";
          
     }
    
      document.getElementById("content").innerHTML = output;

   }


