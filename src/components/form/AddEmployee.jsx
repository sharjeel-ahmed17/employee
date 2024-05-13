import { useState } from "react"
import { addProduct } from "../../service/AddEmployeeService";


const AddEmployee = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [position, setPosition] = useState('');
    const data = {
        name: name,
        email: email,
        phone: phone,
        position: position
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const addProductResponse = await addProduct(data)
        console.log(name, email, phone, position, "product added successfully")
    }
    return (
        <>
            <div className='container mx-auto'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label className='form-label'>Name</label>
                        <input className='form-control' type="text"

                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            name="name" />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Email</label>
                        <input className='form-control' type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} name="email" />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Phone</label>
                        <input className='form-control' type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            name="phone" />
                    </div>
                    <div className='mb-3'>
                        <select name="" id="" className='form-select'
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}>
                            <option value="">Select Department</option>
                            <option value="it">IT</option>
                            <option value="hr">HR</option>
                            <option value="admin">Admin</option>
                            <option value="marketing">Marketing</option>
                            <option value="sales">Sales</option>
                            <option value="finace">Finance</option>
                            <option value="operaions">Operations</option>
                            <option value="support">Support</option>


                        </select>
                    </div>

                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary w-100">Add Employee</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default AddEmployee