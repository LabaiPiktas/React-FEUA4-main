import React, { useState, useEffect } from 'react';
import Table from '../Table';
import TableRowSelect from '../Table/feature/TableRowSelect';

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await (
          await fetch('https://jsonplaceholder.typicode.com/users')
        ).json();

        setUsers(data);
      } catch (error) {
        setError('Error...');
      }

      setLoading(false);
    })();
  }, []);

  const mappedUsers = users.map((x) => ({
    id: x.id,
    name: x.name,
    email: x.email,
    address: `${x.address.street}, ${x.address.city}`,
  }));

  if (loading) {
    <p>Loading</p>;
  }

  if (error) {
    <p>{error}</p>;
  }

  return (
    <TableRowSelect
      render={(selectRow) => (
        <Table data={mappedUsers} rowClickAction={selectRow} />
      )}
    />
  );

  // return <Table data={mappedUsers} />;
};

export default UsersTable;
