import 'antd/dist/antd.css';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import Detail from './pages/detail';
import NotFound from './pages/404';
import SearchResult from './pages/searchResult';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path='404' element={<NotFound />} />
          <Route path="search-result" element={<SearchResult/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
