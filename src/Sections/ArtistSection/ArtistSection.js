import React from "react";
import artist1 from "../../assets/artist1.png";
import artist2 from "../../assets/artist2.png";
import artist3 from "../../assets/artist3.png";
import artist4 from "../../assets/artist4.png";
import { SliderComponent, ArtistCard } from "../../Components";
import "./ArtistSection.css";

const artistArray = [
  {
    id: 1,
    name: "Benny Dayal",
    tag: "Folk",
    profilePic: artist2,
  },
  {
    id: 2,
    name: "Vijay Yesudas",
    tag: "Bollywood",
    profilePic: artist1,
  },
  {
    id: 3,
    name: "Andrea Jeremiah",
    tag: "Folk",
    profilePic: artist3,
  },
  {
    id: 4,
    name: "Shilpa Rao",
    tag: "Folk",
    profilePic: artist4,
  },
];

const ArtistSection = () => {
  return (
    <div className="max-w-7xl p-4 pt-10 mb-14 w-full mx-auto">
      <div className="flex justify-between py-6 mb-4 items-center">
        <h1 className="text-white artistSection__title">Upcoming Shows</h1>
        <p className="text-jamYellow cursor-pointer">View All</p>
      </div>
      <SliderComponent>
        {artistArray.map(({ id, name, tag, profilePic }) => (
          <ArtistCard key={id} name={name} tag={tag} profilePic={profilePic} />
        ))}
      </SliderComponent>
    </div>
  );
};

export default ArtistSection;
