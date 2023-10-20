import './App.css'
import {useGetAllProductsQuery} from './store/serverResponse/fetchLocalJson'
import Header from "./components/Header/Header.jsx";

function App() {

  const {data, error} = useGetAllProductsQuery()

  console.log('DATA: ', data);
  console.log('error: ', error);

  return (
    <>
      <Header/>
      <h1>Hello React App!!!</h1>
      <p>Тут был Снежок</p>
    </>
  )
}

export default App
