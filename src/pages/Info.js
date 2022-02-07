import { useDispatch, useSelector } from "react-redux";
import { getIdActions } from "../redux/apiCrypto";
import { useEffect } from "react";
import { useParams } from "react-router";
import "./Info.css";
import { useTranslation } from "react-i18next";

const Info = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { crypto } = useSelector((state) => state.crypto);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getIdActions(id));
  }, []);

  return (
    <div className="cont-info">
      <div className="clearfix">
        <h2 className="p-3">{crypto.name}</h2>

        <div className="container px-4">
          <div className="row gx-5">
            <div className="col p-3">
              <a
                className="btn btn-success"
                href={crypto.links ? crypto.links.homepage[0] : ""}
              >
                {t("info.btnOficial")} {crypto.symbol}
              </a>
            </div>
            <div className="col p-3">
              <a
                className="btn btn-success site-blockchain"
                data-bs-toggle="collapse"
                href="#multiCollapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                {t("info.btnBlockchain")}
              </a>
            </div>
          </div>
        </div>

        <div className="row p-3">
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample1">
              <div className="card-info card card-body">
                <p>
                  <a href={crypto.links && crypto.links.blockchain_site[0]}>
                    Blockchain: {t("info.option")} 1
                  </a>
                </p>
                <p>
                  <a href={crypto.links && crypto.links.blockchain_site[1]}>
                    Blockchain: {t("info.option")} 2
                  </a>
                </p>
                <p>
                  <a href={crypto.links && crypto.links.blockchain_site[2]}>
                    Blockchain: {t("info.option")} 3
                  </a>
                </p>
                <p>
                  <a href={crypto.links && crypto.links.blockchain_site[3]}>
                    Blockchain: {t("info.option")} 4
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="cont-img-text">
          {crypto.image && (
            <img
              src={crypto.image.large}
              className="col-md-6 float-md-end mb-3 ms-md-3"
              alt="..."
            />
          )}
          <p>{crypto.description && crypto.description.en}</p>
        </div>
      </div>

      <strong>
        {t("info.rank")} {crypto.coingecko_rank}
      </strong>

      <div className="container">
        <div className="row">
          <div className="col order-last p-3">
            {t("info.drop")}{" "}
            {crypto.market_data && crypto.market_data.low_24h.usd} USD
          </div>
          <div className="col p-3">
            {t("info.income")}{" "}
            {crypto.market_data && crypto.market_data.high_24h.usd} USD
          </div>
          <div className="col order-first p-3">
            {t("info.change")}{" "}
            {crypto.market_data
              ? crypto.market_data.ath_change_percentage.usd
              : "¿?"}
            %
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
