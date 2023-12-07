import styles from '@/app/ui/dashboard/products/addProducts/addProduct.module.css'

const AddProductPage = () => {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <input type="text" placeholder='title' name='title' required/>
                <select name="cat" id="cat">
                    <option value="general">Choose a Category</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="phone">Phone</option>
                    <option value="computer">Computer</option>
                </select>
                <input type="number" placeholder='price' name='price' />
                <input type="number" placeholder='stock' name='stock' />
                <input type="text" placeholder='color' name='color' required/>
                <input type="text" placeholder='size' name='size' required/>
                <textarea name="desc" id="desc" cols="30" rows="10" placeholder='Description' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddProductPage