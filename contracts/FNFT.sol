// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract Fnft is ERC1155 {
    constructor()
        ERC1155("https://ipfs.io/ipfs/bafybeid5zngd2tlmksagacjydmrmjjxyncba2zqjigjhnoq5t3jirgpxca/{id}.json")
    {}

    function setURI(string memory newuri) public {
        _setURI(newuri);
    }

    // id: token id we want to mint [1,2 or 3]
    // amount: number of fractions we want to own of this nft
    function mint(uint256 id, uint256 amount) public
    {
        require(id <= 3, "Token id does not exist"); //suppose we have only 3 NFTs metadata
        require(id > 0, "Token id does not exist");
        _mint(msg.sender, id, amount, "");
    }

    //overwriting URI function to return file name as string
    function uri(uint256 _tid) override public pure returns (string memory) {
        return string(
            abi.encodePacked(
                "https://ipfs.io/ipfs/bafybeid5zngd2tlmksagacjydmrmjjxyncba2zqjigjhnoq5t3jirgpxca/",
                Strings.toString(_tid),".json"
            )
        );
    }
}


//0x5faE1E2BB81623553A9C216Ee0eCa7D49F82e28F