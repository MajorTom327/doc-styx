import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@vercel/remix";

import { CustomCardTitle } from "~/components/CustomCard";
import CustomCard from "~/components/CustomCard/CustomCard";
import List, { ListItem } from "~/components/Documentation/List";
import Paragraph from "~/components/Documentation/Paragraph";
import Title from "~/components/Documentation/Title";
import ErrorHandler from "~/components/ErrorHandler";

type LoaderData = {};

export const loader: LoaderFunction = async () => {
  return json<LoaderData>({});
};

export const Privacy = () => {
  return (
    <>
      <CustomCard>
        <CustomCardTitle>Vie privée et transparence</CustomCardTitle>
        <Paragraph>
          Les données que vous entrez dans l'application sont stockées dans des
          services Européen conformement au RGPD. L'application est hébergée sur
          Vercel, qui est conforme au RGPD. Notament sur un Datacenter situé en
          Europe. Aucune donnée n'est partagée avec des tiers.
        </Paragraph>

        <Title className="text-center">
          Vous restez propriétaire de vos données.
        </Title>
        <Title className="text-xl underline">Services:</Title>

        <List>
          <ListItem>Analitique: Aucun</ListItem>
          <ListItem>Base de donnée: Scaleway</ListItem>
          <ListItem>Stockage des images: Scaleway</ListItem>
          <ListItem>Emails: Scaleway</ListItem>
          <ListItem>Systême de paiement: Revolut</ListItem>
          <ListItem>Hébergement: Vercel</ListItem>
        </List>

        <Paragraph className="my-4">
          En cas de demande particuliere sur les donnees n'hesitez pas a me
          contacter:
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

export const action: ActionFunction = async () => {
  return json({});
};

export const ErrorBoundary = ErrorHandler;

export default Privacy;
