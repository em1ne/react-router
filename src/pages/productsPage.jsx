import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const ProductsPage = () => {
  const [bookState, setBookState] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3030/books').then((res) => {
      setBookState(res.data);
    });
  }, []);

  // eger apiden hala cevap gelmediyse loading yaz
  if (!bookState) return 'Yükleniyor...';

  return (
    <div>
      <h1>Ürünlerin Hepsi Burada Yer Alıyor</h1>
      <div className="cards-container">
        {/* dizideki herbir obje için ekrana productCard basılır */}
        {bookState.map((book) => (
          <ProductCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;