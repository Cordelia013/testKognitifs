CREATE DATABASE IF NOT EXISTS `FullCalendar`; 
CREATE USER IF NOT EXISTS cordelia_guims@localhost IDENTIFIED BY 'BOUBOU'; 
GRANT ALL ON `FullCalendar`.* TO cordelia_guims@localhost; 