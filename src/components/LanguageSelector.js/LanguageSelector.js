import { useState } from "react";
import { updateLang } from "../../language";
import iconArg from "./icons-arg.png";
import iconUsa from "./icons-usa.png";
import "./LanguageSelector.css";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "es");
  const { t } = useTranslation();

  const onChangeLang = (e) => {
    const newLang = e.target.value;
    setLang(newLang);
    updateLang(newLang);
  };

  return (
    <div className="container-formLang">
      <b>{t("languageSelect.select")}</b>
      <form defaultValue={lang} onChange={onChangeLang}>
        <label>
          <input value="es" type="radio" name="option" />
          <span>
            <img src={iconArg} alt="imgFlagArg" />
            Es
          </span>
        </label>
        <label>
          <input value="en" type="radio" name="option" />
          <span>
            <img src={iconUsa} alt="imgFlagUsa" />
            En
          </span>
        </label>
      </form>
    </div>
  );
};

export default LanguageSelector;
