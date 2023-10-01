namespace my.bookshop;

entity Books {
  key ID : Integer;
  title  : String;
  author : String;
  stock  : Integer;
};

entity Genres {
  key ID : Integer;
  name : String;
};

entity T001 {
  ID : Integer;
  name : String;
};
