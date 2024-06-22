export interface BaseRepository<T> {
  findById(id: string): Promise<T | null>;
  save(entity: T): Promise<void>;
  deleteById(id: string): Promise<void>;
}