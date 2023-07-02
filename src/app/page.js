import Head from "./head";
import HeaderSection from "@/components/HeaderSection";
import MainWhyTomya from "@/components/MainWhyTomya";
import MissionContext from "@/components/MissionContext";
import MainReferance from "@/components/MainReferance";
import MainSocialMedia from "@/components/MainSocialMedia";
import MainPressKit from "@/components/MainPressKit";
import MainCryptoTransactions from "@/components/MainCryptoTransactions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="root">
      <Head />
      <HeaderSection />
      <MainWhyTomya />
      <MissionContext />
      <MainReferance />
      <MainSocialMedia />
      <MainPressKit />
      <MainCryptoTransactions />
      <Footer />
    </div>
  );
}
