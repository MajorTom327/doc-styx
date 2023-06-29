import type { V2_MetaFunction } from "@vercel/remix";

export const mergeMeta =
  (newMetas: any[]): V2_MetaFunction =>
  ({ matches }) => {
    const parentMeta = matches
      // @ts-ignore
      .flatMap((match) => match.meta ?? [])
      .map((meta) => {
        console.log(meta);
        return meta;
      })
      .filter((meta) => "title" in meta);

    return [...parentMeta, ...newMetas];
  };

export default mergeMeta;
