import React from 'react'
import { PaymentCard } from '@/components/PaymentCard'
//import 'bootstrap/dist/css/bootstrap.css'

const payment = () => {
    return (
        <body className="bg-[#EDEEC9]">
            <div className = "flex justify-center pt-11 pb-11">
                <PaymentCard />
            </div>
        </body>
    )
}

export default payment
