import React from 'react';

const UsersPage = async() => {
  const res = await fetch('http://localhost:8000/users');
  const users = await res.json();
  console.log(users);

  return (
    <div>
      Users: {users.length}
      <div className="grid grid-cols-3">
        {users.map(user => (
          <div className="border border-green-400 p-5 m-5"  key={user.id}>
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;