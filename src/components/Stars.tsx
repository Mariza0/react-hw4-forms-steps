import React, { useState } from 'react';
import Star from './Star';
import { HeartSwitch } from './HeartSwitch';

interface StarsProps {
  count: number; // Указываем тип number для параметра count
}

// Компонент для отображения рейтинга звездами
const Stars:React.FC<StarsProps> = ({ count }) => {

    const [view, setView] = useState('favorite_border');

    // Проверяем, что count находится в диапазоне от 1 до 5
    if (count < 1 || count > 5 || isNaN(count)) {
      return null; // Если не в диапазоне, возвращаем null (ничего не отображаем)
    }
  
    // Создаем массив из count элементов, чтобы отобразить соответствующее количество звезд
    const starArray = Array.from({ length: count }, (_, index) => <li key={index}><Star /></li>);
  
    const handleSwitch = () => {
      setView(view === 'favorite_border' ? 'favorite' : 'favorite_border');
    };
  
    return (
      <ul className="card-body-stars u-clearfix">

        <div className='movie-picture'></div>

        <div className='container-2'>
          <div className='movie-title'>Movie's title</div>
          <div className='stars'>
            {starArray}
          </div>
       
          <div className='button-price'>
          <button>Купить</button>
          <a className="arrow-right" href="#">ПОДРОБНЕЕ</a>
          </div>
        </div>

        <HeartSwitch icon={view === 'favorite_border' ? 'favorite_border' : 'favorite'} onSwitch={handleSwitch} />
        <span className="share-movie material-icons-outlined">share</span>
        
      </ul>
    );
  };
  
  export default Stars;
