select c.*, count(o.id) as totalCompras from customers as c 
	inner join 
		orders as o 
where o.customer_id = c.id
group by c.id;
