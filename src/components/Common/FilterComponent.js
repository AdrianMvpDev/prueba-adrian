import React from 'react';
import styles from '../../styles/Inputs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function FilterComponent({ filterText, setFilterText }) {
  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        placeholder="Filtrar..."
        className={styles.input}
      />
      <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
    </div>
  );
}
