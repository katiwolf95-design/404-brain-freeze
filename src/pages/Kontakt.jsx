// import Header from "../components/layout/Header";

import ButtonHero from "../components/ui/ButtonHero";
import SectionTitle from "../components/ui/SectionTitle";

export default function Kontakt() {   
    return (
        <>
            {/* <Header /> */}

            <section
                className="relative py-32"
                /* style={{
                    backgroundImage: "url('/Vector.svg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }} */
            >
                {/**CONTAINER */}
                <div className="max-w-[1200px] mx-auto px-24 py-32">

                    {/**Title */}
                    <SectionTitle title="Besuchen Sie uns in der Gelateria Fiorentina" />

                    <p className="text-center max-w-[500px] mx-auto mt-6 mb-16 text-gray-600">
                        Ob für eine spontane Kugel Eis, ein Treffen mit Freunden
                        oder einfach eine kleine Auszeit – wir freuen uns,
                        Sie in unserer Gelateria begrüßen zu dürfen.
                    </p>

                    {/**Adress + MAP */}
                    <div className="grid md:grid-cols-2 items-center mb-32 gap-6 md:gap-8">

                        {/**INFO */}
                        <div className="grid grid-cols-2 space-y-8 md:block gap-6 text-base md:text-sm">

                            <div>
                                <p className="text-[#CC1E36] font-semibold mb-1">Adresse</p>
                                <p>Gelateria Fiorentina</p>
                                <p>Marktplatz 12</p>
                                <p>10115 Berlin</p>
                            </div>

                            <div>
                                <p className="text-[#CC1E36] font-semibold mb-1">Öffnungszeiten</p>
                                <p>Mo – Fr: 12:00 – 21:00</p>
                                <p>Sa – So: 11:00 – 22:00</p>
                            </div>

                            <div>
                                <p className="text-[#CC1E36] font-semibold mb-1">Telefon</p>
                                <p>+49 123 456789</p>
                            </div>

                            <div>
                                <p className="text-[#CC1E36] font-semibold mb-1">E-Mail</p>
                                <p>hallo@gelateria-fiorentina.de</p>
                            </div>
                        </div>

                        {/**MAP */}
                        <div className="rounded-xl overflow-hidden shadow-lg">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d9708.704188790427!2d13.375299363282329!3d52.530248901153975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMarktplatz%2012%E2%80%A8%2010115%20Berlin!5e0!3m2!1sde!2sde!4v1772792309991!5m2!1sde!2sde"
                                className="w-full h-[380px] md:h-[320px]"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/**FORM TITLE */}
                    <SectionTitle title="Haben Sie eine süße Nachricht für uns?" />

                    <p className="text-center text-gray-600 mt-6 mb-12">
                        Ob Lob, Frage oder eine neue Eissorten-Idee –
                        wir freuen uns über jede Nachricht.
                    </p>

                    {/**FORM */}
                    <form className="max-w-[500px] mx-auto space-y-6 mb-24">

                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-4 rounded-xl shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-[#CC1E36]"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-4 rounded-xl shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-[#CC1E36]"
                        />

                        <textarea
                            placeholder="Ihre Nachricht"
                            rows="4"
                            className="w-full p-4 rounded-xl shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-[#CC1E36]"
                        />

                        <div className="flex justify-center">
                            <button className="
                                w-full bg-[#7EA705] hover:bg-[#6B8F04] text-white 
                                py-4 rounded-full shadow-lg transition"
                            > 
                                Nachricht absenden 
                            </button>
                        </div>
                    </form>
                </div>

                {/**ICE DECORATION */}
                <img
                    src="/images/ice/vanille-himbeer-swirl.png"
                    alt="Gelato"
                    className="absolute bottom-[-140px] left-1/2 -translate-x-1/2 w-[200px] pointer-events-none -z-10 drop-shadow-xl"
                />

            </section>

            
        </>
    );
}