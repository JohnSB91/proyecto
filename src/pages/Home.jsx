
const Home = () => {
    return (
        <>
            <div id="default-carousel" className="relative w-4/5 mx-auto" data-carousel="slide">

                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="./src/assets/dental-ore.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>

                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="./src/assets/imagen_odo_inicial.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>

                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="./src/assets/Implantologia-Oral.webp" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>

                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="./src/assets/imagen_odo_inicial.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>

                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="./src/assets/imagen_odo_inicial.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                </div>

                <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                </div>
                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
            <div className="bg-white w-4/5 mx-auto pb-2 rounded-s-full rounded-ee-full">
                <div className="flex justify-around bg-[#f6fafd] w-full py-3 px-5 rounded-s-full rounded-ee-full">
                    <div className="flex gap-3 items-center">
                        <div><img src="./src/assets/icon_profesionales.png" alt="" /></div>
                        <div className="flex flex-col justify-center text-[#004461]">
                            <h2 className="font-semibold text-lg">Profesionales</h2>
                            <span>+32años de experiencia</span>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center border-l-2 border-[#c0d7e1]"></div>
                    <div className="flex gap-3 items-center">
                        <div><img src="./src/assets/icon_moderna.png" alt="" /></div>
                        <div className="flex flex-col justify-center text-[#004461]">
                            <h2 className="font-semibold text-lg">Moderna Tecnología</h2>
                            <span>Diagnocam, Rayos-X, 3D Boh.</span>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center border-l-2 border-[#c0d7e1]"></div>
                    <div className="flex gap-3 items-center">
                        <div><img src="./src/assets/icon_emergencia.png" alt="" /></div>
                        <div className="flex flex-col justify-center text-[#004461]">
                            <h2 className="font-semibold text-lg">emergencia 24/7</h2>
                            <span>51 955 427 528</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/2 mx-auto mt-28">
                <h6 className="capitalize text-[#00aff3] font-bold text-lg">descubre</h6>
                <h2 className="capitalize text-[#00597f] font-bold text-4xl">nuestros servicios especializados</h2>
                <p className="text-[#004461] mt-7 text-lg">
                    <b>Odontología Especializada</b> brinda una variedad de servicios dentales para cuidar de la mejor manera su salud dental y la de su familia de por vida.
                </p>
                <div className="grid grid-cols-2 grid-rows-3 gap-x-5 gap-y-0.5">
                    <div className="mt-14">
                        <div className="flex flex-col justify-start gap-2">
                            <div>
                                <img src="./src/assets/svc-1.png" alt="" />
                            </div>
                            <h3 className="text-[#00597f] font-semibold text-lg underline decoration-solid">Implantología Dental Integral</h3>
                            <p className="text-[#00597f]">
                                Un implante es una raíz dental artificial, que se introduce en el hueso maxilar con la finalidad…
                            </p>
                            <a className="uppercase text-[#00aff3] underline decoration-solid text-xs font-bold m-0" href="#">leer más</a>
                        </div>
                    </div>
                    <div className="mt-14">
                        <div className="flex flex-col justify-start gap-2">
                            <div>
                                <img src="./src/assets/svc-2.png" alt="" />
                            </div>
                            <h3 className="text-[#00597f] font-semibold text-lg underline decoration-solid">Ortodoncia y Ortopedia Maxilar</h3>
                            <p className="text-[#00597f]">
                                Tendrás una sonrisa brillante y envidiable. En Clínica Dental Oré te ofrecemos desde la…
                            </p>
                            <a className="uppercase text-[#00aff3] underline decoration-solid text-xs font-bold m-0" href="#">leer más</a>
                        </div>
                    </div>
                    <div className="mt-14">
                        <div className="flex flex-col justify-start gap-2">
                            <div>
                                <img src="./src/assets/svc-3.png" alt="" />
                            </div>
                            <h3 className="text-[#00597f] font-semibold text-lg underline decoration-solid">Rehabilitación Oral</h3>
                            <p className="text-[#00597f]">
                                La rehabilitación oral se puede hacer con 3 tipos básicos de prótesis dentales…
                            </p>
                            <a className="uppercase text-[#00aff3] underline decoration-solid text-xs font-bold m-0" href="#">leer más</a>
                        </div>
                    </div>
                    <div className="mt-14">
                        <div className="flex flex-col justify-start gap-2">
                            <div>
                                <img src="./src/assets/svc-4.png" alt="" />
                            </div>
                            <h3 className="text-[#00597f] font-semibold text-lg underline decoration-solid">Odontología Restauradora y Estética</h3>
                            <p className="text-[#00597f]">
                                Te ofrecemos la mejor calidad de carillas dentales para perfeccionar tu sonrisa…
                            </p>
                            <a className="uppercase text-[#00aff3] underline decoration-solid text-xs font-bold m-0" href="#">leer más</a>
                        </div>
                    </div>
                    <div className="mt-14">
                        <div className="flex flex-col justify-start gap-2">
                            <div>
                                <img src="./src/assets/svc-5.png" alt="" />
                            </div>
                            <h3 className="text-[#00597f] font-semibold text-lg underline decoration-solid">Cirugía Bucal</h3>
                            <p className="text-[#00597f]">
                                La cirugía bucal es una especialidad de la odontología que trata del diagnóstico y…
                            </p>
                            <a className="uppercase text-[#00aff3] underline decoration-solid text-xs font-bold m-0" href="#">leer más</a>
                        </div>
                    </div>
                    <div className="mt-14">
                        <div className="flex flex-col justify-start gap-2">
                            <div>
                                <img src="./src/assets/svc-6.png" alt="" />
                            </div>
                            <h3 className="text-[#00597f] font-semibold text-lg underline decoration-solid">Periodoncia</h3>
                            <p className="text-[#00597f]">
                                Es la especialidad de la odontología que estudia la prevención, diagnóstico y tratamiento de las…
                            </p>
                            <a className="uppercase text-[#00aff3] underline decoration-solid text-xs font-bold m-0" href="#">leer más</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

    return (
        <>
            {/* <div  classNameNameName="w-full h-full bg-cover bg-center bg-no-repeat mb-8 md:h-[650px]"><img src="./src/assets/slider-1.jpg" alt=""  /></div> */}
            {/*  <div classNameNameNameName="valores_top">hola</div> */}
        </>
    );
};

export default Home;
