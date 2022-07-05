import React, { useContext } from 'react';
import Context from '../Context/Context';
import Select from './Select';

export default function ListGroup() {
  const { list } = useContext(Context);

  return (
    <ul>
      { list.length === 0 ? <h3>carregando</h3> : list
        .map((a) => (
          <li key={a.id}>
            {a.task}
            {' '}
            <Select />
          </li>
        ))}
    </ul>
  );
}
