export const formatDate = (time: string) => {
  if(!time) return ''
  return new Date(time).toLocaleDateString('pt', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}

export const formatTime = (time: string) => {
  if(!time) return ''
  return new Date(time).toLocaleTimeString('pt', {
    hour: '2-digit',
    minute: '2-digit',
  })
}