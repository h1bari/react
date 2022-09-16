import './App.css';
import Header from './components/Header'

const test = 'Vasya'
const users = [
    {
        name: 'Vasya',
        age: 10 ,
        gender: true,
    },
    {
        name: 'Petya',
        age: 30 ,
        gender: true,
    },
    {
        name: 'Masha',
        age: 15 ,
        gender: false,
    },
]
function App() {
    const getName = (e) => {
        console.log(e)
        e.target.style.color = '#000'
    }
  return (
    <div className="App">
        <Header title='Header'/>
        <ul>
            {users.map((elem,key) =>
                 <li onClick={(e) => getName(e)} key={key} className={elem.gender ? 'name-boy': 'name-girl'}>{elem.name} - {elem.age}</li>

            )}
        </ul>
    </div>
  );
}

export default App;
