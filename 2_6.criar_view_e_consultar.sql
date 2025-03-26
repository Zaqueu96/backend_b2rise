create view monthly_summary  
as 
select 
	account_id,
	DATE_FORMAT(transaction_date,"%c") as mes,
	sum(amount) as total
	from transactions
	group by account_id, mes;

## Consulta
select * from monthly_summary where total > 10000;