USE [master]
GO
/****** Object:  Database [Dai-Personajes]    Script Date: 28/4/2023 12:13:03 ******/
CREATE DATABASE [Dai-Personajes]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Dai-Personajes', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\Dai-Personajes.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Dai-Personajes_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\Dai-Personajes_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [Dai-Personajes] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Dai-Personajes].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Dai-Personajes] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Dai-Personajes] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Dai-Personajes] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Dai-Personajes] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Dai-Personajes] SET ARITHABORT OFF 
GO
ALTER DATABASE [Dai-Personajes] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Dai-Personajes] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Dai-Personajes] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Dai-Personajes] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Dai-Personajes] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Dai-Personajes] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Dai-Personajes] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Dai-Personajes] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Dai-Personajes] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Dai-Personajes] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Dai-Personajes] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Dai-Personajes] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Dai-Personajes] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Dai-Personajes] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Dai-Personajes] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Dai-Personajes] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Dai-Personajes] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Dai-Personajes] SET RECOVERY FULL 
GO
ALTER DATABASE [Dai-Personajes] SET  MULTI_USER 
GO
ALTER DATABASE [Dai-Personajes] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Dai-Personajes] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Dai-Personajes] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Dai-Personajes] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Dai-Personajes] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'Dai-Personajes', N'ON'
GO
ALTER DATABASE [Dai-Personajes] SET QUERY_STORE = OFF
GO
USE [Dai-Personajes]
GO
/****** Object:  User [alumno]    Script Date: 28/4/2023 12:13:03 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[Peliculas]    Script Date: 28/4/2023 12:13:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Peliculas](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[imagen] [varchar](max) NOT NULL,
	[titulo] [varchar](max) NOT NULL,
	[fechaCreacion] [date] NOT NULL,
	[calificacion] [float] NOT NULL,
	[personajesAsociados] [varchar](max) NOT NULL,
 CONSTRAINT [PK_Peliculas] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Personajes]    Script Date: 28/4/2023 12:13:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Personajes](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[imagen] [nchar](10) NOT NULL,
	[nombre] [nchar](10) NOT NULL,
	[edad] [nchar](10) NOT NULL,
	[peso] [nchar](10) NOT NULL,
	[historia] [nchar](10) NOT NULL,
	[peliculasOseries] [nchar](10) NOT NULL,
 CONSTRAINT [PK_Personajes] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TablaRelacional]    Script Date: 28/4/2023 12:13:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TablaRelacional](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_peliculas] [int] NOT NULL,
	[id_personajes] [int] NOT NULL,
 CONSTRAINT [PK_TablaRelacional] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
USE [master]
GO
ALTER DATABASE [Dai-Personajes] SET  READ_WRITE 
GO
