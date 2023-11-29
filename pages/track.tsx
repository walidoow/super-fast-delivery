import TrackSearchCard from "@/components/track/TrackSearchCard";
import { ScrollArea } from "@/components/ui/scroll-area";

const TrackingPage = () => {

  return (
    <div className="h-full bg-primary-yellow-green">
      <ScrollArea className="px-40 h-full">
        <div className={"flex flex-col gap-14 pt-14"}>
          <h1 className={"text-6xl font-bold text-primary-dark-grey"}>
            Order Tracking Page
          </h1>
          <TrackSearchCard/>
        </div>
      </ScrollArea>
    </div>)
}
export default TrackingPage;