import Navbar from "./Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Form from "./pages/Form";
import Tech from "./Tech";
import Vision from "./Vision";

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component =<>
      <About />
      <Tech />
      <Vision/>
      <Contact/>
    </>
    break
    case "/about":
      Component =<><About />
    </>
      break
    case "/tech":
      Component =<Tech/>
      break
    case "/vision":
      Component =<Vision/>
      break
    case "/contact":
      Component =<Contact/>
      break
    case "/signup":
      Component =<Form/>
      break
   
  }
  return (
    <>
  <Navbar/>
 
  {Component}
 
  </>
  )
}

export default App;
