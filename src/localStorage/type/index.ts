import { Dictionaries } from "../enum/index";

export type Key = string;
export type Expire = Dictionaries.permanent | number; // 可以接受時間戳記，或者是永久的字串
export interface Result<T> {
  message: string;
  value: T | null;
}
export interface Data<T> {
  value: T;
  [Dictionaries.expire]: Expire;
}
export interface StorageCls {
  get: (key: Key) => Result<any | null>;
  set: <T>(key: Key, value: T, expire: Expire) => void;
  remove: (key: Key) => void;
  clear: () => void;
}
