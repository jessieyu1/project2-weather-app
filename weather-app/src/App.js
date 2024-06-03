import BackgroundImage from "./components/BackgroundImage";
import WeatherCard from "./components/WeatherCard";
import bg from './assets/background.png'
const App = () => (
  <BackgroundImage imageUrl={bg} alt="cloud" className=" min-h-screen bg-cover flex items-center font-alimama bg-gradient-to-r from-sky to-purple" >
  <WeatherCard />
  </BackgroundImage>

);

export default App