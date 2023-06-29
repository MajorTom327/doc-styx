import { Badge } from "react-daisyui";

import CustomCard, { CustomCardTitle } from "~/components/CustomCard";
import DocImage from "~/components/Documentation/DocImage";
import ErrorHandler from "~/components/ErrorHandler";



import civilityFormImg from "./civility-form.png";

export const SheetsCivility = () => {
  return (
    <>
      <CustomCard>
        <CustomCardTitle>
          Civilitée d'une fiche
          <Badge>Défunt uniquement</Badge>
        </CustomCardTitle>

        <DocImage src={civilityFormImg} />
      </CustomCard>
    </>
  );
};

export const ErrorBoundary = ErrorHandler;

export default SheetsCivility;
