export const WEEK_DAYS = {
  sun: { long: "sunday", short: "sun" },
  mon: { long: "monday", short: "mon" },
  tue: { long: "tuesday", short: "tue" },
  wed: { long: "wednesday", short: "wed" },
  thu: { long: "thurday", short: "thu" },
  fri: { long: "friday", short: "fri" },
  sat: { long: "saturday", short: "sat" },
};

export const CALENDAR_MODE = {
  W: "week",
  M: "month",
  Y: "year",
};

export const LANGUAGES = {
  english: {
    label: "english",
    tagColor: "",
    index: 0,
  },
  myanmar: {
    label: "myanmar",
    tagColor: "",
    index: 1,
  },
  mon: {
    label: "mon",
    tagColor: "",
    index: 3,
  },
  shan: {
    label: "shan",
    tagColor: "",
    index: 4,
  },
  karen: {
    label: "karen",
    tagColor: "",
    index: 5,
  },
  // kachin: {
  //   label: "kachin",
  //   tagColor: "",
  //   index: 6,
  // },
} as const;

export const EVENT_CALENDARS = {
  publicHolidays: {
    label: "public holidays",
    tagColor: "#7cb342",
  },
  myanmar: {
    label: "mon",
    tagColor: "#f4511e",
  },
  international: {
    label: "mon",
    tagColor: "#039be5",
  },
  mon: {
    label: "mon",
    tagColor: "#f6bf26",
  },
  shan: {
    label: "shan",
    tagColor: "#d81b60",
  },
  karen: {
    label: "karen",
    tagColor: "#007b83",
  },
  kachin: {
    label: "kachin",
    tagColor: "#9e69af",
  },
} as const;
