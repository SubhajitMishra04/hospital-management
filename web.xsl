<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/type">

<html>
    <head>
        <style>
            body {
                background-image: url('img/onlineimg.png');
                background-repeat: no-repeat;
                background-size: cover;
                }

            .navbar {
                padding: 10px 16px;
              overflow: hiddens;
              background-color: rgb(10, 78, 109);
              position: fixed; /* Set the navbar to fixed position */
              top: 0; /* Position the navbar at the top of the page */
              width: 100%; /* Full width */
            }

              /* Links inside the navbar */
            .navbar a {
                 float: left;
                 display: block;
                 color: #f2f2f2;
                 text-align: center;
                 padding: 14px 16px;
                 text-decoration: none;
                      }  

             /* Change background on mouse-over */
.navbar a:hover {
  background: #ddd;
  color: black;
}
        </style>
    </head>
    <body>

        <section><div class="navbar">
            <a href="index.html">Home</a>
            <a href="appointment.html">Appointment</a>
            <a href="online.html">Online Consultation</a>
        </div>
        </section>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <h2>DOCTORS</h2>

        <table border="4">
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
