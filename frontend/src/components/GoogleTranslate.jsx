import React, { useEffect } from "react";
import "./GoogleTranslate.css";

const GoogleTranslate = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "http://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate";
    script.async = true;

    script.onerror = () => {
      console.error("Error loading Google Translate script.");
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
