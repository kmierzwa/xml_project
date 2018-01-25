<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/Citizens">


<html>
<head>
<script type="text/javascript" src="script.js"></script>
<link rel="stylesheet" href="style.css" type="text/css"/>
</head>

<body>
<h1>Citizens:</h1>
<table border="1">
    <tr>
        <th>name</th>
        <th>phone</th>
        <th>email</th>
        <th>nationality</th>
        <th>flag</th>
    </tr>
    <xsl:for-each select="/Citizens/Citizen">
    <tr>

        <td> <xsl:value-of select="name" /></td>
        <td> <xsl:value-of select="phone" /> </td>
        <td> <xsl:value-of select="email" /> </td>
        <td><xsl:value-of select="nationality" /> </td>
         <img style="width: 100%;">
                    <xsl:attribute name="src">
                      <xsl:value-of select="photo/@src"/>
                    </xsl:attribute>
                </img>
    </tr>
     </xsl:for-each> 
    </table>
     <button type="button" onclick="loadXMLDoc2()">List of Inhabitants</button>
            <button type="button" onclick="loadXMLDoc1()">ShowPolish</button>
            <button type="button" onclick="loadXMLDoc()">ShowOthers</button>
            <p id="content"></p>
</body>
</html>





 </xsl:template>
</xsl:stylesheet>