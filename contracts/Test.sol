pragma solidity >=0.8.9;

library Test {
    enum fruit {
        apple,
        orange
    }

    function test(fruit flavor) public pure returns (string memory) {
        if (flavor == fruit.apple) {
            return "apple";
        }
        return "orange";
    }
}
