<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/type">

<html>
    <body>
        <h2>DOCTORS</h2>

        <table border="2">
        <tr bgcolor="grey">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Experience</th>
            <th>type</th>
            <th>gender</th>
            <th>userid</th>
            <th>age</th>
        </tr>

          <xsl:for-each select = "employee">

          
          <tr>
              <td><xsl:value-of select ="firstname"/></td>
              <td><xsl:value-of select ="lastname"/></td>
              <td><xsl:value-of select ="experience"/></td>
              <td><xsl:value-of select ="type"/></td>
              <td><xsl:value-of select ="gender"/></td>
              <td><xsl:value-of select ="userid"/></td>
              <td><xsl:value-of select ="age"/></td>
          </tr>
        </xsl:for-each>

        </table>
    </body>
</html>

</xsl:template>
</xsl:stylesheet>
