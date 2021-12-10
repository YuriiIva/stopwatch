import s from "./contacts.module.css";

const Contacts = ({ contactsUser }) => {
  return (
    <div>
      <ul>
        {contactsUser.map(({ name, number, id }) => (
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
