export const filters = [
  {
    name: "filter",
    defaultValue: "new",
    options: [
      {
        value: "new",
        name: "최신 등록순",
      },
      {
        value: "asc",
        name: "이름 오름차순",
      },
      {
        value: "desc",
        name: "이름 내림차순",
      },
    ],
    responsive: {
      desktop: true,
      mobile: true,
    },
  },
  {
    name: "column",
    defaultValue: 2,
    options: [
      {
        value: 2,
        name: "2개씩 보기",
      },
      {
        value: 4,
        name: "4개씩 보기",
      },
    ],
    responsive: {
      desktop: true,
      mobile: false,
    },
  },
];
