import React, { useState }  from 'react'
import Axios from 'axios';

import img0 from '../assets/images/img/img-0.jpg';
import '../stylesheets/Allactivities.css';

function Allactivities() {

  const [image, setImage] = useState([]);
  const [joke, setJoke] = useState({});

  const API_ENDPOINT2 = `https://v2.jokeapi.dev/joke/`;
  const API_ENDPOINT = `https://api.unsplash.com/search/photos?client_id=`;
  const key = 'wLKEI7W1sUb_Qm2qu1t9Yf7WVbwD2dlMtkIaiOhr4Yo';

  //Random Number Generator: Math.random(Math.random() * (max - min + 1)) + min; 
  let randomPage = Math.floor(Math.random() * 50) + 1;

  const handleClick = () => {
    Axios.get(`${API_ENDPOINT}${key}&query=travel&page=${randomPage}`)
      .then((res) => {
        setImage(res.data.results);
        console.log(image);
        
      })
  }

  const handleClick2 = () => {
    Axios.get(`${API_ENDPOINT2}Coding?safe-mode`)
      .then((res) => {
        console.log(res.data);
        setJoke(res.data)
      })
  }

  return (
    <div>

      {/*----------------------------------HEADER------------------------------- */}
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-sm-12 col-md-6 col-lg-6 col-12 mt-5">
            <h1>About UnSplash API </h1>
            <hr className="w-100% " />

            <p className="p-2">
              Unsplash API is a modern JSON API that surfaces all of the info needed to build any experience for the users. It’s so simple to use that we even run unsplash.com on it! <br /><br />Every image URL returned by the API can easily be manipulated to dynamically adjust the dimensions, crop, and quality of the image in realtime.
            </p>
            <p className='p-2'>
              Below i used a grid of col 5-4-2 to make it responsive.
              Let's Hit the Api by clicking the button below.
              </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-12 m-auto text-end mt-5 ps-5">
            <img src={ img0 } alt="Demo Visual" id="img" className="img-fluid img-thumbnail" />
          </div>
        </div>
      </div>

      {/*-------------------------------2 API-HITs---------------------------- */}
      <div className="container my-4 ms-5">
        <button className='btn btn-success fs-5 mb-3' onClick={handleClick2}>Wanna Hear a Joke !<i className="fas fa-laugh-squint ms-2"></i></button>
          {
            joke.type === 'single'
              ? <p>{ joke.joke }</p>
              : <>
                  <p className='mb-1'>{ joke.setup }</p>
                  <p>{ joke.delivery }</p>
                </>
          }
      </div>

      <div className='container-fluid px-5'>
        <button className='btn btn-outline-success ms-5 mt-4 fs-5' onClick={handleClick}>Hit & Hit Again <i className="fas fa-grin-wink ms-2"></i></button>
        <button className='btn btn-danger mt-4 ms-3' onClick={ () => window.location.reload() }>RESET</button>
        <div className='gallery'>
         {
            image.map((value, index) => {
              return(
                <div key={index} className='d-flex flex-column align-items-center toolTip'>
                  <img src={value.urls.regular} className='gallery_img' alt='API HIT DATA 1 png' />
                  <p className='mb-0 text-muted'>Image no: {index + 1}</p>
                  <span className="toolTipText">{value.description}</span>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Allactivities
