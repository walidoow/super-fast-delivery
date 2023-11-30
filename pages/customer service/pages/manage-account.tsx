import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Checkmark } from "react-checkmark";

export const ManageAccount = () => {
  const [showContent, setShowContent] = useState(false);
  const handleButtonClick = () => {
    setShowContent(!showContent);
    return <div></div>;
  };

  return (
    <div>
      <div className="my-4">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-2.5">
          Manage your account
        </h4>
        <p className="text-sm text-muted-foreground">
          Manage your account settings
        </p>
      </div>
      <Separator className="my-6" />
      <div className="mx-6">
        {showContent ? (
          <div style={{ width: "750px", marginTop: "20%" }}>
            <Checkmark size="100px" color="#223344" />
            <p style={{ textAlign: "center", marginTop: "6px" }}>
              Account updated
            </p>
          </div>
        ) : (
          <>
            <div>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                Edit profile
              </p>
              <p className="text-sm text-muted-foreground my-2">
                Make changes to your profile here. Click save when you're done.
              </p>
            </div>
            <div className="grid gap-4 py-4 mr-6">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="New email"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Password
                </Label>
                <Input
                  id="password"
                  placeholder="New password"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phone" className="text-right">
                  Phone
                </Label>
                <Input
                  id="phone"
                  placeholder="New phone number"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="address" className="text-right">
                  Address
                </Label>
                <div className="flex col-span-3">
                  <Input
                    id="address"
                    placeholder="New address"
                    className="mr-2"
                  />
                  <Input id="city" placeholder="New city" className="mr-2" />
                  <Input id="postal" placeholder="New postal code" />
                </div>
              </div>
              <div
                style={{ width: "130px", margin: "auto", marginTop: "30px" }}
              >
                <Button onClick={handleButtonClick}>Save changes</Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
