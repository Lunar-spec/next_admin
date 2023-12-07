import styles from "@/app/ui/dashboard/users/addUsers/addUsers.module.css";

const AddUserPage = () => {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <input type="text" placeholder="username" name="username" required />
                <input type="email" placeholder="email" name="email" required />
                <input type="password" placeholder="password" name="password" required />
                <input type="phone" placeholder="phone" name="phone" />
                <select name="isAdmin" id="isAdmin">
                    <option value={false} selected>Is Admin?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select name="isActive" id="isActive">
                    <option value={true} selected>Is Active?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <textarea
                    name="address"
                    id="address"
                    cols="30"
                    rows="10"
                    placeholder="Address"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddUserPage;
