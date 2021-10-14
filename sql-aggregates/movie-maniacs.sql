select   sum("p"."amount") as "totalAmountPaid",
         "firstName",
         "lastName"
from     "customers"
join     "payments" as "p" using ("customerId")
group by "customerId"
order by "totalAmountPaid" desc;
