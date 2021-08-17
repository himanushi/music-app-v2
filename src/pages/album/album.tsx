import {
  IonContent, IonPage,
} from "@ionic/react";
import { useAlbumQuery } from "hooks/use-models-query";
import Footer from "pages/app/footer";
import Header from "pages/app/header";
import { RouteComponentProps } from "react-router";
import "./album.scss";

interface Props extends RouteComponentProps<{ id: string }> {}

const Album: React.FC<Props> = ({ match }) => {

  const {
    data, loading,
  } = useAlbumQuery({
    fetchPolicy: "cache-first",
    variables: { id: match.params.id },
  });

  let content: JSX.Element = <></>;

  if (loading) {

    content = <>loading</>;

  } else if (data?.album) {

    content = <>{data?.album.name}</>;

  }

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>{content}</IonContent>
      <Footer />
    </IonPage>
  );

};
export default Album;
