import Mobileviews from "./components/Mobileviews";
import "./App.css"
import Desktopview from "./components/Desktopview";

const App = () =>{
  return (
    <>
      <div className="desktop">
      <Desktopview />
      </div>
      <div  className="mobile">
      <Mobileviews/>
      </div>
    </>
  )
}

export default App