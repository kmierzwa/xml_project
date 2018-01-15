<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<?xml-stylesheet href="xslt.xsl" type="text/xsl" ?>
<xsl:template match="/">
  <html>
    <head>
         <link rel="stylesheet" href="style.css" type="text/css"/>
    </head>
    <body>
    <h2>citizens:</h2>
      <table border="1">
        <tr bgcolor="#9acd32">
          <th style="text-align:left">name</th>
          <th style="text-align:left">phone</th>
          <th style="text-align:left">email</th>
          <th style="text-align:left">nationality</th>
          
          
        </tr>
        <xsl:for-each select="Citizens/Citizen">
        <tr>
          <td><xsl:value-of select="name"/></td>
          <td><xsl:value-of select="phone"/></td>
          <td><xsl:value-of select="email"/></td>
          <td><xsl:value-of select="nationality"/></td>
        </tr>
        </xsl:for-each>
      </table>
    </body>
  </html>
</xsl:template>
</xsl:stylesheet>