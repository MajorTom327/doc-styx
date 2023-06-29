import { Links, Meta } from "@remix-run/react";
import type { ErrorResponse } from "@remix-run/router";
import React from "react";
import { Card } from "react-daisyui";
import RouteEnum from "~/refs/enum/route";

import { ButtonLink } from "../ButtonLink";
import { CustomCardActions, CustomCardTitle } from "../CustomCard";
import CustomCard from "../CustomCard/CustomCard";
import errorImage from "./error.jpeg";

type Props = {
  error: ErrorResponse;
};

export const RouteErrorHandler: React.FC<Props> = ({ error }) => {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          <div className="flex justify-center items-center w-scree h-screen">
            <CustomCard
              className="-mt-32"
              imgSrc={errorImage}
              imgAlt="Obi-Wan Kenobi saying 'I feel a disturbance in the force'"
            >
              <CustomCardTitle className="text-2xl">
                J'ai ressenti un grand bouleversement de la Force
              </CustomCardTitle>

              <h1 className="text-4xl">{error.status}</h1>
              <h2 className="text-2xl">{error.statusText}</h2>
              <CustomCardActions>
                <ButtonLink color="ghost" to={RouteEnum.home}>
                  Retourner a l'accueil
                </ButtonLink>
              </CustomCardActions>
            </CustomCard>
          </div>
        </body>
      </html>
    </>
  );
};

RouteErrorHandler.defaultProps = {};

export default RouteErrorHandler;
