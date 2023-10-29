import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faFilter } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/SortComponent.module.css';

export default function SortComponent({ headers, sortConfig, setSortConfig }) {
  const handleSortChange = (e) => {
    const selectedKey = e.target.value;
    let newDirection = 'asc';

    if (selectedKey === sortConfig.key) {
      newDirection = sortConfig.direction === 'asc' ? 'desc' : 'asc';
    }

    setSortConfig({ key: selectedKey, direction: newDirection });
  };

  const handleToggleDirection = () => {
    if (sortConfig.key) {
      const newDirection = sortConfig.direction === 'asc' ? 'desc' : 'asc';
      setSortConfig({ ...sortConfig, direction: newDirection });
    }
  };

  const rotationDegree = sortConfig.direction === 'asc' ? 0 : 180;

  const iconStyle = {
    transition: 'transform 0.3s',
    transform: `rotate(${rotationDegree}deg)`,
    color: sortConfig.key === '' ? '#696969' : '#36a581',
  };

  return (
    <div className={styles.sortComponent}>
      <div className={styles.sortDropdown}>
        <FontAwesomeIcon icon={faFilter} className={styles.iconFilter} />
        <label htmlFor="sort-select" className={styles.sortLabel}>Ordenar por:</label>
        <select id={styles.sortSelect} value={sortConfig.key} onChange={handleSortChange}>
          <option value="">Sin orden</option>
          {headers.map((header, index) => (
            <option key={index} value={header}>
              {header}
            </option>
          ))}
        </select>
      </div>
      <FontAwesomeIcon icon={faChevronUp} onClick={handleToggleDirection} className={styles.directionIcon} style={iconStyle} />
    </div>
  );
}
