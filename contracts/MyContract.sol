// contracts/MyContract.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract MyContract {
    event State(uint256 indexed stateStatus, string indexed name);
    event Amount(uint256 indexed amount);
    event Timed(uint256 indexed time);

    mapping(address => uint256) public balances;

    function deposit() external payable {
        emit State(msg.value % 2, msg.value % 2 == 0 ? "Buy" : "Sell");
        emit Amount(balances[msg.sender]);
        emit Timed(block.timestamp);
    }
}
