import React from "react";
import { styles } from "../styles/style";

type Props = {};

const Policy = (props: Props) => {
  return (
    <div>
      <div
        className={
          "w-[95%] 800px:w-[92%] m-auto py-2 text-black dark:text-white px-3 "
        }
      >
        <h1 className={`${styles.title} !text-start pt-2`}>
          platform terms and condition
        </h1>
        <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
          <p className="text-black dark:text-white py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            iusto illo praesentium saepe ipsa. Fuga, sed, voluptate fugiat
            reiciendis sit facilis sunt, debitis voluptas sequi accusamus
            incidunt error fugit ad.
          </p>
          <br />
          <p className="text-black dark:text-white py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            iusto illo praesentium saepe ipsa. Fuga, sed, voluptate fugiat
            reiciendis sit facilis sunt, debitis voluptas sequi accusamus
            incidunt error fugit ad.
          </p>
          <br />
          <p className="text-black dark:text-white py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            iusto illo praesentium saepe ipsa. Fuga, sed, voluptate fugiat
            reiciendis sit facilis sunt, debitis voluptas sequi accusamus
            incidunt error fugit ad.
          </p>
          <br />
          <p className="text-black dark:text-white py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            iusto illo praesentium saepe ipsa. Fuga, sed, voluptate fugiat
            reiciendis sit facilis sunt, debitis voluptas sequi accusamus
            incidunt error fugit ad.
          </p>
          <br />
          <p className="text-black dark:text-white py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            iusto illo praesentium saepe ipsa. Fuga, sed, voluptate fugiat
            reiciendis sit facilis sunt, debitis voluptas sequi accusamus
            incidunt error fugit ad.
          </p>
          <br />
        </ul>
      </div>
    </div>
  );
};

export default Policy;
