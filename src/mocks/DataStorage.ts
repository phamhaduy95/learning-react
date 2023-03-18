export abstract class DataStorage<DataSchemaType extends { id: string }> {
  schemaName: string;
  constructor(schemaName: string) {
    this.schemaName = schemaName;
  }

  abstract getItem(id: string): Promise<DataSchemaType | undefined>;
  abstract addItem(arg: Omit<DataSchemaType, "id">): Promise<boolean>;
  abstract removeItem(id: string): Promise<boolean>;
  abstract getPagination(arg: {
    pageSize: number;
    pageIndex: number;
  }): Promise<DataSchemaType[]>;
}
