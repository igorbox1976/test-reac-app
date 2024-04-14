import './App.css';

function App() {
  return (
    <div className='container'>
      {['Оди', 'Два', 'Три', 'Четыре'].map(b => 
        <div className='btn-container'>
          <button className='btn'><span>{b}</span></button>

        </div>
      )}
    </div>
  );
}

export default App;
