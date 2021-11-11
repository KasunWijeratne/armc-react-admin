import React from "react";
import {
  Card as MUICard,
  CardContent,
  CardHeader,
} from "@mui/material";

interface Props {
  children: JSX.Element | JSX.Element[];
  title: string | JSX.Element;
  subheader?: string;
  action?: JSX.Element;
  footer?: JSX.Element;
  color?: string;
  borderColor?: string;
}

const Card = ({ children, title, subheader, action, footer, color, borderColor }: Props) => {
  return (
    <MUICard
      sx={{
        position: "relative",
        zIndex: 1,
        color: color || "text",
        borderColor: borderColor || null
      }}
    >
      <CardHeader
        action={action}
        title={title}
        subheader={subheader}
        titleTypographyProps={{ variant: "h3" }}
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      />
      <CardContent sx={{ pt: 0 }}>{children}</CardContent>
      {footer}
    </MUICard>
  );
};

export default React.memo(Card);
