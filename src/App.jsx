import Hello from "./components/Hello";
import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";
import Profile from "./Profile.jsx";
import Gig from "./Gig.jsx";

function App() {
  return (
    <>
      <Hello name="World" />
      <img className="logo" src={makersLogo}></img>
      <Profile />   
      <Gig name="Biggus Bandus" image="Makers-Logo.png" description="It will be so awesome" time_date="Tomorrow" location="New Jersey"/> 
      <Gig name="Bad band" image="Makers-Logo.png" description="It's gonna suck" time_date="2059" location="Middle of Nowhere" />
    </>
  );
}

export default App;
