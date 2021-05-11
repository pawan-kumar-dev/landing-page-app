import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SliderComponent from "../../Components/SliderComponent/SliderComponent";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";
import VisibilityIcon from "@material-ui/icons/Visibility";
import CommentIcon from "@material-ui/icons/Comment";
import { CircularCard } from "../../Components/";

const circleCardData = [
  {
    id: 1,
    Icon: FavoriteBorderIcon,
    count: 100,
    label: "Linkes",
    iconColor: "blue",
    hightLight: true,
  },
  {
    id: 2,
    Icon: InsertInvitationIcon,
    count: 200,
    label: "Views",
  },
  {
    id: 3,
    Icon: VisibilityIcon,
    count: 50,
    label: "Comments",
  },
  {
    id: 4,
    Icon: CommentIcon,
    count: 5,
    label: "Label",
  },
];

const CircleCardSection = () => {
  return (
    <SliderComponent>
      {circleCardData.map(
        ({ Icon, count, label, iconColor, hightLight, id }) => (
          <CircularCard
            key={id}
            Icon={Icon}
            label={label}
            iconColor={iconColor}
            hightLight={hightLight}
            count={count}
          />
        )
      )}
    </SliderComponent>
  );
};

export default CircleCardSection;
