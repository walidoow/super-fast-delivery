import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function QuotationAccordion() {
    return (
      <div className="justify-items-center">
          <Accordion type="single" collapsible >
            <AccordionItem value="item-1">
              <AccordionTrigger>Delivery Fee</AccordionTrigger>
              <AccordionContent>
                100kg x 1$/kg <br></br>
                = 100CAD <br></br>
                ___________ <br></br>
                + $100 CAD
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Discounts</AccordionTrigger>
              <AccordionContent>
                1 x VIP Discount <br></br>
                = $100 x 20% <br></br>
                ________________ <br></br>
                - $20 CAD
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Taxes</AccordionTrigger>
              <AccordionContent>
                $80 CAD x (QST 9.975% + GST 5%)<br></br>
                = $11.98 CAD<br></br>
                _______________________________<br></br>
                + $11.98 CAD
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <h1 className = "pt-5 pb-5">Total: $91.98 CAD</h1>
      </div>
    )
  }
  