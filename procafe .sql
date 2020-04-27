-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 27, 2020 at 03:28 PM
-- Server version: 8.0.19-0ubuntu5
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `procafe`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetOrders` (IN `orderID` INT)  BEGIN
	SELECT * FROM orders WHERE id = orderID;
	SELECT  OP.id,
			OP.orderId,
			OP.user,
			OP.product_id,
			OP.quantity,
			P.name,
			P.price
	FROM 	orders_products OP
	JOIN 	products P on P.id = OP.product_id
	WHERE 	OP.orderId = orderID;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

CREATE TABLE `addresses` (
  `id` int NOT NULL,
  `user` varchar(256) NOT NULL,
  `address1` varchar(255) NOT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `city` varchar(255) NOT NULL,
  `postal_code` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `addresses`
--

INSERT INTO `addresses` (`id`, `user`, `address1`, `address2`, `city`, `postal_code`, `created_at`, `updated_at`) VALUES
(1, 'tuahil@gmail.com', 'Miguel Barran 7311-A', 'Fracc. Chihuahua', 'Chihuahua', '50000', '2019-10-23 04:52:01', '2019-10-23 04:52:01');

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int NOT NULL,
  `firstname` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `lastname` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `password` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'cafe'),
(2, 'crema'),
(3, 'tes'),
(4, 'jarabe'),
(5, 'salsa'),
(6, 'polvos'),
(7, 'chocolate'),
(8, 'baseNeutra'),
(9, 'desechables'),
(10, 'accesorios'),
(11, 'equipo');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int NOT NULL,
  `customer_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `lastname` varchar(256) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `user` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `customer_name`, `lastname`, `user`, `created_at`, `updated_at`) VALUES
(1, 'Guillermo', 'Moran', 'tuahil@gmail.com', '2019-10-23 04:49:44', '2019-10-23 04:49:44');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int NOT NULL,
  `payment_ID` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `total` float NOT NULL,
  `address_id` int NOT NULL,
  `user` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `order_placed` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `payment_ID`, `total`, `address_id`, `user`, `order_placed`) VALUES
(99, '4TJ69058C00613109', 80, 1, 'tuahil@gmail.com', '2019-11-11 19:25:06'),
(100, '76W98544YV076934C', 510, 1, 'tuahil@gmail.com', '2019-11-11 19:26:43'),
(101, '1NP03501M2841904A', 621, 1, 'tuahil@gmail.com', '2019-11-11 23:42:48'),
(102, '6UK60706PP5927738', 696, 1, 'tuahil@gmail.com', '2019-11-12 01:05:07'),
(103, '6H404423GR802313L', 111, 1, 'tuahil@gmail.com', '2019-11-12 01:10:45'),
(104, '76477710EJ727333R', 222, 1, 'tuahil@gmail.com', '2019-11-13 04:21:52'),
(105, '99X3527522734610N', 1040, 1, 'tuahil@gmail.com', '2019-11-21 01:03:24'),
(106, '82187414DT3110610', 333, 1, 'tuahil@gmail.com', '2019-11-24 19:25:29'),
(107, '6MJ87070PP996823T', 271, 1, 'tuahil@gmail.com', '2019-11-24 19:29:30'),
(108, '6CN40528YG7975443', 1020, 1, 'tuahil@gmail.com', '2019-11-27 00:54:52'),
(109, '9RT81062KX595613B', 80, 1, 'tuahil@gmail.com', '2019-11-27 01:05:54'),
(110, '39F14633CK5510736', 1395, 1, 'tuahil@gmail.com', '2019-11-27 01:24:11'),
(111, '80170190M1879205A', 80, 1, 'tuahil@gmail.com', '2020-04-24 00:14:19'),
(112, '8V094736RG8196440', 140, 1, 'tuahil@gmail.com', '2020-04-24 21:51:42');

-- --------------------------------------------------------

--
-- Table structure for table `orders_products`
--

