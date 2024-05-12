import { asyncStorage } from "./implementation/asyncStorage";

export interface Storage {
  getItem: <T = unknown>(key: string) => Promise<T | null>;
  setItem: <T>(key: string, valor: T) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}

export let storage:Storage = asyncStorage;