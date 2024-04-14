// detailpage.js
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Detail from "./components/detail";

export default function Detailpage() {
  return (
    <main>
      <Navbar />
      <Detail />
      <Banner />
      <Footer />
    </main>
  );
}
