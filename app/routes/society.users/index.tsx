import { CustomCardTitle } from "~/components/CustomCard";
import CustomCard from "~/components/CustomCard/CustomCard";
import Bolder from "~/components/Documentation/Bolder";
import DocImage from "~/components/Documentation/DocImage";
import Paragraph from "~/components/Documentation/Paragraph";
import Title from "~/components/Documentation/Title";
import ErrorHandler from "~/components/ErrorHandler";

import addUserFormImg from "./add-user-form.png";
import usersImg from "./users.png";

export const SocietyUsers = () => {
  return (
    <>
      <CustomCard>
        <CustomCardTitle>Utilisateurs de la société</CustomCardTitle>
        <Paragraph>
          Les utilisateurs de la societe sont les membres de celle ci, ceux-ci
          detiennent un compte. Vous pouvez ici les gerer directement en
          ajoutant des comptes ou en les desactivant/supprimant.
        </Paragraph>
        <DocImage
          src={usersImg}
          alt="Page affichant la liste des utilisateur present dans la société"
        />

        <Paragraph>
          Les utilisateurs défini sur cette page sont ceux a qui l'on pourra
          attribuer des fiches (Les definir comme en charge de la fiche){" "}
          <Bolder>si l'utilisateur n'est pas désactivé.</Bolder>
          Pour savoir si un utilisateur est actif il suffit de regarder la petit
          pastille verte (Si actif) ou rouge (Si désactivé). Vous ne pouvez pas
          desactiver ou supprimer votre propre compte.
        </Paragraph>

        <Title>Invitation d'un nouvel utilisateur</Title>

        <Paragraph>
          L'invitation d'un nouvel utilisateur au sein de la societe se fait a
          travers un formulaire simple demandant certaines informations pour
          configurer le nouveau compte. Il s'agit notamment de la civilite de la
          personne ainsi que de son addresse mail associée. Une fois valider,
          l'utilisateur recevra un email pour accepter l'invitation au sein de
          votre societe.
        </Paragraph>
        <DocImage
          src={addUserFormImg}
          alt="Formulaire d'invitation d'un utilisateur dans la societe"
        />

        <Paragraph>
          <br />
          <Bolder>Si l'utilisateur n'a pas de compte:</Bolder>
          <br />
          Celui ci pourra tout de meme valider l'invitation mais il devra
          utilise l'option pour reinitialiser son mot de passe afin de pouvoir
          se connecter.
        </Paragraph>
      </CustomCard>
    </>
  );
};

export const ErrorBoundary = ErrorHandler;

export default SocietyUsers;
