import './App.css';
import Carousal from './Components/Carousal';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Newarrivals from './sections/newarrivals';
import Azadideals from './sections/azadideals';
import Onlineexclusivedeals from './sections/onlineexclusivedeals';
import Combos from './sections/combos';
import Footer from './sections/footer';
function App() {
  return (
    <>
    <Navbar/>
    <Carousal/>
    <Menu/>
    <Sidebar/>
    <Newarrivals/>
    <Azadideals/>
    <Onlineexclusivedeals/>
    <Combos/>
    <Footer/>
    </>
  );
}

export default App;
