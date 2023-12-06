import styles from './App.module.css';
import { ImgContainer, TextContainer } from './containers/exports';

function App() {
  return (
    <main className={styles.container}>
      <TextContainer />
      <ImgContainer />
    </main>
  );
}

export default App;
