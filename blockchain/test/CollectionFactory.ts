import { ethers } from "hardhat";
import { CollectionFactory } from "../typechain-types";
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from "chai";

describe("CollectionFactory", () => {
    const metadataUrl = "https://www.amazing-url.com/"

    const deployContract = async (): Promise<{collectionFactoryContract: CollectionFactory,  user: SignerWithAddress}> => {
        const [user] = await ethers.getSigners();
        const CollectionFactoryContract = await ethers.getContractFactory("CollectionFactory");
        const collectionFactoryContract = await CollectionFactoryContract.deploy(metadataUrl);

        return {user, collectionFactoryContract}
    }

    describe("Deploy stage", () => {
        it("Metadata Url should be setted correctly", async () => {
            const {collectionFactoryContract} = await deployContract();
            expect(await collectionFactoryContract.metadataUrl()).to.equal(metadataUrl);
        });
    })
})