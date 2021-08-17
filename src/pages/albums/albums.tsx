import {
  IonButton, IonContent, IonPage,
} from "@ionic/react";
import { useAlbumsQuery } from "hooks/use-models-query";
import Footer from "pages/app/footer";
import Header from "pages/app/header";
import { RouteComponentProps } from "react-router";
import "./albums.scss";

interface Props extends RouteComponentProps<{}> {}

// eslint-disable-next-line max-lines-per-function
const Albums = ({ history }: Props) => {

  console.log({ history });

  const { loading } = useAlbumsQuery({
    fetchPolicy: "cache-first",
    skip: true,
    variables: {
      conditions: {},
      cursor: {
        limit: 50,
        offset: 0,
      },
    },
  });

  let content: JSX.Element = <></>;

  if (loading) {

    content = <>loading</>;

    // } else if (data?.albums) {

    //   content = <>{data?.albums.map((album) => album.name)}</>;

  }

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonButton
          onClick={(event) => {

            event.preventDefault();
            history.push("/albums/abm1788488178dd9");

          }}
        >
          ボタン
        </IonButton>
        {content}
      </IonContent>
      <Footer />
    </IonPage>
  );

};
export default Albums;
