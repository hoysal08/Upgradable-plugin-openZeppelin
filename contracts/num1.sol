// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract NUM1 {
    uint private num;

    function update(uint _num) public{
        num=_num;
    }

    function get() public view returns(uint)
    {
        return num;
    }
}