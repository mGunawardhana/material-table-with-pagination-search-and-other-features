import React, {useState} from 'react';
import './App.css';
import MaterialTable from 'material-table';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import AddIcon from '@material-ui/icons/Add';

const empList = [{
    id: 1, name: "Neeraj", age: "12", email: 'neeraj@gmail.com', status: 0, role: 1, gender: 'M', fee: 1200
}, {id: 2, name: "Raj", age: "23", email: 'raj@gmail.com', status: null, role: 0, gender: 'F', fee: 1200}, {
    id: 3, name: "David", age: "11", email: 'david342@gmail.com', status: 1, role: 3, gender: 'M', fee: 1200
}, {id: 4, name: "Vikas", age: "45", email: 'vikas75@gmail.com', status: 0, role: 2, gender: 'F', fee: 1200},];

function App() {
    const [tableData, setTableData] = useState(empList); // Initialize with empList

    const columns = [// { title: "ID", field: "id", sorting: false },
        {title: "ID", field: "id", sorting: false, filtering: false,cellStyle:{color:"blue"}}, {
            title: "Name", field: "name", sorting: false, filterPlaceholder: "search here"
        }, {
            title: "Age",
            field: "age",
            render: (rowData) => <div style={{backgroundColor: rowData.age >= 18 ? "green" : "red"}}>{rowData.age}</div>
        }, {title: "Email", field: "email", sorting: false, filtering: false, grouping: false,headerStyle:{color: "#fff"}},//if we're false grouping we cant group by this fields
        {
            // title: "Status", field: 'status', filtering: false, emptyValue: () => <em>null field</em>,defaultGroupOrder:1 //we can group by levels with table headings
            title: "Status", field: 'status', filtering: false, emptyValue: () => <em>null field</em>,//defaultGroupOrder:1,
        }, // { title: "Role", field: "role", defaultSort: "asc" },
        {
            title: "Role", field: "role", sorting: false, filtering: false
        }, // { title: "Gender", field: "gender", lookup: { M: "Male", F: "Female", sorting: false, filtering: false }, export: false },
        {title: "Gender", field: "gender", lookup: {M: "Male", F: "Female"}}, {
            title: "School fee",
            field: "fee",
            type: 'currency',
            filtering: false,
            currencySetting: {currencyCode: "LKR", minimumFractionDigits: 2, sorting: false}
        }];

    return (<div className="App">
        <h1 align="center">React-App</h1>
        <h4 align='center'>Material Table</h4>
        <div style={{
            display: "flex", justifyContent: "center",  // Center horizontally
            alignItems: "center",      // Center vertically           // Adjust the height as needed
        }}>
            <MaterialTable
                title="Employee Data"
                data={tableData}
                columns={columns}
                // options={{ sorting: false, search: false, searchText: "raj", searchFieldAlignment: "left" }}

                //adding data to table
                editable={{
                    onRowAdd: (newRow) => new Promise((resolve, reject) => {
                        setTableData([...tableData, newRow]);

                        setTimeout(() => resolve(), 500);
                    }), onRowUpdate: (newRow, oldData) => new Promise((resolve, reject) => {
                        const updatedData = [...tableData]
                        updatedData[oldData.tableData.id] = newRow;
                        setTableData(updatedData);
                        console.log(newRow, oldData);
                        setTimeout(() => resolve(), 500);
                    }), onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
                        const updatedData = [...tableData];
                        updatedData.splice(selectedRow.tableData.id, 1);
                        setTableData(updatedData);
                        setTimeout(() => resolve(), 500);
                    })
                }}

                //if this button shows in table row
                // actions={[{
                //     icon: () => <button>Click here</button>, tooltip: "Click me", onClick: (e,data) => console.log(data);
                // }]}

                actions={[{
                    icon: () => <CloudDownloadIcon/>,
                    tooltip: "Click me",
                    onClick: (e, data) => console.log(data),
                    isFreeAction: true //this one is default false but if i true it will be shown on top of the table
                }]}

                onSelectionChange={(selectedRows) => console.log(selectedRows)}

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
                    actionsColumnIndex: -1,
                    selection: true,//showing check box
                    showSelectAllCheckbox: false,//disabling table header checkbox
                    //if we can disable any rows we want like this
                    // selectionProps: rowData => ({
                    //     disabled: rowData.name === "Raj", color: "primary"
                    // }),
                    columnsButton: true,//we can manage table columns using this
                    grouping: true,//we can group using table header
                    // sorting: false,  // If you want to disable sorting
                    // filtering: true,  // If you want to enable filtering
                    // rowStyle: (data, index) => index % 2 === 0 ? {background: "yellow"} : null,
                    headerStyle: {background: "green",fontStyle:"italic"}
                }}
                icons={{ Add: () => <AddIcon/> }}//we can customize default table icons like this
            />
        </div>
    </div>);
}

//TODO 39.12

export default App;
