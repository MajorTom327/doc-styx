import logo from "@assets/logo.png";
import Paragraph from "@doc/Paragraph";
import type { V2_MetaFunction } from "@vercel/remix";
import RouteEnum from "~/refs/enum/route";

import mergeMeta from "~/lib/mergeMeta";

import { ButtonLink } from "~/components/ButtonLink";
import { CustomCardActions, CustomCardTitle } from "~/components/CustomCard";
import CustomCard from "~/components/CustomCard/CustomCard";
import DocImage from "~/components/Documentation/DocImage";
import Image from "~/components/Image";

import dashboardImg from "./dashboard.png";

export const meta: V2_MetaFunction = mergeMeta([
  {
    property: "og:title",
    content: "Documentation de l'application Styx",
  },
  {
    property: "og:description",
    content:
      "Documentation de l'application Styx, outil de gestion pour crématorium",
  },
  {
    property: "og:image",
    content: dashboardImg,
  },
  {
    name: "description",
    content:
      "Documentation de l'application Styx, outil de gestion pour crématorium",
  },
]);

export default function Index() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <Image src={logo} className="w-48" />
      </div>
      <CustomCard>
        <CustomCardTitle>
          <h1 className="text-2xl font-primary">
            Bienvenue sur la documentation de l'application Styx.
          </h1>
        </CustomCardTitle>
        <Paragraph>
          Cette documentation a pour but de vous aider à comprendre comment
          utiliser l'application Styx de la manière la plus efficace possible.
          Elle est notamment utile lors de la prise en main de l'application, ou
          pour comprendre comment utiliser certaines fonctionnalités.
        </Paragraph>
        <DocImage src={dashboardImg} alt="Affichage du tableau de bord" />
        <Paragraph>
          Cette documentation est divisée en plusieurs parties. Chacune d'entre
          elles correspond à une fonctionnalité de l'application.
        </Paragraph>
        <CustomCardActions>
          <ButtonLink to={RouteEnum.gettingStarted} color="primary">
            Commencer
          </ButtonLink>
        </CustomCardActions>
      </CustomCard>
    </div>
  );
}
