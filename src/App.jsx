import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import API from './utils/httpService';
import { getHomeWidgets } from './utils/endpoints';
import './App.css'
import { useLocation } from 'react-router-dom';


function App() {
  const [widgets, setWidgets] = useState([]);
  const {pathname} = useLocation();
  const getHomeWidgetsFn = async () => {
    try {
      const response = await API.get(getHomeWidgets, {
        headers: {
          platform: "web",
          lang: pathname === '/ur' ? 'urdu' : 'eng',
        },
      });

      let res = response?.data;
      setWidgets(res);
    }
    catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getHomeWidgetsFn();
  }, [pathname])

  return (
    <>
      <Routes>
        <Route path='/' element={
          <Home widgets={widgets?.widgets} />
        } />
         <Route path='/ur' element={
          <Home widgets={widgets?.widgets} />
        } />
      </Routes>
    </>
  )
}

export default App
