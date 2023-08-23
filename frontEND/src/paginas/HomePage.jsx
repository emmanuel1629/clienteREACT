import React from 'react'
import './cssPaginas.css';
import Carousel from 'react-bootstrap/Carousel';
import imagenRetos from '../components/ImagenComponent';
import CardComponent from "../components/CardComponent";

function HomePage() {
  return (
    <div className="container home text-center">
        <div className="row">
          <div className="col-md-8">
            <h2>Seccion Noticias</h2>
            <div className="row">
              
                <div className="col">
                  {
                    CardComponent("Encabezado","Titulo","Contenido")
                  }
                </div>

                <div className="col">
                  {
                    CardComponent("Encabezado2","Titulo2","Contenido2")
                  }
                </div>

                <div className="col">
                  {
                    CardComponent("Encabezado3","Titulo3","Contenido3")
                  }
                </div>

            </div>
          </div>

          <div className="col-md-3">
              <div className="card  cardRetos mt-5 p-3">
                <Carousel fade  className="w-100">
                  <Carousel.Item>
                    <div className="imagen-container">
                      {imagenRetos("https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")}
                    </div>

                    <h3>Reto menos lineas de Codigo</h3>

                    <p className="carousel-text mb-1">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                  </Carousel.Item>

                  <Carousel.Item>
                    <div className="imagen-container">
                      {imagenRetos("https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")}
                    </div>
                    <h3>Reto Crea asistente con ReactPY</h3>
                    <p className="carousel-text mb-1">
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Item>

                  <Carousel.Item>
                    <div className="imagen-container">
                      {imagenRetos("https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")}
                    </div>
                    <h3>Reto primer servidor node</h3>
                    <p className="carousel-text mb-1">
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Item>

                </Carousel>
              </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-12">
              Column
          </div>
        </div>
    </div>
  )
}

export default HomePage