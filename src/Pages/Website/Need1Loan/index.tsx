import Footer from "../../../Layouts/Website/Footer";
import BoxContact from "../../../Components/Website/Footer/BoxContact";
import HeaderNeed1Loan from "../../../Components/Website/Content/Need1Loan/Header";
import CenterNeed1Loan from "../../../Components/Website/Content/Need1Loan/Center";
import EndCenterNeed1Loan from "../../../Components/Website/Content/Need1Loan/EndCenter";

const Need1Loan = () => {
  return (
    <>
      <div className="max-w- min-h-screen relative">
        <div>
          {/*----------------- HEADER ---------------- */}
          <HeaderNeed1Loan />
          {/*----------------- CENTER ---------------- */}
          <CenterNeed1Loan />
          {/*----------------- END CENTER ---------------- */}
          <EndCenterNeed1Loan />
        </div>
        <div className="w-full clear-both"></div>
        <div className="bg-white">
          <Footer />
        </div>
        <BoxContact />
      </div>
    </>
  );
};

export default Need1Loan;
