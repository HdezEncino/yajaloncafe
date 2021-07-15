import React from "react";

function Form() {
  return (
    <div>
      <div id="list-example" class="list-group">
        <a class="list-group-item list-group-item-action " href="#list-item-1">
          Historia del cafe y plantación
        </a>
    
        <a class="list-group-item list-group-item-action" href="#list-item-3">
          Temporada 
        </a>
        <a class="list-group-item list-group-item-action" href="#list-item-4">
          Tipos de suelo
        </a>
      </div>
      <div
        data-bs-spy="scroll"
        data-bs-target="#list-example"
        data-bs-offset="0"
        class="scrollspy-example"
        tabindex="0"
      >
        <h4 id="list-item-1"className=" text-white text-center p-2 bg-dark">historia del cafe</h4>
        <p className="text-center ">
        Querido lector,  como de seguro ya sabrá,  Chiapas es el productor número uno de café orgánico de calidad en el mundo. Sin embargo el conocimiento de parte de la historia del café en Chiapas, nuestro estado, es muy poco conocida,  por lo que el post del día de hoy, servirá para dar pie a lo que fue está aventura.
        Chiapas es un estado con un tradicional cuidado en el cultivo y de buena comercialización. La primera vez que se introdujo el grano de café al estado fue en 1847 por Geronimo Manchinelli, en el municipio de Tuxtla Chico, en donde se encuentran las conocidas e históricas ruinas de Izapa, en aquel bello paisaje con el majestuoso volcán Tacaná se adaptó rápidamente  el primer grano de café chiapaneco. Este provenía de Guatemala, donde las condiciones climáticas y de producción son parecidas, puesto que no hay que olvidar que en centroamérica el café comenzó a producirse desde el siglo XVII cuando fue traído de Francia. Posteriormente la segunda etapa del grano de café en Chiapas fue con la llegada de Carlos Gris al Soconusco, con el establecimiento de su finca el Majagual, para 1876 Don Matías Romero, un ilustre político y diplomático mexicano, comenzó con el proyecto de colonización, tras este proyecto, en los años consecuentes se establecieron 22 fincas en toda la zona.
        <hr></hr>
       <h5 classname="sub-title" >Plantación</h5>
       Yashalum la tierra siempre verde cuenta con 3 tipos de plantación muy populares dentro de la region las cuales se mencionan a continuación.
       <p>
       Típica: Uno de los cafés más importantes cultural y genéticamente de C. arabica en el mundo, con alta calidad en Centroamérica. Muy alta susceptibilidad a la roya, bien adaptado a las condiciones más frías.
          Porte: Alta
          Color del brote de las hojas: Bronce
          Tamaño del fruto: Grande
          También llamados Criollo, Indio, Arábigo, Pluma Hidalgo, Blue Mountain y Sumatra.
          <div className=" col-align-self-center"></div>
          <img src="/imagenes/plantación.jpg" alt=""/>
          <hr></hr>
          Caturra: Una planta compacta con un buen potencial de rendimiento y de calidad estándar en Centroamérica. Muy alta susceptibilidad a la roya.
          Porte: bajo/compacto
          Color del brote de las hojas: verde 
          Tamaño del fruto: promedio
          <div className=" col-align-self-center"></div>
          <img src="/imagenes/plantación1.jpg" alt=""/>
          <hr></hr>
          Borbón: Uno de los cafés más importantes cultural y genéticamente de C. arabica en el mundo, conocidos por su excelente calidad de la bebida en las mayores altitudes.
          Porte: alta 
          Color del brote de las hojas: verde 
          Tamaño del fruto: promedio
          <div className=" col-align-self-center"></div>
          <img src="/imagenes/plantación2.jpg" alt=""/>
 

       </p>
          <div className=" col-align-self-derecha">
          <img className="img-fluid" src="" alt="" width="50%" />
        
        </div>
          
       
        </p>
        <h4 id="list-item-3">Temporada</h4>
        <p className="text-center ">
          En chiapas y en el resto del pais la plantacion tiene sus temporadas exactas para cultivarse
          para ello se conoce los 3 tipos de plantacion mas comunes en Yajalon. 
          <hr></hr>
          Tipica:
          <ul class="lista-simple">
          <li>Años para la primera coseha: año 4</li>
          <li>perfil de taza: muy buena, cuerpo y amargor moderado, acidez y aromas pronunciados.</li>
          <li>Temperatura optima(media anual): 15-24°c</li>
          </ul>
          <hr></hr>
          Caturra:
          <ul class="lista_simple">
             
          <li>Años para la primera coseha: año 3 </li>
          <li>perfil de taza: buena, acidez y cuerpo medio, notas a caramelo, chocolates y frutales </li>
          <li>Temperatura optima(media anual): 24-30°c</li>
          </ul>
          <hr></hr>
          Borbón:
          <ul class="lista-simple">
         <li>Años para la primera coseha: año 4</li> 
         <li>perfil de taza: muy buena</li>  
         <li>Temperatura optima(media anual):24-30°c</li>
          </ul>
          <hr></hr>
          <img src="/imagenes/tipos de suelo.jpg" alt=""/>
        </p>
        
        <h4 id="list-item-4">Tipo de suelo</h4>
        <p>
            La tierra y el clima parece hecha especialmente para cosechar cafe. Todas las condiciones favorables paracen reunidas en Yajalon: las caracteristicas de la tierra, el clima, la humedad del ambiente, las lluvias abundantes, numerosas corrientes y caidas de agua, proteccion de los vientos y demas dones de la naturleza se han juntado allí.
            <lu class="lista_simple">
                <li>Su extensión territorial es de 210.18 km², lo que representa el 0.21% de la superficie estatal, su altitud es de 800 msnm.</li>
                <li>Los recursos hidrológicos los conforman el río Yajalon y los arroyos el Azufre y Sacnu - Tilá.</li>
                <li>El clima varía con la altitud, pudiendo ser semicálido húmedo y templado húmedo.</li>
                <li>La vegetación es de bosque de encino - pino. </li>
            </lu>
            <img src="/imagenes/tipos de suelo1.jpg" alt=""/>

        </p>
      </div>
    </div>
  );
}

export default Form;