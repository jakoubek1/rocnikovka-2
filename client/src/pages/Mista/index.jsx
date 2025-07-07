import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import Pozadi from "../../assets/pozadi.jpg";

const Mista = () => {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${Pozadi})` }}
    >
      <Header />
      <div className="flex-1 py-10 px-5 text-white">
        <div className="max-w-[1300px] mx-auto flex flex-wrap justify-between gap-20">

          <div className="flex flex-col md:flex-row w-full bg-zinc-900 p-5 rounded-2xl border-4 border-yellow-400 shadow-lg my-10">
            <div className="flex-1 flex flex-col justify-center items-center text-center p-5">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4 drop-shadow-md">
                Marvel Staroměstské náměstí
              </h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.457368316697!2d14.900069!3d50.4102141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470955b4f28ff403%3A0xe5e8dd3f47669f0a!2sMarvel%20Gym!5e0!3m2!1scs!2scz!4v1719256939926!5m2!1scs!2scz"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Marvel Gym 1"
                className="w-[90%] h-[400px] rounded-xl object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              ></iframe>
              <p className="text-gray-300 text-sm mt-4">
                Staroměstské nám. 20/21, 293 01 Mladá Boleslav II
              </p>
            </div>
             <div className="flex-1 flex flex-col justify-center items-center text-center p-5">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4 drop-shadow-md">
                Marvel U Stadionu
              </h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.426261733086!2d14.9096475!3d50.4266438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470955ed166ed699%3A0x7d6db2610dc834d5!2sMarvel%20Gym!5e0!3m2!1scs!2scz!4v1719257057890!5m2!1scs!2scz"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Marvel Gym 2"
                className="w-[90%] h-[400px] rounded-xl object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              ></iframe>
              <p className="text-gray-300 text-sm mt-4">
                U Stadionu 1322, 293 01 Mladá Boleslav II
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Mista;
