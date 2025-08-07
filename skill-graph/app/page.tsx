'use client';

import { useEffect, useState } from 'react';
import Error from 'next/error';

type User = {
  id: number;
  username: string;
  email: string;
  created_at: string;
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching users:', Error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-4">Loading users...</p>;

  return (
    <div className="text-black w-full max-w-[600px] p-8">
      <h1 className="text-xl font-bold mb-4">📋 List of Users</h1>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            <th className="p-2">Username</th>
            <th className="p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t border-gray-300">
              <td className="p-2">{user.id}</td>
              <td className="p-2">{user.username}</td>
              <td className="p-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
