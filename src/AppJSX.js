import logo from './logo.svg';
import './App.css';

function App() {

  const name = "mwcheon";
    const list = ['딸기', '우유', '바나나']

  return (
      <>
        <h1 className="test">Hello!</h1>
        <h2>{name}</h2>
          <ul>
              {
                  list.map((item)=> <li>{item}</li> )
              }
          </ul>
      </>
  );
}

export default App;
