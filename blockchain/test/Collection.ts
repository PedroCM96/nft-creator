import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat"
import { Collection } from "../typechain-types";


describe("Collection", async () => {

    const metadataUrl = "https://www.amazing-url.com/"
    const name = "Super Rat";
    const symbol = "SRA";
    const collectionId = 1;

    const deployContract = async (): Promise<{ collectionContract: Collection, deployer: SignerWithAddress, owner: SignerWithAddress, otherAccount: SignerWithAddress}> => {
        const [deployer, owner, otherAccount] = await ethers.getSigners();
        const CollectionContract = await ethers.getContractFactory("Collection");
        const collectionContract = await CollectionContract.deploy(name, symbol, owner.getAddress(), collectionId, metadataUrl);
    
        return { collectionContract, deployer, owner, otherAccount };
    }

    describe("Deploy stage", () => {
        it("Metadata Url should be setted correctly", async () => {
            const tokenId = 1;
            const { collectionContract } = await deployContract();
            const uri = await collectionContract.tokenURI(tokenId);
            expect(uri).to.equal(`${metadataUrl}${collectionId}/${tokenId}`)
        });
    });

    describe("Minting", () => {
        it("Deployer can't mint NFTs", async () => {
            const { collectionContract, deployer, otherAccount } = await deployContract();
            await expect(collectionContract.connect(deployer).mintTo(otherAccount.address)).to.be.revertedWith("Only owner is allowed to mint NFTs");
        });

        it("Other account can't mint NFTs", async () => {
            const { collectionContract, deployer, otherAccount } = await deployContract();
            await expect(collectionContract.connect(otherAccount).mintTo(deployer.address)).to.be.revertedWith("Only owner is allowed to mint NFTs");
        });

        it("Owner account can mint NFTs", async () => {
            const { collectionContract, owner, otherAccount } = await deployContract();
            await collectionContract.connect(owner).mintTo(otherAccount.address);
            expect(await collectionContract.balanceOf(otherAccount.address)).to.equal(1);
        });
    });

    describe("Change ownership", () => {
        it("Not owner can't update the owner", async () => {
            const { collectionContract, deployer, otherAccount: newOwner } = await deployContract();
            await expect(collectionContract.connect(deployer).setOwner(newOwner.address)).to.be.revertedWith("Only owner is allowed to mint NFTs")
        });

        it("Owner can update the owner", async () => {
            const { collectionContract, owner, otherAccount: newOwner } = await deployContract();
            await collectionContract.connect(owner).setOwner(newOwner.address);
            expect(await collectionContract.owner()).to.equal(newOwner.address);
        });
    });
    
})