// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./Collection.sol";

contract CollectionFactory {
    uint256 private currentCollectionId = 0;

    string public metadataUrl;
    mapping(uint256 => Collection) public collections;


    constructor(string memory _metadataUrl){
        metadataUrl = _metadataUrl;
    }

    function createCollection(string calldata _name, string calldata _symbol) public {
        uint256 nextCollectionId = _getCollectionId();
        Collection collection = new Collection(_name, _symbol, msg.sender, nextCollectionId, metadataUrl);
        collections[nextCollectionId] = collection;
        _incrementCollectionId();
    }

    function _getCollectionId() private view returns (uint256) {
        return currentCollectionId + 1;
    }

    function _incrementCollectionId() private {
        currentCollectionId++;
    }

}