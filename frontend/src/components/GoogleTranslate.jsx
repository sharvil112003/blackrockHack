import React, { useState, useEffect } from "react";
import "./componentCSS/GoogleTranslate.css";

const GoogleTranslate = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    if (!isScriptLoaded) {
      const script = document.createElement("script");
      script.src =
        "http://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate";
      script.async = true;

      script.onerror = () => {
        console.error("Error loading Google Translate script.");
      };

      document.body.appendChild(script);
      setIsScriptLoaded(true);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isScriptLoaded]);

  window.loadGoogleTranslate = () => {
    if (window.google && window.google.translate) {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    } else {
      console.error("Google Translate API not available.");
    }
  };

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
