// import { MMKVStorage } from "./implementation/MMKVStorage";
// import { asyncStorage } from "./implementation/asyncStorage";

export interface Storage {
  getItem: <T = unknown>(key: string) => Promise<T | null>;
  setItem: <T>(key: string, valor: T) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}

export let storage: Storage;

// export let storage:Storage = MMKVStorage;
// export let storage:Storage = asyncStorage;

// injeção de dependência
export function initializeStorage(storageInstance: Storage) {
  storage = storageInstance;
}
