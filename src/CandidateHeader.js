import React, { Component } from 'react'
import './Table.css'

const CandidateInfo = () => {
    return (
        <div class="candidateInfo">
            <span class="candidate">CANDIDATE</span>
            <h2 class="candidateName">Roy Cooper</h2>
            <p><strong>Current Office:</strong> </p>
            <p><strong>Last Contest:</strong> </p>
            <p><strong>Associated Candidate PAC:</strong> </p>
        </div>
    )
}

class CandidateHeader extends Component {
    render() {
        return (
            <CandidateInfo />
        )
    }
}

export default CandidateHeader