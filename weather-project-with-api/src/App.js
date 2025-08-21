import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";
import axios from "axios";
import moment from "moment/moment";
import "moment/min/locales";

import { useTranslation } from "react-i18next";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CloudIcon from "@mui/icons-material/Cloud";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import { useSelector, useDispatch } from "react-redux";
import { changeResult } from "./weatherApiSlice";
import { fetchWeather } from "./weatherApiSlice";

moment.locale("ar");

const theme = createTheme({
  typography: {
    fontFamily: ["IBM"],
  },
});

let cancelAxios = null;

function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => {
    return state.weather.isLoading;
  });
  const temp = useSelector((state) => {
    return state.weather.weather;
  });

  const { t, i18n } = useTranslation();

  const [locale, setLocale] = useState("ar");

  const [dateAndTime, setDateAndTime] = useState("");
  const direction = locale === "ar" ? "rtl" : "ltr";

  function handleLanguageClick() {
    if (locale === "en") {
      setLocale("ar");
      i18n.changeLanguage("ar");
      moment.locale("ar");
    } else {
      setLocale("en");
      i18n.changeLanguage("en");
      moment.locale("en");
    }
    setDateAndTime(moment().format("MMMM Do YYYY, h:mm:ss a"));
  }

  useEffect(() => {
    dispatch(fetchWeather());

    // dispatch(changeResult());

    i18n.changeLanguage(locale);
    setDateAndTime(moment().format("MMMM Do YYYY, h:mm:ss a"));
  }, []);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          <div
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {/* Card */}
            <div
              dir={direction}
              style={{
                background: "rgb(28 52 91 / 36%)",
                color: "white",
                padding: "10px",
                borderRadius: "15px",
                boxShadow: "0 11px 1px rgba(0,0,0,0.05)",
                width: "100%",
              }}
            >
              {/* Content */}
              <div style={{}}>
                {/* City & Time */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "start",
                    gap: "20px",
                    padding: "0 20px",
                    fontWeight: "600",
                  }}
                  dir={direction}
                >
                  <Typography variant="h2">{t("Alexandria")}</Typography>
                  <Typography variant="h5">{dateAndTime}</Typography>
                </div>
                {/*=== City & Time ===*/}

                <hr />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  {/* Degree & Description */}
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {isLoading ? (
                        <CircularProgress style={{ color: "white" }} />
                      ) : (
                        ""
                      )}

                      <Typography variant="h1" style={{ textAlign: "right" }}>
                        {temp.number}
                      </Typography>
                      <img src={temp.icon} />
                    </div>

                    <Typography variant="h6">{t(temp.description)}</Typography>
                    {/* Min & Max */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <h5>
                        {t("min")}: {temp.min}
                      </h5>
                      <h5 style={{ margin: "0 5px" }}>|</h5>
                      <h5>
                        {t("max")}: {temp.max}
                      </h5>
                    </div>
                  </div>
                  {/*=== Degree & Dscription ===*/}
                  <CloudIcon style={{ fontSize: "200px", color: "white" }} />
                </div>
              </div>
              {/*=== Content ===*/}
            </div>
            {/*=== Card ===*/}
            {/* Transilation */}
            <div
              dir={direction}
              style={{
                display: "flex",
                justifyContent: "end",
                width: "100%",
                marginTop: "20px",
              }}
            >
              <Button
                style={{ color: "white" }}
                variant="text"
                onClick={handleLanguageClick}
              >
                {locale === "ar" ? "English" : "اللغة العربية"}
              </Button>
            </div>
          </div>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
