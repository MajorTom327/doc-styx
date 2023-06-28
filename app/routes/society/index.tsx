import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@vercel/remix";

import { CustomCardTitle } from "~/components/CustomCard";
import CustomCard from "~/components/CustomCard/CustomCard";
import Bolder from "~/components/Documentation/Bolder";
import Paragraph from "~/components/Documentation/Paragraph";
import ErrorHandler from "~/components/ErrorHandler";

type LoaderData = {};

export const loader: LoaderFunction = async () => {
  return json<LoaderData>({});
};

export const Society = () => {
  return (
    <>
      <CustomCard>
        <CustomCardTitle>Société</CustomCardTitle>
        <Paragraph>
          Les societe sont des entité regroupant un ensemble d'utilisateurs, de
          fiches et de services. En tant que <Bolder>manager</Bolder>{" "}
          d'entreprise, vous pouvez definir les utilisateurs qui pourront
          acceder à votre société et ses données.
        </Paragraph>
      </CustomCard>
    </>
  );
};

export const action: ActionFunction = async () => {
  return json({});
};

export const ErrorBoundary = ErrorHandler;

export default Society;
