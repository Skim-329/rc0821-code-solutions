delete from "films"
      where "rating" = 'R'
        and "rating" = 'PG-13'
        and "rating" = 'PG'
returning *;
