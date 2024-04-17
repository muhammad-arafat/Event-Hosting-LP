import Banner from "./components/Banner";
import EventHosting from "./components/EventHosting";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Scanner from "./components/Scanner";
import SimplifyTicketing from "./components/SimplifyTicketing";

function App() {
  return (
    <div className=' max-w-[1440px] mx-auto font-inter py-5'>
      <Header />
      <Banner />
      <Events />
      <EventHosting />
      <Scanner />
      <SimplifyTicketing />
      <Footer />
    </div>
  );
}

export default App;
