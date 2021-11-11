import { SvgIcon } from "@mui/material";
import React from "react";

const Heartbeat = (props: any) => {
  return (
    <SvgIcon
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="17.009"
      height="15.927"
      viewBox="0 0 17.009 15.927"
    >
      <path
        id="heartbeat-solid"
        d="M10.622,39.481,8.971,43.014a.517.517,0,0,1-.96-.021L6.121,38.5l-1,2.549H2l6.062,6.63a.565.565,0,0,0,.854,0l6.066-6.63H11.356l-.734-1.571Zm5.1-6.04-.08-.089a4.155,4.155,0,0,0-6.225,0l-.927,1.017-.927-1.013a4.15,4.15,0,0,0-6.225,0l-.08.085a5.139,5.139,0,0,0-.242,6.473h3.4L5.609,36.85a.519.519,0,0,1,.977-.014l1.933,4.6,1.628-3.48a.516.516,0,0,1,.95,0l.917,1.962h3.95A5.139,5.139,0,0,0,15.721,33.441Z"
        transform="translate(0.015 -31.95)"
        fill="#00355f"
      />
    </SvgIcon>
  );
};

export default Heartbeat;
