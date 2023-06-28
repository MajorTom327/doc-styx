import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@vercel/remix";
import { Badge } from "react-daisyui";

import CustomCard, { CustomCardTitle } from "~/components/CustomCard";
import ErrorHandler from "~/components/ErrorHandler";

type LoaderData = {};

export const loader: LoaderFunction = async () => {
  return json<LoaderData>({});
};

export const SheetsCivility = () => {
  return (
    <>
      <CustomCard>
        <CustomCardTitle>
          Civilitée d'une fiche
          <Badge>Défunt uniquement</Badge>
        </CustomCardTitle>
      </CustomCard>
    </>
  );
};

export const action: ActionFunction = async () => {
  return json({});
};

export const ErrorBoundary = ErrorHandler;

export default SheetsCivility;
