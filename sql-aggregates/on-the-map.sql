select   "countries"."name",
         count(*) as "numberOfCities"
from     "cities"
join     "countries" using ("countryId")
group by "countries"."name";
