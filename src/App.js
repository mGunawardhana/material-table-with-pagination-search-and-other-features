import React, { useState } from 'react';
import './App.css';
import MaterialTable from 'material-table';

const empList = [{ id: 1, name: "Neeraj", email: 'neeraj@gmail.com', status: 0, role: 1, gender: 'M', fee: 1200 }, {
    id: 2,
    name: "Raj",
    email: 'raj@gmail.com',
    status: null,
    role: 0,
    gender: 'F',
    fee: 1200
}, { id: 3, name: "David", email: 'david342@gmail.com', status: 1, role: 3, gender: 'M', fee: 1200 }, {
    id: 4,
    name: "Vikas",
    email: 'vikas75@gmail.com',
    status: 0,
    role: 2,
    gender: 'F',
    fee: 1200
},];

function App() {
    const [tableData, setTableData] = useState(empList); // Initialize with empList

    const columns = [
        { title: "ID", field: "id", sorting: false },
        { title: "Name", field: "name" },
        { title: "Email", field: "email" },
        { title: "Status", field: 'status', emptyValue: () => <em>null field</em> },
        { title: "Role", field: "role", defaultSort: "asc" },
        { title: "Gender", field: "gender", lookup: { M: "Male", F: "Female" } },
        { title: "School fee", field: "fee", type: 'currency', currencySetting: { currencyCode: "LKR", minimumFractionDigits: 2 } }
    ];

    return (<div className="App">
        <h1 align="center">React-App</h1>
        <h4 align='center'>Material Table</h4>
        <MaterialTable
            title="Employee Data"
            // options={{ sorting: false, search: false, searchText: "raj", searchFieldAlignment: "left" }}
            options={{
                sorting: true,
                search: true,
                searchFieldAlignment: "right",
                searchAutoFocus: "true",
                searchFieldVariant: "filled"
            }}
            data={tableData}
            columns={columns}
        />
    </div>);
}

//TODO 17:43

export default App;
