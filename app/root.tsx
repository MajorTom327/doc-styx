import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react";
import { AuthenticityTokenProvider, createAuthenticityToken } from "remix-utils";



import { ErrorHandler } from "~/components/ErrorHandler";



import Layout from "./components/Layout/Layout";
import baseStyle from "./index.css";
import { sessionStorage } from "./services.server/session";


export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: baseStyle },
];

export const meta: V2_MetaFunction = () => {
  return [{ title: "Documentation Styx" }];
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await sessionStorage.getSession(
    request.headers.get("cookie")
  );

  const csrf = createAuthenticityToken(session);

  const appUrl = process.env.APP_URL;

  return json(
    { csrf, appUrl },
    {
      headers: {
        "Set-Cookie": await sessionStorage.commitSession(session),
      },
    }
  );
};

export default function App() {
  const { csrf, appUrl } = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={appUrl} />
        <Meta />
        <Links />
      </head>
      <body>
        <AuthenticityTokenProvider token={csrf}>
          <Layout>
            <Outlet />
          </Layout>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </AuthenticityTokenProvider>
      </body>
    </html>
  );
}

export const ErrorBoundary = ErrorHandler;
