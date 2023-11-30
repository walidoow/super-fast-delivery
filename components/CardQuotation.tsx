import * as React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"

import { QuotationAccordion } from "./AccordionComponent";
import Link from "next/link"

export function CardQuotation() {
  return (
    <Card className="w-1/2 bg-[#F18805]">
      <CardHeader>
        <CardTitle>Payment Details</CardTitle>
        <CardDescription>here is a breakdown of your total</CardDescription>
      </CardHeader>
      <CardContent>
        <QuotationAccordion/>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="bg-[#9DCBBA] shadow-md shadow-slate-600 text-black"><Link
          href="/payment">Continue</Link></Button>
      </CardFooter>
    </Card>
  )
}
