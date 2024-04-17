'use client';
import Navbar from "@/app/components/navbar";
import Banner from "@/app/components/banner";
import Footer from "@/app/components/footer";
import Content from "@/app/components/content";

export default function DetailPage() {
  return (
    <main>
      <Navbar />
      <Content />
      <Banner />
      <Footer />
    </main>

  );
}