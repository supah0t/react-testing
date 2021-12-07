import { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import Auth from '../../Auth';
import Account from './Accout';

export default function Supabase() {
    const [session, setSession] = useState(null);

    useEffect(() => {
        setSession(supabase.auth.session());

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    return (
        <div>
            {!session ? (
                <Auth />
            ) : (
                <Account key={session.user.id} session={session} />
            )}
        </div>
    );
}
