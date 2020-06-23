import React from 'react';

import { Container } from './styles';

function AvatarInput() {
  function handleChange(c) {}

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src="https://api.adorable.io/avatars/50/abott@adorable.png"
          alt=""
        />

        <input
          type="file"
          id="avatar"
          accept="image/*"
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}

export default AvatarInput;
