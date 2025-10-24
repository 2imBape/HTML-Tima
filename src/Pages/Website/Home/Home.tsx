import AboutTima from "../../../Components/Website/Content/Home/AboutTima";
import FundAndPartner from "../../../Components/Website/Content/Home/FundAndPartner";
import InformationLoans from "../../../Components/Website/Content/Home/InformationLoans";
import LoansConsulation from "../../../Components/Website/Content/Home/LoansConsultation";
import LoansPackage from "../../../Components/Website/Content/Home/LoansPackage";
import SliderWeb from "../../../Components/Website/Content/Home/Slider";
import Support from "../../../Components/Website/Content/Home/Support";
import TimaModel from "../../../Components/Website/Content/Home/TimaModel";


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
