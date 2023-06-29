import { CustomCardTitle } from "~/components/CustomCard";
import CustomCard from "~/components/CustomCard/CustomCard";
import DocImage from "~/components/Documentation/DocImage";
import ErrorHandler from "~/components/ErrorHandler";

import servicesFormImg from "./services-form.png";

export const SheetsServices = () => {
  return (
    <>
      <CustomCard>
        <CustomCardTitle>Services associés à une fiche</CustomCardTitle>
        <DocImage src={servicesFormImg} />
      </CustomCard>
    </>
  );
};

export const ErrorBoundary = ErrorHandler;

export default SheetsServices;
