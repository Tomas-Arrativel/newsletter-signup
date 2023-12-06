import styles from './App.module.css';
import { TextContainer } from './containers/exports';

function App() {
  return (
    <main className={styles.container}>
      <TextContainer />
    </main>
  );
}

export default App;
