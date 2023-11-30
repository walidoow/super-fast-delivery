import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardFooter } from "@/components/ui/card";

const ReturnRefundOrder = () => {
  const [cards, setCards] = useState([
    {orderID: "009999", packageID: "869596", date: "November 5th, 2023"},
    {orderID: "987972", packageID: "323121", date: "December 25th, 2023"},
    {orderID: "543656", packageID: "439284", date: "September 29th, 2023"},
    {orderID: "654789", packageID: "876999", date: "October 31st, 2023"},
  ]);

  const handleDeleteCard = (index : any) => {
    const updatedCards = [...cards.slice(0, index), ...cards.slice(index + 1)];
    setCards(updatedCards); // Update the state with the new array
  };

  type CardProps = React.ComponentProps<typeof Card>;

  return (
    <div className="mx-10">
      <div className="my-4">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-2.5">
          Returns and Refunds
        </h4>
        <p className="text-sm text-muted-foreground">
          Apply for returns or refunds on purchased items
        </p>
      </div>
      <Separator className="my-6"/>
      <div className="mx-6">
        <p className="leading-7 [&:not(:first-child)]:mt-6 my-3">Your orders</p>
        <div className="grid grid-cols-3 gap-2">
          {cards.map((card, index) => (
            <Card className="w-[270px]">
              <div className="flex space-between space-x-4 m-4">
                <div>
                  <Avatar>
                    <AvatarImage src="https://github.com/vercel.png"/>
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@account</h4>
                  <p className="text-sm">OrderID: {card.orderID}</p>
                  <p className="text-sm">PackageID: {card.packageID}</p>
                  <div className="flex items-center pt-2">
                    <CalendarIcon className="mr-2 h-4 w-4 opacity-70"/>{" "}
                    <span className="text-xs text-muted-foreground">
                      {card.date}
                    </span>
                  </div>
                </div>
              </div>
              <CardFooter className="flex justify-center">
                <Button onClick={() => handleDeleteCard(index)}>Return</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <p className="text-sm text-muted-foreground my-3">
          Orders can only be refunded for up to 30 days after they have been
          delivered. Tax and import fees refundable as well. Otherwise, returns
          will be given credit.
        </p>
      </div>
    </div>
  );
};

export default ReturnRefundOrder;
