export class Repository<T extends { id: number }> {
  private items: T[] = [];

  // Add new item
  add(item: T): void {
    this.items.push(item);
  }

  // Get all items
  getAll(): T[] {
    return this.items;
  }

  // Find item by ID
  getById(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  // Update item by ID
  update(id: number, updatedItem: Partial<T>): boolean {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.items[index] = { ...this.items[index], ...updatedItem };
      return true;
    }
    return false;
  }

  // Delete item by ID
  delete(id: number): boolean {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }
}
