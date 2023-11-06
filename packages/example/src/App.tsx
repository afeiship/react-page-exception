import TheComponent from '@jswork/react-page-exception/src';
import '@jswork/react-page-exception/src/style.scss';
import './App.css';


function App() {
  return (
    <>
      <TheComponent
        onClick={() => {
          console.log('click me');
        }}>
        Click me
      </TheComponent>
    </>
  );
}

export default App;
