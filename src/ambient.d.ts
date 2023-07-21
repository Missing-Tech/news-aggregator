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

type Account = [
  name: string,
  last_login: Date,
  email: string,
  signup_date: Date,
  profile_picture: string
];
