import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <div className="p-3">
      <button
        className="btn btn-success col-12"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        {t("aboutMe.btn")}
      </button>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">
            Franco De Paulo - {t("aboutMe.title")}
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {t("aboutMe.description")} {";)"}
          <br />
          <br />
          <div
            className="btn-group-vertical col-6"
            role="group"
            aria-label="Basic outlined example"
          >
            <a
              href="https://www.linkedin.com/in/franco-de-paulo-13509b186/"
              className="btn btn-outline-success"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/frandepe"
              className="btn btn-outline-success"
            >
              GitHub
            </a>
            <a
              href="https://frandepaulo.netlify.app/"
              className="btn btn-outline-success"
            >
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
