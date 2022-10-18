// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract NUM2 {
    uint private num;

    function update(uint _num) public{
        num=_num;
    }

    function get() public view returns(uint)
    {
        return num;
    }
    function increment() public {
        num+=1;
    }
}