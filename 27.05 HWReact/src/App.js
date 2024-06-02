import './App.css';
import Component from './Component';
import Monitory from './images/monitory.png';
import Noutbuki from './images/noutbuki.png';
import PCs from './images/kompyutery.png';
import Gaming from './images/gaming.png';
import Planshety from './images/planshety.png';
import Kabeli from './images/kabeli-i-perekhodniki.png';
import Complect from './images/kompyuternye-komplektuyushchie.png';
import Network from './images/setevoe-oborudovanie.png';
import Naushniki from './images/naushniki-i-aksessuary.png';
import Keyboards from './images/klaviatury-i-myshi.png';
import Electronics from './images/aksessuari-dlia-elektronyky.png';
import Office from './images/ofisnaya-tekhnika.png';

function App() {

  const items = [
    { title: "Ноутбуки", image: Noutbuki },
    { title: "Комп'ютери, неттопи, моноблоки", image: PCs },
    { title: "Монітори", image: Monitory },
    { title: "Gaming", image: Gaming },
    { title: "Планшети", image: Planshety },
    { title: "Кабелі та перехідники", image: Kabeli },
    { title: "Комп'ютерні комплектуючі", image: Complect},
    { title: "Мережеве обладнання", image: Network},
    { title: "Навушники та аксесуари", image: Naushniki },
    { title: "Клавіатури та миші", image: Keyboards},
    { title : "Офісна техніка", image : Office},
    { title : "Аксесуари для електроніки", image : Electronics}
  ];

  return (
    <div className="App">
      {items.map((item) => (
        <Component image={item.image} title={item.title} list = {item.list} />
      ))}
    </div>
  );
}

export default App;
