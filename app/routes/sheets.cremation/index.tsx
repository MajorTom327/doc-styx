import RouteEnum from "~/refs/enum/route";

import { CustomCardTitle } from "~/components/CustomCard";
import CustomCard from "~/components/CustomCard/CustomCard";
import DocLink from "~/components/DocLink/DocLink";
import DocImage from "~/components/Documentation/DocImage";
import Paragraph from "~/components/Documentation/Paragraph";
import ErrorHandler from "~/components/ErrorHandler";

import addCommanditaireImg from "./add-commanditaire.png";
import cremationFormImg from "./cremation-form.png";

export const SheetsCremation = () => {
  return (
    <>
      <CustomCard>
        <CustomCardTitle>Crémation d'une fiche</CustomCardTitle>

        <Paragraph>
          La qualification de la crémation contient d'autre champs plus
          technique. On y retrouve la personne en charge de la fiche. Cette
          personne est selectionnable dans la liste des{" "}
          <DocLink to={RouteEnum.societyUsers}>
            utilisateurs de la société
          </DocLink>
        </Paragraph>

        <DocImage src={cremationFormImg} />

        <Paragraph>
          Le commanditaire est un champs plus complexe, il permet d'associer a
          un client la fiche. On peut en creer un a la vollée ou en selectionner
          un existant dans la liste.
        </Paragraph>
        <DocImage src={addCommanditaireImg} />

        <Paragraph>
          On peut enfin retrouver la destination des cendres qui est un champs
          selectionnable depuis la liste definie dans les{" "}
          <DocLink to={RouteEnum.societyDestinations}>
            parametres de la societe
          </DocLink>
        </Paragraph>
        <Paragraph>
          Enfin les informations complementaires sur l'autorisation de la
          crémation contiennent le numero d'ordre, les informations sur
          l'autorisation ainsi que le numero de l'acte de décès.
          <br />
          La qualification des informations sur la crémation, elle contient la
          date et les heures de la crémation.
        </Paragraph>
      </CustomCard>
    </>
  );
};

export const ErrorBoundary = ErrorHandler;

export default SheetsCremation;
