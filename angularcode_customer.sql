-- phpMyAdmin SQL Dump
-- version 4.4.1.1
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Jul 09, 2015 at 09:51 AM
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
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=latin1;

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
(61, 'Barbell Squat To A Bench', 0);

-- --------------------------------------------------------

--
-- Table structure for table `exercises_log`
--

CREATE TABLE `exercises_log` (
  `exercise_id` int(11) NOT NULL,
  `exerciseName` varchar(255) NOT NULL,
  `workoutNumber` int(11) NOT NULL,
  `workoutNumberLog` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=350 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `exercises_log`
--

INSERT INTO `exercises_log` (`exercise_id`, `exerciseName`, `workoutNumber`, `workoutNumberLog`) VALUES
(262, 'Dumbbell Bench Press', 23, 49),
(263, 'Machine Bench Press', 23, 49),
(264, 'Dumbbell Bench Press', 23, 49),
(265, 'Barbell Full Squat', 23, 49),
(266, 'Ankle Circles', 23, 49),
(267, 'Lateral Bound', 23, 49),
(269, 'Ab Crunch Machine', 23, 49),
(270, 'Dumbbell Bench Press', 23, 50),
(271, 'Dumbbell Bench Press', 23, 50),
(272, 'Lateral Bound', 23, 50),
(273, 'Machine Bench Press', 23, 50),
(274, 'Barbell Full Squat', 23, 50),
(275, 'Ankle Circles', 23, 50),
(276, 'Ab Crunch Machine', 23, 50),
(277, 'Ab Crunch Machine', 23, 50),
(278, 'Dumbbell Bench Press', 23, 51),
(279, 'Machine Bench Press', 23, 51),
(280, 'Barbell Full Squat', 23, 51),
(281, 'Lateral Bound', 23, 51),
(282, 'Ankle Circles', 23, 51),
(283, 'Dumbbell Bench Press', 23, 51),
(284, 'Ab Crunch Machine', 23, 51),
(286, 'Dumbbell Bench Press', 23, 52),
(287, 'Machine Bench Press', 23, 52),
(288, 'Dumbbell Bench Press', 23, 52),
(289, 'Lateral Bound', 23, 52),
(290, 'Ankle Circles', 23, 52),
(291, 'Ab Crunch Machine', 23, 52),
(292, 'Ab Crunch Machine', 23, 52),
(293, 'Barbell Full Squat', 23, 52),
(294, 'Dumbbell Bench Press', 23, 53),
(295, 'Machine Bench Press', 23, 53),
(296, 'Dumbbell Bench Press', 23, 53),
(297, 'Lateral Bound', 23, 53),
(298, 'Ankle Circles', 23, 53),
(299, 'Barbell Full Squat', 23, 53),
(300, 'Ab Crunch Machine', 23, 53),
(301, 'Ab Crunch Machine', 23, 53),
(302, 'Dumbbell Bench Press', 23, 54),
(303, 'Dumbbell Bench Press', 23, 54),
(304, 'Machine Bench Press', 23, 54),
(305, 'Lateral Bound', 23, 54),
(306, 'Ankle Circles', 23, 54),
(307, 'Barbell Full Squat', 23, 54),
(308, 'Ab Crunch Machine', 23, 54),
(310, 'Dumbbell Bench Press', 23, 55),
(311, 'Dumbbell Bench Press', 23, 55),
(312, 'Machine Bench Press', 23, 55),
(313, 'Barbell Full Squat', 23, 55),
(314, 'Lateral Bound', 23, 55),
(315, 'Ankle Circles', 23, 55),
(316, 'Ab Crunch Machine', 23, 55),
(318, 'Dumbbell Bench Press', 23, 56),
(319, 'Barbell Full Squat', 23, 56),
(320, 'Dumbbell Bench Press', 23, 56),
(321, 'Machine Bench Press', 23, 56),
(322, 'Ankle Circles', 23, 56),
(323, 'Lateral Bound', 23, 56),
(324, 'Ab Crunch Machine', 23, 56),
(326, 'Dumbbell Bench Press', 23, 57),
(327, 'Machine Bench Press', 23, 57),
(328, 'Lateral Bound', 23, 57),
(329, 'Dumbbell Bench Press', 23, 57),
(330, 'Ankle Circles', 23, 57),
(331, 'Barbell Full Squat', 23, 57),
(332, 'Ab Crunch Machine', 23, 57),
(333, 'Ab Crunch Machine', 23, 57),
(334, 'Dumbbell Bench Press', 23, 58),
(335, 'Dumbbell Bench Press', 23, 58),
(336, 'Machine Bench Press', 23, 58),
(337, 'Barbell Full Squat', 23, 58),
(338, 'Lateral Bound', 23, 58),
(339, 'Ankle Circles', 23, 58),
(340, 'Ab Crunch Machine', 23, 58),
(341, 'Ab Crunch Machine', 23, 58),
(342, 'Lateral Bound', 23, 60),
(343, 'Dumbbell Bench Press', 23, 60),
(344, 'Machine Bench Press', 23, 60),
(345, 'Dumbbell Bench Press', 23, 60),
(346, 'Ankle Circles', 23, 60),
(347, 'Barbell Full Squat', 23, 60),
(348, 'Ab Crunch Machine', 23, 60),
(349, 'Ab Crunch Machine', 23, 60);

-- --------------------------------------------------------

--
-- Table structure for table `exercise_data`
--

CREATE TABLE `exercise_data` (
  `set_id` int(11) NOT NULL,
  `exercise_id` int(11) NOT NULL,
  `reps` int(11) NOT NULL,
  `weight` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=latin1;

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
(115, 55, 6, 20);

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
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `workouts`
--

INSERT INTO `workouts` (`workoutNumber`, `workoutName`) VALUES
(3, 'Back & Triceps'),
(23, 'Chest & Biceps');

-- --------------------------------------------------------

--
-- Table structure for table `workouts_log`
--

CREATE TABLE `workouts_log` (
  `workoutNumberLog` int(11) NOT NULL,
  `workoutNumber` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=latin1;

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
(62, 23, '2015-07-08');

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
  ADD PRIMARY KEY (`exercise_id`);

--
-- Indexes for table `exercise_data`
--
ALTER TABLE `exercise_data`
  ADD PRIMARY KEY (`set_id`);

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
  MODIFY `exercise_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=62;
--
-- AUTO_INCREMENT for table `exercises_log`
--
ALTER TABLE `exercises_log`
  MODIFY `exercise_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=350;
--
-- AUTO_INCREMENT for table `exercise_data`
--
ALTER TABLE `exercise_data`
  MODIFY `set_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=116;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productNumber` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT for table `workouts`
--
ALTER TABLE `workouts`
  MODIFY `workoutNumber` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT for table `workouts_log`
--
ALTER TABLE `workouts_log`
  MODIFY `workoutNumberLog` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=63;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
