import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@vercel/remix";

import { CustomCardTitle } from "~/components/CustomCard";
import CustomCard from "~/components/CustomCard/CustomCard";
import ErrorHandler from "~/components/ErrorHandler";

type LoaderData = {};

export const loader: LoaderFunction = async () => {
  return json<LoaderData>({});
};

export const GettingStarted = () => {
  return (
    <>
      <CustomCard>
        <CustomCardTitle>Démarrage rapide</CustomCardTitle>
      </CustomCard>
    </>
  );
};

export const action: ActionFunction = async () => {
  return json({});
};

export const ErrorBoundary = ErrorHandler;

export default GettingStarted;
