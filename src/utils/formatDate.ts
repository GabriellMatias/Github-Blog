import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ptBR from 'date-fns/locale/pt-BR'

// eslint-disable-next-line camelcase
export function formatDate(created_at: string): string {
  return formatDistanceToNow(new Date(created_at), {
    addSuffix: true,
    locale: ptBR,
  })
}
