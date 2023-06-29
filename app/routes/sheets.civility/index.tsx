import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@vercel/remix";
import { Badge } from "react-daisyui";



import CustomCard, { CustomCardTitle } from "~/components/CustomCard";
import DocImage from "~/components/Documentation/DocImage";
import ErrorHandler from "~/components/ErrorHandler";

import civilityFormImg from "./civility-form.png";

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

        <DocImage src={civilityFormImg} />
      </CustomCard>
    </>
  );
};

export const action: ActionFunction = async () => {
  return json({});
};

export const ErrorBoundary = ErrorHandler;

export default SheetsCivility;
