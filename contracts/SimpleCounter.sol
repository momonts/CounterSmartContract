// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0 <0.9.0;

contract SimpleCounter {
    int256 public counter;

    function addCounter() public {
        counter++;
    }

    function subtractCounter() public {
        counter--;
    }
}
