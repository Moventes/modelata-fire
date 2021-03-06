import 'reflect-metadata';
import { IMFStorageOptions } from '../interfaces/mf-storage-options.interface';

/**
 * Declares the decorated property as a file property (to upload in storage)
 *
 * @param options (deleteOnDelete, deletePreviousOnUpdate)
 */
export function StorageProperty(options: IMFStorageOptions): any {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata(
      'storageProperty',
      options,
      target,
      propertyKey
    );
  };
}
