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
        // { title: "ID", field: "id", sorting: false },
        { title: "ID", field: "id", sorting: false, filtering: false },
        { title: "Name", field: "name", sorting: false, filterPlaceholder: "search here" },
        { title: "Email", field: "email", sorting: false, filtering: false },
        { title: "Status", field: 'status', filtering: false, emptyValue: () => <em>null field</em> },
        // { title: "Role", field: "role", defaultSort: "asc" },
        { title: "Role", field: "role", sorting: false, filtering: false },
        { title: "Gender", field: "gender", lookup: { M: "Male", F: "Female", sorting: false, filtering: false }, export: false },
        { title: "School fee", field: "fee", type: 'currency', filtering: false, currencySetting: { currencyCode: "LKR", minimumFractionDigits: 2, sorting: false } }
    ];

    return (<div className="App">
        <h1 align="center">React-App</h1>
        <h4 align='center'>Material Table</h4>
        <div style={{
            display: "flex",
            justifyContent: "center",  // Center horizontally
            alignItems: "center",      // Center vertically           // Adjust the height as needed
        }} >
            <MaterialTable
                title="Employee Data"
                // options={{ sorting: false, search: false, searchText: "raj", searchFieldAlignment: "left" }}

                //adding data to table
                editable={{
                    onRowAdd: (newRow) => new Promise((resolve, reject) => {
                        console.log(newRow);
                    })
                }}


                options={{
                    search: true,
                    searchFieldAlignment: "right",
                    searchAutoFocus: true,
                    searchFieldVariant: "filled",
                    paging: true,
                    pageSizeOptions: [2, 4, 8],
                    pageSize: 2,
                    paginationType: "stepped",
                    showFirstLastPageButtons: false,  // Corrected property name
                    paginationPosition: "bottom",
                    exportButton: true,
                    exportAllData: true,
                    exportFileName: "Table_Data",
                    addRowPosition: "first",
                    actionsColumnIndex: -1
                    // sorting: false,  // If you want to disable sorting
                    // filtering: true,  // If you want to enable filtering
                }}
                data={tableData}
                columns={columns}
            />
        </div>
    </div>);
}

//TODO 17:43

export default App;
