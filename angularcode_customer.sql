-- phpMyAdmin SQL Dump
-- version 4.4.1.1
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Jul 10, 2015 at 12:05 AM
-- Server version: 5.5.42
-- PHP Version: 5.6.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `angularcode_customer`
--

-- --------------------------------------------------------

--
-- Table structure for table `angularcode_customers`
--

CREATE TABLE `angularcode_customers` (
  `customerNumber` int(11) NOT NULL,
  `customerName` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) DEFAULT NULL,
  `postalCode` varchar(15) DEFAULT NULL,
  `country` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=171 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `angularcode_customers`
--

INSERT INTO `angularcode_customers` (`customerNumber`, `customerName`, `email`, `address`, `city`, `state`, `postalCode`, `country`) VALUES
(103, 'Atelier graphique', 'Nantes@gmail.com', '54, rue Royale', 'Nantes', NULL, '44000', 'France'),
(112, 'Signal Gift Stores', 'LasVegas@gmail.com', '8489 Strong St.', 'Las Vegas', 'NV', '83030', 'USA'),
(114, 'Australian Collectors, Co.', 'Melbourne@gmail.com', '636 St Kilda Road', 'Melbourne', 'Victoria', '3004', 'Australia'),
(119, 'La Rochelle Gifts', 'Nantes@gmail.com', '67, rue des Cinquante Otages', 'Nantes', NULL, '44000', 'France'),
(121, 'Baane Mini Imports', 'Stavern@gmail.com', 'Erling Skakkes gate 78', 'Stavern', NULL, '4110', 'Norway'),
(124, 'Mini Gifts Distributors Ltd.', 'SanRafael@gmail.com', '5677 Strong St.', 'San Rafael', 'CA', '97562', 'USA'),
(125, 'Havel & Zbyszek Co', 'Warszawa@gmail.com', 'ul. Filtrowa 68', 'Warszawa', NULL, '01-012', 'Poland'),
(128, 'Blauer See Auto, Co.', 'Frankfurt@gmail.com', 'Lyonerstr. 34', 'Frankfurt', NULL, '60528', 'Germany'),
(129, 'Mini Wheels Co.', 'SanFrancisco@gmail.com', '5557 North Pendale Street', 'San Francisco', 'CA', '94217', 'USA'),
(131, 'Land of Toys Inc.', 'NYC@gmail.com', '897 Long Airport Avenue', 'NYC', 'NY', '10022', 'USA'),
(141, 'Euro+ Shopping Channel', 'Madrid@gmail.com', 'C/ Moralzarzal, 86', 'Madrid', NULL, '28034', 'Spain'),
(145, 'Danish Wholesale Imports', 'Kobenhavn@gmail.com', 'Vinbltet 34', 'Kobenhavn', NULL, '1734', 'Denmark'),
(146, 'Saveley & Henriot, Co.', 'Lyon@gmail.com', '2, rue du Commerce', 'Lyon', NULL, '69004', 'France'),
(148, 'Dragon Souveniers, Ltd.', 'Singapore@gmail.com', 'Bronz Sok.', 'Singapore', NULL, '079903', 'Singapore'),
(151, 'Muscle Machine Inc', 'NYC@gmail.com', '4092 Furth Circle', 'NYC', 'NY', '10022', 'USA'),
(157, 'Diecast Classics Inc.', 'Allentown@gmail.com', '7586 Pompton St.', 'Allentown', 'PA', '70267', 'USA'),
(161, 'Technics Stores Inc.', 'Burlingame@gmail.com', '9408 Furth Circle', 'Burlingame', 'CA', '94217', 'USA'),
(166, 'Handji Gifts& Co', 'Singapore@gmail.com', '106 Linden Road Sandown', 'Singapore', NULL, '069045', 'Singapore'),
(167, 'Herkku Gifts', 'Bergen@gmail.com', 'Brehmen St. 121', 'Bergen', NULL, 'N 5804', 'Norway  '),
(169, 'Jim Sheen', 'jsheen@djmunlimited.com', '123 Fake Street address 2 address 3', 'Bushey', NULL, NULL, 'United Kingdom'),
(170, 'Jim Sheen', 'jsheen@djmunlimited.com', '123 Fake Street address 2 address 3tetaet', 'Bushey', NULL, NULL, 'United Kingdom');

-- --------------------------------------------------------

--
-- Table structure for table `exercises`
--

