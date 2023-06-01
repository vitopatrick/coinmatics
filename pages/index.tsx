// import ToCopy from "../components/landing-page/copy/ToCopy";
import CoreProducts from "../components/landing-page/core-products/CoreProducts";
import Exchange from "../components/landing-page/exchanges/Exchange";
import Faq from "../components/landing-page/faq/Faq";
import Footer from "../components/landing-page/footer/Footer";
import Header from "../components/landing-page/header/Header";
import PlatformPerformance from "../components/landing-page/platform-performance/PlatformPerformance";
import Simple from "../components/landing-page/simple/Simple";
import ToolsTrader from "../components/landing-page/tools-trader/ToolsTrader";

export default function Home() {
  return (
    <>
      <Header />
      {/* <ToCopy /> */}
      <CoreProducts />
      <PlatformPerformance />
      <Simple />
      <ToolsTrader />
      <Exchange />
      <Faq />
      <Footer />
    </>
  );
}
