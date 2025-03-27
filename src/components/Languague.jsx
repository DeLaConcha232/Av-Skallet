import { useEffect, useState } from "react";


const Switch = () => {
  const [selectedLang, setSelectedLang] = useState("es");
  const [isGoogleLoaded, setIsGoogleLoaded] = useState(false);

  useEffect(() => {
    // Agregar script de Google Translate solo si no existe
    if (!window.googleTranslateElementInit) {
      const addScript = document.createElement("script");
      addScript.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      addScript.async = true;
      document.body.appendChild(addScript);

      // Definir la función de inicialización
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: "es", autoDisplay: false },
          "google_translate_element"
        );
        setIsGoogleLoaded(true);
      };
    } else {
      setIsGoogleLoaded(true);
    }
  }, []);

  const changeLanguage = (lang) => {
    if (!isGoogleLoaded) {
      console.warn("Google Translate aún no ha cargado.");
      return;
    }

    setSelectedLang(lang);

    setTimeout(() => {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
      }
    }, 500); // Esperamos un poco para asegurarnos de que Google Translate se cargó
  };


  return (
    <>
      <div className="relative">
        {/* Ocultamos el widget de Google Translate */}
        <div id="google_translate_element" className="hidden"></div>

        {/* Selector personalizado de idiomas */}
        <select
          value={selectedLang}
          onChange={(e) => changeLanguage(e.target.value)}
          className="px-4 py-2 border font-Bona rounded bg-white text-black cursor-pointer text-xs md:text-sm"
        >
          <option value="es">Español</option>
          <option value="en">Inglés</option>
          <option value="fr">Francés</option>
          <option value="de">Alemán</option>
          <option value="pt">Portugués</option>
          <option value="it">Italiano</option>
          <option value="ja">Japonés</option>
          <option value="zh-CN">Chino</option>
        </select>
      </div>
    </>
  );
}

export default Switch;
