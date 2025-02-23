"use client";

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const UserPage = () => {
    const router = useRouter();
    const { id } = router.query; 
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            if (id) {
                const res = await fetch(`/api/users`);
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                const foundUser = data.users.find(user => user.id === parseInt(id));
                setUser(foundUser);
                setLoading(false);
            }
        };

        fetchUser();
    }, [id]);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>{user.firstName} {user.lastName}</h1>
            <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            
        </div>
    );
};

export default UserPage;