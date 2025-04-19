
/**
 * Formats a date string into a localized date format
 * @param dateString - The date string to format
 * @param locale - The locale to use for formatting (default: 'en-US')
 * @returns Formatted date string
 */
export const formatDate = (dateString: string, locale = 'en-US') => {
  return new Date(dateString).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
