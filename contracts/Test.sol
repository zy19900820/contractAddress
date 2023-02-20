// SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.3;

contract Test {
    address public _sender;

    constructor() {
        _sender = msg.sender;
    }
}