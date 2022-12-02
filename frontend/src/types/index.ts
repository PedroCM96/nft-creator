export type Address = `0x${string}`

export type Nft = {
    address: Address,
    serialNumber: number,
    metadata: Record<string, string | number>
}