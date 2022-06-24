// == Import
import './styles.css';

import Header from '../Header';
import Form from '../Form';
import List from '../List';
import Footer from '../Footer';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Form />
      <List />
      <Footer />
    </div>
  );
}

// == Export
export default App;
