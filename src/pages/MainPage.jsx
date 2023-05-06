import { Link } from "react-router-dom";
const MainPage = () => {
    return (
    <div>
    <h1>Merhaba, sayfamıza hoşgeldiniz...</h1>
    <p>Dünya klasikleri ve diğer eserler hepsi bir arada</p>
    <h1> <Link to="/books">Kitaplar sayfamıza</Link> bir göz atın!</h1>
    </div>


    );
};
export default MainPage;

