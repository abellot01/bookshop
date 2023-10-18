context my.bookshop {

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
}

@cds.persistence.exists 
@cds.persistence.calcview 
entity CV_SESSION_INFO {
key     ITEM: String(512)  @title: 'ITEM: ITEM' ; 
        VALUE: String(512)  @title: 'VALUE: VALUE' ; 
}