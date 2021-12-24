import s from "./FindContacts.module.css";
// import { PropTypes } from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "redux/contacts/contactsSlice";

const FindContacts = () => {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className={s.title}>Contacts</h2>

      <form action="">
        <label className={s.find}>
          Finde contacts by name
          <input
            type="text"
            className={s.input}
            value={filter}
            onChange={(e) => dispatch(changeFilter(e.target.value))}
          />
        </label>
      </form>
    </div>
  );
};

export default FindContacts;
