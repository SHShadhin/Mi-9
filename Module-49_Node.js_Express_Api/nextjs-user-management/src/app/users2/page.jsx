import React, { Suspense } from 'react';
import UsersList from '../components/UsersList';
const getUsers = async () => {
  const res = await fetch('http://localhost:8000/users');
  const users = await res.json();
  return users;
};
const Users2Page = async () => {
  const usersPromise =  getUsers();
  return (
    <div>
      <h2>Users 2 with suspense </h2>
      <Suspense fallback={<div>Loading...</div>}>
        <UsersList usersPromise={usersPromise} />
      </Suspense>
    </div>
  );
};

export default Users2Page;
