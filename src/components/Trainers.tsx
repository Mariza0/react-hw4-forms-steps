import React, { FormEvent } from "react";
import { useState, ChangeEvent } from "react";

export function Trainers() {

    const [form, setForm] = useState(
        {
            date: '',
            distance: '',
          }
    );

    const [dataList, setDataList] = useState([{
        date: '',
        distance: '',
      }])
  
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('form data: ', form); 
        const existingItem = dataList.find((item) => item.date === form.date);

        if (existingItem) {
            // Если элемент с такой датой уже существует, обновляем его
            const updatedList = dataList.map((item) =>
              item.date === form.date
              ? { ...item, distance: String(parseFloat(item.distance) + parseFloat(form.distance)) }
              : item
            );
            setDataList(updatedList);

          } else {
             // Если элемента с такой датой нет, добавляем новый
            setDataList((prevList) => 
            [
                { date: form.date, distance: form.distance },
                ...prevList,

                ]);
        }

        // Очищаем форму после отправки
        setForm({ date: '', distance: '' });

        };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({...prevForm,[name]: value}));
    };

    const handleDelete = (dateToDelete: string)=> {
        const updatedDataList = dataList.filter(item => item.date !== dateToDelete);
        setDataList(updatedDataList);
    };

    const handleEdit = (dateEdit: {date: string, distance: string}) => {
        setForm({ date: dateEdit.date, distance: dateEdit.distance });
    };


    return (

    <div className="container">

      <form onSubmit={handleSubmit}>

      <div className="line-first">
          <div className="form-field">
              <label htmlFor="date">Дата (ДД.ММ.ГГ.)</label>
              <input type="date" name="date" className="input-data" value={form.date} onChange={handleChange} required/>
          </div>

          <div className="form-field">
            <label htmlFor="distance">Пройдено км</label>
            <input type="number" name="distance" className="input-data" min="1" value={form.distance} onChange={handleChange} required/>
          </div>

          <div className="form-field">
              <button type="submit" className="btn-submit">OK</button>
            </div>
      </div>

      </form>

<div className="line-second">

<div className="column">
    <p>Дата (ДД.ММ.ГГ.)</p>
    {dataList.map((item) => (
      <div key={item.date}>
        {item.date &&
        <div className="data-submitted">{item.date}</div>
        }
      </div>
    ))}
   
  </div>
  <div className="column">
    <p>Пройдено км</p>
    {dataList.map((item) => (
      <div key={item.date}>
        {item.date &&
        <div className="data-submitted">{item.distance}</div>
        }
      </div>
        
    ))}
  </div>

  <div className="column">
    <p>Действие</p>

    {dataList.map((item) => (
      <div key={item.date}>
        {item.date &&
        <div className="data-submitted">
            <button type="button" className="button-change" onClick={() => handleEdit(item)}>
            <span className="material-icons-outlined">edit</span>
            </button>

            <button type="button" onClick={() => handleDelete(item.date)}>
            <span className="material-icons-outlined">close</span>
            </button>
            </div>  
}       
      </div>
    ))}
  </div>
</div>
</div>
)

}
