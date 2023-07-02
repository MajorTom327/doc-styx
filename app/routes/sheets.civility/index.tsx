import { Badge } from "react-daisyui";
import { FaChevronRight } from "react-icons/fa";
import RouteEnum from "~/refs/enum/route";

import { ButtonLink } from "~/components/ButtonLink";
import CustomCard, {
  CustomCardActions,
  CustomCardTitle,
} from "~/components/CustomCard";
import Bolder from "~/components/Documentation/Bolder";
import DocImage from "~/components/Documentation/DocImage";
import Paragraph from "~/components/Documentation/Paragraph";
import ErrorHandler from "~/components/ErrorHandler";

import civilityFormImg from "./civility-form.png";

export const SheetsCivility = () => {
  return (
    <>
      <CustomCard>
        <CustomCardTitle>
          Civilité d'une fiche
          <Badge>Défunt uniquement</Badge>
        </CustomCardTitle>

        <Paragraph>
          La définition de la civilité est une étape importante dans le cadre de
          fiche de défunt. Elle est divisée en plusieurs groupes. <br /> On y
          trouve la partie civilité pure, permetant de définir les informations
          basiques tels que : <br /> - le nom d'usage, <br /> - prénom, <br /> -
          nom par alliance, <br /> - le titre de civilité de la personne.
          <br />
          Ensuite, on y trouve deux autres groupes, celles avec les informations
          sur la naissance du défunt ainsi que celles de son décès. Cela permet
          notamment de remplir le certificat de crémation.
          <br />
          <Bolder>
            Cette partie n'est pas disponible lorsque la fiche est associée à un
            reliquaire.
          </Bolder>
        </Paragraph>

        <DocImage src={civilityFormImg} />
        <CustomCardActions>
          <div className="flex w-full justify-end">
            <ButtonLink color="primary" to={RouteEnum.sheetCremation}>
              Crémation
              <FaChevronRight className="ml-2" />
            </ButtonLink>
          </div>
        </CustomCardActions>
      </CustomCard>
    </>
  );
};

export const ErrorBoundary = ErrorHandler;

export default SheetsCivility;
