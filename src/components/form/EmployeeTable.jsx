import React from 'react'

const EmployeeTable = () => {
    return (
        <>
            <h1>Show Employee data</h1>

            <table className='table'>
                <thead>

                    <tr>
                        <th className='table-primary'>name </th>
                        <th className='table-primary'>email </th>
                        <th className='table-primary'>phone</th>
                        <th className='table-primary'>action</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='table-secondary'>sharjeel</td>
                        <td className='table-secondary'>sharjeel@gmail.com</td>
                        <td className='table-secondary'>0341263007</td>
                        <td className='table-secondary'><button className='btn btn-primary'>view</button></td>
                    </tr>
                </tbody>
                <tfoot>
                    

                </tfoot>
            </table>
        </>
    )
}

export default EmployeeTable