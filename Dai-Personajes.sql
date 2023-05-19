USE [master]
GO
/****** Object:  Database [Dai-Personajes]    Script Date: 19/5/2023 11:28:15 ******/
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
/****** Object:  User [alumno]    Script Date: 19/5/2023 11:28:15 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[Peliculas]    Script Date: 19/5/2023 11:28:15 ******/
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
 CONSTRAINT [PK_Peliculas] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Personajes]    Script Date: 19/5/2023 11:28:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Personajes](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[imagen] [varchar](max) NOT NULL,
	[nombre] [varchar](max) NOT NULL,
	[edad] [int] NOT NULL,
	[peso] [int] NOT NULL,
	[historia] [varchar](max) NOT NULL,
 CONSTRAINT [PK_Personajes] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TablaRelacional]    Script Date: 19/5/2023 11:28:15 ******/
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
SET IDENTITY_INSERT [dbo].[Peliculas] ON 

INSERT [dbo].[Peliculas] ([id], [imagen], [titulo], [fechaCreacion], [calificacion]) VALUES (1, N'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg', N'John Wick', CAST(N'2014-10-24' AS Date), 3.6)
INSERT [dbo].[Peliculas] ([id], [imagen], [titulo], [fechaCreacion], [calificacion]) VALUES (2, N'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg', N'El Padrino', CAST(N'2011-11-24' AS Date), 4.1)
INSERT [dbo].[Peliculas] ([id], [imagen], [titulo], [fechaCreacion], [calificacion]) VALUES (3, N'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg', N'Batman: El Caballero De La Noche', CAST(N'2008-07-14' AS Date), 4)
INSERT [dbo].[Peliculas] ([id], [imagen], [titulo], [fechaCreacion], [calificacion]) VALUES (5, N'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/o0lO84GI7qrG6XFvtsPOSV7CTNa.jpg', N'La Milla Verde', CAST(N'2000-03-02' AS Date), 4)
INSERT [dbo].[Peliculas] ([id], [imagen], [titulo], [fechaCreacion], [calificacion]) VALUES (7, N'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg', N'Titanic', CAST(N'1998-02-05' AS Date), 3.8)
SET IDENTITY_INSERT [dbo].[Peliculas] OFF
GO
SET IDENTITY_INSERT [dbo].[Personajes] ON 

