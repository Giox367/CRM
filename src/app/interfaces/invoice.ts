export interface Invoice {
  id: number;
  data: Date;
  numero: number;
  anno: number;
  importo: number;
  stato: string;
  cliente: { id: number };
  dataInserimento: Date;
  dataUltimaModifica: Date;
}
