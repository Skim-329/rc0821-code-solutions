select    "actors"."firstName",
          "actors"."lastName"
from      "castMembers"
join      "films" using ("filmId")
join      "actors" using ("actorId")
where     "title" = 'Jersey Sassy';
