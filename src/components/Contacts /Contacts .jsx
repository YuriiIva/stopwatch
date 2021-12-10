import s from "./contacts.module.css";

const Contacts = ({ contactsUser, items }) => {
  console.log("items", items);
  return (
    <div>
      <ul>
        {items.map(({ name, number, id }) => (
          <li key={id} className={s.item}>
            <p>
              {name}:{number}
            </p>
            <button type="submit" className={s.btn}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
