import React, { useState, useEffect } from 'react';
import Header from '../../components/Common/Header';
import Footer from '../../components/Common/Footer';
import { getTramosClienteData } from '../../services/api';
import TramosTable from '../../components/Common/Table';
import DateRangePicker from '../../components/Common/DateRangePicker';
import BarChartTC from './BarChartTC';
import Breadcrumb from '../../components/Common/Breadcrumb';

export default function TramosClientePage() {
  const [tramosClienteData, setTramosClienteData] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: '',
    direction: 'asc',
  });
  const [filterText, setFilterText] = useState('');
  const [startDate, setStartDate] = useState(new Date('01-01-2010'));
  const [endDate, setEndDate] = useState(new Date('01-31-2010'));

  useEffect(() => {
    fetchTramosData(startDate, endDate);
  }, [startDate, endDate]);

  const fetchTramosData = (start, end) => {
    const formattedStartDate = start.toISOString().split('T')[0];
    const formattedEndDate = end.toISOString().split('T')[0];

    getTramosClienteData(formattedStartDate, formattedEndDate)
      .then((data) => {
        setTramosClienteData(data);
      })
      .catch((error) => {
        console.error('Error al obtener datos de /tramos:', error);
      });
  };

  console.log(tramosClienteData);

  return (
    <div>
      <Header />
      <Breadcrumb />
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        handleStartDateChange={(date) => setStartDate(date)}
        handleEndDateChange={(date) => setEndDate(date)}
      />
      <TramosTable
        data={tramosClienteData}
        sortConfig={sortConfig}
        setSortConfig={setSortConfig}
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <BarChartTC data={tramosClienteData} />
      <Footer />
    </div>
  );
}
