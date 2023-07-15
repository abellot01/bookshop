using my.bookshop as my from '../db/data-model';

@requires: 'authenticated-user'
service CatalogService {
    @requires: 'Admin'
    entity Books as projection on my.Books;
}
