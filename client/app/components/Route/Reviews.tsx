import { styles } from "@/app/styles/style";
import Image from "next/image";
import React from "react";
import ReviewCard from "../Review/ReviewCard";

type Props = {};

export const reviews = [
  {
    name: "Gene Bates",
    avatar: "https://randomuser.me/portraits/men/1.jpg",
    profession: "Student | cambridge university",
    comment:
      "API for generating placeholder user information. Get profile photos, names, and more. It's like Lorem Ipsum, for people.Get profile photos, names, and more. It's like Lorem Ipsum, for people.",
  },
  {
    name: "Gene Bates",
    avatar: "https://randomuser.me/portraits/men/1.jpg",
    profession: "Student | cambridge university",
    comment:
      "API for generating placeholder user information. Get profile photos, names, and more. It's like Lorem Ipsum, for people.Get profile photos, names, and more. It's like Lorem Ipsum, for people.names, and more. It's like Lorem Ipsum, for people.names, and more. It's like Lorem Ipsum, for people.",
  },

  {
    name: "Verna Santos",
    avatar: "https://randomuser.me/portraits/women/1.jpg",
    profession: "Full Stack developer | Quater ltd",
    comment:
      "API for generating placeholder user information. Get profile photos, names, and more. It's like Lorem Ipsum, for people.Get profile photos, names, and more. It's like Lorem Ipsum, for people.names, and more. It's like Lorem Ipsum, for people.names, and more. It's like Lorem Ipsum, for people.names, and more. It's like Lorem Ipsum, for people.names, and more. It's like Lorem Ipsum, for people.",
  },
  {
    name: "Jay Gibs",
    avatar: "https://randomuser.me/portraits/men/2.jpg",
    profession: "computer students engineering student | Zimbave",
    comment:
      "API for generating placeholder user information. Get profile photos, names, and more. It's like Lorem Ipsum, for people.Get profile photos, names, and more. It's like Lorem Ipsum, for people.",
  },
  {
    name: "Mina Davidson",
    avatar: "https://randomuser.me/portraits/women/2.jpg",
    profession: "Junior Web developer | Indonesia",
    comment:
      "API for generating placeholder user information. Get profile photos, names, and more. It's like Lorem Ipsum, for people.Get profile photos, names, and more. It's like Lorem Ipsum, for people.",
  },
  {
    name: "Mina Davidson",
    avatar: "https://randomuser.me/portraits/women/2.jpg",
    profession: "Junior Web developer | Indonesia",
    comment:
      "API for generating placeholder user information. Get profile photos, names, and more. It's like Lorem Ipsum, for people.Get profile photos, names, and more. It's like Lorem Ipsum, for people.",
  },
  {
    name: "Verna Santos",
    avatar: "https://randomuser.me/portraits/women/1.jpg",
    profession: "Full Stack developer | Quater ltd",
    comment:
      "API for generating placeholder user information. Get profile photos, names, and more. It's like Lorem Ipsum, for people.Get profile photos, names, and more. It's like Lorem Ipsum, for people.",
  },
  {
    name: "Jay Gibs",
    avatar: "https://randomuser.me/portraits/men/2.jpg",
    profession: "computer students engineering student | Zimbave",
    comment:
      "API for generating placeholder user information. Get profile photos, names, and more. It's like Lorem Ipsum, for people.Get profile photos, names, and more. It's like Lorem Ipsum, for people.",
  },
];

const Reviews = (props: Props) => {
  return (
    <div className="w-[90%] 800px:w-[85%] m-auto">
      <div className="w-full 800px:flex items-center">
        <div className="800px:w-[50%] w-full">
          <Image
            src={require("../../../public/assets/banner.jpg")}
            alt="business"
            width={600}
            height={600}
          />
        </div>
        <div className="800px:w-[50%] w-full">
          <h3 className={`${styles.title} 800px:!text-[40px]`}>
            Our Students Are <span className="text-gradient">Our Strength</span>{" "}
            <br />
            See what they say about us
          </h3>
          <br />
          <p className={styles.label}>
            API for generating placeholder user information. Get profile photos,
            names, and more. It's like Lorem Ipsum, for people.names, and more.
            It's like Lorem Ipsum, for people.
          </p>
        </div>
        <br />
        <br />
      </div>
      <br />
      <div className="grid grid-cols-1 gap-[25px] md-grid-cols-2 md-gap-[25px] lg-grid-cols-2 lg-gap-[25px] xl-grid-cols-2 xl-gap-[35px] mb-12 border-0 md:[&>*:nth-child(3)]:!mt-[-60px] md:[&>*:nth-child(6)]:!mt-[-40px]">
        {reviews &&
          reviews.map((i, index) => <ReviewCard item={i} key={index} />)}
      </div>
    </div>
  );
};

export default Reviews;
