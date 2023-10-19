import './App.css'
import {useGetAllProductsQuery} from './store/serverResponse/fetchLocalJson'

function App() {

  const {data, error} = useGetAllProductsQuery()

  console.log('DATA: ', data);
  console.log('error: ', error);

  return (
    <>
      <h1>Hello React App!!!</h1>
      <p>Тут был Снежок</p>
    </>
  )
}

export default App
