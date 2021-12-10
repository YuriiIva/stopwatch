import s from "./FindContacts.module.css";

const FindContacts = () => {
  return (
    <div>
      <h2 className={s.title}>Contacts</h2>

      <form action="">
        <label htmlFor="" className={s.find}>
          Finde contacts by name
          <input type="text" className={s.input} />
        </label>
      </form>
    </div>
  );
};

export default FindContacts;
