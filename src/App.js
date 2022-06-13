import 'antd/dist/antd.css';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/home';
import Detail from './components/detail';
import NotFound from './components/404';
import SearchResult from './components/searchResult';

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
