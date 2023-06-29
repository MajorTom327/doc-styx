import { Badge } from "react-daisyui";

import { CustomCardTitle } from "~/components/CustomCard";
import CustomCard from "~/components/CustomCard/CustomCard";
import DocImage from "~/components/Documentation/DocImage";
import ErrorHandler from "~/components/ErrorHandler";

import addPaymentFormImg from "./add-payment-form.png";
import paymentPageImg from "./payment-page.png";

export const SheetsPayment = () => {
  return (
    <>
      <CustomCard>
        <CustomCardTitle>
          Paiement d'une fiche
          <Badge>Si la fiche a des services associé</Badge>
        </CustomCardTitle>

        <DocImage src={paymentPageImg} />
        <DocImage src={addPaymentFormImg} />
      </CustomCard>
    </>
  );
};
export const ErrorBoundary = ErrorHandler;

export default SheetsPayment;
