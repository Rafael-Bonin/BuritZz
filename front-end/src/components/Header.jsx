import React, { useContext } from 'react';
import Context from '../Context/Context';

export default function Header() {
  const { setFilter } = useContext(Context);

  return (
    <header>
      <button type="button" onClick={() => setFilter('date')}>
        Data
      </button>
      <button type="button" onClick={() => setFilter('task')}>
        Tarefa
      </button>
      <button type="button" onClick={() => setFilter('status')}>
        Status
      </button>
    </header>
  );
}
