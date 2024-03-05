import Card from "./components/Card";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <>
      <Navbar />
      <HeroSection />
      <section className="cards-list">{cards}</section>
    </>
  );
}

export default App;
