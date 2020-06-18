import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import format from 'date-fns/format';
import koLocale from 'date-fns/locale/ko';

export const formatDate = (date: string): string => {
  const now = Date.now();
  const diff = now - new Date(date).getTime();
  const time = new Date(date);
  // less than 5 minutes
  if (diff < 1000 * 60 * 5) {
    return '방금 전';
  }
  if (diff < 1000 * 60 * 60 * 24) {
    return formatDistanceToNow(time, { addSuffix: true, locale: koLocale });
  }
  if (diff < 1000 * 60 * 60 * 36) {
    return '어제';
  }
  if (diff < 1000 * 60 * 60 * 24 * 7) {
    return formatDistanceToNow(time, { addSuffix: true, locale: koLocale });
  }
  return format(time, 'yyyy년 M월 d일');
};
