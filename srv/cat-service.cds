using my.bookshop as my from '../db/data-model';

using {CV_SESSION_INFO} from '../db/data-model';

//@requires: 'authenticated-user'
service CatalogService {
    //@requires: 'Admin'
    //@restrict: [{ grant: 'READ', where: 'STOCK > 200'}]
    entity Books as projection on my.Books;

    entity Genres as projection on my.Genres;

    entity T001 as projection on my.T001;

    function sleep() returns Boolean;

    function books() returns Boolean;

    function insert() returns Boolean;

    function newgenre(id: Integer, name: String) returns Boolean;

    function deletegenre(id: Integer) returns Boolean;

    function truncategenres() returns Boolean;

    entity SessionInfo as select * from CV_SESSION_INFO;


}
