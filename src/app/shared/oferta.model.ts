export class Oferta {
  public id: number
  public categoria: string
  titulo: string
  descricao_oferta: string
  anunciante: string
  valor: number
  destaque: boolean
  imagens: Array<object>
}