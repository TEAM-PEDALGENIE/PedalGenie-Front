'use client';

import { useModalStore } from '@/lib/zustand/useModalStore';
import { DemoProduct } from '@/types/product-type';
import Image from 'next/image';
import { useState } from 'react';

export default function DemoCard({ demoProduct }: { demoProduct: DemoProduct }) {
  const { openCancelModal } = useModalStore();

  return (
    <section className="px-4 py-5 w-full flex flex-col justify-center items-center gap-2 border-b-[0.5px] border-grey850">
      {/* 상품 현재 시연관련 상태 및 취소하기 버튼 */}
      <nav className="w-full flex justify-between items-center">
        <p
          className={`text-body1 ${
            demoProduct.demoStatus === '시연예정'
              ? 'text-green'
              : demoProduct.demoStatus === '시연완료'
                ? 'text-grey150'
                : 'text-red'
          }`}>
          {demoProduct.demoStatus}
        </p>
        {demoProduct.demoStatus === '시연예정' && (
          <button onClick={() => openCancelModal()} className="text-body2 text-grey550">
            취소하기
          </button>
        )}
      </nav>
      <div className="w-full flex justify-between items-center">
        <Image
          src={`${demoProduct.productThumbnailImageUrl}`}
          alt="preview card"
          width={100}
          height={100}
          className="rounded-[2px]"
        />
        <div className="w-auto flex flex-col gap-2">
          <div className="w-auto flex flex-col justify-start">
            <h2 className="max-w-[227px] max-h-[54px] text-body1 text-grey150 line-clamp-1">
              {demoProduct.productName}
            </h2>
            <p className="flex justify-start text-caption2 text-grey550">
              <span>{demoProduct.shopName} ㅣ </span>
              <span>{demoProduct.shopAddress}</span>
            </p>
          </div>
          <div className="w-auto flex items-center">
            <span className="w-full flex justify-start items-center gap-2">
              <span className="px-[6px] py-[3px] rounded bg-darkRed text-red text-caption2">시연일정</span>
              <p className="text-body2 text-grey150">{demoProduct.demoDate}</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