INSERT [dbo].[Personajes] ([id], [imagen], [nombre], [edad], [peso], [historia]) VALUES (1, N'https://media.es.wired.com/photos/641dc5fe66d2eb810b4083fa/16:9/w_2560%2Cc_limit/john-wick-changed-movies-forever-culture.jpg', N'John Wick', 50, 79, N'Según lo que vemos en las películas, John Wick es en realidad Jardani Jovonovich, un huérfano que fue acogido y entrenado por la organización criminal de los Ruska Roma, y quien más tarde se convierte en uno de los mejores y más letales asesinos a sueldo.')
INSERT [dbo].[Personajes] ([id], [imagen], [nombre], [edad], [peso], [historia]) VALUES (3, N'https://www.lavanguardia.com/files/article_main_microformat/uploads/2020/11/03/5fa1463b1985c.jpeg', N'Michael Corleone', 30, 72, N'Michael es un marine condecorado con la Cruz de la Armada y la Estrella de Plata, así como el hijo de Don Vito Corleone, el jefe de la familia Corleone. Michael al principio del relato es un joven universitario bajo los estímulos de su padre, ya que este desea un gran futuro laboral para su hijo. Pero Michael decide contradecir los planes que su padre tenía preparados para él y decide alistarse en el Cuerpo de Marines de los Estados Unidos. Su familia, a pesar de estar muy descontenta con la decisión de Michael, continúa apoyándole con la esperanza de que cuando Michael acabara el servicio militar continuase con sus estudios. Sin embargo, poco después de que acabe su carrera militar, su padre es tiroteado por unos enemigos de una familia rival de los Corleone. Entonces Michael decide vengarse de los que intentaron asesinar a su padre y asesina a Sollozzo y al capitán McCluskey. Debido a ello, tiene que escapar del país durante casi un año para que la familia Tattaglia no atente contra él como venganza. Una vez todo solucionado, Michael vuelve a casa y se convierte en el jefe de los Corleone. Se casa con Kay Adams, con la que tendrá dos hijos: Anthony y Mary. Poco después de la muerte de su padre decide trasladar todos sus negocios a Las Vegas y allí multiplica los beneficios de la familia. En el año 1979, junto con la Iglesia, organiza una asociación destinada a aliviar la pobreza del mundo (especialmente en Sicilia). La asociación se llamaría Fundación Corleone, y Michael decidió donar una gran cantidad de dinero a la Iglesia con la esperanza de aportar a la ayuda de las familias pobres. Todas estas obras caritativas se debían a que Michael se arrepentía de sus numerables pecados como jefe de una organización criminal. Entonces creía que ayudando a la humanidad, aliviaría sus remordimientos. Michael llevó sus últimos negocios junto con el Vaticano y vendió todos los hoteles y casinos que había levantado en Las Vegas años atrás. Su hija Mary es asesinada y Michael se traslada a Sicilia a vivir, donde fallecería años después debido a su diabetes, que le había acompañado casi toda la vida.')
INSERT [dbo].[Personajes] ([id], [imagen], [nombre], [edad], [peso], [historia]) VALUES (4, N'https://elgolocine.files.wordpress.com/2023/04/dkr1.0.jpeg', N'Bruce Wayne', 24, 90, N'Batman es la identidad secreta de Bruce Wayne, un empresario multimillonario, galán y filántropo. Presenció el asesinato de sus padres cuando era niño lo marcó profundamente y lo llevó a entrenarse en la perfección física e intelectual para ponerse un disfraz de murciélago con el fin de combatir el crimen.')
INSERT [dbo].[Personajes] ([id], [imagen], [nombre], [edad], [peso], [historia]) VALUES (6, N'https://media.gq.com.mx/photos/5f5250fb4464f9b88fb264c7/1:1/w_1951,h_1951,c_limit/GREEN.jpg', N'John Coffey', 43, 142, N'John Coffey es condenado a muerte después de ser acusado de violar y matar a niñas (un crimen que es evidente que no cometió), lo que hace que los oficiales de la prisión lo vean como un monstruo, pero Coffey tiene una habilidad especial que poco a poco va cambiando la vida y la forma de pensar de todos a su alrededor.')
INSERT [dbo].[Personajes] ([id], [imagen], [nombre], [edad], [peso], [historia]) VALUES (7, N'https://s.yimg.com/ny/api/res/1.2/IKxicrSyiHepj00ST3Do1g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTYwNDtoPTQxOQ--/https://media.zenfs.com/en-US/homerun/hello_giggles_454/5285d10dcb8b90dcd8c08ee62c0c9aaf', N'Jack Dawson', 23, 75, N'Jack Dawson abordó el RMS Titanic el 10 de abril de 1912. Era un artista pobre de tercera clase y solo pudo abordar el barco después de ganar boletos en un afortunado juego de póker, junto con Fabrizio.')
SET IDENTITY_INSERT [dbo].[Personajes] OFF
GO
SET IDENTITY_INSERT [dbo].[TablaRelacional] ON 

INSERT [dbo].[TablaRelacional] ([id], [id_peliculas], [id_personajes]) VALUES (1, 1, 1)
INSERT [dbo].[TablaRelacional] ([id], [id_peliculas], [id_personajes]) VALUES (2, 2, 3)
INSERT [dbo].[TablaRelacional] ([id], [id_peliculas], [id_personajes]) VALUES (3, 3, 4)
INSERT [dbo].[TablaRelacional] ([id], [id_peliculas], [id_personajes]) VALUES (4, 5, 6)
INSERT [dbo].[TablaRelacional] ([id], [id_peliculas], [id_personajes]) VALUES (5, 7, 7)
SET IDENTITY_INSERT [dbo].[TablaRelacional] OFF
GO
USE [master]
GO
ALTER DATABASE [Dai-Personajes] SET  READ_WRITE 
GO

