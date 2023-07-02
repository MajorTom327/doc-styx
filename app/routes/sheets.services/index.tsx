import { CustomCardTitle } from "~/components/CustomCard";
import CustomCard from "~/components/CustomCard/CustomCard";
import DocImage from "~/components/Documentation/DocImage";
import Paragraph from "~/components/Documentation/Paragraph";
import ErrorHandler from "~/components/ErrorHandler";

import servicesFormImg from "./services-form.png";

export const SheetsServices = () => {
  return (
    <>
      <CustomCard>
        <CustomCardTitle>Services associés à une fiche</CustomCardTitle>
        <Paragraph>
          La page des services d'une fiche permet : <br />- D'appliquer des
          services à une fiche afin de compléter les informations de celle-ci
          <br />- Remplir la facture. <br /> Vous y retrouverez les services
          définis pour la société et vous pourrez prévisualiser les informations
          de facturation.
        </Paragraph>
        <DocImage src={servicesFormImg} />
      </CustomCard>
    </>
  );
};

export const ErrorBoundary = ErrorHandler;

export default SheetsServices;
