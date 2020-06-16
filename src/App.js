import React, { Component } from 'react'
import RcptsTable from './Table'
import data from './data/cooperRcpts2019.json'
import CandidateHeader from './CandidateHeader'

class App extends Component {
    render() {
        const cooperRcpts2019 = data

        return (
            <div className="container">
                <CandidateHeader />
                <RcptsTable cooperData={cooperRcpts2019} />
            </div>
        )
    }
}

export default App