import React from "react";
import "./style.css"; // Import your custom CSS for the animation

const reviews = [
  {
   
    img: "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718203321/CONFERIO/svg/cqadrvs89xvqn7wu1nop.svg",
  },
  {
   
    img: "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718204642/CONFERIO/svg/uku0sbsndymdd2w5plow.png",
  },
  {
   
    img: "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718203984/CONFERIO/svg/wohzufd7zi4qo4ohrkus.png",
  },
  {
   
    img: "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718205939/CONFERIO/svg/ahieqzgdvniomvj8ealk.png",
  },
  {
   
    img: "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718203321/CONFERIO/svg/cqadrvs89xvqn7wu1nop.svg",
  },
  {
   
    img: "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718204642/CONFERIO/svg/uku0sbsndymdd2w5plow.png",
  },
  {
   
    img: "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718203984/CONFERIO/svg/wohzufd7zi4qo4ohrkus.png",
  },
  {
   
    img: "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718204642/CONFERIO/svg/uku0sbsndymdd2w5plow.png",
  },
  {
   
    img: "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718205939/CONFERIO/svg/ahieqzgdvniomvj8ealk.png",
  },
];

const reviewtwo = [
  {
   
    img: "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718202905/CONFERIO/svg/wfgpfo5ixaehmwwvpiau.svg",
  },
  {
   
    img: "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718208178/CONFERIO/svg/rzchobbmwc0dkrrhcdib.jpg",
  },
  {
   
    img: "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718202735/CONFERIO/svg/pqoctqebftkxpla3nsqe.svg",
  },
  {
   
    img: "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718208452/CONFERIO/svg/pryfsznna7uljhrxayep.svg",
  },
  {
   
    img: "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718202905/CONFERIO/svg/wfgpfo5ixaehmwwvpiau.svg",
  },
  {
   
    img: "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718208178/CONFERIO/svg/rzchobbmwc0dkrrhcdib.jpg",
  },
  {
   
    img: "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718202735/CONFERIO/svg/pqoctqebftkxpla3nsqe.svg",
  },
  {
   
    img: "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718208452/CONFERIO/svg/pryfsznna7uljhrxayep.svg",
  },
  {
   
    img: "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718205939/CONFERIO/svg/ahieqzgdvniomvj8ealk.png",
  },
];

const reviewthree = [
 
  {
   
    img: "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718209010/CONFERIO/svg/azkpbu5gvirapcbqtbss.svg",
  },
  {
   
    img: "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718204397/CONFERIO/svg/avmout5y387zdvqkfh7a.svg",
  },
  {
   
    img: "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718208624/CONFERIO/svg/zqgemdjceqvma8tzqdaj.svg",
  },
  {
   
    img: "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718209010/CONFERIO/svg/azkpbu5gvirapcbqtbss.svg",
  },
  {
   
    img: "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718203468/CONFERIO/svg/i3uypvxcmgjw5bstk1vj.svg",
  },
  {
   
    img: "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718204397/CONFERIO/svg/avmout5y387zdvqkfh7a.svg",
  },
  {
   
    img: "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718208624/CONFERIO/svg/zqgemdjceqvma8tzqdaj.svg",
  },
];

const ReviewCard = ({ img }) => {
  return (
    <figure className="relative cursor-pointer overflow-hidden bg-gradient-to-br from-[#292929] to-[#030303] rounded-[30px] mb-4 border-t border-l border-white border-opacity-30 py-9 px-8 ">
      <div className="flex flex-col justify-center items-center gap-2">
        <img className="h-[60px]" alt="" src={img} />
      </div>
    </figure>
  );
};

export default function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden rounded-lg shadow-lg space-y-2 space-x-6">
      <div className="marquee-vertical">
        <div className="marquee-content">
          {reviews.concat(reviewthree).concat(reviewtwo).map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
      <div className="marquee-vertical reverse">
        <div className="marquee-content">
          {reviews.concat(reviews).concat(reviews).map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
      <div className="marquee-vertical">
        <div className="marquee-content">
          {reviewtwo.concat(reviews).concat(reviews).map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 "></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 "></div>
    </div>
  );
}
