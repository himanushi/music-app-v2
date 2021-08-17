import {
  IonButton, IonContent, IonPage,
} from "@ionic/react";
import Footer from "pages/app/footer";
import Header from "pages/app/header";
import { RouteComponentProps } from "react-router";
import "./albums.scss";

interface Props extends RouteComponentProps<{}> {}

const Albums = ({ history }: Props) => <IonPage>
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
  </IonContent>
  <Footer />
</IonPage>;
export default Albums;
