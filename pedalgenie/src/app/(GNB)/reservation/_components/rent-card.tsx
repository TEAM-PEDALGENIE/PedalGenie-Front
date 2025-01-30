'use client';

import { useModalStore } from '@/lib/zustand/useModalStore';
import { RentProduct } from '@/types/product-type';
import Image from 'next/image';

export default function RentCard({ rentProduct }: { rentProduct: RentProduct }) {
  const { openCancelModal } = useModalStore();

  return (
    <section className="px-4 py-5 w-full flex flex-col justify-center items-center gap-2 border-b-[0.5px] border-grey850">
      {/* 상품 현재 시연관련 상태 및 취소하기 버튼 */}
      <nav className="w-full flex justify-between items-center">
        <p
          className={`text-body1 ${
            rentProduct.rentStatus === '픽업예정' || rentProduct.rentStatus === '사용중'
              ? 'text-green'
              : rentProduct.rentStatus === '주문확인중' || rentProduct.rentStatus === '반납완료'
                ? 'text-grey150'
                : 'text-red'
          }`}>
          {rentProduct.rentStatus}
        </p>
        {rentProduct.rentStatus === '주문확인중' && (
          <button onClick={() => openCancelModal()} className="text-body2 text-grey550">
            취소하기
          </button>
        )}
      </nav>
      <div className="w-full flex justify-between items-center">
        <Image src={'/img/preview-card.jpg'} alt="preview card" width={100} height={100} className="rounded-[2px]" />
        <div className="w-auto flex flex-col gap-2">
          <div className="w-auto flex flex-col justify-start">
            <h2 className="max-w-[227px] max-h-[54px] text-body1 text-grey150 line-clamp-1">
              {rentProduct.productName}
            </h2>
            <p className="flex justify-start text-caption2 text-grey550">
              <span className='flex-1'>{rentProduct.shopName} ㅣ </span>
              <span className='flex-1'>{rentProduct.shopDetailAddress}</span>
            </p>
          </div>
          <div className="w-auto flex flex-col gap-1">
            <span className="w-full flex justify-start gap-2">
              <span className="px-[6px] py-[3px] rounded bg-darkRed text-red text-caption2">대여기간</span>
              <p className="text-body2 text-grey150">
                {rentProduct.rentStartTime} ~ {rentProduct.rentEndTime}
              </p>
            </span>
            <span className="w-full flex justify-start gap-2">
              <span className="px-[6px] py-[3px] rounded bg-darkRed text-red text-caption2">픽업일정</span>
              <p className="text-body2 text-grey150">{rentProduct.pickUpTime}</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
