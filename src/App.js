import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/productsPage";
import BookDetail from "./pages/bookDetail";
import UndefinedPage from "./pages/undefinedPage";
import Layout from "./deneme/dizayn";
import Mercedes from "./deneme/mercedes";
import AnaSayfa from "./deneme/anasayfa";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/books" element={<ProductsPage />} />
        {/* dinamik route */}
        <Route path="/books/:bookId" element={<BookDetail />} />
        {/* nested > iç içe route bölümleri */}
        <Route path="/arabalar" element={<Layout />}>
          <Route index={true} element={<AnaSayfa />} />
          <Route path="mercedes" element={<Mercedes />} />
        </Route>
        {/* tanımlanmayan route */}
        <Route path="*" element={<UndefinedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
