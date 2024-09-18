import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cnpython from '../assets/cnpython.jpg';
import dataanalysis from '../assets/dataanalysis.jpg';
import dataanalysis1 from '../assets/dataanalysis1.jpg';
import dataanalysis2 from '../assets/dataanalysis2.jpg';
import gcp from '../assets/GCP certificate.jpg';
import incubation from '../assets/incubation.jpg';
import javac from '../assets/java certificate.png';
import javafull from '../assets/javafull.jpg';
import postgreSQL from '../assets/postgreSQL.jpg';
import pythonds from '../assets/Pythonds.jpg';
import pythongl from '../assets/pythonGL.jpg';
import pythonml from '../assets/pythonml.jpg';
import pythonskillup from '../assets/pythonskillup.jpg';

const certificates = [
  { image: cnpython },
  { image: dataanalysis },
  { image: dataanalysis1 },
  { image: dataanalysis2},
  { image: gcp},
  { image: incubation },
  { image: javac},
  { image: javafull},
  { image: postgreSQL},
  { image: pythonds},
  { image: pythonml},
  { image: pythongl},
  { image: pythonskillup},
  // Add more certificates as needed
];

const CertificateSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
  };

  return (
    <section id='certifications'>
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-10 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Certificates</h2>
        <div className="certificate-slider-container bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-10 rounded-lg shadow-lg">
          <Slider {...settings}>
            {certificates.map((certificate, index) => (
              <div key={index} className="certificate-slide p-4">
                <div className="image-container">
                  <img src={certificate.image} alt={certificate.title} className="certificate-image rounded-lg shadow-lg mx-auto" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
    </section>
  );
};

export default CertificateSlider;
