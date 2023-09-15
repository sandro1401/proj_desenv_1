CREATE TABLE personal (
	id serial not null,
	nome char(255) not null,
	email char(255) not null,
	senha char(255) not null
)

INSERT INTO personal(nome, email, senha) VALUES('Larissa Albani', 'larialbani@gmail.com', 'senha@senha')

SELECT * FROM personal where id = 2
SELECT email FROM personal WHERE email = 'lucascardoso@gmail.com'