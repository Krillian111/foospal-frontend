export const ACTION_PARSE_CSV = 'ACTION_PARSE_SINGLES_CSV';

export const parseSinglesCsv = (csvAsText) => ({
    type : ACTION_PARSE_CSV,
    csvAsText,
})