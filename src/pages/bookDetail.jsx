import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetail = () => {
  const [bookData, setBookData] = useState(null);

  // use params > anlık olarak urldeki parametreleri alır ve bir obje olarak döndürür
  const params = useParams();

  useEffect(() => {
    // urldeki parametreyle beraber api isteği yaptık
    // ve gelen cevabı state e aktardık
    axios
      .get(`http://localhost:3030/books/${params.bookId}`)
      .then((res) => setBookData(res.data));
  }, []);

  if (!bookData) return 'Yükleniyor....';

  return (
    <div className="detail-page">
      <div className="book-detail">
        <img src={bookData.image} />
        <div className="right">
          <h1>{bookData.title}</h1>
          <h2>Yazarı {bookData.author}</h2>
          <p>Yıl : {bookData.year}</p>
          <p>Açıklama: {bookData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;