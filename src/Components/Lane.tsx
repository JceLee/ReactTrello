import React, { useState } from "react";
import AddBtn from "./AddBtn";
import AddForm from "./AddForm";

type LaneProps = {
  title: string;
};

export default function Lane(props: LaneProps) {
  const [isClicked, setIsClicked] = useState<Boolean>(false);
  const { title } = props;

  const handleButton = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="lane">
      <h3 className="laneTitle">{title}</h3>
      {isClicked ? (
        <AddForm category={title} onClick={handleButton} />
      ) : (
        <AddBtn onClick={handleButton} />
      )}
    </div>
  );
}
