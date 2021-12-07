import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/Auth';

import supabase from '../../../supabaseClient';

export default function Profile() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState({ user: '', post: '' });

    async function fetchMessages() {
        const { data } = await supabase.from('Messages').select();
        setMessages(data);
    }

    const { user, signOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        fetchMessages();
        console.log(user);
        supabase
            .from('Messages')
            .on('INSERT', payload => {
                setMessages(prev => [...prev, payload.new]);
            })
            .subscribe();
    }, []);

    async function createMessage() {
        const { error } = await supabase
            .from('Messages')
            .insert([{ user: user.email, post: message.post }])
            .single();
        console.log(error);
        setMessage({ user: user.email, post: '' });
        //fetchMessages();
    }

    async function handleSignOut() {
        await signOut();
        navigate('/signup');
    }

    return (
        <div>
            <p>Welcome, {user?.email}!</p>
            <button onClick={handleSignOut}>Sign out</button>
            <br />
            <br />
            <div className="messages">
                {messages ? (
                    messages.map(msg => {
                        return (
                            <div key={msg.id}>
                                {msg.user === user.email ? (
                                    <div className="mine message">
                                        {msg.user}: {msg.post}
                                    </div>
                                ) : (
                                    <div className="not_mine message">
                                        {msg.user}: {msg.post}
                                    </div>
                                )}
                                <br />
                            </div>
                        );
                    })
                ) : (
                    <div />
                )}
            </div>
            <br />
            <input
                placeholder="Message"
                value={message.post}
                onChange={e => setMessage({ ...message, post: e.target.value })}
            />
            <button onClick={createMessage}>Send Message</button>
        </div>
    );
}
