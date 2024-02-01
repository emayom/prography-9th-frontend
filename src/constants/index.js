export const filters = [
  {
    name: "order",
    options: [
      {
        value: "NEW",
        name: "최신 등록순",
      },
      {
        value: "ASC",
        name: "이름 오름차순",
      },
      {
        value: "DESC",
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
