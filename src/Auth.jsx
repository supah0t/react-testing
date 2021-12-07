import { useState } from 'react';
import { supabase } from './supabaseClient';

export default function Auth() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');

    const handleLogin = async email => {
        try {
            setLoading(true);
            const { error } = await supabase.auth.signIn({ email });
            if (error) throw error;
            alert('Check your email');
        } catch (error) {
            alert(error.error_description || error.message);
        } finally {
            setLoading(false);
            setEmail('');
        }
    };

    return (
        <div>
            <h1>Supabase + react </h1>
            <p>Sign in via magic link with email</p>
            <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <button
                onClick={e => {
                    e.preventDefault();
                    handleLogin(email);
                }}
                disabled={loading}
            >
                {loading ? <span>Loading</span> : <span>Send magic link</span>}
            </button>
        </div>
    );
}
