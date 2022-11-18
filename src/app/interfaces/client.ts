export interface Client {
  id: number;
  ragioneSociale: string;
  partitaIva: number;
  tipoCliente: string;
  email: string;
  pec: string;
  telefono: string;
  nomeContatto: string;
  cognomeContatto: string;
  telefonoContatto: string;
  emailContatto: string;
  indirizzoSede: {
    via: string;
    civico: string;
    cap: string;
    comune: {
      nome: string;
      provincia: string;
    };
  };
}
