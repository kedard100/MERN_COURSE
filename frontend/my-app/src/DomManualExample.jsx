import { useState, useEffect } from "react";

//Define components for different pages
const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

function DomManualExample() {
  const [route, setRoute] = useState(window.location.pathname); // Get initial path

  useEffect(() => {
    // Listen for back/forward navigation
    window.onpopstate = (event) => {
      console.log("Back or Forward clicked", event.state);
      setRoute(window.location.pathname); // Update route state
    };
  }, []);

  const navigate = (path) => {
    history.pushState({ page: path }, "", path);
   
    console.log("Navigated to:", path);
    setRoute(path); // Update state to render the correct component
  };

  // Render the correct component based on the route
  const renderComponent = () => {
    switch (route) {
      case "/about":
        return <About />;
      case "/contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <h1>React History API</h1>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/about")}>Go to About</button>
      <button onClick={() => navigate("/contact")}>Go to Contact</button>
      
      {/* Render the selected component */}
      <div>{renderComponent()}</div>
    </div>
  );
}

export default DomManualExample;
