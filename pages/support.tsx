"use client";
import { Separator } from "@/components/ui/separator";
import SupportSideBar from "@/components/support/SupportSideBar";
import { ScrollArea } from "@/components/ui/scroll-area";
import OpenCases from "@/components/support/OpenCasesCard";
import SearchBar from "@/components/support/SearchBar";
import ManageAccount from "@/components/support/ManageAccount";
import OpenCSSession from "@/components/support/OpenCSSession";
import { useState } from "react";
import ReturnRefundOrder from "@/components/support/ReturnRefundOrder";
import { useRouter } from "next/router";
import CancelOrder from "@/components/support/CancelOrder";

export enum Category {
  MANAGE_ACCOUNT = "manage_account",
  OPEN_CS_SESSION = "open_cs_session",
  RETURN_AND_REFUNDS = "returns_and_refunds",
  CANCEL_ORDER = "cancel_order",
}

export default function Support() {
  const router = useRouter();
  const [currentCategory, setCurrentCategory] = useState(
    Category.MANAGE_ACCOUNT
  );

  const handleChangeCategory = (category: Category) => {
    setCurrentCategory(category);
  };

  return (
    <div className="h-full bg-primary-yellow-green flex flex-row">
      <ScrollArea className="h-full w-full">
        <div
          className={
            "h-full w-full flex flex-col justify-center place-items-center py-8"
          }
        >
          <h2 className="scroll-m-20 pb-2 text-4xl font-semibold tracking-tight first:mt-0 space-y-1">
            Customer Service
          </h2>
          <Separator className="w-16 h-[2px] my-5 bg-black bg-primary-dark-grey"></Separator>
        </div>
        <OpenCases />
        <div className="mt-16 mx-10">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
            All help topics
          </h3>
          <SearchBar />
          <Separator className="mt-6 justify-center bg-primary-dark-grey"></Separator>
        </div>
        <div className={"min-h-[80vh] flex flex-row"}>
          <div className={"w-[10%]"}>
            <SupportSideBar onChangeCategory={handleChangeCategory} />
          </div>
          <div className={"flex-grow py-8 px-40"}>
            {currentCategory == Category.MANAGE_ACCOUNT ? (
              <ManageAccount />
            ) : undefined}
            {currentCategory == Category.OPEN_CS_SESSION ? (
              <OpenCSSession />
            ) : undefined}
            {currentCategory == Category.RETURN_AND_REFUNDS ? (
              <ReturnRefundOrder />
            ) : undefined}
            {currentCategory == Category.CANCEL_ORDER ? (
              <CancelOrder />
            ) : undefined}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
