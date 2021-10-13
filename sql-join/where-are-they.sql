select    "addresses"."line1",
          "addresses"."district",
          "cities"."name"
from      "cities"
join      "addresses" using ("cityId");
