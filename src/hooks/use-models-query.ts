import {
  DocumentNode, QueryFunctionOptions, useQuery,
} from "@apollo/client";
import {
  Album,
  AlbumDocument,
  AlbumQueryVariables,
  AlbumsDocument,
  AlbumsQueryVariables,
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

export const useAlbumsQuery = (
  variables?: QueryFunctionOptions<AlbumsQueryVariables>
) => useModelsQuery<
    {
      albums: Album[];
    },
    QueryFunctionOptions<AlbumsQueryVariables>
  >(AlbumsDocument, variables);
