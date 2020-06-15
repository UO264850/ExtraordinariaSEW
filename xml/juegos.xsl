<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html"/>
<xsl:template match="juegos"> 
    <html> 
        <body> 
            <xsl:for-each select="juego"> 
                <h1><xsl:value-of select="@titulo"/></h1>
                <br/>
                <p>Desarrolladores:</p>
                <br/> 
                <xsl:for-each select="desarrollador"> 
                    <p><xsl:value-of select="@nombre"/></p>
                    <br/>
                    <p>Fecha de fundacion: <xsl:value-of select="@fecha_fundacion"/></p>
                    <br/>
                    <p>CEO: <xsl:value-of select="@CEO"/></p> 
                    <br/> 
                </xsl:for-each> 
                <p>Pais: <xsl:value-of select="@pais"/></p>
                <br/>
                <p>Fecha de Lanzamiento:</p>
                <br/>
                    <p>Japón: <xsl:value-of select="@japon"/></p>
                    <br/>
                    <p>Europa: <xsl:value-of select="@europa"/></p>
                    <br/>
                    <p>América: <xsl:value-of select="@america"/></p>
                    <br/>
                <p>Plataformas:</p>
                <br/>
                <xsl:for-each select="plataforma"> 
                    <p><xsl:value-of select="."/></p>
                    <br/> 
                </xsl:for-each>
                <p>Género: <xsl:value-of select="@genero"/></p>
                <br/>
                <p>Jugadores: <xsl:value-of select="@jugadores"/></p>
                <br/>
                <p>Fotos: </p>
                <br/>
                <xsl:for-each select="foto"> 
                    <p><xsl:value-of select="."/></p>
                    <br/> 
                </xsl:for-each>
            </xsl:for-each>
        </body> 
    </html> 
</xsl:template> 
</xsl:stylesheet>







