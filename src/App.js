import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/Pages/HomePage';
import { ErrorPage } from './components/Pages/ErrorPage';
import { Layout } from './components/UI/Layout';
import { CategoryPage } from './components/Pages/CategoryPage';
import { SearchPage } from './components/Pages/SearchPage';

function App() {
  return (
    <Router>
        <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/:category" element={<CategoryPage /> } />
              <Route path="*" element={<ErrorPage />}/>
            </Routes>
        </Layout>
    </Router>
  );
}

export default App;
