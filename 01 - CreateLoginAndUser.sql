USE [master]
GO
CREATE LOGIN [Liam] WITH PASSWORD=N'Iony', DEFAULT_DATABASE=[Dai-Personajes], CHECK_EXPIRATION=OFF, CHECK_POLICY=OFF
GO

USE [Dai-Personajes]
GO
CREATE USER [Liam] FOR LOGIN [Liam]
GO
USE [Dai-Personajes]
GO
ALTER ROLE [db_owner] ADD MEMBER [Liam]
GO