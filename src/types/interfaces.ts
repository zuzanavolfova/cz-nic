export interface UserInfo {
    name: string | null
    role: string | null
    id: number | null
  }
export interface EvendData {
  timestamp: string;
  registrar_handle: string;
}
export interface Events {
  registered: EvendData;
  transfered: EvendData | null;
  updated: EvendData | null;
  unregistred: EvendData | null;
}

export interface StateFlags {
  name: string,
  active: boolean,
  description: string
}