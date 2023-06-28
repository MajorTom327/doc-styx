import React from "react";
import { Card } from "react-daisyui";

import { getImageUrl } from "../Image/Image";

type Props = {
  src: string;
  alt?: string;
};

export const CustomCardImage: React.FC<Props> = ({ src, alt }) => {
  return (
    <>
      <Card.Image src={getImageUrl(src)} alt={alt} />
    </>
  );
};

CustomCardImage.defaultProps = {};

export default CustomCardImage;
