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
          La page des services d'une fiche permet d'appliquer des services a une
          fiche afin de completer les informations de celle-ci ainsi de remplir
          la facture. Vous y retrouvez les services defini pour la societe et
          vous pourrez pre-visualiser les informations de facturation.
        </Paragraph>
        <DocImage src={servicesFormImg} />
      </CustomCard>
    </>
  );
};

export const ErrorBoundary = ErrorHandler;

export default SheetsServices;
