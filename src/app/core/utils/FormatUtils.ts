export class FormatUtils {
  static formatDate(date: Date, format: string): string {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();

      switch (format) {
          case 'YYYY-MM-DD':
              return `${year}-${month}-${day}`;
          case 'DD/MM/YYYY':
              return `${day}/${month}/${year}`;
          default:
              return date.toDateString();
      }
  }

  static capitalizeFirstLetter(string: string): string {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
}