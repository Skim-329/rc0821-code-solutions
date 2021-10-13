select    "films"."releaseYear",
          "categories"."name"
from      "filmCategory"
join      "films" using ("filmId")
join      "categories" using ("categoryId")
where     "title" = 'Boogie Amelie';
