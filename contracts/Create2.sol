// SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.3;

import "./Test.sol";

contract Create2 {
    address[] public _testAddressList;

    constructor() {
    }

    function create2(bytes32 mySalt) public {
        address new1 = address(new Test{salt:mySalt}());
        _testAddressList.push(new1);
    }

    function getTestAddress(uint256 index) public view returns (address) {
        return _testAddressList[index];
    }
}