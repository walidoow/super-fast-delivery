import { Progress } from "@/components/ui/progress";
import CheckIcon from "@/components/track/icons/CheckIcon";
import TruckIcon from "@/components/track/icons/TruckIcon";
import PackageIcon from "@/components/track/icons/PackageIcon";
import React from "react";
import { Map, Marker } from "pigeon-maps"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const TrackBody = () => {

  return (
    <div className={"flex flex-col justify-center items-center animate-slide-in py-14 gap-32"}>
      <div className={"flex flex-col gap-10 items-center"}>
        <h2 className={"text-3xl font-medium"}>
          Order Status: <span className={"tracking-widest text-primary-orange"}>Shipped</span>
        </h2>
        <h2 className={"text-xl font-light"}>
          Estimated Time Left for Delivery: 10 min
        </h2>
      </div>
      <div className={"relative w-full"}>
        <Progress value={67} className="w-full rounded-none bg-[#A0A0A0]"/>
        <div className={"absolute -bottom-4 w-full px-40"}>
          <div className={"flex flex-row justify-between"}>
            <CheckIcon/>
            <TruckIcon/>
            <PackageIcon/>
          </div>
        </div>
      </div>
      <div className={"flex flex-row w-full h-full justify-between"}>
        <div className={"flex flex-col w-[30%] gap-28"}>
          <div className={"flex flex-col gap-10"}>
            <h2 className={"text-3xl font-semibold"}>Shipping Information</h2>
            <h1 className={"font-light"}>Ship to Concordia University</h1>
            <h1 className={"font-light"}>1550 De Maisonneuve West, Montreal Quebec H3G 2E9</h1>
            <h1 className={"font-light"}>Tracking link:&nbsp;CLICK HERE -{">"}&nbsp;
              <Dialog>
                <DialogTrigger asChild>
                  <span
                    className={"text-blue-700 font-light underline underline-offset-4 hover:text-white"}>
                     https://bit.ly/J45jk7</span>
                </DialogTrigger>
                <DialogContent className="sm:max-w-fit overflow-hidden p-10">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                  </iframe>
                </DialogContent>

              </Dialog>
            </h1>
          </div>
          <div className={"flex flex-col gap-10"}>
            <h2 className={"text-3xl font-semibold"}>Contact Deliveryman</h2>
            <h1 className={"font-light"}>Sergius Swanahilda</h1>
            <h1 className={"font-light"}>Call or Text 403-569-1507</h1>
          </div>
        </div>
        <div className={"w-[50vw] h-full shadow-slate-400 shadow-md"}>
          <Map height={720} defaultCenter={[45.5019, -73.6174]} defaultZoom={13} mouseEvents={false}>
            <Marker width={40} color={"orange"} anchor={[45.5019, -73.5674]}/>
            <Marker width={40} color={"orange"} anchor={[45.5019, -73.6674]}/>
          </Map>
        </div>
      </div>
    </div>
  );
}

export default TrackBody;
