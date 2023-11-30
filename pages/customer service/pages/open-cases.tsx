import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BellIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
//import { Switch } from '@radix-ui/react-switch'
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

//display all open cases
export const OpenCases = () => {
  //card info
  const cardInfo = [
    { caseID: "1000", orderID: "009999", packageID: "869596" },
    { caseID: "2000", orderID: "987972", packageID: "323121" },
    { caseID: "3000", orderID: "543656", packageID: "439284" },
  ];

  //notifications
  const notifications = [
    {
      title: "Change of order has been confirmed.",
      description: "1 hour ago",
    },
    {
      title: "You have a new message!",
      description: "2 hour ago",
    },
    {
      title: "Customer service case ID assigned.",
      description: "3 hours ago",
    },
  ];

  type CardProps = React.ComponentProps<typeof Card>;

  const renderCard = (card, index) => {
    return (
      <Card className={cn("w-[380px]")}>
        <CardHeader>
          <div style={{ paddingBottom: "9px" }}>
            <CardTitle>Ongoing Case #{card.caseID}</CardTitle>
            <CardDescription style={{ paddingTop: "6px" }}>
              Order ID : {card.orderID}
            </CardDescription>
            <CardDescription className="space-y-1 space-x-4">
              Package ID : {card.packageID}
            </CardDescription>
          </div>
          <Separator />
          <CardTitle style={{ paddingTop: "9px" }}>Notifications</CardTitle>
          <CardDescription>You have 3 unread messages.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <BellIcon />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                Push Notifications
              </p>
              <p className="text-sm text-muted-foreground">
                Send notifications to device.
              </p>
            </div>
            <Switch />
          </div>
          <div>
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="grid grid-cols-3 gap-5">{cardInfo.map(renderCard)}</div>
  );
};
<CardFooter>
  <Button className="w-full">
    <CheckIcon className="mr-2 h-4 w-4" /> Mark all as read
  </Button>
</CardFooter>;
