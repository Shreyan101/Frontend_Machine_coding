import React, { useEffect, useState } from 'react';
import './DataTable.css';

function DataTable() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      let data = await (
        await fetch('https://jsonplaceholder.typicode.com/users')
      ).json();
      setData(data);
    } catch (e) {
      console.log('Error fetching data:', e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='data-table-container'>
      <h2>User Data Table</h2>
      <table className='data-table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
