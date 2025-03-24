// import styled from 'styled-components';
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
      {/* <StyledWrapper>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider" />
        </label>
      </StyledWrapper> */}
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

// const StyledWrapper = styled.div`
//   /* The switch - the box around the slider */
//   .switch {
//     /* Variables */
//    --switch_width: 2em;
//    --switch_height: 1em;
//    --thumb_color: #e8e8e8;
//    --track_color: #e8e8e8;
//    --track_active_color: #888;
//    --outline_color: #000;
//    font-size: 17px;
//    position: relative;
//    display: inline-block;
//    width: var(--switch_width);
//    height: var(--switch_height);
//   }

//   /* Hide default HTML checkbox */
//   .switch input {
//    opacity: 0;
//    width: 0;
//    height: 0;
//   }

//   /* The slider */
//   .slider {
//    box-sizing: border-box;
//    border: 2px solid var(--outline_color);
//    position: absolute;
//    cursor: pointer;
//    top: 0;
//    left: 0;
//    right: 0;
//    bottom: 0;
//    background-color: var(--track_color);
//    transition: .15s;
//    border-radius: var(--switch_height);
//   }

//   .slider:before {
//    box-sizing: border-box;
//    position: absolute;
//    content: "";
//    height: var(--switch_height);
//    width: var(--switch_height);
//    border: 2px solid var(--outline_color);
//    border-radius: 100%;
//    left: -2px;
//    bottom: -2px;
//    background-color: var(--thumb_color);
//    transform: translateY(-0.2em);
//    box-shadow: 0 0.2em 0 var(--outline_color);
//    transition: .15s;
//   }

//   input:checked + .slider {
//    background-color: var(--track_active_color);
//   }

//   input:focus-visible + .slider {
//    box-shadow: 0 0 0 2px var(--track_active_color);
//   }

//   /* Raise thumb when hovered */
//   input:hover + .slider:before {
//    transform: translateY(-0.3em);
//    box-shadow: 0 0.3em 0 var(--outline_color);
//   }

//   input:checked + .slider:before {
//    transform: translateX(calc(var(--switch_width) - var(--switch_height))) translateY(-0.2em);
//   }

//   /* Raise thumb when hovered & checked */
//   input:hover:checked + .slider:before {
//    transform: translateX(calc(var(--switch_width) - var(--switch_height))) translateY(-0.3em);
//    box-shadow: 0 0.3em 0 var(--outline_color);
//   }`;

export default Switch;
