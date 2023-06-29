import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@vercel/remix";



import { CustomCardTitle } from "~/components/CustomCard";
import CustomCard from "~/components/CustomCard/CustomCard";
import DocImage from "~/components/Documentation/DocImage";
import ErrorHandler from "~/components/ErrorHandler";

import servicesFormImg from "./services-form.png";

type LoaderData = {};

export const loader: LoaderFunction = async () => {
  return json<LoaderData>({});
};

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

export const action: ActionFunction = async () => {
  return json({});
};

export const ErrorBoundary = ErrorHandler;

export default SheetsServices;
