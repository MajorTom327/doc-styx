import { propOr } from "ramda";
import React from "react";

type Props = {
  src: string;
  className?: string;
  alt?: string;
};

type ImageWidth = 640 | 750 | 828 | 1080 | 1200;

const imageWidths: ImageWidth[] = [640, 750, 828, 1080, 1200];

type Options = Partial<{
  width: ImageWidth;
  quality: number;
}>;

export const getImageUrl = (src: string, options?: Options) => {
  const url = new URL("/_vercel/image", "https://doc.styx-sys.com");

  url.searchParams.append("url", src);

  const width: number = propOr(1200, "width", options);
  const quality: number = propOr(75, "quality", options);

  url.searchParams.append("w", width.toString());
  url.searchParams.append("q", quality.toString());

  return url.toString();
};

export const Image: React.FC<Props> = ({ src, alt, className }) => {
  const classes = className;
  return (
    <>
      <picture className={classes}>
        {imageWidths.map((width) => (
          <source
            key={width}
            srcSet={getImageUrl(src, { width })}
            media={`(min-width: ${width}px)`}
          />
        ))}
        <img src={getImageUrl(src)} alt={alt} />
      </picture>
    </>
  );
};

Image.defaultProps = {};

export default Image;
