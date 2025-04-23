import IconWhatsappModule from "/assets/IconoWhatsApp.svg";


export default function IconWhatsapp() {

    const redirectToWhatsApp = () => {
        const phoneNumber = "4491431962"; // Reemplaza con tu número de teléfono
        const message = "Hola, me gustaría obtener más información de Avskallet"; // Mensaje predefinido
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <>
            <main className="fixed bottom-0 right-0 flex justify-end items-center p-3 cursor-pointer" onClick={redirectToWhatsApp}>
                <img src={IconWhatsappModule} alt="iconoWhatsapp" className="w-12 h-auto md:w-14 lg:w-16" />
            </main>
        </>
    )
}