using my.bookshop as my from '../db/data-model';

//@requires: 'authenticated-user'
service CatalogService {
    //@requires: 'Admin'
    //@restrict: [{ grant: 'READ', where: 'STOCK > 200'}]
    entity Books as projection on my.Books;

    //@requires: 'Admin'
    entity Genres as projection on my.Genres;

    //@requires: 'Admin'
    entity T001 as projection on my.T001;

    //@requires: 'Admin'
    function sleep() returns Boolean;

    //@requires: 'Admin'
    function books() returns Boolean;

    //@requires: 'Admin'
    function insert() returns Boolean;

    //@requires: 'Admin'
    function newgenre(id: Integer, name: String) returns Boolean;
}
