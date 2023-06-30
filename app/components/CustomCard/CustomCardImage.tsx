import React from "react";
import { Card } from "react-daisyui";



import { getImageUrl } from "../Image/Image";


type Props = {
  src: string;
  alt?: string;
  className?: string;
};

export const CustomCardImage: React.FC<Props> = ({ src, alt, className }) => {
  return (
    <>
      <Card.Image src={getImageUrl(src)} alt={alt} className={className} />
    </>
  );
};

CustomCardImage.defaultProps = {};

export default CustomCardImage;
