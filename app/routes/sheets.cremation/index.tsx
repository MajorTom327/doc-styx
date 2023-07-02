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
          La qualification de la crémation contient d'autres champs plus
          techniques. On y retrouve la personne en charge de la fiche. Il est
          possible de sélectionner la personne dans la liste des{" "}
          <DocLink to={RouteEnum.societyUsers}>
            utilisateurs de la société
          </DocLink>
        </Paragraph>

        <DocImage src={cremationFormImg} />

        <Paragraph>
          Le commanditaire est un champ plus complexe. Il permet d'associer la
          fiche à un client. On peut en créer un à la volée ou en sélectionner
          un existant dans la liste.
        </Paragraph>
        <DocImage src={addCommanditaireImg} />

        <Paragraph>
          On peut retrouver la destination des cendres qui est un champ que l'on
          peut sélectionner depuis la liste definie dans les{" "}
          <DocLink to={RouteEnum.societyDestinations}>
            paramètres de la société
          </DocLink>
        </Paragraph>
        <Paragraph>
          Enfin, les informations complémentaires sur l'autorisation de la
          crémation contiennent : <br /> - le numéro d'ordre, <br /> - les
          informations sur l'autorisation, <br /> - le numéro de l'acte de
          décès.
          <br />
          La qualification des informations sur la crémation contient la date et
          les heures de la crémation.
        </Paragraph>
      </CustomCard>
    </>
  );
};

export const ErrorBoundary = ErrorHandler;

export default SheetsCremation;
