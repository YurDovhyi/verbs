import Header from './components/header/Header';
import TableVerbs from './components/table/TableVerbs';
import verbs from './data/verbs2.json';

function App() {
  return (
    <div className="App">
      <Header />
      <TableVerbs items={verbs} />
    </div>
  );
}

export default App;
