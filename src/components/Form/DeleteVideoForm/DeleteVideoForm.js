import React from 'react';

import './DeleteVideoForm.scss';

function DeleteVideoForm({ onReject, onSubmit }) {
  return (
    <form className="form-delete-video" onReset={onReject} onSubmit={onSubmit}>
      <p>Czy na pewno chcesz usunąć to video?</p>
      <input type="submit" value="Tak" />
      <input type="reset" value="Nie" />
    </form>
  );
}

export default DeleteVideoForm;