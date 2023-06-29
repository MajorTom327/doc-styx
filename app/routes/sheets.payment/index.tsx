import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@vercel/remix";
import { Badge } from "react-daisyui";



import { CustomCardTitle } from "~/components/CustomCard";
import CustomCard from "~/components/CustomCard/CustomCard";
import DocImage from "~/components/Documentation/DocImage";
import ErrorHandler from "~/components/ErrorHandler";

import addPaymentFormImg from "./add-payment-form.png";
import paymentPageImg from "./payment-page.png";

type LoaderData = {};

export const loader: LoaderFunction = async () => {
  return json<LoaderData>({});
};

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

export const action: ActionFunction = async () => {
  return json({});
};

export const ErrorBoundary = ErrorHandler;

export default SheetsPayment;
