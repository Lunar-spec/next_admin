import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image'

const SingleUserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src={'/noavatar.png'} alt='' fill />
                </div>
                John Doe
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <label>Username</label>
                    <input type="text" name='username' placeholder='John Doe' />
                    <label>Email</label>
                    <input type="email" name='email' placeholder='Johndoe@gmail.com' />
                    <label>Password</label>
                    <input type="password" name='password' />
                    <label>Phone</label>
                    <input type="phone" name='phone' placeholder='+123456789' />
                    <label>Address</label>
                    <textarea type="text" name='address' placeholder='Random Street' />

                    <label>Is Admin?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <label>Is Active?</label>

                    <select name="isActive" id="isActive">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleUserPage