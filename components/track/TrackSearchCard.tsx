import Image from 'next/image'
import { useState } from "react";
import { useMask } from "@react-input/mask";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PackageSearch } from "lucide-react";
import cartoonChar from '../../public/track/cartoon_character_smiling.png'

const TrackSearchCard = () => {
  const [isDisabled, setDisabled] = useState(false);

  const inputRef = useMask({mask: 'XXXX-XXXX-XXXX-XXXX', replacement: {X: /\w/},});

  const handleTrackOrder = () => {

    setDisabled(true);
  }

  return (
    <div className={"h-full"}>
      <Card className={"relative flex flex-col bg-primary-mint-green h-[550px] shadow-lg"}>
        <CardHeader>
          <CardTitle className={"text-primary-dark-grey text-3xl"}>
            Search for Order by Tracking ID
          </CardTitle>
          <CardDescription className={"text-primary-dark-grey"}>
            Enter your tracking ID to track your order
          </CardDescription>
        </CardHeader>
        <CardContent className={"flex flex-col gap-4"}>
          <p className={"text-primary-dark-grey"}>Tracking ID</p>
          <Input
            ref={inputRef}
            placeholder={"XXXX-XXXX-XXXX-XXXX"}
            className={"bg-primary-yellow-green border-none max-w-xs focus-visible:border-none"}
            disabled={isDisabled}
            onKeyUp={(event) => {
              if (event.key == "Enter") {
                handleTrackOrder()
              }
            }}
          />
          <Button
            className={"text-primary-orange font-extralight max-w-fit flex flex-row gap-2"}
            onClick={handleTrackOrder}
          >
            <PackageSearch/> <span>Track Order</span>
          </Button>
        </CardContent>
        <div className={"absolute bottom-0 right-0 h-fit z-10"}>
          <Image
            className={"object-cover"}
            src={cartoonChar}
            width={500}
            height={500}
            layout={"intrinsic"}
            alt="Picture of a smiling cartoon character holding a package delivery"
          />
        </div>
      </Card>
    </div>
  )
}

export default TrackSearchCard;