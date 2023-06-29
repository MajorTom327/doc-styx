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
          permettent de definir un <Bolder>défunt</Bolder> ou un{" "}
          <Bolder>commanditaire</Bolder>. Tout utilisateur au sein de la societe
          est capable de creer une fiche et elles sont associe a la{" "}
          <Bolder>société</Bolder> dont fait parti l'utilisateur.
        </Paragraph>

        <Title>Création d'une fiche</Title>
        <Paragraph indent>
          La création d'une fiche se fait en plusieurs étapes. La première étape
          consiste à selectionner le type de fiche afin de définir si il s'agit
          d'un défunt ou d'un reliquaire. Cela permet de créer la fiche en
          brouillon et donne acces a la qualification de celle ci a l'aide de
          formulaires.
        </Paragraph>

        <DocImage src={createSelectTypeImg} />

        <Paragraph indent>
          La deuxieme étape consiste a remplir les formulaires de qualification.
          La fiche est definie en plusieurs étapes:
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
          Les fiches permettent aussi de qualitifer les documents associe a
          cette fiche ainsi que de les consulter. On y retrouve toutes les
          informations necessaire à la génération d'une facture ainsi qu'à un
          certificat de crémation.
        </Paragraph>

        <DocImage src={viewSheetImg} />
      </CustomCard>
    </>
  );
};

export const ErrorBoundary = ErrorHandler;

export default Sheets;
