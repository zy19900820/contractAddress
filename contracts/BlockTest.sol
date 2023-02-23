// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.3;


contract BlockTest  {
    constructor()  {

    }

    function blockNumber() public view returns (uint256) {
        return block.number;
    }
}