import {
  DocumentNode, QueryFunctionOptions, useQuery,
} from "@apollo/client";
import {
  Album, AlbumDocument, AlbumQueryVariables,
} from "graphql/types";

const useModelsQuery = <TData, TVariables>(
  doc: DocumentNode,
  variables?: TVariables
) => {

  const result = useQuery<TData, QueryFunctionOptions<TVariables>>(
    doc,
    variables
  );
  return result;

};

export const useAlbumQuery = (
  variables?: QueryFunctionOptions<AlbumQueryVariables>
) => useModelsQuery<
    {
      album: Album;
    },
    QueryFunctionOptions<AlbumQueryVariables>
  >(AlbumDocument, variables);
