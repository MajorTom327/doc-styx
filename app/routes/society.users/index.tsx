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
          Les utilisateurs de la société sont les membres de celle ci. Ceux-ci
          detiennent un compte. Vous pouvez ici les gérer directement en
          ajoutant des comptes ou en les désactivant/supprimant.
        </Paragraph>
        <DocImage
          src={usersImg}
          alt="Page affichant la liste des utilisateurs présents dans la société"
        />

        <Paragraph>
          Les utilisateurs définis sur cette page sont ceux à qui l'on pourra
          attribuer des fiches (Les définir comme en charge de la fiche){" "}
          <Bolder>si l'utilisateur n'est pas désactivé.</Bolder>
          Pour savoir si un utilisateur est actif, il suffit de regarder la
          petite pastille verte (si actif) ou rouge (si désactivé). <br /> Vous
          ne pouvez pas désactiver ou supprimer votre propre compte.
        </Paragraph>

        <Title>Invitation d'un nouvel utilisateur</Title>

        <Paragraph>
          L'invitation d'un nouvel utilisateur au sein de la société se fait à
          travers un formulaire simple, demandant certaines informations pour
          configurer le nouveau compte. Il s'agit notamment de la civilité de la
          personne ainsi que de son adresse e-mail associée. Une fois validées,
          l'utilisateur recevra un email pour accepter l'invitation au sein de
          votre société.
        </Paragraph>
        <DocImage
          src={addUserFormImg}
          alt="Formulaire d'invitation d'un utilisateur dans la société"
        />

        <Paragraph>
          <br />
          <Bolder>Si l'utilisateur n'a pas de compte :</Bolder>
          <br />
          Celui ci pourra tout de même valider l'invitation, mais il devra
          utiliser l'option pour réinitialiser son mot de passe afin de pouvoir
          se connecter.
        </Paragraph>
      </CustomCard>
    </>
  );
};

export const ErrorBoundary = ErrorHandler;

export default SocietyUsers;
