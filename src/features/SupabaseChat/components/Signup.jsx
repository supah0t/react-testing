import { useNavigate } from 'react-router-dom';

import supabase from '../../../supabaseClient';

export default function Signup() {
    const navigate = useNavigate();

    async function signInWithGithub() {
        const { user, session, error } = await supabase.auth.signIn(
            {
                provider: 'github',
            },
            {
                redirectTo: 'http://localhost:3000/profile',
            }
        );

        if (error) {
            alert('error with github');
        } else {
            navigate('/profile');
        }
    }

    return (
        <>
            <button onClick={signInWithGithub}>Sign in with github</button>
        </>
    );
}
