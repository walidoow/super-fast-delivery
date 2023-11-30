import * as React from "react"

import Image from 'next/image'
import checkmark from '@/public/checkmark.png'

export function Completion() {
  return (
    <div>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Thank You For Your Order
      </h2>
      <Image
        src={checkmark}
        width={350}
        height={350}
        alt="checkmark image"
      />
    </div>
  )
}