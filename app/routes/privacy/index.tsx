import type { V2_MetaFunction } from "@remix-run/node";

import mergeMeta from "~/lib/mergeMeta";

import { CustomCardTitle } from "~/components/CustomCard";
import CustomCard from "~/components/CustomCard/CustomCard";
import List, { ListItem } from "~/components/Documentation/List";
import Paragraph from "~/components/Documentation/Paragraph";
import Title from "~/components/Documentation/Title";
import ErrorHandler from "~/components/ErrorHandler";

export const meta: V2_MetaFunction = mergeMeta([
  {
    property: "og:title",
    content: "Vie privée et transparence",
  },
  {
    name: "og:description",
    content: "Resumé de la vie privée et de la transparence de l'application.",
  },
  {
    name: "description",
    content: "Resumé de la vie privée et de la transparence de l'application.",
  },
]);

export const Privacy = () => {
  return (
    <>
      <CustomCard>
        <CustomCardTitle>Vie privée et transparence</CustomCardTitle>
        <Paragraph>
          Les données que vous entrez dans l'application sont stockées dans des
          services européens, conformément au Règlement Général sur la
          Protection des Données. <br /> L'application est hébergée sur Vercel
          qui est conforme au RGPD, notamment sur un datacenter situé en Europe.
          Aucune donnée n'est partagée avec des tiers.
        </Paragraph>

        <Title className="text-center">
          Vous restez propriétaire de vos données.
        </Title>
        <Title className="text-xl underline">Services:</Title>

        <List>
          <ListItem>Analytique : Aucun</ListItem>
          <ListItem>Base de données : Scaleway</ListItem>
          <ListItem>Stockage des images : Scaleway</ListItem>
          <ListItem>E-mails : Scaleway</ListItem>
          <ListItem>Système de paiement : Revolut</ListItem>
          <ListItem>Hébergement : Vercel</ListItem>
        </List>

        <Paragraph className="my-4">
          En cas de demande particulière sur les données, n'hesitez pas à me
          contacter :
        </Paragraph>
        <div className="flex justify-center w-full my-4">
          <a
            href="mailto:data@styx-sys.com"
            className="btn btn-primary normal-case w-1/2"
          >
            data@styx-sys.com
          </a>
        </div>
      </CustomCard>
    </>
  );
};

export const ErrorBoundary = ErrorHandler;

export default Privacy;
