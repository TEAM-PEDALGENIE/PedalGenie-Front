import TopBar from "./_components/topBar";
import ProductImg from "./_components/productImg";
import StoreNameBar from "./_components/storeNameBar";
import AvailableLogicButton from "./_components/availableLogicButton";
import ProductFeeCard from "./_components/productFeeInfo";
import ProductInfo from "./_components/productInfo";
import StoreInfo from "./_components/storeInfo";
import InfoSwitcher from "./_components/infoSwitcher";

// 하트 버튼 컴포넌트로 따로 뺴기
import Heart from "@public/svg/product/heart.svg"

export default function Product() {
    return (
      <div className="w-full flex flex-col text-grey250">
        <TopBar/>
        <div className=""> {/* Overflow-Y 설정해야됨 */}
          <ProductImg/>
          <StoreNameBar/>
          <div className="px-4 py-[14px]">
            <AvailableLogicButton/>
            <section className="flex space-x-[9px]">
              <div className="flex font-semibold text-lg pb-5 max-w-[310px] break-words">
                고퍼우드 일렉기타 / Gopherwood S-modern
              </div>
              <Heart/>
            </section>
            <ProductFeeCard/>
            <InfoSwitcher/>
            <ProductInfo/>
            <StoreInfo/>
          </div>
        </div>
      </div>
    );
  }
  