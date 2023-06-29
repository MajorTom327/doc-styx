import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@vercel/remix";
import RouteEnum from "~/refs/enum/route";

import { CustomCardTitle } from "~/components/CustomCard";
import CustomCard from "~/components/CustomCard/CustomCard";
import DocLink from "~/components/DocLink";
import DocImage from "~/components/Documentation/DocImage";
import Paragraph from "~/components/Documentation/Paragraph";
import ErrorHandler from "~/components/ErrorHandler";

import destinationsPageImg from "./destinations-page.png";

type LoaderData = {};

export const loader: LoaderFunction = async () => {
  return json<LoaderData>({});
};

export const SocietyDestinations = () => {
  return (
    <>
      <CustomCard>
        <CustomCardTitle>Destinations</CustomCardTitle>

        <Paragraph>
          L'option de destination permet de definir une liste d'options
          disponnible sur les fiches dans la rubrique{" "}
          <DocLink to={RouteEnum.sheetCremation}>crémation</DocLink> pour la
          destination des cendres. Vous pouvez rajouter ici facilement des
          elements en tant que destination ou les supprimer.
        </Paragraph>

        <DocImage
          src={destinationsPageImg}
          alt="Affichage de la liste des destinations actuellement disponnible dans l'application"
        />
      </CustomCard>
    </>
  );
};

export const action: ActionFunction = async () => {
  return json({});
};

export const ErrorBoundary = ErrorHandler;

export default SocietyDestinations;
