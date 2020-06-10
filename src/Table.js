import React, { Component } from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

const { SearchBar } = Search;

export const donorsGenerator = donorsList => {
    const donors = [];
    for (let i = 0; i < donorsList; i++) {
        donors.push({Name: i, ReceiptTypeDesc: i, Amount: i, FormOfPaymentDesc: i, Date: i, Description: i});
    }
    return donors;
};

const columns = [
    {
        dataField: "Name",
        text: "Donor Name",
        sort: true
    },
    {
        dataField: "ReceiptTypeDesc",
        text: "Donor Type",
        sort: false
    },
    {
        dataField: "Amount",
        text: "Amount",
        sort: true
    },
    {
        dataField: "FormOfPaymentDesc",
        text: "Donation Type",
        sort: false
    },
    {
        dataField: "Date",
        text: "Date",
        sort: true
    },
    {
        dataField: "Description",
        text: "Description",
        sort: false
    }
];

class RcptsTable extends Component {
    render() {
        const { cooperData } = this.props

        return (
            <ToolkitProvider keyField="Name" data={cooperData} columns={columns} search>
                {
                    props => (
                        <div>
                            <SearchBar { ...props.searchProps } />
                            <hr />
                            <BootstrapTable { ...props.baseProps } bootstrap4 keyField="name" data={cooperData} columns={columns} pagination={paginationFactory({ sizePerPage: 10 })}/>
                        </div>
                    )
                }
            </ToolkitProvider>
            
            
        )
    }
}

export default RcptsTable