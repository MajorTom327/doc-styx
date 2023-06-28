import type RouteEnum from "~/refs/enum/route";

export const getRoute = (
  route: RouteEnum,
  params?: Record<string, any>
): string => {
  let path: string = route;

  if (params) {
    Object.keys(params).forEach((key) => {
      path = path.replace(`:${key}`, params[key]);
    });
  }

  if (path.includes(":")) {
    const missingParams = path.match(/:[a-zA-Z]+/g);

    if (missingParams) {
      throw new Error(`Missing params: ${missingParams.join(", ")}`);
    }
  }
  return path;
};

export default getRoute;
