import { CustomCardTitle } from "~/components/CustomCard";
import CustomCard from "~/components/CustomCard/CustomCard";
import ErrorHandler from "~/components/ErrorHandler";

export const GettingStarted = () => {
  return (
    <>
      <CustomCard>
        <CustomCardTitle>Démarrage rapide</CustomCardTitle>
      </CustomCard>
    </>
  );
};

export const ErrorBoundary = ErrorHandler;

export default GettingStarted;
