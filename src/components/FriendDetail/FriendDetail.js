import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {
            const { friendId } = useParams();
            const [friend, setFriend] = useState({});

            const history = useHistory();
            useEffect(() => {
                        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
                        fetch(url)
                                    .then(res => res.json())
                                    .then(data => setFriend(data))
            }, [])
            const handleAll = () => {
                        history.push('/friends');
            }
            return (
                        <div>
                                    <h3>detail of :{friendId}</h3>
                                    <h1>{friend.name}</h1>
                                    <h2>{friend.phone}</h2>
                                    <h3>{friend.website}</h3>
                                    <h4>Works at: {friend.company?.name}</h4>
                                    <button onClick={handleAll}>See All Friends</button>
                        </div>
            );
};

export default FriendDetail;