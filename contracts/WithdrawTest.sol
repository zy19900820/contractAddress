// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract WithdrawTest is Ownable {
    constructor() payable {

    }

    // withdraw eth or erc20
    function withdraw() external onlyOwner returns (bytes memory result) {
        bool success;
        (success, result) = msg.sender.call{value: address(this).balance}("");
        if (!success) {
            assembly {
                returndatacopy(0, 0, returndatasize())
                revert(0, returndatasize())
            }
        }
    }

    function withdrawErc20(address tokenAddress) external onlyOwner {
        uint total = IERC20(tokenAddress).balanceOf(address(this));
        IERC20(tokenAddress).transfer(msg.sender, total);
    }

    receive() external payable {

    }
}