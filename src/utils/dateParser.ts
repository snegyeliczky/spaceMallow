import { format, parseISO } from "date-fns";

export const dateParser = (inputDateString: string | undefined): string => {
  if (!inputDateString) {
    return "";
  }
  const inputDate = parseISO(inputDateString);
  return format(inputDate, "yyyy-MM-dd HH:mm");
};
