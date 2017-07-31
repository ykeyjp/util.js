export type EventFunctionType = (e: any) => void;

export interface IFunctionMap {
  [key: string]: EventFunctionType[];
}
