type Article = {
  title: string;
  published_date: Date;
  url: string;
  byline: string;
  abstract: string;
  subsection: string;
  multimedia: [
    {
      url: string;
    }
  ];
};
