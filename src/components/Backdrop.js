import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Backdrop = () => {
  return (
    <div className="flex min-w-full overflow-hidden left-0 fixed top-0 min-h-screen items-center justify-center z-20">
      <div
        style={{ scroll: "none" }}
        className="w-full h-full fixed top-0 bg-black opacity-70 "
      ></div>
      <div className="">
        <CircularProgress color="info" />
      </div>
    </div>
  );
};

export default Backdrop;