CREATE TABLE `exercises` (
  `exercise_id` int(11) NOT NULL,
  `exerciseName` varchar(255) NOT NULL,
  `workoutNumber` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `exercises`
--

INSERT INTO `exercises` (`exercise_id`, `exerciseName`, `workoutNumber`) VALUES
(1, 'Bicep Curl', 1),
(2, 'Chin-ups', 2),
(3, 'Bench Press', 1),
(13, 'Barbell Incline Bench Press Medium-Grip', 3),
(14, 'Barbell Shrug Behind The Back', 4),
(15, 'Barbell Shoulder Press', 10),
(16, 'Cable Wrist Curl', 13),
(17, 'Ab Crunch Machine', 15),
(18, 'Barbell Incline Bench Press Medium-Grip', 16),
(19, 'Ab Crunch Machine', 17),
(20, 'Cable Chest Press', 18),
(21, 'Barbell Curls Lying Against An Incline', 18),
(22, 'Ab Crunch Machine', 18),
(23, 'Weighted Bench Dip', 18),
(24, 'Smith Machine Bench Press', 2),
(26, 'Dumbbell Bench Press', 23),
(28, 'Machine Bench Press', 23),
(40, 'Ab Crunch Machine', 24),
(44, 'Dumbbell Bench Press', 23),
(53, 'Barbell Full Squat', 23),
(54, 'Lateral Bound', 23),
(55, 'Ankle Circles', 23),
(56, 'Ab Crunch Machine', 23),
(57, 'Ab Crunch Machine', 23),
(60, 'Ab Crunch Machine', 0),
(61, 'Barbell Squat To A Bench', 0),
(62, 'Dumbbell Shoulder Press', 26),
(65, 'Smith Machine Upright Row', 26),
(66, 'Ab Crunch Machine', 3);

-- --------------------------------------------------------

--
-- Table structure for table `exercises_log`
--

CREATE TABLE `exercises_log` (
  `exercise_id` int(11) NOT NULL,
  `exercise_log_id` int(11) NOT NULL,
  `exerciseName` varchar(255) NOT NULL,
  `workoutNumber` int(11) NOT NULL,
  `workoutNumberLog` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=386 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `exercises_log`
--

INSERT INTO `exercises_log` (`exercise_id`, `exercise_log_id`, `exerciseName`, `workoutNumber`, `workoutNumberLog`) VALUES
(0, 1, 'Dumbbell Bench Press', 23, 66),
(0, 2, 'Machine Bench Press', 23, 66),
(0, 3, 'Dumbbell Bench Press', 23, 66),
(0, 4, 'Barbell Full Squat', 23, 66),
(0, 5, 'Lateral Bound', 23, 66),
(0, 6, 'Ankle Circles', 23, 66),
(0, 7, 'Ab Crunch Machine', 23, 66),
(0, 8, 'Ab Crunch Machine', 23, 66),
(26, 9, 'Dumbbell Bench Press', 23, 67),
(28, 10, 'Machine Bench Press', 23, 67),
(44, 11, 'Dumbbell Bench Press', 23, 67),
(55, 14, 'Ankle Circles', 23, 67),
(57, 16, 'Ab Crunch Machine', 23, 67),
(26, 17, 'Dumbbell Bench Press', 23, 68),
(44, 19, 'Dumbbell Bench Press', 23, 68),
(57, 22, 'Ab Crunch Machine', 23, 68),
(28, 23, 'Machine Bench Press', 23, 68),
(55, 24, 'Ankle Circles', 23, 68),
(0, 25, 'Ab Crunch Machine', 68, 0),
(0, 26, 'Band Good Morning', 68, 0),
(26, 27, 'Dumbbell Bench Press', 23, 69),
(44, 28, 'Dumbbell Bench Press', 23, 69),
(28, 30, 'Machine Bench Press', 23, 69),
(55, 32, 'Ankle Circles', 23, 69),
(57, 34, 'Ab Crunch Machine', 23, 69),
(0, 35, 'Arm Circles', 23, 69),
(26, 36, 'Dumbbell Bench Press', 23, 70),
(28, 37, 'Machine Bench Press', 23, 70),
(44, 38, 'Dumbbell Bench Press', 23, 70),
(54, 39, 'Lateral Bound', 23, 70),
(55, 40, 'Ankle Circles', 23, 70),
(53, 41, 'Barbell Full Squat', 23, 70),
(57, 42, 'Ab Crunch Machine', 23, 70),
(56, 43, 'Ab Crunch Machine', 23, 70),
(26, 44, 'Dumbbell Bench Press', 23, 71),
(28, 45, 'Machine Bench Press', 23, 71),
(44, 46, 'Dumbbell Bench Press', 23, 71),
(53, 47, 'Barbell Full Squat', 23, 71),
(54, 48, 'Lateral Bound', 23, 71),
(55, 49, 'Ankle Circles', 23, 71),
(56, 50, 'Ab Crunch Machine', 23, 71),
(57, 51, 'Ab Crunch Machine', 23, 71),
(26, 52, 'Dumbbell Bench Press', 23, 72),
(28, 53, 'Machine Bench Press', 23, 72),
(44, 54, 'Dumbbell Bench Press', 23, 72),
(53, 55, 'Barbell Full Squat', 23, 72),
(54, 56, 'Lateral Bound', 23, 72),
(55, 57, 'Ankle Circles', 23, 72),
(57, 58, 'Ab Crunch Machine', 23, 72),
(56, 59, 'Ab Crunch Machine', 23, 72),
(26, 60, 'Dumbbell Bench Press', 23, 73),
(28, 61, 'Machine Bench Press', 23, 73),
(44, 62, 'Dumbbell Bench Press', 23, 73),
(54, 63, 'Lateral Bound', 23, 73),
(53, 64, 'Barbell Full Squat', 23, 73),
(55, 65, 'Ankle Circles', 23, 73),
(56, 66, 'Ab Crunch Machine', 23, 73),
(57, 67, 'Ab Crunch Machine', 23, 73),
(26, 68, 'Dumbbell Bench Press', 23, 74),
(28, 69, 'Machine Bench Press', 23, 74),
(44, 70, 'Dumbbell Bench Press', 23, 74),
(53, 71, 'Barbell Full Squat', 23, 74),
(54, 72, 'Lateral Bound', 23, 74),
(55, 73, 'Ankle Circles', 23, 74),
(56, 74, 'Ab Crunch Machine', 23, 74),
(57, 75, 'Ab Crunch Machine', 23, 74),
(26, 76, 'Dumbbell Bench Press', 23, 75),
(53, 77, 'Barbell Full Squat', 23, 75),
(28, 78, 'Machine Bench Press', 23, 75),
(44, 79, 'Dumbbell Bench Press', 23, 75),
(56, 80, 'Ab Crunch Machine', 23, 75),
(55, 81, 'Ankle Circles', 23, 75),
(54, 82, 'Lateral Bound', 23, 75),
(57, 83, 'Ab Crunch Machine', 23, 75),
(44, 84, 'Dumbbell Bench Press', 23, 76),
(26, 85, 'Dumbbell Bench Press', 23, 76),
(28, 86, 'Machine Bench Press', 23, 76),
(54, 87, 'Lateral Bound', 23, 76),
(53, 88, 'Barbell Full Squat', 23, 76),
(55, 89, 'Ankle Circles', 23, 76),
(56, 90, 'Ab Crunch Machine', 23, 76),
(57, 91, 'Ab Crunch Machine', 23, 76),
(26, 92, 'Dumbbell Bench Press', 23, 77),
(44, 93, 'Dumbbell Bench Press', 23, 77),
(28, 94, 'Machine Bench Press', 23, 77),
(53, 95, 'Barbell Full Squat', 23, 77),
(54, 96, 'Lateral Bound', 23, 77),
(57, 97, 'Ab Crunch Machine', 23, 77),
(55, 98, 'Ankle Circles', 23, 77),
(56, 99, 'Ab Crunch Machine', 23, 77),
(26, 100, 'Dumbbell Bench Press', 23, 78),
(28, 101, 'Machine Bench Press', 23, 78),
(44, 102, 'Dumbbell Bench Press', 23, 78),
(53, 103, 'Barbell Full Squat', 23, 78),
(54, 104, 'Lateral Bound', 23, 78),
(57, 105, 'Ab Crunch Machine', 23, 78),
(56, 106, 'Ab Crunch Machine', 23, 78),
(55, 107, 'Ankle Circles', 23, 78),
(26, 108, 'Dumbbell Bench Press', 23, 79),
(28, 109, 'Machine Bench Press', 23, 79),
(53, 110, 'Barbell Full Squat', 23, 79),
(54, 111, 'Lateral Bound', 23, 79),
(44, 112, 'Dumbbell Bench Press', 23, 79),
(55, 113, 'Ankle Circles', 23, 79),
(56, 114, 'Ab Crunch Machine', 23, 79),
(57, 115, 'Ab Crunch Machine', 23, 79),
(26, 116, 'Dumbbell Bench Press', 23, 80),
(53, 117, 'Barbell Full Squat', 23, 80),
(28, 118, 'Machine Bench Press', 23, 80),
(44, 119, 'Dumbbell Bench Press', 23, 80),
(54, 120, 'Lateral Bound', 23, 80),
(55, 121, 'Ankle Circles', 23, 80),
(56, 122, 'Ab Crunch Machine', 23, 80),
(57, 123, 'Ab Crunch Machine', 23, 80),
(26, 124, 'Dumbbell Bench Press', 23, 81),
(28, 125, 'Machine Bench Press', 23, 81),
(44, 126, 'Dumbbell Bench Press', 23, 81),
(54, 127, 'Lateral Bound', 23, 81),
(53, 128, 'Barbell Full Squat', 23, 81),
(55, 129, 'Ankle Circles', 23, 81),
(57, 130, 'Ab Crunch Machine', 23, 81),
(56, 131, 'Ab Crunch Machine', 23, 81),
(44, 132, 'Dumbbell Bench Press', 23, 82),
(26, 133, 'Dumbbell Bench Press', 23, 82),
(28, 134, 'Machine Bench Press', 23, 82),
(53, 135, 'Barbell Full Squat', 23, 82),
(54, 136, 'Lateral Bound', 23, 82),
(55, 137, 'Ankle Circles', 23, 82),
(56, 138, 'Ab Crunch Machine', 23, 82),
(57, 139, 'Ab Crunch Machine', 23, 82),
(26, 140, 'Dumbbell Bench Press', 23, 83),
(44, 141, 'Dumbbell Bench Press', 23, 83),
(53, 142, 'Barbell Full Squat', 23, 83),
(28, 143, 'Machine Bench Press', 23, 83),
(54, 144, 'Lateral Bound', 23, 83),
(56, 145, 'Ab Crunch Machine', 23, 83),
(55, 146, 'Ankle Circles', 23, 83),
(57, 147, 'Ab Crunch Machine', 23, 83),
(44, 148, 'Dumbbell Bench Press', 23, 84),
(26, 149, 'Dumbbell Bench Press', 23, 84),
(54, 150, 'Lateral Bound', 23, 84),
(53, 151, 'Barbell Full Squat', 23, 84),
(28, 152, 'Machine Bench Press', 23, 84),
(55, 153, 'Ankle Circles', 23, 84),
(56, 154, 'Ab Crunch Machine', 23, 84),
(57, 155, 'Ab Crunch Machine', 23, 84),
(26, 156, 'Dumbbell Bench Press', 23, 85),
(28, 157, 'Machine Bench Press', 23, 85),
(44, 158, 'Dumbbell Bench Press', 23, 85),
(53, 159, 'Barbell Full Squat', 23, 85),
(54, 160, 'Lateral Bound', 23, 85),
(55, 161, 'Ankle Circles', 23, 85),
(56, 162, 'Ab Crunch Machine', 23, 85),
(57, 163, 'Ab Crunch Machine', 23, 85),
(44, 164, 'Dumbbell Bench Press', 23, 86),
(26, 165, 'Dumbbell Bench Press', 23, 86),
(54, 166, 'Lateral Bound', 23, 86),
(28, 167, 'Machine Bench Press', 23, 86),
(53, 168, 'Barbell Full Squat', 23, 86),
(55, 169, 'Ankle Circles', 23, 86),
(56, 170, 'Ab Crunch Machine', 23, 86),
(57, 171, 'Ab Crunch Machine', 23, 86),
(26, 172, 'Dumbbell Bench Press', 23, 87),
(28, 173, 'Machine Bench Press', 23, 87),
(44, 174, 'Dumbbell Bench Press', 23, 87),
(54, 175, 'Lateral Bound', 23, 87),
(55, 176, 'Ankle Circles', 23, 87),
(53, 177, 'Barbell Full Squat', 23, 87),
(57, 178, 'Ab Crunch Machine', 23, 87),
(56, 179, 'Ab Crunch Machine', 23, 87),
(26, 180, 'Dumbbell Bench Press', 23, 88),
(28, 181, 'Machine Bench Press', 23, 88),
(44, 182, 'Dumbbell Bench Press', 23, 88),
(54, 183, 'Lateral Bound', 23, 88),
(53, 184, 'Barbell Full Squat', 23, 88),
(55, 185, 'Ankle Circles', 23, 88),
(56, 186, 'Ab Crunch Machine', 23, 88),
(57, 187, 'Ab Crunch Machine', 23, 88),
(26, 188, 'Dumbbell Bench Press', 23, 89),
(28, 189, 'Machine Bench Press', 23, 89),
(44, 190, 'Dumbbell Bench Press', 23, 89),
(54, 191, 'Lateral Bound', 23, 89),
(55, 192, 'Ankle Circles', 23, 89),
(56, 193, 'Ab Crunch Machine', 23, 89),
(57, 194, 'Ab Crunch Machine', 23, 89),
(53, 195, 'Barbell Full Squat', 23, 89),
(26, 196, 'Dumbbell Bench Press', 23, 90),
(28, 197, 'Machine Bench Press', 23, 90),
(44, 198, 'Dumbbell Bench Press', 23, 90),
(53, 199, 'Barbell Full Squat', 23, 90),
(54, 200, 'Lateral Bound', 23, 90),
(55, 201, 'Ankle Circles', 23, 90),
(56, 202, 'Ab Crunch Machine', 23, 90),
(57, 203, 'Ab Crunch Machine', 23, 90),
(26, 204, 'Dumbbell Bench Press', 23, 91),
(28, 205, 'Machine Bench Press', 23, 91),
(44, 206, 'Dumbbell Bench Press', 23, 91),
(53, 207, 'Barbell Full Squat', 23, 91),
(54, 208, 'Lateral Bound', 23, 91),
(55, 209, 'Ankle Circles', 23, 91),
(56, 210, 'Ab Crunch Machine', 23, 91),
(57, 211, 'Ab Crunch Machine', 23, 91),
(26, 212, 'Dumbbell Bench Press', 23, 92),
(28, 213, 'Machine Bench Press', 23, 92),
(53, 214, 'Barbell Full Squat', 23, 92),
(44, 215, 'Dumbbell Bench Press', 23, 92),
(54, 216, 'Lateral Bound', 23, 92),
(56, 217, 'Ab Crunch Machine', 23, 92),
(55, 218, 'Ankle Circles', 23, 92),
(57, 219, 'Ab Crunch Machine', 23, 92),
(26, 220, 'Dumbbell Bench Press', 23, 93),
(28, 221, 'Machine Bench Press', 23, 93),
(53, 222, 'Barbell Full Squat', 23, 93),
(55, 223, 'Ankle Circles', 23, 93),
(54, 224, 'Lateral Bound', 23, 93),
(56, 225, 'Ab Crunch Machine', 23, 93),
(44, 226, 'Dumbbell Bench Press', 23, 93),
(57, 227, 'Ab Crunch Machine', 23, 93),
(26, 228, 'Dumbbell Bench Press', 23, 94),
(44, 229, 'Dumbbell Bench Press', 23, 94),
(28, 230, 'Machine Bench Press', 23, 94),
(53, 231, 'Barbell Full Squat', 23, 94),
(54, 232, 'Lateral Bound', 23, 94),
(56, 233, 'Ab Crunch Machine', 23, 94),
(55, 234, 'Ankle Circles', 23, 94),
(57, 235, 'Ab Crunch Machine', 23, 94),
(26, 236, 'Dumbbell Bench Press', 23, 95),
(28, 237, 'Machine Bench Press', 23, 95),
(44, 238, 'Dumbbell Bench Press', 23, 95),
(53, 239, 'Barbell Full Squat', 23, 95),
(54, 240, 'Lateral Bound', 23, 95),
(55, 241, 'Ankle Circles', 23, 95),
(56, 242, 'Ab Crunch Machine', 23, 95),
(57, 243, 'Ab Crunch Machine', 23, 95),
(26, 244, 'Dumbbell Bench Press', 23, 96),
(28, 245, 'Machine Bench Press', 23, 96),
(44, 246, 'Dumbbell Bench Press', 23, 96),
(54, 247, 'Lateral Bound', 23, 96),
(53, 248, 'Barbell Full Squat', 23, 96),
(55, 249, 'Ankle Circles', 23, 96),
(56, 250, 'Ab Crunch Machine', 23, 96),
(57, 251, 'Ab Crunch Machine', 23, 96),
(26, 252, 'Dumbbell Bench Press', 23, 97),
(28, 253, 'Machine Bench Press', 23, 97),
(44, 254, 'Dumbbell Bench Press', 23, 97),
(54, 255, 'Lateral Bound', 23, 97),
(53, 256, 'Barbell Full Squat', 23, 97),
(55, 257, 'Ankle Circles', 23, 97),
(56, 258, 'Ab Crunch Machine', 23, 97),
(57, 259, 'Ab Crunch Machine', 23, 97),
(26, 260, 'Dumbbell Bench Press', 23, 98),
(28, 261, 'Machine Bench Press', 23, 98),
(44, 262, 'Dumbbell Bench Press', 23, 98),
(55, 263, 'Ankle Circles', 23, 98),
(53, 264, 'Barbell Full Squat', 23, 98),
(54, 265, 'Lateral Bound', 23, 98),
(56, 266, 'Ab Crunch Machine', 23, 98),
(57, 267, 'Ab Crunch Machine', 23, 98),
(26, 268, 'Dumbbell Bench Press', 23, 99),
(28, 269, 'Machine Bench Press', 23, 99),
(53, 270, 'Barbell Full Squat', 23, 99),
(54, 271, 'Lateral Bound', 23, 99),
(55, 272, 'Ankle Circles', 23, 99),
(44, 273, 'Dumbbell Bench Press', 23, 99),
(56, 274, 'Ab Crunch Machine', 23, 99),
(57, 275, 'Ab Crunch Machine', 23, 99),
(26, 276, 'Dumbbell Bench Press', 23, 100),
(28, 277, 'Machine Bench Press', 23, 100),
(53, 278, 'Barbell Full Squat', 23, 100),
(44, 279, 'Dumbbell Bench Press', 23, 100),
(54, 280, 'Lateral Bound', 23, 100),
(55, 281, 'Ankle Circles', 23, 100),
(56, 282, 'Ab Crunch Machine', 23, 100),
(57, 283, 'Ab Crunch Machine', 23, 100),
(26, 284, 'Dumbbell Bench Press', 23, 101),
(28, 285, 'Machine Bench Press', 23, 101),
(44, 286, 'Dumbbell Bench Press', 23, 101),
(53, 287, 'Barbell Full Squat', 23, 101),
(54, 288, 'Lateral Bound', 23, 101),
(55, 289, 'Ankle Circles', 23, 101),
(56, 290, 'Ab Crunch Machine', 23, 101),
(57, 291, 'Ab Crunch Machine', 23, 101),
(26, 292, 'Dumbbell Bench Press', 23, 102),
(28, 293, 'Machine Bench Press', 23, 102),
(44, 294, 'Dumbbell Bench Press', 23, 102),
(54, 295, 'Lateral Bound', 23, 102),
(53, 296, 'Barbell Full Squat', 23, 102),
(56, 297, 'Ab Crunch Machine', 23, 102),
(55, 298, 'Ankle Circles', 23, 102),
(57, 299, 'Ab Crunch Machine', 23, 102),
(26, 300, 'Dumbbell Bench Press', 23, 103),
(44, 301, 'Dumbbell Bench Press', 23, 103),
(28, 302, 'Machine Bench Press', 23, 103),
(53, 303, 'Barbell Full Squat', 23, 103),
(54, 304, 'Lateral Bound', 23, 103),
(55, 305, 'Ankle Circles', 23, 103),
(56, 306, 'Ab Crunch Machine', 23, 103),
(57, 307, 'Ab Crunch Machine', 23, 103),
(26, 308, 'Dumbbell Bench Press', 23, 104),
(26, 309, 'Dumbbell Bench Press', 23, 105),
(26, 310, 'Dumbbell Bench Press', 23, 106),
(26, 311, 'Dumbbell Bench Press', 23, 107),
(26, 312, 'Dumbbell Bench Press', 23, 108),
(26, 313, 'Dumbbell Bench Press', 23, 109),
(44, 314, 'Dumbbell Bench Press', 23, 109),
(28, 315, 'Machine Bench Press', 23, 109),
(54, 316, 'Lateral Bound', 23, 109),
(53, 317, 'Barbell Full Squat', 23, 109),
(55, 318, 'Ankle Circles', 23, 109),
(56, 319, 'Ab Crunch Machine', 23, 109),
(57, 320, 'Ab Crunch Machine', 23, 109),
(26, 321, 'Dumbbell Bench Press', 23, 110),
(26, 322, 'Dumbbell Bench Press', 23, 111),
(28, 323, 'Machine Bench Press', 23, 111),
(44, 324, 'Dumbbell Bench Press', 23, 111),
(53, 325, 'Barbell Full Squat', 23, 111),
(54, 326, 'Lateral Bound', 23, 111),
(55, 327, 'Ankle Circles', 23, 111),
(57, 328, 'Ab Crunch Machine', 23, 111),
(56, 329, 'Ab Crunch Machine', 23, 111),
(26, 330, 'Dumbbell Bench Press', 23, 112),
(44, 331, 'Dumbbell Bench Press', 23, 112),
(28, 332, 'Machine Bench Press', 23, 112),
(55, 333, 'Ankle Circles', 23, 112),
(53, 334, 'Barbell Full Squat', 23, 112),
(54, 335, 'Lateral Bound', 23, 112),
(56, 336, 'Ab Crunch Machine', 23, 112),
(57, 337, 'Ab Crunch Machine', 23, 112),
(26, 338, 'Dumbbell Bench Press', 23, 113),
(28, 339, 'Machine Bench Press', 23, 113),
(44, 340, 'Dumbbell Bench Press', 23, 113),
(53, 341, 'Barbell Full Squat', 23, 113),
(54, 342, 'Lateral Bound', 23, 113),
(55, 343, 'Ankle Circles', 23, 113),
(57, 344, 'Ab Crunch Machine', 23, 113),
(56, 345, 'Ab Crunch Machine', 23, 113),
(26, 346, 'Dumbbell Bench Press', 23, 114),
(44, 347, 'Dumbbell Bench Press', 23, 114),
(28, 348, 'Machine Bench Press', 23, 114),
(53, 349, 'Barbell Full Squat', 23, 114),
(54, 350, 'Lateral Bound', 23, 114),
(55, 351, 'Ankle Circles', 23, 114),
(56, 352, 'Ab Crunch Machine', 23, 114),
(57, 353, 'Ab Crunch Machine', 23, 114),
(26, 354, 'Dumbbell Bench Press', 23, 115),
(28, 355, 'Machine Bench Press', 23, 115),
(44, 356, 'Dumbbell Bench Press', 23, 115),
(53, 357, 'Barbell Full Squat', 23, 115),
(54, 358, 'Lateral Bound', 23, 115),
(55, 359, 'Ankle Circles', 23, 115),
(56, 360, 'Ab Crunch Machine', 23, 115),
(57, 361, 'Ab Crunch Machine', 23, 115),
(26, 362, 'Dumbbell Bench Press', 23, 116),
(44, 363, 'Dumbbell Bench Press', 23, 116),
(53, 364, 'Barbell Full Squat', 23, 116),
(28, 365, 'Machine Bench Press', 23, 116),
(54, 366, 'Lateral Bound', 23, 116),
(55, 367, 'Ankle Circles', 23, 116),
(57, 368, 'Ab Crunch Machine', 23, 116),
(56, 369, 'Ab Crunch Machine', 23, 116),
(28, 370, 'Machine Bench Press', 23, 117),
(44, 371, 'Dumbbell Bench Press', 23, 117),
(26, 372, 'Dumbbell Bench Press', 23, 117),
(53, 373, 'Barbell Full Squat', 23, 117),
(54, 374, 'Lateral Bound', 23, 117),
(57, 375, 'Ab Crunch Machine', 23, 117),
(55, 376, 'Ankle Circles', 23, 117),
(56, 377, 'Ab Crunch Machine', 23, 117),
(26, 378, 'Dumbbell Bench Press', 23, 118),
(28, 379, 'Machine Bench Press', 23, 118),
(53, 380, 'Barbell Full Squat', 23, 118),
(54, 381, 'Lateral Bound', 23, 118),
(55, 382, 'Ankle Circles', 23, 118),
(44, 383, 'Dumbbell Bench Press', 23, 118),
(56, 384, 'Ab Crunch Machine', 23, 118),
(57, 385, 'Ab Crunch Machine', 23, 118);

-- --------------------------------------------------------

--
-- Table structure for table `exercise_data`
--

CREATE TABLE `exercise_data` (
  `set_id` int(11) NOT NULL,
  `exercise_id` int(11) NOT NULL,
  `reps` int(11) NOT NULL,
  `weight` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=122 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `exercise_data`
--

INSERT INTO `exercise_data` (`set_id`, `exercise_id`, `reps`, `weight`) VALUES
(3, 3, 6, 60),
(4, 1, 8, 20),
(5, 2, 10, 0),
(6, 2, 6, 40),
(28, 0, 10, 50),
(29, 0, 12, 44),
(30, 0, 10, 50),
(31, 0, 10, 60),
(32, 0, 10, 50),
(33, 4, 10, 40),
(34, 0, 8, 10),
(35, 0, 10, 20),
(36, 12, 12, 15),
(37, 10, 6, 60),
(38, 10, 6, 65),
(39, 14, 12, 80),
(40, 14, 10, 50),
(41, 14, 8, 20),
(42, 15, 6, 0),
(43, 15, 6, 0),
(44, 18, 6, 24),
(45, 18, 6, 24),
(46, 18, 6, 24),
(47, 19, 6, 0),
(49, 1, 8, 50),
(50, 2, 8, 50),
(57, 20, 6, 60),
(58, 20, 8, 60),
(71, 27, 6, 16),
(72, 27, 6, 16),
(73, 27, 6, 16),
(74, 27, 6, 16),
(75, 27, 6, 16),
(76, 27, 6, 16),
(77, 28, 6, 50),
(78, 28, 6, 50),
(79, 28, 6, 50),
(80, 28, 6, 50),
(81, 28, 6, 50),
(82, 28, 6, 50),
(83, 27, 6, 16),
(84, 27, 6, 16),
(85, 27, 6, 16),
(92, 25, 6, 60),
(99, 25, 6, 50),
(100, 25, 6, 50),
(103, 0, 6, 40),
(104, 25, 6, 60),
(105, 26, 6, 24),
(106, 26, 6, 24),
(108, 26, 6, 24),
(113, 51, 6, 1),
(114, 0, 6, 20),
(115, 55, 6, 20),
(116, 26, 6, 2),
(117, 26, 6, 2),
(118, 62, 6, 24),
(119, 62, 6, 24),
(120, 62, 6, 24),
(121, 65, 6, 50);

-- --------------------------------------------------------

--
-- Table structure for table `exercise_data_log`
--

CREATE TABLE `exercise_data_log` (
  `set_id_log` int(11) NOT NULL,
  `set_id` int(11) NOT NULL,
  `exercise_id` int(11) NOT NULL,
  `reps` int(11) NOT NULL,
  `weight` int(11) NOT NULL,
  `workoutNumberLog` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `exercise_data_log`
--

INSERT INTO `exercise_data_log` (`set_id_log`, `set_id`, `exercise_id`, `reps`, `weight`, `workoutNumberLog`) VALUES
(1, 0, 26, 6, 2, 0),
(2, 0, 26, 6, 2, 0),
(3, 0, 26, 6, 2, 0),
(4, 0, 26, 6, 2, 0),
(5, 0, 26, 6, 2, 0),
(6, 0, 26, 6, 2, 0),
(7, 0, 26, 6, 2, 0),
(8, 0, 26, 6, 2, 0),
(9, 0, 26, 6, 2, 0),
(10, 0, 26, 6, 2, 0),
(11, 0, 26, 6, 24, 0),
(12, 105, 26, 6, 23, 0),
(13, 0, 26, 5, 2, 0),
(14, 0, 26, 6, 2, 0),
(16, 0, 26, 6, 50, 0),
(17, 0, 26, 6, 24, 0),
(20, 0, 26, 6, 12, 0),
(21, 0, 26, 6, 23, 0),
(22, 0, 26, 6, 2, 0),
(23, 0, 26, 6, 24, 0),
(24, 0, 26, 6, 2, 0),
(25, 0, 26, 6, 23, 0),
(26, 0, 26, 6, 2, 0),
(27, 0, 26, 6, 24, 0),
(30, 105, 26, 6, 24, 0),
(31, 105, 26, 6, 12, 0),
(32, 0, 26, 6, 24, 0),
(33, 0, 26, 6, 24, 116),
(34, 117, 26, 6, 24, 116),
(35, 108, 26, 6, 24, 117),
(36, 116, 26, 6, 24, 117),
(38, 0, 26, 6, 24, 117);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productNumber` int(11) NOT NULL,
  `productName` varchar(255) DEFAULT NULL,
  `productDescription` varchar(255) DEFAULT NULL,
  `productStock` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productNumber`, `productName`, `productDescription`, `productStock`) VALUES
(1, 'Test Product', 'Product Description', 100),
(2, '', '', 0),
(3, 'test', '', 0),
(4, 'Testing', 'testing', 0),
(5, 'testestest', 'testset', 0),
(6, 'test', 'test', 123),
(7, 'tsj23627685379)_+&)(_%8', 'test', 0),
(8, 'test', 'test', 0),
(9, 'test', 'test', 0),
(10, 'test', 'test', 0),
(11, 'testing', 'testttest', 123),
(12, 'test', 'test', 12),
(13, 'tewt', 'setest', 12),
(14, 'TESTING123', 'desc', 100),
(15, 'test', 'etsetsetse', 12),
(16, 'tes', 'tset', 12),
(17, 'etewYTAWRHYA', 'weywEYAWRY', 123),
(18, 'BLAHBLAHG', 'description', 400),
(20, 'testestset', 'etestestsetset', 145),
(21, 'yes', 'yesyeey', 123),
(22, 'teset', 'setset', 1245),
(23, 'aeruaetjut', 'aetua4ut', 124);

-- --------------------------------------------------------

--
-- Table structure for table `workouts`
--

CREATE TABLE `workouts` (
  `workoutNumber` int(11) NOT NULL,
  `workoutName` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `workouts`
--

INSERT INTO `workouts` (`workoutNumber`, `workoutName`) VALUES
(3, 'Back & Triceps'),
(23, 'Chest & Biceps'),
(26, 'Shoulders & Legs');

-- --------------------------------------------------------

--
-- Table structure for table `workouts_log`
--

CREATE TABLE `workouts_log` (
  `workoutNumberLog` int(11) NOT NULL,
  `workoutNumber` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=119 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `workouts_log`
--

INSERT INTO `workouts_log` (`workoutNumberLog`, `workoutNumber`, `date`) VALUES
(3, 0, '2015-07-08'),
(4, 23, '2015-07-08'),
(5, 23, '2015-07-08'),
(6, 23, '2015-07-08'),
(7, 23, '2015-07-08'),
(8, 23, '2015-07-08'),
(9, 23, '2015-07-08'),
(10, 23, '2015-07-08'),
(11, 23, '2015-07-08'),
(12, 23, '2015-07-08'),
(13, 23, '2015-07-08'),
(14, 23, '2015-07-08'),
(15, 23, '2015-07-08'),
(16, 23, '2015-07-08'),
(17, 23, '2015-07-08'),
(18, 23, '2015-07-08'),
(19, 23, '2015-07-08'),
(20, 23, '2015-07-08'),
(21, 23, '2015-07-08'),
(22, 23, '2015-07-08'),
(23, 23, '2015-07-08'),
(24, 23, '2015-07-08'),
(25, 23, '2015-07-08'),
(26, 23, '2015-07-08'),
(27, 23, '2015-07-08'),
(28, 23, '2015-07-08'),
(29, 23, '2015-07-08'),
(30, 23, '2015-07-08'),
(31, 23, '2015-07-08'),
(32, 23, '2015-07-08'),
(33, 23, '2015-07-08'),
(34, 23, '2015-07-08'),
(35, 23, '2015-07-08'),
(36, 23, '2015-07-08'),
(37, 23, '2015-07-08'),
(38, 23, '2015-07-08'),
(39, 23, '2015-07-08'),
(40, 23, '2015-07-08'),
(41, 23, '2015-07-08'),
(42, 23, '2015-07-08'),
(43, 23, '2015-07-08'),
(44, 23, '2015-07-08'),
(45, 23, '2015-07-08'),
(46, 23, '2015-07-08'),
(47, 23, '2015-07-08'),
(48, 23, '2015-07-08'),
(49, 23, '2015-07-08'),
(50, 23, '2015-07-08'),
(51, 23, '2015-07-08'),
(52, 23, '2015-07-08'),
(53, 23, '2015-07-08'),
(54, 23, '2015-07-08'),
(55, 23, '2015-07-08'),
(56, 23, '2015-07-08'),
(57, 23, '2015-07-08'),
(58, 23, '2015-07-08'),
(59, 23, '2015-07-08'),
(60, 23, '2015-07-08'),
(61, 23, '2015-07-08'),
(62, 23, '2015-07-08'),
(63, 3, '2015-07-09'),
(64, 23, '2015-07-09'),
(65, 23, '2015-07-09'),
(66, 23, '2015-07-09'),
(67, 23, '2015-07-09'),
(68, 23, '2015-07-09'),
(69, 23, '2015-07-09'),
(70, 23, '2015-07-09'),
(71, 23, '2015-07-09'),
(72, 23, '2015-07-09'),
(73, 23, '2015-07-09'),
(74, 23, '2015-07-09'),
(75, 23, '2015-07-09'),
(76, 23, '2015-07-09'),
(77, 23, '2015-07-09'),
(78, 23, '2015-07-09'),
(79, 23, '2015-07-09'),
(80, 23, '2015-07-09'),
(81, 23, '2015-07-09'),
(82, 23, '2015-07-09'),
(83, 23, '2015-07-09'),
(84, 23, '2015-07-09'),
(85, 23, '2015-07-09'),
(86, 23, '2015-07-09'),
(87, 23, '2015-07-09'),
(88, 23, '2015-07-09'),
(89, 23, '2015-07-09'),
(90, 23, '2015-07-09'),
(91, 23, '2015-07-09'),
(92, 23, '2015-07-09'),
(93, 23, '2015-07-09'),
(94, 23, '2015-07-09'),
(95, 23, '2015-07-09'),
(96, 23, '2015-07-09'),
(97, 23, '2015-07-09'),
(98, 23, '2015-07-09'),
(99, 23, '2015-07-09'),
(100, 23, '2015-07-09'),
(101, 23, '2015-07-09'),
(102, 23, '2015-07-09'),
(103, 23, '2015-07-09'),
(104, 23, '2015-07-09'),
(105, 23, '2015-07-09'),
(106, 23, '2015-07-09'),
(107, 23, '2015-07-09'),
(108, 23, '2015-07-09'),
(109, 23, '2015-07-09'),
(110, 23, '2015-07-09'),
(111, 23, '2015-07-09'),
(112, 23, '2015-07-09'),
(113, 23, '2015-07-09'),
(114, 23, '2015-07-09'),
(115, 23, '2015-07-09'),
(116, 23, '2015-07-09'),
(117, 23, '2015-07-09'),
(118, 23, '2015-07-09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `angularcode_customers`
--
ALTER TABLE `angularcode_customers`
  ADD PRIMARY KEY (`customerNumber`);

--
-- Indexes for table `exercises`
--
ALTER TABLE `exercises`
  ADD PRIMARY KEY (`exercise_id`);

--
-- Indexes for table `exercises_log`
--
ALTER TABLE `exercises_log`
  ADD PRIMARY KEY (`exercise_log_id`);

--
-- Indexes for table `exercise_data`
--
ALTER TABLE `exercise_data`
  ADD PRIMARY KEY (`set_id`);

--
-- Indexes for table `exercise_data_log`
--
ALTER TABLE `exercise_data_log`
  ADD PRIMARY KEY (`set_id_log`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productNumber`);

--
-- Indexes for table `workouts`
--
ALTER TABLE `workouts`
  ADD PRIMARY KEY (`workoutNumber`);

--
-- Indexes for table `workouts_log`
--
ALTER TABLE `workouts_log`
  ADD PRIMARY KEY (`workoutNumberLog`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `angularcode_customers`
--
ALTER TABLE `angularcode_customers`
  MODIFY `customerNumber` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=171;
--
-- AUTO_INCREMENT for table `exercises`
--
ALTER TABLE `exercises`
  MODIFY `exercise_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=67;
--
-- AUTO_INCREMENT for table `exercises_log`
--
ALTER TABLE `exercises_log`
  MODIFY `exercise_log_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=386;
--
-- AUTO_INCREMENT for table `exercise_data`
--
ALTER TABLE `exercise_data`
  MODIFY `set_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=122;
--
-- AUTO_INCREMENT for table `exercise_data_log`
--
ALTER TABLE `exercise_data_log`
  MODIFY `set_id_log` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=39;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productNumber` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT for table `workouts`
--
ALTER TABLE `workouts`
  MODIFY `workoutNumber` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT for table `workouts_log`
--
ALTER TABLE `workouts_log`
  MODIFY `workoutNumberLog` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=119;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
