import React, { useState, useEffect , useContext} from 'react'
import Slider from 'react-slick';
import { GeneralContext } from "../contexts/GeneralContext"


function Caroussel() {
  // const [colorTexto1 , setColorTexto1] = useState("#FFFFFF");
  // const [colorTexto2 , setColorTexto2] = useState("#FFFFFF");

    const [imagenes, setimagenes] = useState([]);
    const {setTexto1 , setTexto2,seturlFoto,setTamTexto1 , setPosIniPalabra1X , setPosIniPalabra1Y , posIniPalabra1X , posIniPalabra1Y ,colorTexto1 , setColorTexto1,
      setColorTexto2, setbordeColorTexto1} = useContext(GeneralContext);

    const handleClick = (event, url, width, height) => {
        
      
      //  setrefContendorFoto(el)
        seturlFoto(url)
        setTexto1("")
        setTexto2("")
        setTamTexto1(20)
        setColorTexto1("#FFFFFF");
        setColorTexto2("#FFFFFF");
        setbordeColorTexto1("#000000");

        // setPosIniPalabra1X(250)
        // setPosIniPalabra1Y(260)
       
        // alert(posIniPalabra1X)
      
       
         
       };

    useEffect(() => {
  
  
      fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(response => setimagenes(response.data.memes))
        .catch(err => console.error(err));
       
       
  
    }, []);
  
    useEffect(() => {
  
    }, [imagenes])
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      
      // responsive: [

      //   {

      //     breakpoint: 768,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 3,
      //       infinite: true,
      //       dots: false
      //     } ,








      //   }
      // ]
      responsive: [
        {
          breakpoint: 320,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false }
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 4, slidesToScroll: 3, infinite: false 
          }
        }
      ]
      
    };





    return (
        <div className="contenedor-slider">
    
    {/* <h3>{JSON.stringify(imagenes)}</h3> */}
    
          <Slider {...settings}>
          {imagenes.map((imagen) => (
          
           
          <div key={imagen.id} >
            <img src={imagen.url}   style={{width:'100%', height:'200px'}} alt=""  onClick={event => handleClick(event, imagen.url , imagen.width , imagen.height )}/>
           
          </div>
    
    
    
        ))}
    
      
     
          </Slider>
    
    
        </div>
    
      )











}

export default Caroussel