import { DataStorage } from "./DataStorage";

export class SessionDataStorage<
  T extends { id: string }
> extends DataStorage<T> {
  constructor(schemaName: string) {
    super(schemaName);
  }

  private getSessionKey(id: string) {
    return `${this.schemaName}-${id}`;
  }

  private checkItemExisted(id: string) {
    const key = this.getSessionKey(id);
    const product = sessionStorage.getItem(key);
    return product !== null;
  }

  async getItem(id: string) {
    const key = this.getSessionKey(id);
    const token = sessionStorage.getItem(key);
    console.log(token);
    if (token === null) return undefined;
    return (await JSON.parse(token)) as T;
  }

  async addItem(data: Omit<T, "id">) {
    const id = crypto.randomUUID();
    if (this.checkItemExisted(id)) return false;
    const newKey = this.getSessionKey(id);
    const token = JSON.stringify({ id, ...data });
    console.log(newKey, token);
    sessionStorage.setItem(newKey, token);
    return true;
  }

  async removeItem(id: string) {
    if (!this.checkItemExisted(id)) return false;
    const key = this.getSessionKey(id);
    sessionStorage.removeItem(key);
    return true;
  }

  private async getAllItems() {
    const items: T[] = [];
    for (let i = 0; i < sessionStorage.length; i++) {
      let key = sessionStorage.key(i) as string;
      const token = sessionStorage.getItem(key) as string;
      const item = (await JSON.parse(token)) as T;
      items.push(item);
    }
    return items;
  }

  async getPagination(arg: {
    pageSize: number;
    pageIndex: number;
  }): Promise<T[]> {
    const { pageSize, pageIndex } = arg;
    const items = await this.getAllItems();
    console.log(items);
    let start = pageIndex * pageSize;
    let end = start + pageSize;
    return items.slice(start, end);
  }
}
