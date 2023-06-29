import { CustomCardTitle } from "~/components/CustomCard";
import CustomCard from "~/components/CustomCard/CustomCard";
import DocImage from "~/components/Documentation/DocImage";
import ErrorHandler from "~/components/ErrorHandler";

import addCommanditaireImg from "./add-commanditaire.png";
import cremationFormImg from "./cremation-form.png";

export const SheetsCremation = () => {
  return (
    <>
      <CustomCard>
        <CustomCardTitle>Crémation d'une fiche</CustomCardTitle>

        <DocImage src={cremationFormImg} />
        <DocImage src={addCommanditaireImg} />
      </CustomCard>
    </>
  );
};

export const ErrorBoundary = ErrorHandler;

export default SheetsCremation;