CREATE TABLE `orders_products` (
  `id` int NOT NULL,
  `orderId` int NOT NULL,
  `user` varchar(256) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `product_id` int NOT NULL,
  `quantity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders_products`
--

INSERT INTO `orders_products` (`id`, `orderId`, `user`, `product_id`, `quantity`) VALUES
(102, 99, 'tuahil@gmail.com', 4, 1),
(103, 100, 'tuahil@gmail.com', 61, 1),
(104, 101, 'tuahil@gmail.com', 34, 1),
(105, 101, 'tuahil@gmail.com', 67, 1),
(106, 102, 'tuahil@gmail.com', 33, 1),
(107, 102, 'tuahil@gmail.com', 62, 1),
(108, 102, 'tuahil@gmail.com', 9, 1),
(109, 103, 'tuahil@gmail.com', 35, 1),
(110, 104, 'tuahil@gmail.com', 37, 2),
(111, 105, 'tuahil@gmail.com', 4, 2),
(112, 105, 'tuahil@gmail.com', 72, 1),
(113, 105, 'tuahil@gmail.com', 47, 1),
(114, 105, 'tuahil@gmail.com', 70, 1),
(115, 106, 'tuahil@gmail.com', 38, 3),
(116, 107, 'tuahil@gmail.com', 38, 1),
(117, 107, 'tuahil@gmail.com', 4, 2),
(118, 108, 'tuahil@gmail.com', 5, 6),
(119, 109, 'tuahil@gmail.com', 4, 1),
(120, 110, 'tuahil@gmail.com', 56, 3),
(121, 111, 'tuahil@gmail.com', 4, 1),
(122, 112, 'tuahil@gmail.com', 72, 1);

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` int NOT NULL,
  `order_id` int NOT NULL,
  `failed` tinyint(1) NOT NULL,
  `transaction_id` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int NOT NULL,
  `name` varchar(250) DEFAULT NULL,
  `catId` int NOT NULL,
  `price` decimal(6,2) NOT NULL,
  `image` varchar(250) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  `stock` int NOT NULL,
  `qty` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `catId`, `price`, `image`, `description`, `stock`, `qty`, `created_at`, `updated_at`) VALUES
(4, 'Fajilla de cartón para vaso de papel', 9, '80.00', '../assets/img/desechables_fajillacarton.jpg', 'Manga de cartón para vaso de papel. Bolsa de 100 pzas.', 5, 1, NULL, NULL),
(5, 'Café en Grano Mezcla Gourmet de la Casa Bernardi', 1, '170.00', '../assets/img/cafe_mezclacasa_bernardi.jpg', 'Café Mezcla Gourmet de la Casa Bernardi', 5, 1, NULL, NULL),
(6, 'Café Molido Descafeinado Bernardi', 1, '165.00', '../assets/img/cafe_descafeinado_bernardi.jpg', 'Café de altura sin cafeína.', 5, 1, NULL, NULL),
(7, 'Café Molido Mezcla Gourmet de la Casa Bernardi', 1, '170.00', '../assets/img/cafe_mezclacasa_bernardi.jpg', 'Café arábigo de altura cosecha de Córdoba, Veracruz.', 5, 1, NULL, NULL),
(8, 'Café soluble Bernardi', 1, '185.00', '../assets/img/cafe_soluble_bernardi.jpg', 'Café instantáneo.', 5, 1, NULL, NULL),
(9, 'Sustituto de Crema Bernardi', 2, '75.00', '../assets/img/sustituto_crema_bernardi.jpg', 'Bolsa de 1 Kg.', 5, 1, NULL, NULL),
(10, 'Blueberry', 3, '90.00', '../assets/img/té_Blueberry.jpg', 'Té de infusión sin cafeína, sabor Blueberry.Caja con 20 sobres.', 5, 1, NULL, NULL),
(11, 'Canela Vainilla', 3, '90.00', '../assets/img/té_canelavainilla.jpeg', 'Té de infusión sabor canela-vainilla.Caja con 18 sobres.', 5, 1, NULL, NULL),
(12, 'Chocolate menta', 3, '90.00', '../assets/img/té_Chocolatementa.jpg', 'Té de infusión sabor chocolate-menta.Caja con 18 sobres.', 5, 1, NULL, NULL),
(13, 'Durazno', 3, '90.00', '../assets/img/té_durazno.jpg', 'Té de infusión sabor durazno.Caja con 20 sobres.', 5, 1, NULL, NULL),
(14, 'Fusion verde-blanco', 3, '90.00', '../assets/img/té_verdeblanco.jpg', 'Té de infusión verde-blanco.Caja con 18 sobres.', 5, 1, NULL, NULL),
(15, 'Jazmin', 3, '90.00', '../assets/img/té_jazmin.jpg', 'Té de infusión sabor Jazmin.Caja con 20 sobres.', 5, 1, NULL, NULL),
(16, 'Limon', 3, '90.00', '../assets/img/té_limón.jpg', 'Té de infusión sabor limon.Caja con 20 sobres.', 5, 1, NULL, NULL),
(17, 'Manzana canela', 3, '90.00', '../assets/img/té_manzanacanela.jpg', 'Té de infusión sin cafeina sabor manzana-canela.Caja con 20 sobres.', 5, 1, NULL, NULL),
(18, 'Manzanilla', 3, '90.00', '../assets/img/té_manzanilla.jpg', 'Té de infusión sin cafeina sabor manzanilla.Caja con 20 sobres.', 5, 1, NULL, NULL),
(19, 'Menta', 3, '90.00', '../assets/img/té_menta.jpg', 'Té de infusión sabor menta.Caja con 20 sobres.', 5, 1, NULL, NULL),
(20, 'Almendra', 4, '111.00', '../assets/img/jarabeSF_almendra.png', 'Saborizante clásico sabor almendra. Botella de 750 ml.', 5, 1, NULL, NULL),
(21, 'Amaretto', 4, '111.00', '../assets/img/jarabe_Amareto.jpg', 'Saborizante clásico sabor amaretto. Botella de 750 ml.', 5, 1, NULL, NULL),
(22, 'Avellana', 4, '111.00', '../assets/img/jarabeSF_avellana.png', 'Saborizante clásico sabor avellana. Botella de 750 ml.', 5, 1, NULL, NULL),
(23, 'Banana', 4, '111.00', '../assets/img/jarabe_Banana.jpg', 'Saborizante clásico sabor banana. Botella de 750 ml.', 5, 1, NULL, NULL),
(24, 'Blueberry', 4, '111.00', '../assets/img/jarabe_blueberry.jpg', 'Saborizante clásico sabor blueberry. Botella de 750 ml.', 5, 1, NULL, NULL),
(25, 'Canela', 4, '111.00', '../assets/img/jarabe_canela.jpg', 'Saborizante clásico sabor canela. Botella de 750 ml.', 5, 1, NULL, NULL),
(26, 'Caramelo', 4, '111.00', '../assets/img/jarabe_Caramelo-1.jpg', 'Saborizante clásico sabor caramelo. Botella de 750 ml.', 5, 1, NULL, NULL),
(27, 'Cereza', 4, '111.00', '../assets/img/jarabe_Cereza.jpg', 'Saborizante clásico sabor cereza. Botella de 750 ml.', 5, 1, NULL, NULL),
(28, 'Chocolate Blanco', 4, '111.00', '../assets/img/jarabe_chocolateblanco.jpg', 'Saborizante clásico sabor chocolate blanco. Botella de 750 ml.', 5, 1, NULL, NULL),
(29, 'Coco', 4, '111.00', '../assets/img/jarabe_Coco.jpg', 'Saborizante clásico sabor coco. Botella de 750 ml.', 5, 1, NULL, NULL),
(30, 'Crema Irlandesa', 4, '111.00', '../assets/img/jarabe_CremaIrlandesa.jpg', 'Saborizante clásico sabor crema irlandesa. Botella de 750 ml.', 5, 1, NULL, NULL),
(31, 'Durazno', 4, '111.00', '../assets/img/jarabe_Durazno.jpg', 'Saborizante clásico sabor durazno. Botella de 750 ml.', 5, 1, NULL, NULL),
(32, 'Fresa', 4, '111.00', '../assets/img/jarabe_Fresa.jpg', 'Saborizante clásico sabor fresa. Botella de 750 ml.', 5, 1, NULL, NULL),
(33, 'Fresa', 4, '111.00', '../assets/img/jarabefruit_fresa.jpg', 'Saborizante clásico sabor fresa. Botella de 750 ml.', 5, 1, NULL, NULL),
(34, 'Kiwi', 4, '111.00', '../assets/img/jarabe_fruit_kiwi.jpg', 'Saborizante clásico sabor kiwi. Botella de 750 ml.', 5, 1, NULL, NULL),
(35, 'Licor de Cafe', 4, '111.00', '../assets/img/jarabe_LicordeCafe.jpg', 'Saborizante clásico sabor locor de cafe. Botella de 750 ml.', 5, 1, NULL, NULL),
(36, 'Malvavisco Tostado', 4, '111.00', '../assets/img/jarabe_DVG_malvaviscotostado.jpg', 'Saborizante clásico sabor malvavisco tostado. Botella de 750 ml.', 5, 1, NULL, NULL),
(37, 'Mango', 4, '111.00', '../assets/img/jarabefruit_mango.jpg', 'Saborizante clásico sabor mango. Botella de 750 ml.', 5, 1, NULL, NULL),
(38, 'Menta', 4, '111.00', '../assets/img/jarabe_Menta.jpg', 'Saborizante clásico sabor menta. Botella de 750 ml.', 5, 1, NULL, NULL),
(39, 'Te Chai', 4, '111.00', '../assets/img/jarabe_TeChai.jpg', 'Saborizante clásico sabor te chai. Botella de 750 ml.', 5, 1, NULL, NULL),
(40, 'Vainilla', 4, '111.00', '../assets/img/jarabe_Vainilla.jpg', 'Saborizante clásico sabor vainilla. Botella de 750 ml.', 5, 1, NULL, NULL),
(41, 'Vainilla', 4, '111.00', '../assets/img/jarabeSF_vainilla.png', 'Saborizante clásico sabor vainilla. Botella de 750 ml.', 5, 1, NULL, NULL),
(42, 'Vainilla Francesa', 4, '111.00', '../assets/img/jarabe_VainillaFrancesa.jpg', 'Saborizante clásico sabor vainilla francesa. Botella de 750 ml.', 5, 1, NULL, NULL),
(43, 'Zarzamora', 4, '111.00', '../assets/img/jarabe_Zarzamora.jpg', 'Saborizante clásico sabor zarzamora. Botella de 750 ml.', 5, 1, NULL, NULL),
(44, 'Caramelo', 5, '240.00', '../assets/img/salsa_caramelo.jpg', 'Endulzante sabor caramelo. Botella de 1.89 lt.', 5, 1, NULL, NULL),
(45, 'Chocolate Blanco', 5, '240.00', '../assets/img/salsa_chocolateblanco.jpg', 'Endulzante sabor chocolate blanco. Botella de 1.89 lt.', 5, 1, NULL, NULL),
(46, 'Chocolate Clasico', 5, '240.00', '../assets/img/salsa_chocolate.jpg', 'Endulzante sabor chocolate clasico. Botella de 1.89 lt.', 5, 1, NULL, NULL),
(47, 'Caramel Late', 6, '450.00', '../assets/img/frappeBG_caramelatte.png', 'Polvo saborizante para preparar bebidas sabor Caramel latter frío o caliente. Bolsa 1.5 kg.', 5, 1, NULL, NULL),
(48, 'Chai Caramel', 6, '550.00', '../assets/img/polvochai_caramel.png', 'Polvo saborizante para preparar chai sabor caramel frío o caliente.Bolsa 1.5 kg.', 5, 1, NULL, NULL),
(49, 'Chai Chocolate', 6, '550.00', '../assets/img/polvochai_chocolate.png', 'Polvo saborizante para preparar Polvo saborizante para preparar chai sabor chocolate frío o caliente.Bolsa 1.5 kg.', 5, 1, NULL, NULL),
(50, 'Chai Green Tea', 6, '550.00', '../assets/img/polvochai_teverde.png', 'Polvo saborizante para preparar Polvo saborizante para preparar chai sabor green tea frío o caliente.Bolsa 1.5 kg.', 5, 1, NULL, NULL),
(51, 'Chai Manzana Canela', 6, '550.00', '../assets/img/polvochai_manzanacanela.png', 'Polvo saborizante para preparar Polvo saborizante para preparar chai sabor manzana canela frío o caliente.Bolsa 1.5 kg.', 5, 1, NULL, NULL),
(52, 'Raspberry', 6, '550.00', '../assets/img/polvochai_rasberry.png', 'Polvo saborizante para preparar Polvo saborizante para preparar chai sabor raspberry frío o caliente.Bolsa 1.5 kg.', 5, 1, NULL, NULL),
(53, 'Chai Spiced', 6, '550.00', '../assets/img/polvochai_spiced.png', 'Polvo saborizante para preparar Polvo saborizante para preparar chai sabor spiced frío o caliente.Bolsa 1.5 kg.', 5, 1, NULL, NULL),
(54, 'Chai Vainilla', 6, '550.00', '../assets/img/polvochai_vainilla.png', 'Polvo saborizante para preparar Polvo saborizante para preparar chai sabor vainilla frío o caliente.Bolsa 1.5 kg.', 5, 1, NULL, NULL),
(55, 'Chai Vainilla Sugar Free', 6, '550.00', '../assets/img/polvochai_vainillasugarfree.png', 'Polvo saborizante para preparar Polvo saborizante para preparar chai sabor vainilla sugra free frío o caliente.Bolsa 1.5 kg.', 5, 1, NULL, NULL),
(56, 'Chocolate Blanco', 6, '465.00', '../assets/img/frappeBG_chocolateblanco.png', 'Polvo saborizante para preparar Polvo saborizante para preparar chai sabor chocolate blanco frío o caliente.Bolsa 1.5 kg.', 5, 1, NULL, NULL),
(57, 'Chai Chocolate Menta', 6, '510.00', '../assets/img/frappeBG_chocolatementa.png', 'Polvo saborizante para preparar Polvo saborizante para preparar chai sabor chocolate menta frío o caliente.Bolsa 1.5 kg.', 5, 1, NULL, NULL),
(58, 'Coffee', 6, '510.00', '../assets/img/frappeBG_coffe.png', 'Polvo saborizante para preparar Polvo saborizante para preparar bebida  sabor chocolate  frío o caliente.Bolsa 1.5 kg.', 5, 1, NULL, NULL),
(59, 'Cookies and Cream', 6, '510.00', '../assets/img/frappeBG_cookiescream.png', 'Polvo saborizante para preparar Polvo saborizante para preparar bebida  sabor cookies and cream  frío o caliente.Bolsa 1.5 kg.', 5, 1, NULL, NULL),
(60, 'Java Chip', 6, '510.00', '../assets/img/frappeBG_javachip.png', 'Polvo saborizante para preparar Polvo saborizante para preparar bebida  sabor java chip  frío o caliente.Bolsa 1.5 kg.', 5, 1, NULL, NULL),
(61, 'Mocha', 6, '510.00', '../assets/img/frappeBG_mocha.png', 'Polvo saborizante para preparar Polvo saborizante para preparar bebida  sabor mocha  frío o caliente.Bolsa 1.5 kg.', 5, 1, NULL, NULL),
(62, 'Mocha Sugar Free', 6, '510.00', '../assets/img/frappeBG_mochasugarfree.png', 'Polvo saborizante para preparar Polvo saborizante para preparar bebida  sabor mocha sugar free  frío o caliente.Bolsa 1.5 kg.', 5, 1, NULL, NULL),
(63, 'Te Matcha Green Tea Smoothie', 6, '490.00', '../assets/img/matcha_greentea_smootie.jpg', 'Polvo saborizante matcha para preparar para preparar bebida frío o caliente.Bolsa 1.5 kg.', 5, 1, NULL, NULL),
(64, 'Te Matcha Mocafe', 6, '560.00', '../assets/img/matcha-600x600.jpg', 'Polvo saborizante sabor matcha para preparar bebidas frío – caliente. Bolsa de 1.3 kg.', 5, 1, NULL, NULL),
(65, 'Vainilla Bean', 6, '450.00', '../assets/img/frappeBG_vainillabean.png', 'Polvo saborizante para preparar bebidas sabor vainilla bean frío o caliente. Bolsa 1.5 kg.', 5, 1, NULL, NULL),
(66, 'Vainilla Latte', 6, '510.00', '../assets/img/frappeBG_vainillalatte.png', 'Polvo saborizante para preparar bebidas sabor vainilla latte frío o caliente. Bolsa 1.5 kg.', 5, 1, NULL, NULL),
(67, 'Vainilla Smothie', 6, '510.00', '../assets/img/frappeBG_vainillasmothie.png', 'Polvo saborizante para preparar bebidas sabor vainilla smothie frío o caliente. Bolsa 1.5 kg.', 5, 1, NULL, NULL),
(68, 'Vainilla Sugar Free', 6, '510.00', '../assets/img/frappeBG_vainillasugarfree.png', 'Polvo saborizante para preparar bebidas sabor vainilla sugar free frío o caliente. Bolsa 1.5 kg.', 5, 1, NULL, NULL),
(69, 'Frappease Crystal', 8, '180.00', '../assets/img/frappeBG_caramelatte.png', 'Polvo base sabor Frappease Crystal para preparar bebidas a base de leche Bote 1 kg.', 5, 1, NULL, NULL),
(70, 'Frappease Original', 8, '290.00', '../assets/img/frappease_Original.jpg', 'Polvo base sabor Frappease Original para preparar bebidas a base de leche Bote 1 kg.', 5, 1, NULL, NULL),
(71, 'Frappease Yogurth', 8, '290.00', '../assets/img/frappeBG_caramelatte.png', 'Polvo base sabor Yogurth Crystal para preparar bebidas a base de leche Bote 1 kg.', 5, 1, NULL, NULL),
(72, 'Agitadores Blancos', 9, '140.00', '../assets/img/desechable_agitadorBLANCO.jpg', 'Agitadores plásticos color blanco. Bolsa de 1 kg.', 5, 1, NULL, NULL),
(73, 'Agitadores Rojos', 9, '94.00', '../assets/img/desechable_agitadorROJO-600x600.jpeg', 'Agitadores plasticos color rojo. Caja con 1000 pzas.', 5, 1, NULL, NULL),
(74, 'Fajilla de cartón para vaso de papel', 9, '80.00', '../assets/img/desechables_fajillacarton_PERSONALIZADA.jpg', 'Manga de cartón para vaso de papel. Bolsa de 100 pzas.', 5, 1, NULL, NULL),
(75, 'Chocolate oaxaca (mexicano)', 7, '230.00', '../assets/img/chocolate_mexicano.png', 'Polvo saborizante sabor chocolate Bote 1.5 kg. * Precio sin IEPS y sujeto a cambio sin previo aviso', 20, 1, NULL, NULL),
(76, 'Chocolate suizo', 7, '230.00', '../assets/img/suizo.png', 'Polvo saborizante sabor chocolate Bote 1.5 kg. * Precio sin IEPS y sujeto a cambio sin previo aviso', 20, 1, NULL, NULL),
(77, 'Frappease Crystal', 8, '180.00', '../assets/img/frappease_cristal.jpg', 'Polvo base sabor Frappease Crystal para preparar bebidas a base de leche Bote 1 kg. * Precio sin IEPS y sujeto a cambio sin previo aviso', 20, 1, NULL, NULL),
(80, 'Empaque para llevar negro de 8×8', 9, '255.37', '../assets/img/desechables_fajillacarton.jpg', 'Contenedor desechable negro 8×8.Paquete con 100 pzas. *Precio no incluye IVA, sujeto a cambio sin previo aviso.', 20, 1, NULL, NULL),
(81, 'Filtro para cafetera chico', 9, '70.00', '../assets/img/desechables_filtro_chico.jpg', 'Filtro para cafetera chico.Paquete con 500 pz. *Precio no incluye IVA, sujeto a cambio sin previo aviso.', 20, 1, NULL, NULL),
(82, 'Filtro para cafetera grande', 9, '465.00', '../assets/img/desechables_filtro_grande.jpg', 'Filtro para cafetera grande.Paquete con 500 pz. *Precio no incluye IVA, sujeto a cambio sin previo aviso.', 20, 1, NULL, NULL),
(83, 'Filtro para cafetera mediano', 9, '486.00', '../assets/img/desechables_filtro_mediano.jpg', 'Filtro para cafetera mediano.Paquete con 1000 pz. *Precio no incluye IVA, sujeto a cambio sin previo aviso.', 20, 1, NULL, NULL),
(84, 'Porta vaso de cartón', 9, '46.00', '../assets/img/desechables_portavasos.jpg', 'Porta vasos de cartón. Paquete con 25 pzas. *Precio no incluye IVA, sujeto a cambio sin previo aviso.', 20, 1, NULL, NULL),
(85, 'Tapa blanca para vaso de papel 12 y 16 oz', 9, '106.00', '../assets/img/desechables_tapablanca_vasos12y16.jpg', 'Tapa blanca para vaso de papel 12 y 16 oz. Paquete con 100 pz. *Precio no incluye IVA, sujeto a cambio sin previo aviso.', 20, 1, NULL, NULL),
(86, 'Tapa blanca para vaso de papel 8 oz', 9, '98.00', '../assets/img/desechables_tapablanca_vaso8oz.jpg', 'Tapa blanca para vaso de papel 8 oz. Paquete con 100 pz. *Precio no incluye IVA, sujeto a cambio sin previo aviso.', 20, 1, NULL, NULL),
(87, 'Tapa domo para vaso frappe de 12 oz', 9, '87.23', '../assets/img/desechables_tapadomo12oz .jpg', 'Tapa cristalina domo para vaso de 12 oz. Paquete con 100 pz. * Precio no incluye IVA, sujeto a cambio sin previo aviso', 20, 1, NULL, NULL),
(88, 'Tapa domo para vaso frappe de 16 oz', 9, '96.98', '../assets/img/desechables_tapadomo16oz .jpg', 'Tapa cristalina domo para vaso 16 oz. Paquete con 100 pz. *Precio no incluye IVA, sujeto a cambio sin previo aviso.', 20, 1, NULL, NULL),
(89, 'Tapa domo para vaso frappe de 16 oz', 9, '96.98', '../assets/img/desechables_tapadomo16oz.jpg', 'Tapa cristalina domo para vaso 16 oz. Paquete con 100 pz. *Precio no incluye IVA, sujeto a cambio sin previo aviso.', 20, 1, NULL, NULL),
(90, 'Café en grano Descafeinado Bernardi', 1, '165.00', '../assets/img/cafe_descafeinado_bernardi.jpg', 'Café de altura sin cafeína.* Precio sujeto a cambio sin previo aviso', 20, 1, NULL, NULL),
(91, 'Tapa negra para vaso de papel 10 y 12 oz', 9, '121.00', '../assets/img/desechables_tapanegra_vasos8y12.jpg', 'Tapa negra para vaso de papel 12 y 16 oz. Paquete de 100 pz. *Precio no incluye IVA, sujeto a cambio sin previo aviso.', 20, 1, NULL, NULL),
(92, 'Tapa plana para vaso frappe de 16 oz', 9, '90.50', '../assets/img/desechables_tapaplanaFrappe.jpg', 'Tapa cristalina plana para vaso de 16 oz. Paquete con 100 pz. *Precio no incluye IVA, sujeto a cambio sin previo aviso.', 20, 1, NULL, NULL),
(93, 'Vaso de papel blanco de 12 oz', 9, '122.00', '../assets/img/desechables_vasopapel_12oz.jpg', 'Vaso de papel blanco de 12 oz. Paquete con 50 pzas. *Precio no incluye IVA y sujeto a cambio sin previo aviso.', 20, 1, NULL, NULL),
(94, 'Vaso de papel blanco de 16 oz', 9, '130.00', '../assets/img/desechables_vasopapel_16oz.jpg', 'Vaso de papel blanco de 16 oz. Paquete con 50 pzas. *Precio no incluye IVA, sujeto a cambio sin previo aviso.', 20, 1, NULL, NULL),
(95, 'Vaso de papel blanco de 4 oz', 9, '110.00', '../assets/img/desechables_vasopapel_4oz.jpg', 'Vaso de papel blanco de 4 oz. Paquete con 50 pz. *Precio sin IVA y sujeto a cambio sin previo aviso.', 20, 1, NULL, NULL),
(96, 'Vaso de papel blanco de 4, 8, 12 y 16 oz personalizado', 9, '150.00', '../assets/img/desechables_vasospapel_PERSONALIZADOS.jpg', 'Vaso de papel blanco personalizado, preguntar por mínimo de compra.', 20, 1, NULL, NULL),
(97, 'Vaso de papel blanco de 8 oz', 9, '108.00', '../assets/img/desechables_vasopapel_8oz.jpg', 'Vaso de papel blanco de 8 oz. Paquete de 50 pzas. *Precio no incluye IVA y sujeto a cambio sin previo aviso.', 20, 1, NULL, NULL),
(98, 'Vaso para frappe de 12 oz', 9, '90.00', '../assets/img/desechables_vasofrappe_12oz.jpg', 'Vaso cristalino para frappé 12 oz. Paquete con 50 pzas. *Precio no incluye IVA, sujeto a cambio sin previo aviso.', 20, 1, NULL, NULL),
(99, 'Vaso para frappe de 12 y 16 oz personalizado', 9, '120.00', '../assets/img/desechables_vasofrappe12y16_PERSONALIZADO.jpg', 'Vaso cristalino para frappé personalizado. *Preguntar por mínimo de compra.', 20, 1, NULL, NULL),
(100, 'Vaso para frappe de 16 oz', 9, '123.00', '../assets/img/desechables_vasofrappe_16oz.jpg', 'Vaso cristalino para frappé 16 oz. Paquete con 50 pz. *Precio no incluye IVA, sujeto a cambio sin previo aviso.', 20, 1, NULL, NULL),
(101, 'Tapita roja protectora para vaso de papel', 9, '100.00', '../assets/img/desechables_tapitaroja_protectora-2.jpg', 'Tapita roja protectora para vaso de papel. Paquete con 100pz. *Precio no incluye IVA, sujeto a cambio sin previo aviso.', 20, 1, NULL, NULL),
(102, 'Aguja de acero inoxidable', 10, '99.00', '../assets/img/aguja_de_acero.png', 'Aguja de acero inoxidable para decorar las bebidas calientes. *Precio no incluye IVA, sujeto a cambio sin previo aviso.', 20, 1, NULL, NULL),
(103, 'Bombas para esencias', 10, '60.00', '../assets/img/bombas.png', 'Bomba dosificadora para saborizante. *Precio no incluye IVA, sujeto a cambio sin previo aviso.', 20, 1, NULL, NULL),
(104, 'Caja Bagacero', 10, '480.00', '../assets/img/caja_bagacero.png', 'Caja de acero inoxidable para el bagazo del café. *Precio no incluye IVA, sujeto a cambio sin previo aviso.', 20, 1, NULL, NULL),
(105, 'Caja Bagacero', 10, '480.00', '../assets/img/caja_bagacero.png', 'Caja de acero inoxidable para el bagazo del café. *Precio no incluye IVA, sujeto a cambio sin previo aviso.', 20, 1, NULL, NULL),
(106, 'Cafetera de cilindro', 11, '500.00', '../assets/img/cafetera_cilindro.jpg', 'Cafetería de cilindro para 40 tz. *Solicita cotización.', 20, 1, NULL, NULL),
(107, 'Licuadoras para frappé', 11, '2500.00', '../assets/img/licuadora_frappe.png', 'Licuadora para frappé', 20, 1, NULL, NULL),
(108, 'Máquina para espresso', 11, '1500.00', '../assets/img/maquina_expresso.jpeg', 'Máquina de espresso para 1 o 2 grupos. *Solicita cotización.', 20, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tracking`
--

CREATE TABLE `tracking` (
  `id` int NOT NULL,
  `paymentID` varchar(256) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `status` varchar(256) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL DEFAULT 'Pending',
  `status_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tracking`
--

INSERT INTO `tracking` (`id`, `paymentID`, `status`, `status_date`) VALUES
(26, '4TJ69058C00613109', 'Delivered', '2019-11-11 19:25:06'),
(27, '76W98544YV076934C', 'Pending', '2019-11-11 19:26:43'),
(28, '1NP03501M2841904A', 'Pending', '2019-11-11 23:42:48'),
(29, '6UK60706PP5927738', 'Pending', '2019-11-12 01:05:07'),
(30, '6H404423GR802313L', 'Pending', '2019-11-12 01:10:45'),
(31, '76477710EJ727333R', 'Pending', '2019-11-13 04:21:52'),
(32, '99X3527522734610N', 'Pending', '2019-11-21 01:03:24'),
(33, '82187414DT3110610', 'Pending', '2019-11-24 19:25:29'),
(34, '6MJ87070PP996823T', 'Pending', '2019-11-24 19:29:30'),
(35, '6CN40528YG7975443', 'Pending', '2019-11-27 00:54:52'),
(36, '9RT81062KX595613B', 'Pending', '2019-11-27 01:05:54'),
(37, '39F14633CK5510736', 'Pending', '2019-11-27 01:24:11'),
(38, '80170190M1879205A', 'Pending', '2020-04-24 00:14:19'),
(39, '8V094736RG8196440', 'Pending', '2020-04-24 21:51:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders_products`
--
ALTER TABLE `orders_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tracking`
--
ALTER TABLE `tracking`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=113;

--
-- AUTO_INCREMENT for table `orders_products`
--
ALTER TABLE `orders_products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;

--
-- AUTO_INCREMENT for table `tracking`
--
ALTER TABLE `tracking`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
