import { useEffect, useState } from "react";
import Search from "../search";
import useFetch from "../../hooks/useFetch";
import { DateService } from "../../services/date.service";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const { data, pending, errorMsg } = useFetch(getURL(), {});

  function getURL() {
    return !!weatherData
      ? `https://api.openweathermap.org/data/2.5/weather?q=${weatherData}&appid=bce55d64e996b38e0c8cf0b6cbc49b3c`
      : "";
  }

  const handleSearch = () => {
    setWeatherData(search);
    setSearch("");
  };

  useEffect(() => {
    setWeatherData("zaporizhzhia");
  }, []);

  return (
    <div className="weather-contianer">
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {pending ? (
        <div>...loading</div>
      ) : (
        <div className="weather-data">
          <div className="city">
            <span>{data?.data?.name}</span>,{" "}
            <span>{data?.data?.sys?.country}</span>
          </div>
          <div className="current-date">
            <span>{DateService.getCurrentDate()}</span>
          </div>
          <div className="temperature">
            <span>{data?.data?.main?.temp}</span>
          </div>
          <div className="description">
            <span>
              {data?.data?.weather && data.data.weather.length > 0
                ? data.data.weather[0].description
                : "N/A"}
            </span>
          </div>
          <div className="wind-humidity">
            <div className="wind">
              <p>{data?.data?.wind?.speed}</p>
              <p>Wind Speed</p>
            </div>
            <div className="humidity">
              <p>{data?.data?.main?.humidity}</p>
              <p>Humidity</p>
            </div>
          </div>
        </div>
      )}
      {errorMsg ? <div>{errorMsg}</div> : null}
    </div>
  );
}
