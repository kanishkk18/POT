import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Rohan_dudeja",
    username: "CEO",
    body: "The web application delivered by Kanishkk is nothing short of outstanding. The user interface is clean, and the performance is seamless. Highly impressed with the technical expertise and attention to detail.",
    img: "https://i.pinimg.com/564x/46/15/55/4615550ad0b619d57ae2f9b86bc909ff.jpg",
  },
  {
    name: "Anjali_sharma",
    username: "product manager",
    body: "We needed a complex web solution, and Kanishkk exceeded all expectations. The website is fast, responsive, and intuitive. Amazing job!",
    img: "https://i.pinimg.com/564x/2e/63/9a/2e639a50b96ec82e1b9064b68c14ea0c.jpg",
  },
  {
    name: "Vikram_desai",
    username: "Founder",
    body: "Working with Kanishkk has been a pleasure. Our eCommerce platform was completed ahead of schedule, and the functionality is top-notch. I highly recommend their services.",
    img: "https://i.pinimg.com/564x/56/12/57/56125794377e8d961b47baeee53a675a.jpg",
  },
  {
    name: "Isha_Rao",
    username: "Product marketing manager",
    body: "Your technical expertise and creativity helped us create a website that not only looks great but functions seamlessly. Your commitment to quality really stood out.",
    img: "https://framerusercontent.com/images/eJWw3fYvBTs8BCxgoo6gYgydL8g.jpg?scale-down-to=1024",
  },
  {
    name: "Nitin_gupta",
    username: "Head of Product",
    body: "The web app [Your Name] delivered is secure, scalable, and user-friendly. They understood our requirements perfectly and executed them flawlessly.",
    img: "https://i.pinimg.com/564x/87/b8/bb/87b8bba1ff8923ded0a0e38cf8f467c0.jpg",
  },
  {
    name: "Ritu_malhotra",
    username: "Co-founder",
    body: "Thank you for making our website stand out in a competitive market. The design is elegant, the functionality is smooth, and we’re already seeing more customer engagement.",
    img: "https://framerusercontent.com/images/LCAq4l2NZwSehPQ77ZLjCptVU.jpg",
  },
  {
    name: "Harsh_vardhan",
    username: "Head of IT",
    body: "You delivered beyond our expectations! The performance and design of the website are top-notch, and we’ve received positive feedback from our clients.",
    img: "https://i.pinimg.com/564x/f2/dd/27/f2dd276ff94e01b2aa72cf3bf8177b24.jpg",
  },
  {
    name: "Amit_sachdev",
    username: "Founder",
    body: "Thank you for your hard work and commitment! The level of detail and creativity in the web design truly reflects our brand. Highly recommend your services!",
    img: "https://i.pinimg.com/564x/1f/14/e2/1f14e29287d8071edc6aa9c61db8c0e3.jpg",
  },
];

const firstRow = reviews.slice(0, 3);
const secondRow = reviews.slice(3, 6);
const thirdRow = reviews.slice(6, 8);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-auto w-90 cursor-pointer m-2 overflow-hidden rounded-xl border p-4",
        // dark styles
        "border-gray-100/[.1] bg-gray-100/[.10] hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="w-10 h-10 rounded-full object-cover" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white font-medium">{body}</blockquote>
    </figure>
  );
};

export default function MarqueeDemoVertical() {
  return (
    <div className="">
      <h1 className="pointer-events-none pb-6 lg:text-5xl md:text-5xl whitespace-pre-wrap text-gray-300 text-center text-3xl font-semibold leading-none ">
       we are favourite of our clients
      </h1>
      <div className="relative flex h-screen w-full flex-row items-center py-8 justify-center overflow-hidden rounded-lg bg-transparent">
        {/* First Row of Reviews */}
        <Marquee pauseOnHover vertical className="[--duration:12s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        {/* Second Row of Reviews */}
        <Marquee
          pauseOnHover
          vertical
          className="[--duration:16s] hidden lg:flex md:flex"
        >
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        {/* Third Row of Reviews */}
        <Marquee
          pauseOnHover
          vertical
          className="[--duration:8s] hidden lg:flex md:flex"
        >
          {thirdRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        {/* Gradient effect for top and bottom */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black dark:to-black/5"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black dark:to-black/5"></div>
      </div>
    </div>
  );
}
