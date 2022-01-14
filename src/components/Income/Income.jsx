import { useState } from "react";
import { GrCalculator } from "react-icons/gr";
import { FaTrashAlt } from "react-icons/fa";
import { nanoid } from "nanoid";
import s from "./Income.module.css";

const classsLeft = s.input + " " + s.left_input;
const classsRight = s.input + " " + s.right_input;
const classsDate = s.input + " " + s.date_input;
const classsTabRight = s.tab + " " + s.right_tab;
const classsTabLeft = s.tab + " " + s.left_tab;

const categoryOptions = [
  {
    label: "Категория товара*",
    value: "",
  },
  {
    label: "Транспорт",
    value: "Транспорт",
  },
  {
    label: "Здоровье",
    value: "Здоровье",
  },
  {
    label: "Алкоголь",
    value: "Алкоголь",
  },
  {
    label: "Развлечения",
    value: "Развлечения",
  },
  {
    label: "Всё для дома",
    value: "Всё для дома",
  },
  {
    label: "Техника",
    value: "Техника",
  },
  {
    label: "Коммуналка, связь",
    value: "Коммуналка, связь",
  },
  {
    label: "Спорт, хобби",
    value: "Спорт, хобби",
  },
  {
    label: "Образование",
    value: "Образование",
  },
];

const INITIAL_STATE = {
  date: "",
  name: "",
  category: "",
  amount: "",
};

const Income = () => {
  const [formData, setFormData] = useState({ ...INITIAL_STATE });
  const [costs, setCosts] = useState([]);

  console.log(`formData`, formData);
  console.log(`costs`, costs);

  const { date, name, category, amount } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
      id: nanoid(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCosts([...costs, formData]);
    reset();
  };
  const onClicReset = () => {
    reset();
  };

  const reset = () => {
    setFormData({ ...INITIAL_STATE });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          <input
            type="date"
            name="date"
            value={date}
            required
            onChange={handleChange}
            className={classsDate}
          />
        </label>
        <label htmlFor="">
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Описание товара"
            required
            onChange={handleChange}
            className={classsLeft}
          />
        </label>
        <select
          name="category"
          value={category}
          onChange={handleChange}
          className={s.input}
        >
          {categoryOptions.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <label>
          <div
            style={{
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <input
              type="number"
              name="amount"
              value={amount}
              placeholder="0,00"
              required
              onChange={handleChange}
              className={classsRight}
            />
            <GrCalculator className={s.icon} />
          </div>
        </label>
        <button type="submit" text="Confirm" className={s.button}>
          ВВОД
        </button>
        <button
          type="button"
          text="Confirm"
          className={s.button}
          onClick={onClicReset}
        >
          ОЧИCТИТЬ
        </button>
      </form>

      <table>
        <tr className={s.header_main}>
          <th className={classsTabLeft}>ДАТА</th>
          <th className={s.tab}>ОПИСАНИЕ</th>
          <th className={s.tab}>КАТЕГОРИЯ</th>
          <th className={s.tab}>СУММА</th>
          <th className={classsTabRight}>УДАЛЕНИЕ</th>
        </tr>

        {!!costs.length &&
          costs.map(({ date, name, category, amount, id }) => (
            <tr key={id} className={s.field}>
              <td>{date}</td>
              <td>{name}</td>
              <td>{category}</td>
              <td>
                <button>{amount}</button>
              </td>
              <td>
                <FaTrashAlt />
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Income;
