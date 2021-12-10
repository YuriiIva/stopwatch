import s from "./FindContacts.module.css";
import { PropTypes } from "prop-types";

const FindContacts = ({ onFilterChange, value }) => {
  return (
    <div>
      <h2 className={s.title}>Contacts</h2>

      <form action="">
        <label htmlFor="" className={s.find}>
          Finde contacts by name
          <input
            type="text"
            className={s.input}
            value={value}
            onChange={(e) => onFilterChange(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

FindContacts.propTypes = {
  onFilterChange: PropTypes.func,
  value: PropTypes.string,
};

export default FindContacts;
