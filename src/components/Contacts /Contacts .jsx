const Contacts = ({ contactsUser }) => {
  return (
    <div>
      {contactsUser.map(({ name, number }) => (
        <ul>
          <li>
            <p>
              {name}:{number}
            </p>
          </li>
          <button type="submit">Delete</button>
        </ul>
      ))}
    </div>
  );
};

export default Contacts;
