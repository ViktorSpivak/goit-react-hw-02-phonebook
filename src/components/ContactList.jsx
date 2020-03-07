import React from "react";

const ContactList = ({ onShowFindRes, onDelete }) => {
  return (
    onShowFindRes.length !== 0 && (
      <div>
        <ul>
          {onShowFindRes.map(({ name, number, id }) => (
            <li key={id}>
              {name}:{number}
              <button id={id} onClick={onDelete}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};
ContactList.defaultProps = {
  onShowFindRes: []
};
export default ContactList;
