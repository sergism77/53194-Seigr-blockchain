import {
    Blockchain,
    BlockchainNodeList,
    BlockchainNodeListManager,
    BlockchainNodeListManagerClient,
    BlockchainNodeListManagerServer,
  } from 'SeigrBlockchain';
  
  class MemoryStorageMiner {
    private blockchain: Blockchain;
    private blockchainNodeList: BlockchainNodeList;
    private blockchainNodeListManager: BlockchainNodeListManager;
    private blockchainNodeListManagerClient: BlockchainNodeListManagerClient;
    private blockchainNodeListManagerServer: BlockchainNodeListManagerServer;
  
    constructor() {
      this.blockchain = new Blockchain();
      this.blockchainNodeList = new BlockchainNodeList();
      this.blockchainNodeListManager = new BlockchainNodeListManager(this.blockchainNodeList);
      this.blockchainNodeListManagerClient = new BlockchainNodeListManagerClient(this.blockchainNodeListManager);
      this.blockchainNodeListManagerServer = new BlockchainNodeListManagerServer(this.blockchainNodeListManager);
    }
  
    public toString(): string {
      return (
        'Memory Storage Miner: \n' +
        'Blockchain: ' +
        this.blockchain +
        '\n' +
        'Blockchain Node List: ' +
        this.blockchainNodeList +
        '\n' +
        'Blockchain Node List Manager: ' +
        this.blockchainNodeListManager +
        '\n' +
        'Blockchain Node List Manager Client: ' +
        this.blockchainNodeListManagerClient +
        '\n' +
        'Blockchain Node List Manager Server: ' +
        this.blockchainNodeListManagerServer +
        '\n'
      );
    }
  
    public print(): void {
      console.log(this.toString());
    }
  
    public printBlockchain(): void {
      console.log(this.blockchain.toString());
    }
  
    public printBlockchainNodeList(): void {
      console.log(this.blockchainNodeList.toString());
    }
  
    public printBlockchainNodeListManager(): void {
      console.log(this.blockchainNodeListManager.toString());
    }
  
    public printBlockchainNodeListManagerClient(): void {
      console.log(this.blockchainNodeListManagerClient.toString());
    }
  
    public printBlockchainNodeListManagerServer(): void {
      console.log(this.blockchainNodeListManagerServer.toString());
    }
  }
  
  class MemoryStorageMinerPool {
    private memoryStorageMinerPool: MemoryStorageMinerPool;
  
    constructor() {
      this.memoryStorageMinerPool = new MemoryStorageMinerPool();
    }
  
    public get(key: string) {
      return this.memoryStorageMinerPool.get(key);
    }
  
    public set(key: string, value: any) {
      this.memoryStorageMinerPool.set(key, value);
    }
  
    public has(key: string) {
      return this.memoryStorageMinerPool.has(key);
    }
  
    public delete(key: string) {
      this.memoryStorageMinerPool.delete(key);
    }
  
    public toString(): string {
      return 'Memory Storage Miner Pool: \n' + 'Memory Storage Miner Pool: ' + this.memoryStorageMinerPool + '\n';
    }
  
    public print(): void {
      console.log(this.toString());
    }
  
    public printMemoryStorageMinerPool(): void {
      console.log(this.memoryStorageMinerPool.toString());
    }
  }
  
  export { MemoryStorageMiner, MemoryStorageMinerPool };
  