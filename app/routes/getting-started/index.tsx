import { FaChevronRight } from "react-icons/fa";
import RouteEnum from "~/refs/enum/route";

import { ButtonLink } from "~/components/ButtonLink";
import { CustomCardActions, CustomCardTitle } from "~/components/CustomCard";
import CustomCard from "~/components/CustomCard/CustomCard";
import DocImage from "~/components/Documentation/DocImage";
import Paragraph from "~/components/Documentation/Paragraph";
import ErrorHandler from "~/components/ErrorHandler";

import societyImg from "../society._index/general-informations.png";
import usersImg from "../society.users/users.png";
import statisticsImg from "../statistics._index/statistics-page.png";

export const GettingStarted = () => {
  return (
    <>
      <CustomCard>
        <CustomCardTitle>1 - Configurer sa société</CustomCardTitle>

        <Paragraph>
          Pour démarrer rapidement, vous devez acceder a votre compte afin de
          remplir les informations de base de la societe ainsi que de charger le
          logo de la société.
        </Paragraph>
        <DocImage src={societyImg} alt="Page de la société" />

        <CustomCardActions>
          <div className="w-full flex justify-end">
            <ButtonLink color="primary" to={RouteEnum.society}>
              Gerer les informations de la société
              <FaChevronRight className="ml-2" />
            </ButtonLink>
          </div>
        </CustomCardActions>
      </CustomCard>

      <CustomCard>
        <CustomCardTitle>2 - Ajout d'utilisateurs</CustomCardTitle>
        <Paragraph>
          Pour ajouter des utilisateurs, vous devez le faire dans votre page de
          gestion des utilisateurs dans les préférences de la société
        </Paragraph>

        <DocImage
          src={usersImg}
          alt="Page de la gestion des utilisateurs de la societe"
        />

        <CustomCardActions>
          <div className="w-full flex justify-end">
            <ButtonLink color="primary" to={RouteEnum.societyUsers}>
              Gerer les utilisateurs
              <FaChevronRight className="ml-2" />
            </ButtonLink>
          </div>
        </CustomCardActions>
      </CustomCard>

      <CustomCard>
        <CustomCardTitle>3 - Création de fiche</CustomCardTitle>
        <Paragraph>
          Une fois ces information remplie, vous pouvez commencer à créer des
          fiches et les associer aux utilisateurs.
        </Paragraph>
        <CustomCardActions>
          <div className="w-full flex justify-end">
            <ButtonLink color="primary" to={RouteEnum.sheets}>
              Créer une fiche
              <FaChevronRight className="ml-2" />
            </ButtonLink>
          </div>
        </CustomCardActions>
      </CustomCard>

      <CustomCard>
        <CustomCardTitle>4 - Statistiques</CustomCardTitle>
        <Paragraph>
          Une fois que l'on a realiser des fiches dans la societe, la page des
          statistiques permet une visualisation de l'activité de la societe a
          travers ses fiches sur une période donnée avec des critères
          spécifiques.
        </Paragraph>

        <DocImage
          src={statisticsImg}
          alt="Page des statistiques de la societe"
        />

        <CustomCardActions>
          <div className="w-full flex justify-end">
            <ButtonLink color="primary" to={RouteEnum.statistics}>
              Page des statistiques
              <FaChevronRight className="ml-2" />
            </ButtonLink>
          </div>
        </CustomCardActions>
      </CustomCard>
    </>
  );
};

export const ErrorBoundary = ErrorHandler;

export default GettingStarted;
