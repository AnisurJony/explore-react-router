import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
            const { id, name, email, phone, website, address } = props.friend;
            const history = useHistory();

            const friendStyle = {
                        border: '3px solid goldenrod',
                        padding: '10px',
                        borderRadius: '10px'

            }
            const url = `/friend/${id}`;
            const handleFriendClick = () => {
                        history.push(`/friend/${id}`)
            }

            return (
                        <div style={friendStyle}>
                                    <h3>I am : {name}</h3>
                                    <h3>my id: {id}</h3>
                                    <h4> Call me: {phone}</h4>
                                    <h5>Visit me: {website}</h5>
                                    <h5>i live in: {address.city}</h5>
                                    <Link to={url}>Visit me</Link>
                                    <br />
                                    <Link to={url}>
                                                <button>visit me</button>
                                    </Link>
                                    <button onClick={handleFriendClick}>visit me 2</button>

                        </div>
            );
};

export default Friend;