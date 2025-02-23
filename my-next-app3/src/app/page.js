"use client";

import { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const res = await fetch('/api/users');
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                setUsers(data.users);
            } catch (error) {
                console.error('Error fetching users:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        clearTimeout(window.searchTimeout);
        window.searchTimeout = setTimeout(() => {
           
        }, 300);
    };
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-6">User List</h1>
            <input
                type="text"
                placeholder="Search users"
                value={searchTerm}
                onChange={handleSearch}
                className="border border-gray-300 rounded-lg p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {loading ? (
                <p className="text-center">Loading...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {users
                        .filter(user => user.firstName && user.firstName.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map(user => (
                            <UserCard key={user.id} user={user} />
                        ))}
                </div>
            )}
        </div>
    );
};

export default Home;