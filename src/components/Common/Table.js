import React, { lazy, Suspense, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/Table.module.css';

const FilterComponent = lazy(() => import('./FilterComponent'));
const SortComponent = lazy(() => import('./SortComponent'));

function sortData(data, config) {
  if (!config.key) {
    return data;
  }

  const { key, direction } = config;
  return [...data].sort((a, b) => {
    if (direction === 'asc') {
      return a[key] > b[key] ? 1 : -1;
    }
    return b[key] > a[key] ? 1 : -1;
  });
}

function filterData(data, text) {
  if (!text) {
    return data;
  }

  return data.filter((item) => Object.values(item).some((value) => value.toString().toLowerCase().includes(text.toLowerCase())));
}

export default memo(function Table({ data, sortConfig, setSortConfig, filterText, setFilterText }) {
  if (!data || data.length === 0) {
    return <p className={styles.noData}>No hay datos disponibles.</p>;
  }

  const headers = Object.keys(data[0]);

  const handleSortHeaderClick = (header) => {
    setSortConfig({
      key: header,
      direction: sortConfig.key === header && sortConfig.direction === 'asc' ? 'desc' : 'asc',
    });
  };

  return (
    <div className={styles.tramosTable}>
      <div className={styles.search}>
        <Suspense fallback={<div>Cargando...</div>}>
          <FilterComponent filterText={filterText} setFilterText={setFilterText} />
          <SortComponent headers={headers} sortConfig={sortConfig} setSortConfig={setSortConfig} />
        </Suspense>
      </div>
      <div class={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} onClick={() => handleSortHeaderClick(header)} className={styles.header}>
                  {header}
                  {sortConfig.key === header && (
                    <span className="icon-rotate">
                      <FontAwesomeIcon
                        icon={faChevronUp}
                        style={{
                          transition: 'transform 0.3s',
                          transform: `rotate(${sortConfig.direction === 'asc' ? 0 : 180}deg)`,
                          marginLeft: 5,
                          color: '#36a581',
                        }}
                      />
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortData(filterData(data, filterText), sortConfig).map((item, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, colIndex) => (
                  <td key={colIndex} className={styles.cell} data-header={header}>
                    {item[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});
