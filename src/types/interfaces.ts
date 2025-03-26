export interface UserInfo {
  name: string | null
  role: string | null
  password: string | null
  id: number | null
}

export interface EventData {
  timestamp: string;
  registrar_handle: string;
}

export interface Events {
  registered: EventData;
  transferred: EventData | null;
  updated: EventData | null;
  unregistered: EventData | null;
}

export interface StateFlags {
  name: string,
  active: boolean,
  description: string
}

export interface Publish {
  organization: boolean,
  name: boolean
}
export interface Contacts{
  handle: string,
  organization: string,
  name: string,
  publish: Publish
}