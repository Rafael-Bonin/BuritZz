import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import Services from '../services/index';

export default function Provider({ children }) {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState('date');

  async function all() {
    const result = await Services.readAllTask();
    setList(result);
  }

  async function filtered() {
    let result;
    if (filter === 'date') result = await Services.readAllTask();
    if (filter === 'task') result = await Services.taskOrdered();
    if (filter === 'status') result = await Services.statusOrdered();
    setList(result);
  }

  useEffect(() => {
    all();
  }, []);

  useEffect(() => {
    filtered();
  }, [filter]);

  const stateGlobal = useMemo(() => ({
    list,
    setList,
    filter,
    setFilter,
  }), [list, filter]);

  return (
    <Context.Provider value={stateGlobal}>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
