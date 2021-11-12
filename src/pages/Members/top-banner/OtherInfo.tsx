import React from "react";
import ListCompact from "../../../components/list/ListCompact";

interface Props {
  subheader: string;
  list: {
    content: string | number | JSX.Element;
    icon?: any;
  }[];
  control?: JSX.Element;
}

const OtherInfo = ({ subheader, control, list }: Props) => {
  return (
    <ListCompact
      subheader={subheader}
      control={control}
      list={list}
    />
  );
};

export default React.memo(OtherInfo);
