import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@vercel/remix";
import RouteEnum from "~/refs/enum/route";

import { CustomCardTitle } from "~/components/CustomCard";
import CustomCard from "~/components/CustomCard/CustomCard";
import DocLink from "~/components/DocLink/DocLink";
import Bolder from "~/components/Documentation/Bolder";
import DocImage from "~/components/Documentation/DocImage";
import Paragraph from "~/components/Documentation/Paragraph";
import ErrorHandler from "~/components/ErrorHandler";

import generalInformationsImg from "./general-informations.png";

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
          Les sociétés sont des entités regroupant un ensemble d'utilisateurs,
          de fiches et de services. En tant que <Bolder>manager</Bolder>{" "}
          d'entreprise, vous pouvez definir les utilisateurs qui pourront
          acceder à votre société et ses données.
        </Paragraph>

        <Paragraph>
          En cliquant sur votre email, vous pouvez trouver l'option permetant
          d'acceder a la page de la societe afin de mettre a jour ses
          informations. Vous y trouverez notament, le Siret, le numero de
          téléphone, l'adresse, le nom de la société ainsi que le logo pour
          l'entreprise. Vous y trouverez aussi les options permettant de{" "}
          <DocLink to={RouteEnum.societyUsers}>gerer les utilisateurs</DocLink>,
          de{" "}
          <DocLink to={RouteEnum.societyDestinations}>
            définir les destinations
          </DocLink>{" "}
          ou encore de{" "}
          <DocLink to={RouteEnum.societySubscription}>
            gerer votre abonnement
          </DocLink>
        </Paragraph>
        <DocImage src={generalInformationsImg} />
      </CustomCard>
    </>
  );
};

export const action: ActionFunction = async () => {
  return json({});
};

export const ErrorBoundary = ErrorHandler;

export default Society;
