import {Block, BlockType} from 'web3/types';

function test(target: any, name: string, descriptor: PropertyDescriptor): void {

}

export class Main  {
    @test
    public async getBlock(number: BlockType): Promise<Block> {

        return null;
    }
}
