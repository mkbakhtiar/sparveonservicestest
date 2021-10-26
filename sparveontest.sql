/*
 Navicat Premium Data Transfer

 Source Server         : Work
 Source Server Type    : MySQL
 Source Server Version : 50724
 Source Host           : localhost:3306
 Source Schema         : sparveontest

 Target Server Type    : MySQL
 Target Server Version : 50724
 File Encoding         : 65001

 Date: 26/10/2021 16:31:14
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for access_token
-- ----------------------------
DROP TABLE IF EXISTS `access_token`;
CREATE TABLE `access_token`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `id_user` int(10) NULL DEFAULT NULL,
  `token` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL,
  `ip` tinytext CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of access_token
-- ----------------------------
INSERT INTO `access_token` VALUES (1, 5, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6NSwidXNlcm5hbWUiOiJiYWtodGlhci5ub3Rvam95b0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IjIxMjMyZjI5N2E1N2E1YTc0Mzg5NGEwZTRhODAxZmMzIn1dLCJpYXQiOjE2MzUyMzc2MTksImV4cCI6MTYzNTIzOTA1OX0.wRHEcBbyyBTWFvV_mJqEgmtEATVKt8ffEWDgTruTVLo', NULL);
INSERT INTO `access_token` VALUES (2, 5, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6NSwidXNlcm5hbWUiOiJiYWtodGlhci5ub3Rvam95b0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IjIxMjMyZjI5N2E1N2E1YTc0Mzg5NGEwZTRhODAxZmMzIn1dLCJpYXQiOjE2MzUyMzk5NDIsImV4cCI6MTYzNTI0MTM4Mn0.T1k3S7emvVZpK231qA-mDg96tOezkxu_5lomvYqw0SI', NULL);
INSERT INTO `access_token` VALUES (3, 5, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6NSwidXNlcm5hbWUiOiJiYWtodGlhci5ub3Rvam95b0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IjIxMjMyZjI5N2E1N2E1YTc0Mzg5NGEwZTRhODAxZmMzIn1dLCJpYXQiOjE2MzUyNDA1MDgsImV4cCI6MTYzNTI0MTk0OH0.0R1vUCDOg5MnGFI0BEWBpkrWxTrqtSd1Fuce8FknRb0', NULL);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `username` tinytext CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL,
  `password` tinytext CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'mkbakhtiar.new@gmail.com', 'admin');
INSERT INTO `user` VALUES (2, 'bakhtiarsmw@gmail.com', 'bakhtiarsmw@gmail.com');
INSERT INTO `user` VALUES (3, 'bakhtiarsmw@gmail.com', 'bakhtiarsmw@gmail.com');
INSERT INTO `user` VALUES (4, 'bakhtiarsmw@gmail.com', 'md5(admin)');
INSERT INTO `user` VALUES (5, 'bakhtiar.notojoyo@gmail.com', '21232f297a57a5a743894a0e4a801fc3');

SET FOREIGN_KEY_CHECKS = 1;
