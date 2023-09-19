<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <title>Canine Details</title>
        <style>
          ul.navbar {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #333;
          }
          li.navitem {
            float: left;
          }
          li.navitem a {
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
          }
          li.navitem a:hover {
            background-color: #ddd;
            color: black;
          }
          
          table {
            font-family: Arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
          }
          th, td {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
          }
          th {
            background-color: #f2f2f2;
          }
        </style>
      </head>
      <body>
        <ul class="navbar">
          <li class="navitem"><a href="#">Wagging Tails</a></li>
          <li class="navitem"><a href="#">Home</a></li>
          <li class="navitem"><a href="#">Feedback</a></li>
          <li class="navitem"><a href="#">Canine Catalog</a></li>
        </ul>
        <h1>Canine Details</h1>
        <table>
          <tr>
            <th>Breed</th>
            <th>Color</th>
            <th>Country</th>
          </tr>
          <xsl:for-each select="CanineDetails/Dog">
            <tr>
              <td><xsl:value-of select="Breed"/></td>
              <td><xsl:value-of select="Color"/></td>
              <td><xsl:value-of select="Country"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
