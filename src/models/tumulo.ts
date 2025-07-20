export interface Tumulo {
  id?: number;
  numero: string;
  quadra: string;
  status: 'livre' | 'ocupado' | 'manutencao';
}
