// == Import
import './darkmode.scss';

import Header from '../Header';
import Form from '../Form';
import List from '../List';
import Footer from '../Footer';
import { useSelector } from 'react-redux';

// == Composant
function App() {
  const themeMode = useSelector((state) => state.themeMode);

  return (
    <div className="app" id={themeMode}>
      <Header />
      <Form />
      <List />
      <Footer />
    </div>
  );
}

// == Export
export default App;
