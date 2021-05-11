import { IconButton, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import LocalMallIcon from "@material-ui/icons/LocalMall";

const useStyles = makeStyles({
  iconButton: {
    color: "white",
  },
});

const Navbar = () => {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  useEffect(() => {
    let mounted = true;
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        if (mounted) setShow(true);
      } else {
        if (mounted) setShow(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <div className={`p-4 w-full z-50 sticky top-0 ${show && "bg-black"} `}>
      <div className=" max-w-7xl  mx-auto w-full flex justify-between items-center">
        <img src={logo} alt="logo" />
        <div className="flex items-center w-6/12 justify-evenly">
          <div className="flex items-center">
            <IconButton className={classes.iconButton}>
              <SearchIcon />
            </IconButton>
            <p className="text-white text-base sm:hidden">Search</p>
          </div>
          <p className="text-white text-base sm:hidden ">Help</p>
          <p className="text-white text-base sm:hidden">Account</p>
          <IconButton className={classes.iconButton}>
            <LocalMallIcon />
          </IconButton>
          <div className="hidden sm:block ">
            <IconButton className={classes.iconButton}>
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
