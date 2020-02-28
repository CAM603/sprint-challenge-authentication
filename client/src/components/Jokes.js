import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Users = (props) => {
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3300/api/jokes')
            .then(res => {
                setUsers(res.data.map(el => {
                    return {username: el.username, id: el.id}
                }))
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            {users.map(joke => (
                <div>
                    <h3></h3>
                </div>
            )
            )}
        </div>
    )
}

export default Users;