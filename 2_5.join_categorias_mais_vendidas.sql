select c.name, p.name,sum(s.quantity) as totalVendido from products as p 
inner join categories as c on c.id = p.category_id
inner join sales as s on p.id = s.product_id
group by c.name 
having totalVendido > 100;