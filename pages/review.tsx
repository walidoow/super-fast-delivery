import React from 'react';
import Link from 'next/link';
import StarRating from '@/components/rating/StarRating';

const Review = () => {

  return (
    <div className="min-h-screen bg-yellow-100 flex flex-col justify-center items-center p-4">
      <div className="bg-orange-500 w-full max-w-2xl flex flex-col items-center p-8">
        <h2 className="text-2xl font-bold text-black mb-6">Leave a Review!</h2>
        <h1 className="text-2xl font-bold text-black mb-2 mt-6">Your Order ID </h1>
        <Input className={"max-w-fit"} placeholder={"XXXX-XXXX-XXXX-XXXX"}/>
        <h1 className="text-2xl font-bold text-black mb-2 mt-10">Overall Rating</h1>
        <StarRating/>

        <div className="text-2xl font-bold text-black mt-10 mb-2"> Comment</div>
        <div>
          <label htmlFor={`comment`}></label>
          <textarea
            id="comment"
            name="comment"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-32"
            placeholder="Comment">
        </textarea>
        </div>
      </div>

      <div className="flex justify-center w-full mt-8 space-x-4">
        <Link href="/"
              className="text-sm bg-gray-900 text-white px-6 py-2 rounded shadow hover:bg-gray-800 transition-colors">
          Submit
        </Link>
      </div>
  );
};

export default Review;
