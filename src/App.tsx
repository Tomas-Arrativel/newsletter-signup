import { useState } from 'react';
import styles from './App.module.css';
import {
  ImgContainer,
  SuccessContainer,
  TextContainer,
} from './containers/exports';

function App() {
  const [active, setActive] = useState<boolean>(false);
  const [data, setData] = useState();
  return (
    <main className={styles.container}>
      {active ? (
        <SuccessContainer setActive={setActive} data={data} />
      ) : (
        <>
          <TextContainer setActive={setActive} setData={setData} />
          <ImgContainer />
        </>
      )}
    </main>
  );
}

export default App;
