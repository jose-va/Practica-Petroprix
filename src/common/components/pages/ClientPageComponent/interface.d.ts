export interface ClientType {
  id: string;
  name: string;
  email: string;
  cifNifNie: string;
}

export type ClientPageComponentProps = {
  data: ClientType[]
}
