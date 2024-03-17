import {Button} from "@components/atoms";

export default function Home() {
    return (
        <main>
            <section className="max-w-screen-xl mx-auto px-4 md:mt-20 mt-5">
                <div className="block md:grid md:grid-cols-product gap-4">

                    <div className="">
                        <h3 className="uppercase text-clamp-14-24 font-light">Eleva tu rendimiento</h3>
                        <h2 className="uppercase text-clamp-16-36 font-normal">
                            Define tu
                            <span className="bg-black text-white px-2 ml-1 text-clamp-16-36 uppercase font-normal">
                                estilo
                            </span>
                        </h2>
                        <h1 className="text-clamp-32-64 font-bold mt-5 md:mt-24 md:mb-24">Nike Vomero 17</h1>
                        <p className="text-base md:block hidden">
                            Un paseo elástico y suave para energizar cada milla, el Vomero 17 te lleva a tu lugar feliz
                            para
                            correr. Su espuma brinda una capacidad de respuesta superior para ayudarte a mejorar cuando
                            estés
                            listo para ese equipo adicional.
                        </p>
                    </div>

                    <div className="md:mb-0 mb-10">
                        <div className="flex flex-col items-center">
                            <img src="/images/1.png" style={{filter: 'drop-shadow(20px 20px 4px rgba(0,0,0,0.25))'}}
                                 alt="Nike Vomero 17" className="w-full"/>
                            <div className="flex flex-row">
                                <img className="w-24 md:44 hover:scale-125" src="/images/2.png"/>
                                <img className="w-24 md:44 hover:scale-125" src="/images/3.png"/>
                                <img className="w-24 md:44 hover:scale-125" src="/images/4.png"/>
                            </div>
                        </div>
                    </div>

                    <div className="md:order-none">
                        <div>
                            <p className="text-clamp-16-24 font-medium">Marca</p>
                            <p className="text-clamp-16-24 font-bold">Nike</p>
                        </div>

                        <div>
                            <p className="text-clamp-16-24 font-medium mt-5">Color</p>
                            <span className="rounded-3xl w-10 h-10 inline-block"
                                  style={{background: '#00C1D4'}}>&nbsp;</span>
                            <span className="rounded-3xl w-10 h-10 inline-block"
                                  style={{background: '#3B595C'}}>&nbsp;</span>
                        </div>

                        <div>
                            <p className="text-clamp-16-24 font-medium mt-5">Talla</p>
                            <div className="grid grid-flow-row auto-rows-max auto-cols-max grid-cols-4 gap-2">
                                <div className="flex justify-center px-6 py-1 border-2 border-black rounded-md cursor-pointer">
                                    7
                                </div>
                                <div
                                    className="flex justify-center px-6 py-1 border-2 border-controls-color rounded-md">
                                    7.5
                                </div>
                                <div
                                    className="flex justify-center px-6 py-1 border-2 border-controls-color rounded-md">
                                    8
                                </div>
                                <div
                                    className="flex justify-center px-6 py-1 border-2 border-controls-color rounded-md">
                                    8.5
                                </div>
                                <div
                                    className="flex justify-center px-6 py-1 border-2 border-controls-color rounded-md">
                                    9
                                </div>
                                <div
                                    className="flex justify-center px-6 py-1 border-2 border-controls-color rounded-md">
                                    9.5
                                </div>
                                <div
                                    className="flex justify-center px-6 py-1 border-2 border-controls-color rounded-md">
                                    10
                                </div>
                                <div
                                    className="flex justify-center px-6 py-1 border-2 border-controls-color rounded-md">
                                    10.5
                                </div>
                                <div
                                    className="flex justify-center px-6 py-1 border-2 border-controls-color rounded-md">
                                    11
                                </div>
                                <div
                                    className="flex justify-center px-6 py-1 border-2 border-controls-color rounded-md">
                                    11.5
                                </div>
                                <div
                                    className="flex justify-center px-6 py-1 border-2 border-controls-color rounded-md">
                                    12
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-clamp-16-24 font-medium mt-5">Precio</p>
                            <p className="text-clamp-18-36 font-bold">$ 925.000</p>
                        </div>

                        <Button className="w-full mt-10">
                            Pagar con <br/> tarjeta de credito
                        </Button>
                    </div>

                </div>
                <p className="text-base md:hidden block mt-10">
                    Un paseo elástico y suave para energizar cada milla, el Vomero 17 te lleva a tu lugar feliz
                    para
                    correr. Su espuma brinda una capacidad de respuesta superior para ayudarte a mejorar cuando
                    estés
                    listo para ese equipo adicional.
                </p>


                <div className="my-28">
                    <p className="uppercase text-clamp-16-24 font-medium">Tambien te puede interesar</p>
                    <div className="md:grid md:grid-cols-3">
                        <div className="flex flex-col">
                            <img src="/images/8.png" className="w-full hover:scale-125"/>
                            <p className="text-clamp-16-24 font-medium uppercase">NIKE AIR MAX PLUS</p>
                            <p>$ 959.950</p>
                        </div>
                        <div className="flex flex-col">
                            <img src="/images/9.png" className="w-full hover:scale-125"/>
                            <p className="text-clamp-16-24 font-medium uppercase">NIKE AIR MAX PLUS</p>
                            <p>$ 959.950</p>
                        </div>
                        <div className="flex flex-col">
                            <img src="/images/10.png" className="w-full hover:scale-125"/>
                            <p className="text-clamp-16-24 font-medium uppercase">NIKE AIR MAX PLUS</p>
                            <p>$ 959.950</p>
                        </div>

                    </div>
                </div>

            </section>

        </main>
    );
}
