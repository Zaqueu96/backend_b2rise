select  
	count(id) as recorrencia,
	email
from 
	users 
group by email;