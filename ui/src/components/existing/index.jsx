import React, { useState, useEffect } from 'react';
import './styles.css';

const PanelExisting = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    fetch('http://localhost:4000/estate')
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err.message);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="panel-existing-wrapper">
      <h1>Look at these nice real estates</h1>
      <div className="existing-real-estates">
        {
          data.map((item) => {
            const { address, size, timeStamp } = item;
            return (
              <div key={timeStamp}>
                <h3>{`${size} square meters`}</h3>
                <p>{address}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default PanelExisting;
