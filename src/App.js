//import logo from './logo.svg';
//import './App.css';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/Routes/Routes';

function App() {
  return (
    <div className=''>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
