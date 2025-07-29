import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "../../assets/pozadi.jpg";

export default function Completion() {
  return (
    <>
      <Header />
      <div
        className="min-h-[92vh] bg-cover bg-center w-full relative text-4xl md:text-5xl font-bold text-yellow-400 drop-shadow-md leading-tight text-center flex justify-center items-center"
        style={{ backgroundImage: `url(${Image})` }}
      >
        Děkujeme za nákup
      </div>
      <Footer />
    </>
  );
}
