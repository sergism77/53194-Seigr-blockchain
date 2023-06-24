class MemoryStoragePool {
    private storagePool: Record<string, any>;
  
    constructor() {
      this.storagePool = {};
    }
  
    public get(key: string): any {
      return this.storagePool[key];
    }
  
    public set(key: string, value: any): boolean {
      this.storagePool[key] = value;
      return true;
    }
  
    public delete(key: string): boolean {
      delete this.storagePool[key];
      return true;
    }
  
    public toString(): string {
      return 'Memory Storage Pool: \n' + 'Storage Pool: ' + this.storagePool + '\n';
    }
  
    public print(): void {
      console.log(this.toString());
    }
  }
  
  class MemoryStoragePoolWrapper {
    private memoryStoragePool: MemoryStoragePool;
  
    constructor() {
      this.memoryStoragePool = new MemoryStoragePool();
    }
  
    public get(key: string): any {
      return this.memoryStoragePool.get(key);
    }
  
    public set(key: string, value: any): boolean {
      return this.memoryStoragePool.set(key, value);
    }
  
    public delete(key: string): boolean {
      return this.memoryStoragePool.delete(key);
    }
  
    public toString(): string {
      return (
        'Memory Storage Pool: \n' +
        'Memory Storage Pool: ' +
        this.memoryStoragePool +
        '\n'
      );
    }
  
    public print(): void {
      console.log(this.toString());
    }
  }
  
  export { MemoryStoragePoolWrapper as MemoryStoragePool };
  export { MemoryStoragePool }; // Export the original MemoryStoragePool class separately
  