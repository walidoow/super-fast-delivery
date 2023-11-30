import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import Link from "next/link"

export function PaymentCard() {
  return (
    <Card className="w-2/5  bg-[#F18805]">
      <CardHeader>
        <CardTitle>Payment Information</CardTitle>
        <CardDescription>Please enter your payment information</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Cardholder Name</Label>
              <Input id="name" placeholder="Some Name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Credit Card Number</Label>
              <Input id="name" placeholder="123 123 12345" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">CVC</Label>
              <Input id="name" placeholder="123" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Card Type</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Mastercard</SelectItem>
                  <SelectItem value="sveltekit">Visa</SelectItem>
                  <SelectItem value="astro">Visa Debit</SelectItem>
                  <SelectItem value="nuxt">American Express</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="bg-[#9DCBBA] shadow-md shadow-slate-600 text-black"><Link href="/pages/orderCompletion">Pay</Link></Button>
      </CardFooter>
    </Card>
  )
}
