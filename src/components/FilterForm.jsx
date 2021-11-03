import React, { useContext, useState } from 'react';
import SWContext from '../context/SWContext';

function FilterForm() {
  const { changeByNameFilter, changeNumericValues,
    filters: { filterByName }, info } = useContext(SWContext);

  const [filter, setFilter] = useState({
    filterByNumericValues:
      {
        column: info.optionCollumns[0],
        comparison: 'maior que',
        value: 0,
      },
  });

  const handleChange = ({ target: { name, value } }) => {
    setFilter({
      filterByNumericValues:
        {
          ...filter.filterByNumericValues,
          [name]: value,
        },

    });
  };

  return (
    <section>
      <input
        type="text"
        onChange={ (ev) => changeByNameFilter(ev) }
        value={ filterByName.name }
        data-testid="name-filter"
        name="name"
        id="name"
      />
      <select
        onChange={ handleChange }
        name="column"
        id="column"
        data-testid="column-filter"
      >
        {info.optionCollumns.map((option) => (
          <option
            key={ option }
            name="column"
            value={ option }
          >
            {option}
          </option>
        ))}
      </select>
      <select
        onChange={ handleChange }
        data-testid="comparison-filter"
        name="comparison"
        id="comparison"
      >
        <option name="comparison" value="maior que">maior que</option>
        <option name="comparison" value="menor que">menor que</option>
        <option name="comparison" value="igual a">igual a</option>
      </select>
      <input
        onChange={ handleChange }
        type="number"
        data-testid="value-filter"
        name="value"
        id="value"
      />
      <button
        onClick={ () => changeNumericValues(filter) }
        type="button"
        value={ filter.filterByNumericValues.value }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </section>
  );
}

export default FilterForm;
