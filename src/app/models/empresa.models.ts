export interface Empresa {
  abertura: string;
  situacao: string;
  tipo: string;
  nome: string;
  fantasia: string;
  porte: string;
  natureza_juridica: string;
  atividade_principal: Atividade[];
  atividades_secundarias: Atividade[];
  qsa: Socio[];
  logradouro: string;
  numero: string;
  municipio: string;
  bairro: string;
  uf: string;
  cep: string;
  telefone: string;
  data_situacao: string;
  cnpj: string;
  ultima_atualizacao: string;
  status: string;
  complemento: string;
  email: string;
  efr: string;
  motivo_situacao: string;
  situacao_especial: string;
  data_situacao_especial: string;
  capital_social: string;
  simples: SimplesInfo;
  simei: SimeiInfo;
  extra: any;
  billing: BillingInfo;
}

export interface Atividade {
  code: string;
  text: string;
}

export interface Socio {
  nome: string;
  qual: string;
}

export interface SimplesInfo {
  optante: boolean;
  data_opcao: string | null;
  data_exclusao: string | null;
  ultima_atualizacao: string;
}

export interface SimeiInfo {
  optante: boolean;
  data_opcao: string | null;
  data_exclusao: string | null;
  ultima_atualizacao: string;
}

export interface BillingInfo {
  free: boolean;
  database: boolean;
}
