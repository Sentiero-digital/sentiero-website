export type GetLocaleDateParams = {
  lang?: string,
  date?: Date | string,
  options?: Intl.DateTimeFormatOptions
};

export const getLocalDate = (props: GetLocaleDateParams) => {
  const {
    lang = 'it-IT',
    date = new Date(),
    options = {},
  } = props

  const dateObj = new Date(date)

  if (isNaN(dateObj.getTime())) {
    console.error('Error: date passed is invalid', dateObj)
    return ``
  }

  return new Intl.DateTimeFormat(lang, options).format(dateObj)
}