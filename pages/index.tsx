
export default function Home() {
  return (
    <div className="font-roboto-Roboto">
    <div className=" p-6 h-96 bg-gradient-to-r from-primary-mint-green via-orange-101 to-primary-mint-green">
    <div id="logo-and-track">
    <div className=""><span className="font-roboto-Roboto text-4xl">Super Fast Delivery</span></div>
    <div className="mt-10">
      <span className="text-2xl">Track</span>
    <form className=" flex justify-content">
    <input type="text" className="w-4/6 bg-secondary-light-grey rounded" placeholder="Tracking Number" />
    <button type="submit" className="ml-2 w-6 h-6 bg-secondary-light-grey rounded">
    <svg className="w-6 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
    </button>
    </form>
    </div>
    </div>
    </div>
    <div className="font-roboto-Roboto h-11 bg-primary-dark-grey align-middle text-2xl text-slate-50 text-center">Delivery done <span className="text-primary-orange">right</span> (and <span className="primary-orange">fast</span>).</div>
    <div className=" min-h-screen m-9 grid grid-cols-1 items-center">
      <div className="flex items-center justify-center" id="item-and-text">
        <div className="p-4 backdrop-blur-sm drop-shadow-md w-64  rounded-xl bg-gradient-to-b from-primary-mint-green to-primary-yellow-green">
        <span>Payment powered by</span>
        <img className="mb-6" src="https://i.imgur.com/fhoI0MY.png"></img>
      </div>
      <div className="ml-16"><span className="text-2xl">Payment made <span className="text-primary-orange">easy</span></span><br/>
      We use <span className="text-stripe-purple">Stripe</span> to process our transactions, <br /> ensuring a secure,swift, and reliable payment process <br />for our customers.
      </div>
      </div>
      <div className="flex items-center content-center justify-center" id="item-and-text-switch">
      <div className="mr-16"><span className="text-2xl">Quotations on the <span className="text-primary-orange">fly</span></span><br/>
      We provide personalized quotations for <br />each delivery order at the click of a button.
      </div>
        <div className="p-4 backdrop-blur-sm drop-shadow-md w-64  rounded-xl bg-gradient-to-b from-primary-mint-green to-yellow-green">
        <img className="mb-6" src="https://i.imgur.com/9wXpwOZ.png"></img>
      </div>
      </div>
      <div className="flex items-center content-center justify-center" id="item-and-text">
        <div className="p-4 backdrop-blur-sm drop-shadow-md w-64  rounded-xl bg-gradient-to-b from-primary-mint-green to-yellow-green">
        <span>Around the clock</span>
        <img className="mb-6 scale-125" src="https://i.imgur.com/1MnVKTK.png"></img>
      </div>
      <div className="ml-16"><span className="text-2xl">Customer Service <span className="text-primary-orange">24/7</span></span><br/>
      Our customer service team works around the clock to ensure <br /> you get the best service possible. 
      Our team is readily available <br />  through<span className="text-primary-orange"> Zoom </span> Online chat, and more!
      </div>
      </div>   
    </div>
    <div className="text-center font-roboto-Roboto text-2xl">Here&#39;s what our customers had to say </div>
    <div id="reviews-preview" className="mb-10">
      <div className="bg-opacity-80 w-full justify-center bg-primary-orange flex items-center gap-8 p-8">
      <div className="p-4 backdrop-blur-sm drop-shadow-md w-64 rounded-xl bg-gradient-to-b from-primary-mint-green to-yellow-green">
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation est laborum.
      </div>
       <div id="stars" className="flex gap-2.5 justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="scale-125 text-yellow-500 w-5 h-auto fill-current"
            viewBox="0 0 16 16">
            <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="scale-125 text-yellow-500 w-5 h-auto fill-current"
            viewBox="0 0 16 16">
            <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="scale-125 text-yellow-500 w-5 h-auto fill-current"
            viewBox="0 0 16 16">
            <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="scale-125 text-yellow-500 w-5 h-auto fill-current"
            viewBox="0 0 16 16">
            <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      </div> 
      </div>
      <div className="p-4 backdrop-blur-sm drop-shadow-md w-64 rounded-xl bg-gradient-to-b from-primary-mint-green to-yellow-green">
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation est laborum.
      </div> 
      <div id="stars" className="flex gap-2.5 justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="scale-125 text-yellow-500 w-5 h-auto fill-current"
            viewBox="0 0 16 16">
            <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="scale-125 text-yellow-500 w-5 h-auto fill-current"
            viewBox="0 0 16 16">
            <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="scale-125 text-yellow-500 w-5 h-auto fill-current"
            viewBox="0 0 16 16">
            <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="scale-125 text-yellow-500 w-5 h-auto fill-current"
            viewBox="0 0 16 16">
            <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="scale-125 text-yellow-500 w-5 h-auto fill-current"
            viewBox="0 0 16 16">
            <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      </div> 
      </div>
      
      <div className="p-4 backdrop-blur-sm drop-shadow-md w-64  rounded-xl bg-gradient-to-b from-primary-mint-green to-yellow-green">
      <div id="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation est laborum.
      </div>
      <div id="stars" className="flex gap-2.5 justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="scale-125 text-yellow-500 w-5 h-auto fill-current"
            viewBox="0 0 16 16">
            <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="scale-125 text-yellow-500 w-5 h-auto fill-current"
            viewBox="0 0 16 16">
            <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="scale-125 text-yellow-500 w-5 h-auto fill-current"
            viewBox="0 0 16 16">
            <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="scale-125 text-yellow-500 w-5 h-auto fill-current"
            viewBox="0 0 16 16">
            <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="scale-125 text-yellow-500 w-5 h-auto fill-current"
            viewBox="0 0 16 16">
            <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      </div> 
      </div>
      <div className="p-4 backdrop-blur-sm drop-shadow-md w-64  rounded-xl bg-gradient-to-b from-primary-mint-green to-yellow-green">
      <div id="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation est laborum.
      </div>
      <div id="stars" className="flex gap-2.5 justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="scale-125 text-yellow-500 w-5 h-auto fill-current"
            viewBox="0 0 16 16">
            <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="scale-125 text-yellow-500 w-5 h-auto fill-current"
            viewBox="0 0 16 16">
            <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="scale-125 text-yellow-500 w-5 h-auto fill-current"
            viewBox="0 0 16 16">
            <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="scale-125 text-yellow-500 w-5 h-auto fill-current"
            viewBox="0 0 16 16">
            <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="scale-125 text-yellow-500 w-5 h-auto fill-current"
            viewBox="0 0 16 16">
            <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      </div> 
      </div>
      </div>
      </div>
      <div id="footer" className="flex flex-col bg-primary-dark-grey text-slate-50">
        <span className="text-2xl mb-4">Super Fast Delivery</span>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">About</a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Request a quotation</a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Track an Order</a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Leave a review</a>
      </div>
    </div>
  )
}
