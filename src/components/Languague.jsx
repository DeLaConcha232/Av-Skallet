import { useState } from "react";


// const Switch = () => {
//   const [selectedLang, setSelectedLang] = useState("es");
//   const [isGoogleLoaded, setIsGoogleLoaded] = useState(false);

//   useEffect(() => {
//     // Agregar script de Google Translate solo si no existe
//     if (!window.googleTranslateElementInit) {
//       const addScript = document.createElement("script");
//       addScript.src =
//         "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//       addScript.async = true;
//       document.body.appendChild(addScript);

//       // Definir la función de inicialización
//       window.googleTranslateElementInit = () => {
//         new window.google.translate.TranslateElement(
//           { pageLanguage: "es", autoDisplay: false },
//           "google_translate_element"
//         );
//         setIsGoogleLoaded(true);
//       };
//     } else {
//       setIsGoogleLoaded(true);
//     }
//   }, []);

//   const changeLanguage = (lang) => {
//     if (!isGoogleLoaded) {
//       console.warn("Google Translate aún no ha cargado.");
//       return;
//     }

//     setSelectedLang(lang);

//     setTimeout(() => {
//       const select = document.querySelector(".goog-te-combo");
//       if (select) {
//         select.value = lang;
//         select.dispatchEvent(new Event("change"));
//       }
//     }, 500); // Esperamos un poco para asegurarnos de que Google Translate se cargó
//   };


//   return (
//     <>
//       <div className="relative">
//         {/* Ocultamos el widget de Google Translate */}
//         <div id="google_translate_element" className="hidden"></div>

//         {/* Selector personalizado de idiomas */}
//         <select
//           value={selectedLang}
//           onChange={(e) => changeLanguage(e.target.value)}
//           className="px-4 py-2 border font-Bona rounded bg-white text-black cursor-pointer text-xs md:text-sm"
//         >
//           <option value="es">Español</option>
//           <option value="en">Inglés</option>
//           <option value="zh-CN">Chino</option>
//         </select>
//       </div>
//     </>
//   );
// }

// export default Switch;


const Switch = () => {
  const [selectedLang, setSelectedLang] = useState("es");
  const [isGoogleLoaded, setIsGoogleLoaded] = useState(false);

  // Función para cargar Google Translate API solo cuando sea necesario
  const loadGoogleTranslate = () => {
    return new Promise((resolve) => {
      // Si ya está cargada, resolvemos inmediatamente
      if (window.google?.translate?.TranslateElement) {
        resolve();
        return;
      }

      // Configuramos la función de callback global
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "es",
            autoDisplay: false, // No mostrar el widget automáticamente
            includedLanguages: "es,en,zh-CN", // Solo estos idiomas
          },
          "google_translate_element"
        );
        resolve();
      };

      // Creamos y cargamos el script
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    });
  };

  // Maneja el cambio de idioma
  const handleLanguageChange = async (lang) => {
    setSelectedLang(lang);

    if (!isGoogleLoaded) {
      try {
        await loadGoogleTranslate();
        setIsGoogleLoaded(true);
      } catch (error) {
        console.error("Error al cargar Google Translate:", error);
        return;
      }
    }

    // Cambiamos el idioma en el widget de Google
    setTimeout(() => {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
      }
    }, 100); // Pequeño delay para asegurar que el widget está listo
  };

  return (
    <div className="relative">
      {/* Contenedor oculto para el widget de Google Translate */}
      <div id="google_translate_element" className="hidden"></div>

      <label htmlFor="language-selector" className="sr-only">
        Selecciona el idioma:
      </label>
      {/* Selector personalizado de idiomas */}
      <select
        value={selectedLang}
        id="language-selector"
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="px-4 py-2 border font-Bona rounded bg-white text-black cursor-pointer text-xs md:text-sm"
      >
        <option value="es">Español</option>
        <option value="en">Inglés</option>
        <option value="zh-CN">Chino</option>
      </select>
    </div>
  );
};

export default Switch;