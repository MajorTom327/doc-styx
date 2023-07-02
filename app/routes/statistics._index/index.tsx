import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@vercel/remix";

import { CustomCardTitle } from "~/components/CustomCard";
import CustomCard from "~/components/CustomCard/CustomCard";
import DocImage from "~/components/Documentation/DocImage";
import Paragraph from "~/components/Documentation/Paragraph";
import ErrorHandler from "~/components/ErrorHandler";

import statisticsImg from "./statistics-page.png";

type LoaderData = {};

export const loader: LoaderFunction = async () => {
  return json<LoaderData>({});
};

export const StatisticsIndex = () => {
  return (
    <>
      <CustomCard>
        <CustomCardTitle>Statistiques</CustomCardTitle>
        <Paragraph>
          La page des statistiques permet de comprendre l'activité de la société
          et des utilisateurs en visualisant les fiches en fonction de multiples
          critères. Actuellement, la page est en cours de développement.
        </Paragraph>
        <DocImage
          src={statisticsImg}
          alt="Page des statistiques de la societe"
        />
      </CustomCard>
    </>
  );
};

export const action: ActionFunction = async () => {
  return json({});
};

export const ErrorBoundary = ErrorHandler;

export default StatisticsIndex;
