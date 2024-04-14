import Navbar from "./components/navbar";
import Portfolio from "./components/portfolio";
import Client from "./components/client";

export default function Home() {
  return (
    <main className="bg-gray-900 px-20" >
      <Navbar/>
      <Portfolio/>
      <Client/>
    </main>
  );
}
