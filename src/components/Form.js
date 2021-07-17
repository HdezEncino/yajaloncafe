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
        <a class="list-group-item list-group-item-action " href="#list-item-5">
          Mapa Productores de Cafe
          </a>
      </div>
      <div
        data-bs-spy="scroll"
        data-bs-target="#list-example"
        data-bs-offset="0"
        class="scrollspy-example"
        tabindex="0"
      >
        <h4 id="list-item-1"className=" text-white text-center p-2 bg-dark">historia del cafe y plantacion</h4>
        <p className="text-derecha ">
        Querido lector,  como de seguro ya sabrá,  Chiapas es el productor número uno de café orgánico de calidad en el mundo. Sin embargo el conocimiento de parte de la historia del café en Chiapas, nuestro estado, es muy poco conocida,  por lo que el post del día de hoy, servirá para dar pie a lo que fue está aventura.
        Chiapas es un estado con un tradicional cuidado en el cultivo y de buena comercialización. La primera vez que se introdujo el grano de café al estado fue en 1847 por Geronimo Manchinelli, en el municipio de Tuxtla Chico, en donde se encuentran las conocidas e históricas ruinas de Izapa, en aquel bello paisaje con el majestuoso volcán Tacaná se adaptó rápidamente  el primer grano de café chiapaneco. Este provenía de Guatemala, donde las condiciones climáticas y de producción son parecidas, puesto que no hay que olvidar que en centroamérica el café comenzó a producirse desde el siglo XVII cuando fue traído de Francia. Posteriormente la segunda etapa del grano de café en Chiapas fue con la llegada de Carlos Gris al Soconusco, con el establecimiento de su finca el Majagual, para 1876 Don Matías Romero, un ilustre político y diplomático mexicano, comenzó con el proyecto de colonización, tras este proyecto, en los años consecuentes se establecieron 22 fincas en toda la zona.

        <hr></hr>
       <h5 classname="sub-title" >Plantación</h5>
       Yashalum la tierra siempre verde cuenta con 3 tipos de plantación muy populares dentro de la region las cuales se mencionan a continuación.
       <p>
       
         <h5 classname="sub sub-title" >Tipica:</h5>Uno de los cafés más importantes cultural y genéticamente de C. arabica en el mundo, con alta calidad en Centroamérica. Muy alta susceptibilidad a la roya, bien adaptado a las condiciones más frías.
      
      <ul class="lista-simple">
         <li>Porte: Alta </li>
          <li>Color del brote de las hojas: Bronce </li>
         <li> Tamaño del fruto: Grande</li>
         <div className=" col-align-self-derecha"></div>
          <img src="/imagenes/plantación.jpg" alt=""/>
        <li>También llamados Criollo, Indio, Arábigo, Pluma Hidalgo, Blue Mountain y Sumatra.
          </li> 
          
      <h5 classname="sub sub-title" >Caturra:</h5>Una planta compacta con un buen potencial de rendimiento y de calidad estándar en Centroamérica. Muy alta susceptibilidad a la roya.
         
          <li>Porte: bajo/compacto</li>
          <li>Color del brote de las hojas: verde </li>
          <li>Tamaño del fruto: promedio</li>
          <div className=" col-align-self-izquierda"></div>
          <img src="/imagenes/plantación1.jpg" alt=""/>
          <hr></hr>
          <h5 classname="sub sub-title" >Borbón:</h5>  Uno de los cafés más importantes cultural y genéticamente de C. arabica en el mundo, conocidos por su excelente calidad de la bebida en las mayores altitudes.
         <li>Porte: alta </li> 
          <li>Color del brote de las hojas: verde </li>
         <li> Tamaño del fruto: promedio</li>
          <div className=" col-align-self-derecha"></div>
          <img src="/imagenes/plantación2.jpg" alt=""/>
          </ul>
 

       </p>
          <div className=" col-align-self-derecha">
          <img className="img-fluid" src="" alt="" width="50%" />
        
        </div>
          
       <hr></hr>
        </p>
        <h4 id="list-item-3">Temporada</h4>
        <p className="text-derecha ">
          En chiapas y en el resto del pais la plantacion tiene sus temporadas exactas para cultivarse
          para ello se conoce los 3 tipos de plantacion mas comunes en Yajalon. 
          
          <h5 classname="sub-title" >Tipica</h5>
          <ul class="lista-simple">
          <li>Años para la primera coseha: año 4</li>
          <li>perfil de taza: muy buena, cuerpo y amargor moderado, acidez y aromas pronunciados.</li>
          <li>Temperatura optima(media anual): 15-24°c</li>
          </ul>
         
          <h5 classname="sub-title" >Caturra</h5>
          <ul class="lista_simple">
             
          <li>Años para la primera coseha: año 3 </li>
          <li>perfil de taza: buena, acidez y cuerpo medio, notas a caramelo, chocolates y frutales </li>
          <li>Temperatura optima(media anual): 24-30°c</li>
          </ul>
          
          <h5 classname="sub-title" >Borbón</h5>
          <ul class="lista-simple">
         <li>Años para la primera coseha: año 4</li> 
         <li>perfil de taza: muy buena</li>  
         <li>Temperatura optima(media anual):24-30°c</li>
          </ul>
     
          <img src="/imagenes/tipos de suelo.jpg" alt=""/>

          <h5 classname="sub-title" >El clima ideal para un buen cafe</h5>
          <p>Para poder reproducir las bayas que generan tan deliciosa semilla, debe estar viviendo en un cultivo en el que debe de estar en tierras oscuras en sombra, con una temperatura idónea, este clima ideal del buen café, oscila entre los 19° a 25°C.</p>
          <p>Esto sucede debido a que el cafeto es una planta muy delicada que requiere de lugares tropicales, pues también las lluvias son parte fundamental de la producción de esta, aunque el exceso de agua también puede ocasionar destrozos en el cultivo, así que para poder disfrutar de nuestra cálida taza de café, se requiere de una lluvia moderada. Es así como en México, Chiapas es el estado con mayor producción de café orgánica, debido a que la temperatura que habita en el estado es el ideal para el crecimiento de esta planta, así también como la altura en el que se cultiva, pues en la región de los altos de Chiapas se llega a cultivar el cafeto a una altura de un poco más de 900 metros, además de que con los cuidados de nuestros pequeños productores dan al cultivo de este su café orgánico, su café de altura, mantienen las certificaciones que avalan esto.</p>
          <img src="/imagenes/liberica.png" alt=""/>
        </p>

        <hr></hr>
        
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

            <h5 classname="sub-title" >El suelo volcanico para mejor cultivo de cafe</h5>
            <p>
            El suelo volcánico es el mejor para la agricultura, entre estas actividades destaca la cafeticultura, por ello, alrededor del volcán Tacaná en la frontera con Guatemala habitan unas 400 mil personas, mientras que en las cercanías de El Chichón en el norte de Chiapas, unas siete mil, territorios muy activos en la producción y dónde se destaca la calidad del grano aromático de exportación.
            <li>
            La directora del Instituto de Gestión de Riesgos y Cambio Climático de la Universidad de Ciencias y Artes de Chiapas, afirma que no es difícil comprender el poblamiento tan grande alrededor de ambos colosos, una región que se ha convertido tan próspera en materia de agricultura y ganadería, dónde existe un gran arraigo de las familias en sus tierras.</li>

<li>Estos son los mejores suelos, las mejores tierras, la agricultura más próspera se desarrolla bajo estos terrenos volcánicos, esa es una parte de la naturaleza humana, los seres humanos a pesar de cohexistir con una amenaza constante han establecido un estilo de vida alrededor del coloso, dónde han constituido rutas de evacuación y semáforos de alerta.
            </li>
            <h4 id="list-item-5">Mapa de Productores</h4>
            </p>

            <p>Podemos observar el mapa de Chiapas y sus municipios Productores.</p>
            <img src="/imagenes/chiapasmapacafetalero2.jpg" alt="" width="70%"/>


        </p>
      </div>
    </div>

    

  );
}

export default Form;