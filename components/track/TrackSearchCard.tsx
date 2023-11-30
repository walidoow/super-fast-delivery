import Image from "next/legacy/image"
import { useEffect, useState } from "react";
import { useMask } from "@react-input/mask";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PackageSearch } from "lucide-react";
import cartoonChar from '../../public/track/cartoon_character_smiling.png'

type TrackSearchCardProps = {
  isLoaded: boolean,
  onTrack: (trackingId: string) => void;
};

const TrackSearchCard = (props: TrackSearchCardProps) => {
  const [trackingId, setTrackingId] = useState('');
  const [cardHeight, setCardHeight] = useState("h-[450px]")
  const [isDisabled, setDisabled] = useState(false);
  const [isCorrectTrackingId, setCorrectTrackingId] = useState(true);

  const inputRef = useMask({mask: 'XXXX-XXXX-XXXX-XXXX', replacement: {X: /\w/},});

  useEffect(() => {
    if (isCorrectTrackingId && isDisabled) {
      setCardHeight("h-[272px]");
    }
  }, [isCorrectTrackingId, isDisabled]);

  const isValidTrackingId = () => {
    const pattern = /^\w{4}-\w{4}-\w{4}-\w{4}$/;
    return pattern.test(trackingId);
  };

  const handleTrackOrder = () => {
    if (!isValidTrackingId()) {
      setCorrectTrackingId(false);
    } else {
      setDisabled(true);
      setCorrectTrackingId(true);
      props.onTrack(trackingId);
    }
  }

  return (
    <div className={"h-full"}>
      <Card
        className={`relative flex flex-col bg-primary-mint-green shadow-lg 
        ${cardHeight} 
        transition-height duration-1000 ease-in-out`}>
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
            onChange={(event) => setTrackingId(event.target.value)}
            onKeyUp={(event) => event.key == "Enter" ? handleTrackOrder() : undefined}
          />
          {!isCorrectTrackingId &&
              <p className={"text-red-600 text-xs"}>Please enter a Tracking ID with the correct format</p>
          }
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
            width={350}
            height={350}
            layout={"intrinsic"}
            alt="Picture of a smiling cartoon character holding a package delivery"
          />
        </div>
      </Card>
    </div>
  )
}

export default TrackSearchCard;