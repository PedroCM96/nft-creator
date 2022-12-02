// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract Collection is ERC721 {
    uint256 private currentTokenId = 0; //Token ID here will start from 1

    uint256 public collectionId;
    string public metadataUrl = "";
    address public owner;


    constructor(
        string memory _name,
        string memory _symbol,
        address _owner,
        uint256 _collectionId,
        string memory _metadataUrl
    ) ERC721(_name, _symbol) {
        owner = _owner;
        metadataUrl = _metadataUrl;
        collectionId = _collectionId;
    }

    /**
     * @dev Mints a token to an address with a tokenURI.
     * @param _to address of the future owner of the token
     */
    function mintTo(address _to) public onlyOwner {
        uint256 newTokenId = _getNextTokenId();
        _mint(_to, newTokenId);
        _incrementTokenId();
    }

    /**
     * @dev calculates the next token ID based on value of _currentTokenId
     * @return uint256 for the next token ID
     */
    function _getNextTokenId() private view returns (uint256) {
        return currentTokenId + 1;
    }

    /**
     * @dev increments the value of _currentTokenId
     */
    function _incrementTokenId() private {
        currentTokenId++;
    }

   function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        return string(abi.encodePacked(metadataUrl, Strings.toString(collectionId), "/", Strings.toString(_tokenId)));
    }

    function setOwner(address _owner) public onlyOwner {
        owner = _owner;
    }

    modifier onlyOwner {
        require(msg.sender == owner, "Only owner is allowed to mint NFTs");
         _;
   }
}
