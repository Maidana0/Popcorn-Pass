-- Inserts para la tabla 'cinema' con ciudades de Argentina y IDs numéricos
insert into cinema (id,name,city,direction,state, active) values
( 1, 'Cinemacenter' , 'San Fernando del Valle de Catamarca' , 'Intendente Mamerto Medina 220', 'Catamarca', 1),
(2, 'Centro Cultural San Agustín' , 'Santa Maria' , 'San Martin 173' ,'Catamarca', 1),
(3, 'Los Cines De La Costa','Resistencia', 'Av. Sarmiento 2600','Chaco', 1),
(4,'Deborah Jones De Williams','Sarmiento','Reg. Inf. Mec. 25 Esquina 20 De Junio', 'Chubut', 1),
(5, 'Fantasio','Bella Vista','Reg. Inf. Mec. 25 Esquina 20 De Junio', 'Corrientes', 1),
(6, 'Luna De Avellaneda', 'General Obligado', 'Av.Santa Fe 1290' ,'Santa Fe', 1),
(7, 'Hoyts', 'San Isidro 656' ,'Buenos Aires', 'Perez Reverte 555', 1),
(8 , 'Atlantic', 'Villa Gesell', 'Villa Gesell 2300','Buenos Aires', 1),
(9 , 'Centro Cine Teatro Español','Chacabuco','Corrientes 242', 'Buenos Aires', 1),
(10, 'Cine Teatro Sociedad Italiana','Maipu', 'Av.Maipu 1456', 'Buenos Aires', 1),
(11 , 'Cpm Cinemas Catan Shopping','La Matanza', 'Huo del Carril 1221', 'Buenos Aires', 1),
(12 , 'Cine San Martin', 'Las Flores', 'Las Flores 2121' , 'Buenos Aires', 1);


-- Inserts para la tabla 'screen' con IDs numéricos
INSERT INTO ticketcine.screen (id, active, name, cinema_id, screening)
VALUES
    (1, 1, 'Screen 1', 1, 'Screening 1'),
    (2, 1, 'Screen 2', 1, 'Screening 2'),
    (3, 1, 'Screen 3', 1, 'Screening 3'),
    (4, 1, 'Screen 4', 1, 'Screening 4'),
    (5, 1, 'Screen 5', 1, 'Screening 5'),
    (6, 1, 'Screen 6', 2, 'Screening 6'),
    (7, 1, 'Screen 7', 2, 'Screening 7'),
    (8, 1, 'Screen 8', 2, 'Screening 8'),
    (9, 1, 'Screen 9', 2, 'Screening 9'),
    (10, 1, 'Screen 10', 3, 'Screening 10'),
    (11, 1, 'Screen 11', 3, 'Screening 11'),
    (12, 1, 'Screen 12', 3, 'Screening 12'),
    (13, 1, 'Screen 13', 4, 'Screening 13'),
    (14, 1, 'Screen 14', 4, 'Screening 14'),
    (15, 1, 'Screen 15', 4, 'Screening 15');


ALTER TABLE movie MODIFY COLUMN description VARCHAR(10000); -- Ajusta el tamaño según sea necesario