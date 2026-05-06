import { AppRoutes } from "./AppRoutes";
import styles from "./App.module.scss";
import { Footer } from "../widgets/Footer/Footer";
import { Header } from "../widgets/Header/Header";

export const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};
