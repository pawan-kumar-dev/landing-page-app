import { IconButton, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import "./ArtistCard.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import BookmarksOutlinedIcon from "@material-ui/icons/BookmarksOutlined";
import BookmarksIcon from "@material-ui/icons/Bookmarks";

const useStyles = makeStyles({
  iconButton: {
    color: "#0259EB",
  },
  bookIcon: {
    color: "#DD4CAC",
  },
});
const ArtistCard = ({ name, tag, profilePic }) => {
  const classes = useStyles();
  const [selectArtist, setSelectArtist] = useState(false);
  return (
    <div className="artistCard relative m-4">
      <div className="artistCard__inner w-full h-full absolute text-white">
        <img
          src={profilePic}
          alt="artist"
          className="object-contain w-full mb-5 "
        />
        <div className="p-3">
          <span className="text-sm tag bg-jamYellow text-black rounded-sm font-semibold px-2 py-1 ">
            {tag}
          </span>
          <h2 className=" text-2xl mt-3 ">{name}</h2>
          <div className="flex justify-between items-center ">
            <button className="flex flex-1">
              <span className={classes.iconButton}>More Info </span>
              <span className="arrow ml-1 ">
                <ArrowForwardIcon className={classes.iconButton} />
              </span>
            </button>
            <div className="bookIcon">
              <IconButton
                className={classes.bookIcon}
                onClick={() => setSelectArtist(!selectArtist)}
              >
                {selectArtist ? <BookmarksIcon /> : <BookmarksOutlinedIcon />}
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
