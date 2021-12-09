const InputContacts = () => {
  return (
    <div>
      <form autocomplete="on">
        <label htmlFor="">
          Name
          <input type="text" />
        </label>
        <label htmlFor="">
          number
          <input type="text" />
        </label>
        <button type="submit">add contact</button>
      </form>
    </div>
  );
};

export default InputContacts;
