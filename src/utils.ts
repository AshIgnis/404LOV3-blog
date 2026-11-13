export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
}

export function readingTime(content: string | undefined) {
  const characters = content?.replace(/\s/g, '').length ?? 0;
  return `${Math.max(1, Math.ceil(characters / 450))} 分钟阅读`;
}
