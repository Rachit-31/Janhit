// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CivicIssue {
    struct Issue {
        address reporter;
        string issueHash;
        uint256 timestamp;
    }

    Issue[] public issues;
    event IssueLogged(address indexed reporter, string issueHash, uint256 timestamp);

    function logIssue(string memory _issueHash) public {
        Issue memory newIssue = Issue({
            reporter: msg.sender,
            issueHash: _issueHash,
            timestamp: block.timestamp
        });
        issues.push(newIssue);
        emit IssueLogged(msg.sender, _issueHash, block.timestamp);
    }

    function getIssue(uint256 index) public view returns (address, string memory, uint256) {
        Issue memory i = issues[index];
        return (i.reporter, i.issueHash, i.timestamp);
    }

    function getIssueCount() public view returns (uint256) {
        return issues.length;
    }
}
