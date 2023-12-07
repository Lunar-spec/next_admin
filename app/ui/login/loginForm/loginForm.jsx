"use client"
import { authenticate } from '@/app/lib/actions'
import styles from './loginForm.module.css'
import { useState } from 'react'
import { redirect } from 'next/navigation'

const LoginForm = () => {
    const [error, setError] = useState()

    const handleLogin = async (formData) => {
        const data = await authenticate(formData)
        console.log(data)
        data.toLowerCase() === 'wrong credentials!' ? setError(data) : redirect('/dashboard')
    }

    return (
        <div className={styles.container}>
            <form action={handleLogin} className={styles.form}>
                <h1>Login</h1>
                <input type="text" placeholder='Username' name='username' />
                <input type="password" placeholder='Password' name='password' />
                <button type="submit">Login</button>
                {error && error}
            </form>
        </div>
    )
}

export default LoginForm