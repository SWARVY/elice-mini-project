import Providers from './Providers.tsx';
import { SearchCoursesPage } from './pages/search-courses';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="font-Pretendard flex justify-center">
      <Providers>
        <Routes>
          <Route path="/:page?" element={<SearchCoursesPage />} />
        </Routes>
      </Providers>
    </div>
  );
}

export default App;
