import classNames from "classnames";
import { isNotNilOrEmpty } from "ramda-adjunct";
import React from "react";
import { Card } from "react-daisyui";

import CustomCardImage from "./CustomCardImage";

type Props = {
  imgSrc?: string;
  imgAlt?: string;
  children: React.ReactNode;
};

export const CustomCard: React.FC<Props> = ({ children, imgSrc, imgAlt }) => {
  const classes = classNames("bg-base-200 shadow-lg text-base-content");

  return (
    <>
      <Card className={classes} imageFull={isNotNilOrEmpty(imgSrc)}>
        {isNotNilOrEmpty(imgSrc) && (
          <CustomCardImage src={imgSrc!} alt={imgAlt} />
        )}
        <Card.Body>{children}</Card.Body>
      </Card>
    </>
  );
};

CustomCard.defaultProps = {};

export default CustomCard;
