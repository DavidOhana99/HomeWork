import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {

  const [weatherData, setWeatherData] = useState({})
  //make a state like above called weatherData, setWeatherData
  const apiKey = 'your api'
  const icon = `https://openweathermap.org/img/w`
  // const icon =   `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`
  // 
  // const getWeather = async () => 
  async function getweatherdata() {
    try {
      const r = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=08701,US&appid=${apiKey}&units=imperial&lang=he`);

      const data = await r.json();

      setWeatherData(data)


    } catch (e) {
      console.error('oops', e);
    }
  }


  useEffect(() => {
    getweatherdata()
  }, []);

  //make a useEffect
  //inside get weather response
  //const response = await  getWeather()
  // setWeatherData({location: lakeood, temp: 78})
  console.log({ weatherData });
  if (!weatherData?.name) return <>loading</>

  return (
    <>

      <div className="card">
        weather in {weatherData.name} is {weatherData.main.temp}
        <img
          src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
        />
      </div>

    </>
  )
}

export default App
