import SliderWeb from "../Components/Website/Content/Slider";
import LoansPackage from "../Components/Website/Content/LoansPackage";
import InformationLoans from "../Components/Website/Content/InformationLoans";
import TimaModel from "../Components/Website/Content/TimaModel";
import Support from "../Components/Website/Content/Support";
import AboutTima from "../Components/Website/Content/AboutTima";
import FundAndPartner from "../Components/Website/Content/FundAndPartner";
import LoansConsulation from "../Components/Website/Content/LoansConsultation";

const Home = () => {
  return (
    <div className="max-w bg-[#ececf1]">
      {/* -------------------- SLIDER ----------------------*/}
      <SliderWeb />
      {/* --------------------- PACKAGE LOANS ----------------------*/}
      <LoansPackage />
      {/* --------------------- LIST LOANS ----------------------*/}
      <InformationLoans />
      {/* --------------------- HOẠT ĐỘNG SÀN TIMA ----------------------*/}
      <TimaModel />
      {/* --------------------- SUPPORT ----------------------*/}
      <Support />
      {/* --------------------- BÁO CHÍ NÓI VỀ TIMA ----------------------*/}
      <AboutTima />
      {/* --------------------- QUỸ ĐẦU TƯ VÀ ĐỐI TÁC ----------------------*/}
      <FundAndPartner />
      {/* --------------------- TƯ VẤN VAY TIMA ----------------------*/}
      <LoansConsulation />
    </div>
  );
};
export default Home;
