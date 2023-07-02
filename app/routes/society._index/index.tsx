import RouteEnum from "~/refs/enum/route";

import { CustomCardTitle } from "~/components/CustomCard";
import CustomCard from "~/components/CustomCard/CustomCard";
import DocLink from "~/components/DocLink/DocLink";
import Bolder from "~/components/Documentation/Bolder";
import DocImage from "~/components/Documentation/DocImage";
import Paragraph from "~/components/Documentation/Paragraph";
import ErrorHandler from "~/components/ErrorHandler";

import generalInformationsImg from "./general-informations.png";

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
          En cliquant sur votre e-mail, vous pouvez trouver l'option permettant
          d'accéder a la page de la société afin de mettre à jour ses
          informations. <br /> Vous y trouverez notamemnt : <br />
          - le Siret, <br />
          - le numéro de téléphone, <br />
          - l'adresse, <br />
          - le nom de la société, <br /> - le logo pour l'entreprise.
          <br /> Vous y trouverez aussi les options permettant de{" "}
          <DocLink to={RouteEnum.societyUsers}>gérer les utilisateurs</DocLink>,
          de{" "}
          <DocLink to={RouteEnum.societyDestinations}>
            définir les destinations
          </DocLink>{" "}
          ou encore de{" "}
          <DocLink to={RouteEnum.societySubscription}>
            gérer votre abonnement
          </DocLink>
        </Paragraph>
        <DocImage src={generalInformationsImg} />
      </CustomCard>
    </>
  );
};

export const ErrorBoundary = ErrorHandler;

export default Society;
