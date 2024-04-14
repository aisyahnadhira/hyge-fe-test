import Navbar from "./components/navbar";
import Portfolio from "./components/portfolio";
import Client from "./components/client";
import Banner from "./components/banner";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="" >
      <Navbar/>
      <Portfolio/>
      <Client/>
      <Banner/>
      <Footer/>
    </main>
  );
}
