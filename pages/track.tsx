import TrackSearchCard from "@/components/track/TrackSearchCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { Oval } from "react-loader-spinner";
import TrackBody from "@/components/track/TrackBody";

const TrackingPage = () => {
  const [trackingId, setTrackingId] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLoaded, setLoaded] = useState(false);

  const handleTrackById = (trackingId: string) => {
    setTrackingId(trackingId);

    // Delay loading screen
    (async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setLoading(false);
      setLoaded(true);
    })();
  }

  return (
    <div className="h-full bg-primary-yellow-green">
      <ScrollArea className="px-40 h-full">
        <div className={"flex flex-col gap-14 pt-14"}>
          <h1 className={"text-6xl font-bold text-primary-dark-grey"}>
            Order Tracking Page
          </h1>
          <TrackSearchCard
            isLoaded={isLoaded}
            onTrack={handleTrackById}
          />
          {loading &&
              <div className={"flex flex-col justify-center items-center animate-slide-fwd font-light gap-10"}>
                  <h1>Searching for your order</h1>
                  <Oval
                      height={80}
                      width={80}
                      color="#242325"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                      ariaLabel='oval-loading'
                      secondaryColor={"rgba(36,35,37,0.30)"}
                      strokeWidth={2}
                      strokeWidthSecondary={2}
                  />
              </div>}
          {isLoaded &&
              <div>
                  <TrackBody/>
              </div>
          }
        </div>
      </ScrollArea>
    </div>)
}
export default TrackingPage;