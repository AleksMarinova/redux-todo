import './App.css';
import Header from './Header';
import Form from './Form';
import TodosContainer from './TodosContainer';

function App() {

  return (
    <div className="app">
     <Header />
     <Form />
     <TodosContainer/>
    </div>
  );
}

export default App;
