import React, { JSXElementConstructor, ReactElement } from "react";
import { Box } from "@mui/system";
import Card from ".";
import ExpanderFooter from "./ExpanderFooter";
import { Typography } from "@mui/material";

interface Props {
  titleText: string;
  titleIcon: ReactElement<any, string | JSXElementConstructor<any>>;
  actionIcon: ReactElement<any, string | JSXElementConstructor<any>>;
  children: JSX.Element | JSX.Element[];
  actionText?: string;
}

const CardLoose = ({ titleText, titleIcon, actionIcon, actionText, children }: Props) => {
  return (
    <Card
      title={
        <Box display="flex" alignItems="center">
          {React.cloneElement(titleIcon, { sx: { mr: 1 } })}
          {titleText}
        </Box>
      }
      action={
        <Box display="flex">
          {React.cloneElement(actionIcon, { sx: { width: 14, mr: 1 } })}
          <Typography>{actionText}</Typography>
        </Box>
      }
      footer={<ExpanderFooter count={3} />}
    >
      <Box py={3}>{children}</Box>
    </Card>
  );
};

export default CardLoose;
