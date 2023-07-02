import Bolder from "@doc/Bolder";
import DocImage from "@doc/DocImage";
import List, { ListItem } from "@doc/List";
import Paragraph from "@doc/Paragraph";
import Title from "@doc/Title";
import { Divider } from "react-daisyui";
import RouteEnum from "~/refs/enum/route";

import { CustomCardTitle } from "~/components/CustomCard";
import CustomCard from "~/components/CustomCard/CustomCard";
import ErrorHandler from "~/components/ErrorHandler";

import createSelectTypeImg from "./create-select-type.png";
import viewSheetImg from "./inspect-sheet.png";

export const Sheets = () => {
  return (
    <>
      <CustomCard>
        <CustomCardTitle>Les fiches</CustomCardTitle>
        <Paragraph indent>
          Les fiches sont la pierre angulaire de l'application Styx. Elles
          permettent de définir un <Bolder>défunt</Bolder> ou un{" "}
          <Bolder>commanditaire</Bolder>. Tout utilisateur au sein de la société
          est capable de créer une fiche qui sera ensuite associé à la{" "}
          <Bolder>société</Bolder> dont fait partie l'utilisateur.
        </Paragraph>

        <Title>Création d'une fiche</Title>
        <Paragraph indent>
          La création d'une fiche se fait en plusieurs étapes. <br />
          La première étape consiste à sélectionner le type de fiche afin de
          définir s'il s'agit d'un défunt ou d'un reliquaire. <br /> Cela permet
          de créer la fiche en brouillon et donne accès à la qualification de
          celle -ci à l'aide de formulaires.
        </Paragraph>

        <DocImage src={createSelectTypeImg} />

        <Paragraph indent>
          La deuxième étape consiste à remplir les formulaires de qualification.
          La fiche est définie en plusieurs étapes :
        </Paragraph>

        <div className="flex gap-2 justify-stretch">
          <div className="p-2 w-full">
            <Title>Défunt</Title>
            <List>
              <ListItem to={RouteEnum.sheetCivility}>Civilitée</ListItem>
              <ListItem to={RouteEnum.sheetCremation}>Crémation</ListItem>
              <ListItem to={RouteEnum.sheetServices}>Services</ListItem>
              <ListItem to={RouteEnum.sheetPayment}>Paiements</ListItem>
            </List>
          </div>
          <Divider horizontal />
          <div className="p-2 w-full">
            <Title>Reliquaire</Title>
            <List>
              <ListItem to={RouteEnum.sheetCremation}>Crémation</ListItem>
              <ListItem to={RouteEnum.sheetServices}>Services</ListItem>
              <ListItem to={RouteEnum.sheetPayment}>Paiements</ListItem>
            </List>
          </div>
        </div>

        <Paragraph indent>
          Les fiches permettent aussi de qualifier les documents associés à
          cette fiche ainsi que de les consulter. <br /> On y retrouve toutes
          les informations nécessaires à la génération d'une facture ainsi qu'à
          un certificat de crémation.
        </Paragraph>

        <DocImage src={viewSheetImg} />
      </CustomCard>
    </>
  );
};

export const ErrorBoundary = ErrorHandler;

export default Sheets;
