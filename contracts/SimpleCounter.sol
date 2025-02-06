// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0 <0.9.0;

contract SimpleCounter {
    uint256 private counter = 0;

    function getCounter() public view returns (uint256) {
        return counter;
    }

    function addCounter() public {
        counter++;
    }

    function subtractCounter() public {
        counter--;
    }

    function checkCounter() public view returns (bool) {
        return counter == 0;
    }
}
