import { Avatar } from "@material-ui/core";
import React from "react";
import "./FeedbackCard.css";
import feed1 from "../../assets/Img2.png";
import country1 from "../../assets/country1.png";

const FeedbackCard = () => {
  return (
    <div className="feedBack relative m-4">
      <div className="feedBack__inner w-full h-full absolute text-white p-6">
        <div className="flex items-center mb-6">
          <Avatar src={feed1} />
          <div className="ml-3">
            <h4 className=" text-lg">Hellen Jummy</h4>
            <span className="flex items-center">
              <img src={country1} alt="country" />
              <p className="text-jamYellow ml-3 text-sm ">Palo Alto, CA</p>
            </span>
          </div>
        </div>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in
          donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing.
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;
