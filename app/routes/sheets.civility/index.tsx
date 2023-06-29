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
          Civilitée d'une fiche
          <Badge>Défunt uniquement</Badge>
        </CustomCardTitle>

        <Paragraph>
          La définition de la civilitée est une etape importante dans le cadre
          de fiche de defunt. Elle est divisée en plusieurs groupe. On y trouve
          la partie civilite pure permetant de definir les informations basique
          tel que le nom, le prenom, le nom par alliance ainsi que la civilitée
          de la personne.
          <br />
          Suivi par deux groupes avec les informations sur la naissance du
          défunt ainsi que son décès. Cela permet nottament de remplir le
          certificat de crémation.
          <br />
          <Bolder>
            Cette partie n'est pas disponible lors-ce que la fiche est associée
            a un reliquaire.
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
