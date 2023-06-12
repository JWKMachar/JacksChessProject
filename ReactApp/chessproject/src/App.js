import './App.css';
import Navbar from './components/Navbar/Navbar';
import Landing from './pages/Landing';
import Openings from './pages/Openings';

function App() {

  let Component

  switch (window.location.pathname)
  {
    case "/":
      Component = Landing;
      break
    case "/Landing":
      Component = Landing;
      break
    case "/Openings":
      Component = Openings;
      break
  }

  return ( 
    <>
    <body>
      <Navbar />
      <Component />
    </body>
    </>
  );
}

export default App;
