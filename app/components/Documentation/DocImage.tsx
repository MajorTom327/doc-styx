import classNames from "classnames";
import React from "react";



import ImageComp from "~/components/Image";

type Props = {
  src: string;
  alt?: string;
};

export const DocImage: React.FC<Props> = ({ src, alt }) => {
  const imageClasses = classNames(
    "rounded-xl w-1/2 overflow-hidden transition-all duration-500 transform border",
    "hover:scale-150 hover:-translate-y-16 shadow-none hover:shadow-lg"
  );
  return (
    <>
      <div className="group flex justify-center w-full">
        <ImageComp src={src} alt={alt} className={imageClasses} />
      </div>
    </>
  );
};

DocImage.defaultProps = {};

export default DocImage;
