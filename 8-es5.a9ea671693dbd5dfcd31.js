function _defineProperties(n,b){for(var t=0;t<b.length;t++){var e=b[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,b,t){return b&&_defineProperties(n.prototype,b),t&&_defineProperties(n,t),n}function _classCallCheck(n,b){if(!(n instanceof b))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{fj2Z:function(n,b,t){"use strict";t.r(b),t.d(b,"PersonModule",(function(){return M}));var e,i,h=function n(){_classCallCheck(this,n)},o=t("COeT"),a=t("fXoL"),c=t("tyNb"),r=((e=function(){function n(b,t){_classCallCheck(this,n),this.plus=b,this.route=t,this.person=new h,this.api="person/",this.loading=!0,this.loadMoreBtn=!1,this.dbList=[]}return _createClass(n,[{key:"ngOnInit",value:function(){this.getById()}},{key:"getById",value:function(){var n=this,b=this.route.snapshot.paramMap.get("id");this.plus.httpGet(this.api+b).subscribe((function(b){console.log(b),n.person=b}))}}]),n}()).\u0275fac=function(n){return new(n||e)(a.Nb(o.a),a.Nb(c.a))},e.\u0275cmp=a.Hb({type:e,selectors:[["app-person-info"]],decls:393,vars:49,consts:[[1,"container"],[1,"row"],[1,"col-sm-4"],[1,"col-sm-8"]],template:function(n,b){1&n&&(a.Sb(0,"div",0),a.Sb(1,"div",1),a.Sb(2,"div",2),a.Sb(3,"h6"),a.Dc(4,"S\u1ed1 hi\u1ec7u nh\xe2n s\u1ef1:"),a.Rb(),a.Rb(),a.Sb(5,"div",3),a.Sb(6,"h6"),a.Dc(7),a.Rb(),a.Rb(),a.Rb(),a.Ob(8,"hr"),a.Sb(9,"div",1),a.Sb(10,"div",2),a.Sb(11,"h6"),a.Dc(12,"B\xed danh:"),a.Rb(),a.Rb(),a.Sb(13,"div",3),a.Sb(14,"h6"),a.Dc(15),a.Rb(),a.Rb(),a.Rb(),a.Ob(16,"hr"),a.Sb(17,"div",1),a.Sb(18,"div",2),a.Sb(19,"h6"),a.Dc(20,"H\u1ecd v\xe0 t\xean:"),a.Rb(),a.Rb(),a.Sb(21,"div",3),a.Sb(22,"h6"),a.Dc(23),a.Rb(),a.Rb(),a.Rb(),a.Ob(24,"hr"),a.Sb(25,"div",1),a.Sb(26,"div",2),a.Sb(27,"h6"),a.Dc(28,"Ch\u1ee9c danh:"),a.Rb(),a.Rb(),a.Sb(29,"div",3),a.Sb(30,"h6"),a.Dc(31),a.Rb(),a.Rb(),a.Rb(),a.Ob(32,"hr"),a.Sb(33,"div",1),a.Sb(34,"div",2),a.Sb(35,"h6"),a.Dc(36,"Ch\u1ee9c danh 2:"),a.Rb(),a.Rb(),a.Sb(37,"div",3),a.Sb(38,"h6"),a.Dc(39),a.Rb(),a.Rb(),a.Rb(),a.Ob(40,"hr"),a.Sb(41,"div",1),a.Sb(42,"div",2),a.Sb(43,"h6"),a.Dc(44,"Ch\u1ee9c v\u1ee5 \u0110\u1ea3ng:"),a.Rb(),a.Rb(),a.Sb(45,"div",3),a.Sb(46,"h6"),a.Dc(47),a.Rb(),a.Rb(),a.Rb(),a.Ob(48,"hr"),a.Sb(49,"div",1),a.Sb(50,"div",2),a.Sb(51,"h6"),a.Dc(52,"Ch\u1ee9c v\u1ee5 \u0110o\xe0n th\u1ec3:"),a.Rb(),a.Rb(),a.Sb(53,"div",3),a.Sb(54,"h6"),a.Dc(55),a.Rb(),a.Rb(),a.Rb(),a.Ob(56,"hr"),a.Sb(57,"div",1),a.Sb(58,"div",2),a.Sb(59,"h6"),a.Dc(60,"T\u1ed5:"),a.Rb(),a.Rb(),a.Sb(61,"div",3),a.Sb(62,"h6"),a.Dc(63),a.Rb(),a.Rb(),a.Rb(),a.Ob(64,"hr"),a.Sb(65,"div",1),a.Sb(66,"div",2),a.Sb(67,"h6"),a.Dc(68,"Ph\xf2ng:"),a.Rb(),a.Rb(),a.Sb(69,"div",3),a.Sb(70,"h6"),a.Dc(71),a.Rb(),a.Rb(),a.Rb(),a.Ob(72,"hr"),a.Sb(73,"div",1),a.Sb(74,"div",2),a.Sb(75,"h6"),a.Dc(76,"Ph\xf2ng Ban:"),a.Rb(),a.Rb(),a.Sb(77,"div",3),a.Sb(78,"h6"),a.Dc(79),a.Rb(),a.Rb(),a.Rb(),a.Ob(80,"hr"),a.Sb(81,"div",1),a.Sb(82,"div",2),a.Sb(83,"h6"),a.Dc(84,"Ng\xe0y sinh:"),a.Rb(),a.Rb(),a.Sb(85,"div",3),a.Sb(86,"h6"),a.Dc(87),a.Rb(),a.Rb(),a.Rb(),a.Ob(88,"hr"),a.Sb(89,"div",1),a.Sb(90,"div",2),a.Sb(91,"h6"),a.Dc(92,"Gi\u1edbi t\xednh:"),a.Rb(),a.Rb(),a.Sb(93,"div",3),a.Sb(94,"h6"),a.Dc(95),a.Rb(),a.Rb(),a.Rb(),a.Ob(96,"hr"),a.Sb(97,"div",1),a.Sb(98,"div",2),a.Sb(99,"h6"),a.Dc(100,"\u0110i\u1ec7n tho\u1ea1i:"),a.Rb(),a.Rb(),a.Sb(101,"div",3),a.Sb(102,"h6"),a.Dc(103),a.Rb(),a.Rb(),a.Rb(),a.Ob(104,"hr"),a.Sb(105,"div",1),a.Sb(106,"div",2),a.Sb(107,"h6"),a.Dc(108,"MSNV:"),a.Rb(),a.Rb(),a.Sb(109,"div",3),a.Sb(110,"h6"),a.Dc(111),a.Rb(),a.Rb(),a.Rb(),a.Ob(112,"hr"),a.Sb(113,"div",1),a.Sb(114,"div",2),a.Sb(115,"h6"),a.Dc(116,"D\xe2n t\u1ed9c:"),a.Rb(),a.Rb(),a.Sb(117,"div",3),a.Sb(118,"h6"),a.Dc(119),a.Rb(),a.Rb(),a.Rb(),a.Ob(120,"hr"),a.Sb(121,"div",1),a.Sb(122,"div",2),a.Sb(123,"h6"),a.Dc(124,"T\xf4n gi\xe1o:"),a.Rb(),a.Rb(),a.Sb(125,"div",3),a.Sb(126,"h6"),a.Dc(127),a.Rb(),a.Rb(),a.Rb(),a.Ob(128,"hr"),a.Sb(129,"div",1),a.Sb(130,"div",2),a.Sb(131,"h6"),a.Dc(132,"Email:"),a.Rb(),a.Rb(),a.Sb(133,"div",3),a.Sb(134,"h6"),a.Dc(135),a.Rb(),a.Rb(),a.Rb(),a.Ob(136,"hr"),a.Sb(137,"div",1),a.Sb(138,"div",2),a.Sb(139,"h6"),a.Dc(140,"S\u1ed1 ch\u1ee9ng minh nh\xe2n d\xe2n:"),a.Rb(),a.Rb(),a.Sb(141,"div",3),a.Sb(142,"h6"),a.Dc(143),a.Rb(),a.Rb(),a.Rb(),a.Ob(144,"hr"),a.Sb(145,"div",1),a.Sb(146,"div",2),a.Sb(147,"h6"),a.Dc(148,"Ng\xe0y c\u1ea5p CMND:"),a.Rb(),a.Rb(),a.Sb(149,"div",3),a.Sb(150,"h6"),a.Dc(151),a.Rb(),a.Rb(),a.Rb(),a.Ob(152,"hr"),a.Sb(153,"div",1),a.Sb(154,"div",2),a.Sb(155,"h6"),a.Dc(156,"N\u01a1i c\u1ea5p CMND:"),a.Rb(),a.Rb(),a.Sb(157,"div",3),a.Sb(158,"h6"),a.Dc(159),a.Rb(),a.Rb(),a.Rb(),a.Ob(160,"hr"),a.Sb(161,"div",1),a.Sb(162,"div",2),a.Sb(163,"h6"),a.Dc(164,"Ch\xednh s\xe1ch:"),a.Rb(),a.Rb(),a.Sb(165,"div",3),a.Sb(166,"h6"),a.Dc(167),a.Rb(),a.Rb(),a.Rb(),a.Ob(168,"hr"),a.Sb(169,"div",1),a.Sb(170,"div",2),a.Sb(171,"h6"),a.Dc(172,"N\u01a1i sinh:"),a.Rb(),a.Rb(),a.Sb(173,"div",3),a.Sb(174,"h6"),a.Dc(175),a.Rb(),a.Rb(),a.Rb(),a.Ob(176,"hr"),a.Sb(177,"div",1),a.Sb(178,"div",2),a.Sb(179,"h6"),a.Dc(180,"Nguy\xean qu\xe1n:"),a.Rb(),a.Rb(),a.Sb(181,"div",3),a.Sb(182,"h6"),a.Dc(183),a.Rb(),a.Rb(),a.Rb(),a.Ob(184,"hr"),a.Sb(185,"div",1),a.Sb(186,"div",2),a.Sb(187,"h6"),a.Dc(188,"Th\u01b0\u1eddng tr\xfa:"),a.Rb(),a.Rb(),a.Sb(189,"div",3),a.Sb(190,"h6"),a.Dc(191),a.Rb(),a.Rb(),a.Rb(),a.Ob(192,"hr"),a.Sb(193,"div",1),a.Sb(194,"div",2),a.Sb(195,"h6"),a.Dc(196,"MSTCN:"),a.Rb(),a.Rb(),a.Sb(197,"div",3),a.Sb(198,"h6"),a.Dc(199),a.Rb(),a.Rb(),a.Rb(),a.Ob(200,"hr"),a.Sb(201,"div",1),a.Sb(202,"div",2),a.Sb(203,"h6"),a.Dc(204,"\u0110\u01a1n v\u1ecb:"),a.Rb(),a.Rb(),a.Sb(205,"div",3),a.Sb(206,"h6"),a.Dc(207),a.Rb(),a.Rb(),a.Rb(),a.Ob(208,"hr"),a.Sb(209,"div",1),a.Sb(210,"div",2),a.Sb(211,"h6"),a.Dc(212,"B\u1eadc l\u01b0\u01a1ng:"),a.Rb(),a.Rb(),a.Sb(213,"div",3),a.Sb(214,"h6"),a.Dc(215),a.Rb(),a.Rb(),a.Rb(),a.Ob(216,"hr"),a.Sb(217,"div",1),a.Sb(218,"div",2),a.Sb(219,"h6"),a.Dc(220,"H\u1ec7 s\u1ed1 l\u01b0\u01a1ng:"),a.Rb(),a.Rb(),a.Sb(221,"div",3),a.Sb(222,"h6"),a.Dc(223),a.Rb(),a.Rb(),a.Rb(),a.Ob(224,"hr"),a.Sb(225,"div",1),a.Sb(226,"div",2),a.Sb(227,"h6"),a.Dc(228,"Ng\u1ea1ch l\u01b0\u01a1ng:"),a.Rb(),a.Rb(),a.Sb(229,"div",3),a.Sb(230,"h6"),a.Dc(231),a.Rb(),a.Rb(),a.Rb(),a.Ob(232,"hr"),a.Sb(233,"div",1),a.Sb(234,"div",2),a.Sb(235,"h6"),a.Dc(236,"B\u1ea3ng l\u01b0\u01a1ng:"),a.Rb(),a.Rb(),a.Sb(237,"div",3),a.Sb(238,"h6"),a.Dc(239),a.Rb(),a.Rb(),a.Rb(),a.Ob(240,"hr"),a.Sb(241,"div",1),a.Sb(242,"div",2),a.Sb(243,"h6"),a.Dc(244,"TaiKhoanChuyenLuong:"),a.Rb(),a.Rb(),a.Sb(245,"div",3),a.Sb(246,"h6"),a.Dc(247),a.Rb(),a.Rb(),a.Rb(),a.Ob(248,"hr"),a.Sb(249,"div",1),a.Sb(250,"div",2),a.Sb(251,"h6"),a.Dc(252,"PhuCapHopDong:"),a.Rb(),a.Rb(),a.Sb(253,"div",3),a.Sb(254,"h6"),a.Dc(255),a.Rb(),a.Rb(),a.Rb(),a.Ob(256,"hr"),a.Sb(257,"div",1),a.Sb(258,"div",2),a.Sb(259,"h6"),a.Dc(260,"PCCV:"),a.Rb(),a.Rb(),a.Sb(261,"div",3),a.Sb(262,"h6"),a.Dc(263),a.Rb(),a.Rb(),a.Rb(),a.Ob(264,"hr"),a.Sb(265,"div",1),a.Sb(266,"div",2),a.Sb(267,"h6"),a.Dc(268,"PCTN:"),a.Rb(),a.Rb(),a.Sb(269,"div",3),a.Sb(270,"h6"),a.Dc(271),a.Rb(),a.Rb(),a.Rb(),a.Ob(272,"hr"),a.Sb(273,"div",1),a.Sb(274,"div",2),a.Sb(275,"h6"),a.Dc(276,"PCLD:"),a.Rb(),a.Rb(),a.Sb(277,"div",3),a.Sb(278,"h6"),a.Dc(279),a.Rb(),a.Rb(),a.Rb(),a.Ob(280,"hr"),a.Sb(281,"div",1),a.Sb(282,"div",2),a.Sb(283,"h6"),a.Dc(284,"V\u0103n ho\xe1 ph\u1ed5 th\xf4ng:"),a.Rb(),a.Rb(),a.Sb(285,"div",3),a.Sb(286,"h6"),a.Dc(287),a.Rb(),a.Rb(),a.Rb(),a.Ob(288,"hr"),a.Sb(289,"div",1),a.Sb(290,"div",2),a.Sb(291,"h6"),a.Dc(292,"H\u1ecdc v\u1ecb:"),a.Rb(),a.Rb(),a.Sb(293,"div",3),a.Sb(294,"h6"),a.Dc(295),a.Rb(),a.Rb(),a.Rb(),a.Ob(296,"hr"),a.Sb(297,"div",1),a.Sb(298,"div",2),a.Sb(299,"h6"),a.Dc(300,"Tr\xecnh \u0111\u1ed9 ch\xednh tr\u1ecb:"),a.Rb(),a.Rb(),a.Sb(301,"div",3),a.Sb(302,"h6"),a.Dc(303),a.Rb(),a.Rb(),a.Rb(),a.Ob(304,"hr"),a.Sb(305,"div",1),a.Sb(306,"div",2),a.Sb(307,"h6"),a.Dc(308,"Ng\xe0y v\xe0o ng\xe0nh:"),a.Rb(),a.Rb(),a.Sb(309,"div",3),a.Sb(310,"h6"),a.Dc(311),a.Rb(),a.Rb(),a.Rb(),a.Ob(312,"hr"),a.Sb(313,"div",1),a.Sb(314,"div",2),a.Sb(315,"h6"),a.Dc(316,"Ng\xe0y d\u1ef1 b\u1ecb \u0110\u1ea3ng:"),a.Rb(),a.Rb(),a.Sb(317,"div",3),a.Sb(318,"h6"),a.Dc(319),a.Rb(),a.Rb(),a.Rb(),a.Ob(320,"hr"),a.Sb(321,"div",1),a.Sb(322,"div",2),a.Sb(323,"h6"),a.Dc(324,"Ng\xe0y ch\xednh th\u1ee9c \u0110\u1ea3ng:"),a.Rb(),a.Rb(),a.Sb(325,"div",3),a.Sb(326,"h6"),a.Dc(327),a.Rb(),a.Rb(),a.Rb(),a.Ob(328,"hr"),a.Sb(329,"div",1),a.Sb(330,"div",2),a.Sb(331,"h6"),a.Dc(332,"H\u1ec7:"),a.Rb(),a.Rb(),a.Sb(333,"div",3),a.Sb(334,"h6"),a.Dc(335),a.Rb(),a.Rb(),a.Rb(),a.Ob(336,"hr"),a.Sb(337,"div",1),a.Sb(338,"div",2),a.Sb(339,"h6"),a.Dc(340,"Tr\xecnh \u0111\u1ed9 cao nh\u1ea5t:"),a.Rb(),a.Rb(),a.Sb(341,"div",3),a.Sb(342,"h6"),a.Dc(343),a.Rb(),a.Rb(),a.Rb(),a.Ob(344,"hr"),a.Sb(345,"div",1),a.Sb(346,"div",2),a.Sb(347,"h6"),a.Dc(348,"Nh\xf3m ng\xe0nh:"),a.Rb(),a.Rb(),a.Sb(349,"div",3),a.Sb(350,"h6"),a.Dc(351),a.Rb(),a.Rb(),a.Rb(),a.Ob(352,"hr"),a.Sb(353,"div",1),a.Sb(354,"div",2),a.Sb(355,"h6"),a.Dc(356,"Ng\xe0nh ngh\u1ec1 \u0111\xe0o t\u1ea1o:"),a.Rb(),a.Rb(),a.Sb(357,"div",3),a.Sb(358,"h6"),a.Dc(359),a.Rb(),a.Rb(),a.Rb(),a.Ob(360,"hr"),a.Sb(361,"div",1),a.Sb(362,"div",2),a.Sb(363,"h6"),a.Dc(364,"V\u0103n b\u1eb1ng:"),a.Rb(),a.Rb(),a.Sb(365,"div",3),a.Sb(366,"h6"),a.Dc(367),a.Rb(),a.Rb(),a.Rb(),a.Ob(368,"hr"),a.Sb(369,"div",1),a.Sb(370,"div",2),a.Sb(371,"h6"),a.Dc(372,"Tin h\u1ecdc:"),a.Rb(),a.Rb(),a.Sb(373,"div",3),a.Sb(374,"h6"),a.Dc(375),a.Rb(),a.Rb(),a.Rb(),a.Ob(376,"hr"),a.Sb(377,"div",1),a.Sb(378,"div",2),a.Sb(379,"h6"),a.Dc(380,"Ngo\u1ea1i Ng\u1eef:"),a.Rb(),a.Rb(),a.Sb(381,"div",3),a.Sb(382,"h6"),a.Dc(383),a.Rb(),a.Rb(),a.Rb(),a.Ob(384,"hr"),a.Sb(385,"div",1),a.Sb(386,"div",2),a.Sb(387,"h6"),a.Dc(388,"Level:"),a.Rb(),a.Rb(),a.Sb(389,"div",3),a.Sb(390,"h6"),a.Dc(391),a.Rb(),a.Rb(),a.Rb(),a.Ob(392,"hr"),a.Rb()),2&n&&(a.Bb(7),a.Ec(b.person.SoHieuNhanSu),a.Bb(8),a.Ec(b.person.BiDanh),a.Bb(8),a.Ec(b.person.HoVaTen),a.Bb(8),a.Ec(b.person.ChucDanh),a.Bb(8),a.Ec(b.person.ChucDanh2),a.Bb(8),a.Ec(b.person.ChucVuDang),a.Bb(8),a.Ec(b.person.ChucVuDoanThe),a.Bb(8),a.Ec(b.person.To),a.Bb(8),a.Ec(b.person.Phong),a.Bb(8),a.Ec(b.person.PhongBan),a.Bb(8),a.Ec(b.person.NgaySinh),a.Bb(8),a.Ec(b.person.GioiTinh),a.Bb(8),a.Ec(b.person.DienThoai),a.Bb(8),a.Ec(b.person.MSNV),a.Bb(8),a.Ec(b.person.DanToc),a.Bb(8),a.Ec(b.person.TonGiao),a.Bb(8),a.Ec(b.person.Email),a.Bb(8),a.Ec(b.person.SoChungMinhNhanDan),a.Bb(8),a.Ec(b.person.NgayCapCmnd),a.Bb(8),a.Ec(b.person.NoiCapCmnd),a.Bb(8),a.Ec(b.person.ChinhSach),a.Bb(8),a.Ec(b.person.NoiSinh),a.Bb(8),a.Ec(b.person.NguyenQuan),a.Bb(8),a.Ec(b.person.ThuongTru),a.Bb(8),a.Ec(b.person.MSTCN),a.Bb(8),a.Ec(b.person.DonVi),a.Bb(8),a.Ec(b.person.BacLuong),a.Bb(8),a.Ec(b.person.HeSoLuong),a.Bb(8),a.Ec(b.person.NgachLuong),a.Bb(8),a.Ec(b.person.BangLuong),a.Bb(8),a.Ec(b.person.Taikhoanchuyenluong),a.Bb(8),a.Ec(b.person.Phucaphopdong),a.Bb(8),a.Ec(b.person.PCCV),a.Bb(8),a.Ec(b.person.PCTN),a.Bb(8),a.Ec(b.person.PCLD),a.Bb(8),a.Ec(b.person.VanHoaPhoThong),a.Bb(8),a.Ec(b.person.HocVi),a.Bb(8),a.Ec(b.person.TrinhDoChinhTri),a.Bb(8),a.Ec(b.person.NgayVaoNganh),a.Bb(8),a.Ec(b.person.NgayDuBiDang),a.Bb(8),a.Ec(b.person.NgayChinhThucDang),a.Bb(8),a.Ec(b.person.He),a.Bb(8),a.Ec(b.person.TrinhDoCaoNhat),a.Bb(8),a.Ec(b.person.NhomNganh),a.Bb(8),a.Ec(b.person.NganhNgheDaoTao),a.Bb(8),a.Ec(b.person.VanBang),a.Bb(8),a.Ec(b.person.TinHoc),a.Bb(8),a.Ec(b.person.NgoaiNgu),a.Bb(8),a.Ec(b.person.Level))},styles:[""]}),e),s=t("EUZL"),u=t("3Pt+"),d=t("ofXK"),S=((i=function(){function n(b,t){_classCallCheck(this,n),this.fb=b,this.plus=t,this.api="person/"}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"getDashborad",value:function(){this.plus.httpGet(this.api+"dashboard").subscribe((function(n){console.log(n)}))}},{key:"onFocus",value:function(n,b){console.log("focus",b),document.getElementById(n).style.background="yellow"}},{key:"onBlur",value:function(n,b){console.log("Blur",b.target.textContent),document.getElementById(n).style.background=""}}]),n}()).\u0275fac=function(n){return new(n||i)(a.Nb(u.c),a.Nb(o.a))},i.\u0275cmp=a.Hb({type:i,selectors:[["app-person"]],decls:0,vars:0,template:function(n,b){},styles:["section[_ngcontent-%COMP%]{padding:20px 0}section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{text-align:center;color:#007b5e;margin-bottom:30px;text-transform:uppercase}#tabs[_ngcontent-%COMP%]{background:#007b5e}#tabs[_ngcontent-%COMP%], #tabs[_ngcontent-%COMP%]   h6.section-title[_ngcontent-%COMP%]{color:#eee}#tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item.show[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{color:#f3f3f3;background-color:transparent;border-color:transparent transparent #f3f3f3;border-bottom:4px solid!important;font-size:20px;font-weight:700}#tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem;color:#eee;font-size:20px}"]}),i);function R(n,b){if(1&n){var t=a.Tb();a.Sb(0,"div"),a.Sb(1,"input",7,8),a.ac("change",(function(n){return a.vc(t),a.dc().readXlsx(n)})),a.Rb(),a.Sb(3,"label",9),a.ac("click",(function(){return a.vc(t),a.sc(2)})),a.Ob(4,"i",10),a.Dc(5," Ch\u1ecdn file "),a.Rb(),a.Rb()}}function l(n,b){if(1&n){var t=a.Tb();a.Sb(0,"button",3),a.ac("click",(function(){return a.vc(t),a.dc().checkImportData()})),a.Dc(1,"Ki\u1ec3m tra"),a.Rb()}}function g(n,b){if(1&n){var t=a.Tb();a.Sb(0,"button",3),a.ac("click",(function(){return a.vc(t),a.dc().import()})),a.Dc(1,"Nh\u1eadp d\u1eef li\u1ec7u"),a.Rb()}}function p(n,b){if(1&n){var t=a.Tb();a.Sb(0,"button",3),a.ac("click",(function(){return a.vc(t),a.dc().update()})),a.Dc(1,"C\u1eadp nh\u1eadt d\u1eef li\u1ec7u"),a.Rb()}}function v(n,b){1&n&&(a.Sb(0,"div",1),a.Ob(1,"i",11),a.Rb())}function D(n,b){if(1&n&&(a.Sb(0,"tr"),a.Sb(1,"td",15),a.Dc(2),a.Rb(),a.Sb(3,"td"),a.Dc(4),a.Rb(),a.Sb(5,"td"),a.Dc(6),a.Rb(),a.Rb()),2&n){var t=b.$implicit;a.Bb(2),a.Ec(t.name),a.Bb(2),a.Ec(t.header),a.Bb(2),a.Ec(t.value||"\u0110ang \u0111\u1ec3 tr\u1ed1ng")}}function f(n,b){if(1&n&&(a.Sb(0,"table",12),a.Sb(1,"thead",13),a.Sb(2,"tr"),a.Sb(3,"th"),a.Dc(4,"H\u1ecd v\xe0 t\xean"),a.Rb(),a.Sb(5,"th"),a.Dc(6,"C\u1ed9t b\u1ecb l\u1ed7i"),a.Rb(),a.Sb(7,"th"),a.Dc(8,"N\u1ed9i dung b\u1ea1n nh\u1eadp"),a.Rb(),a.Rb(),a.Rb(),a.Sb(9,"tbody"),a.Bc(10,D,7,3,"tr",14),a.Sb(11,"tr"),a.Ob(12,"td",15),a.Ob(13,"td"),a.Ob(14,"td"),a.Rb(),a.Rb(),a.Rb()),2&n){var t=a.dc();a.Bb(10),a.jc("ngForOf",t.err)}}var m,C=((m=function(){function n(b,t,e){_classCallCheck(this,n),this.plus=b,this.fb=t,this.location=e,this.dataImport=[],this.dataJson=[],this.errData=[],this.err=[],this.dbList=[],this.send="",this.loading=!1,this.loadMoreBtn=!1,this.api="person/",this.person=this.fb.group({SoHieuNhanSu:[,[u.u.required,u.u.min(3),u.u.max(999999)]],BiDanh:[,[u.u.required,u.u.minLength(3),u.u.maxLength(7)]],HoVaTen:[,[u.u.required,u.u.max(10)]],ChucDanh:[,[u.u.required,u.u.minLength(3),u.u.maxLength(255)]],ChucDanh2:[,[u.u.required,u.u.minLength(3),u.u.maxLength(255)]],ChucVuDang:[,[]],ChucVuDoanThe:[,[]],To:[,[u.u.minLength(3),u.u.maxLength(255)]],Phong:[,[u.u.required,u.u.minLength(3),u.u.maxLength(255)]],PhongBan:[,[u.u.required,u.u.minLength(3),u.u.maxLength(255)]],NgaySinh:[,[u.u.required]],GioiTinh:[,[u.u.required,u.u.minLength(1),u.u.maxLength(50)]],DienThoai:[,[u.u.required,u.u.maxLength(15)]],MSNV:[,[u.u.required,u.u.maxLength(5)]],DanToc:[,[u.u.required,u.u.minLength(3),u.u.maxLength(255)]],TonGiao:[,[u.u.required,u.u.minLength(3),u.u.maxLength(255)]],Email:[,[u.u.required,u.u.minLength(3),u.u.maxLength(255)]],SoChungMinhNhanDan:[,[u.u.required,u.u.minLength(3),u.u.maxLength(255)]],NgayCapCmnd:[,[u.u.required]],NoiCapCmnd:[,[u.u.required,u.u.maxLength(255)]],ChinhSach:[,[u.u.maxLength(255)]],NoiSinh:[,[u.u.maxLength(255)]],NguyenQuan:[,[u.u.required,u.u.maxLength(255)]],ThuongTru:[,[u.u.required,u.u.maxLength(255)]],MSTCN:[,[u.u.required,u.u.maxLength(255)]],DonVi:[,[u.u.required,u.u.maxLength(255)]],BacLuong:[,[u.u.required,u.u.maxLength(255)]],HeSoLuong:[,[u.u.required,u.u.maxLength(255)]],NgachLuong:[,[u.u.required]],BangLuong:[,[u.u.required]],Taikhoanchuyenluong:[,[u.u.required]],Phucaphopdong:[,[]],PCCV:[,[]],PCTN:[,[]],PCLD:[,[]],VanHoaPhoThong:[,[]],HocVi:[,[]],TrinhDoChinhTri:[,[]],NgayVaoNganh:[,[]],NgayDuBiDang:[,[]],NgayChinhThucDang:[,[]],He:[,[]],TrinhDoCaoNhat:[,[]],NhomNganh:[,[]],NganhNgheDaoTao:[,[]],VanBang:[,[]],TinHoc:[,[]],NgoaiNgu:[,[]],Level:[,[u.u.required,u.u.max(10)]]})}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"readXlsx",value:function(n){var b=this;if("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"===n.target.files[0].type){this.loading=!0,this.dataJson=[],this.dataImport=[];var t=n.target,e=new FileReader;e.onload=function(n){var t=s.read(n.target.result,{type:"binary"});b.dataImport=s.utils.sheet_to_json(t.Sheets[t.SheetNames[0]],{header:1}),b.loading=!1},e.readAsBinaryString(t.files[0]),t=null}else this.plus.alertToasrt({war:"B\u1ea1n ch\u1ec9 \u0111\u01b0\u1ee3c ch\u1ecdn file excel"}),this.loading=!1}},{key:"checkImportData",value:function(){var n=this;this.reset();for(var b=this.dataImport.length,t=this.dataImport[0],e=function(b){var e=n.dataImport[b],i={SoHieuNhanSu:e[1],BiDanh:"".concat(e[2]),HoVaTen:e[3],ChucDanh:e[4],ChucDanh2:e[5],ChucVuDang:e[6],ChucVuDoanThe:e[7],To:e[8],Phong:e[9],PhongBan:e[10],NgaySinh:n.plus.ExcelDateToJSDate(e[11]),GioiTinh:e[12],DienThoai:e[13],MSNV:"".concat(e[14]),DanToc:e[15],TonGiao:e[16],Email:e[17],SoChungMinhNhanDan:e[18],NgayCapCmnd:n.plus.ExcelDateToJSDate(e[19]),NoiCapCmnd:e[20],ChinhSach:e[21],NoiSinh:e[22],NguyenQuan:e[23],ThuongTru:e[24],MSTCN:"".concat(e[25]),DonVi:e[26],BacLuong:e[27],HeSoLuong:e[28],NgachLuong:e[29],BangLuong:e[30],Taikhoanchuyenluong:e[31],Phucaphopdong:e[32],PCCV:e[33],PCTN:e[34],PCLD:e[35],VanHoaPhoThong:e[36],HocVi:e[37],TrinhDoChinhTri:e[38],NgayVaoNganh:n.plus.ExcelDateToJSDate(e[39]),NgayDuBiDang:n.plus.ExcelDateToJSDate(e[40]),NgayChinhThucDang:n.plus.ExcelDateToJSDate(e[41]),He:e[42],TrinhDoCaoNhat:e[43],NhomNganh:e[44],NganhNgheDaoTao:e[45],VanBang:e[46],TinHoc:e[47],NgoaiNgu:e[48],Level:e[49]};if(n.person.patchValue(i),n.person.valid){var h=n.plus.addKeyWord(i);n.dataJson.push(i),console.log(h)}else n.plus.getFormValidationErrors(n.person,b).forEach((function(e){var h={name:i.HoVaTen,header:t[Object.keys(i).indexOf(e.KeyControl)+1],value:i[e.KeyControl]};console.log(b),n.err.push(h)})),n.errData.push(i)},i=2;i<b;i++)e(i)}},{key:"import",value:function(){if(this.err.length>0)this.plus.alertToasrt({err:"B\u1ea1n h\xe3y s\u1eeda l\u1ed7i file tr\u01b0\u1edbc khi nh\u1eadp d\u1eef li\u1ec7u!"}),this.plus.go("/nhansu/import");else{var n=JSON.stringify(this.dataJson);this.plus.httpPost(this.api+"import",n).subscribe((function(n){console.log(n)}))}}},{key:"update",value:function(){}},{key:"reset",value:function(){this.err=[],this.dataJson=[],this.errData=[],this.err=[],this.dbList=[],this.dataJson=[]}},{key:"refresh",value:function(){this.location.back(),this.location.forward()}}]),n}()).\u0275fac=function(n){return new(n||m)(a.Nb(o.a),a.Nb(u.c),a.Nb(d.j))},m.\u0275cmp=a.Hb({type:m,selectors:[["app-person-import"]],decls:12,vars:6,consts:[[1,"container"],[1,"text-center","text-primary"],[4,"ngIf"],["type","button",1,"btn","btn-primary","mx-2",3,"click"],["type","button","class","btn btn-primary mx-2",3,"click",4,"ngIf"],["class","text-center text-primary",4,"ngIf"],["class","table table-inverse",4,"ngIf"],["hidden","","id","file-upload","type","file","multiple","false",3,"change"],["fileInput",""],["for","file-upload",1,"btn","btn-outline-primary",3,"click"],[1,"fa","fa-cloud-upload"],[1,"fa","fa-spinner","fa-spin",2,"font-size","36px"],[1,"table","table-inverse"],[1,"thead-inverse"],[4,"ngFor","ngForOf"],["scope","row"]],template:function(n,b){1&n&&(a.Sb(0,"div",0),a.Ob(1,"app-person"),a.Sb(2,"h5",1),a.Dc(3,"Nh\u1eadp nh\xe2n s\u1ef1 t\u1eeb excel"),a.Rb(),a.Bc(4,R,6,0,"div",2),a.Sb(5,"button",3),a.ac("click",(function(){return b.refresh()})),a.Dc(6,"L\xe0m l\u1ea1i"),a.Rb(),a.Bc(7,l,2,0,"button",4),a.Bc(8,g,2,0,"button",4),a.Bc(9,p,2,0,"button",4),a.Bc(10,v,2,0,"div",5),a.Bc(11,f,15,1,"table",6),a.Rb()),2&n&&(a.Bb(4),a.jc("ngIf",0===b.dataJson.length&&0===b.err.length),a.Bb(3),a.jc("ngIf",b.dataImport.length>0),a.Bb(1),a.jc("ngIf",0===b.err.length&&b.dataJson.length>0),a.Bb(1),a.jc("ngIf",0===b.err.length&&b.dataJson.length>0),a.Bb(1),a.jc("ngIf",b.loading),a.Bb(1),a.jc("ngIf",0!==b.err.length))},directives:[S,d.n,d.m],styles:[""]}),m),B=t("Kj3r");function N(n,b){1&n&&(a.Sb(0,"div",9),a.Ob(1,"i",10),a.Rb())}function y(n,b){if(1&n&&(a.Sb(0,"tr"),a.Sb(1,"td"),a.Dc(2),a.Rb(),a.Sb(3,"td"),a.Dc(4),a.Rb(),a.Sb(5,"td"),a.Sb(6,"a",11),a.Dc(7),a.Rb(),a.Rb(),a.Sb(8,"td"),a.Dc(9),a.Rb(),a.Sb(10,"td"),a.Dc(11),a.Rb(),a.Rb()),2&n){var t=b.$implicit;a.Bb(2),a.Ec(t.SoHieuNhanSu),a.Bb(2),a.Ec(t.BiDanh),a.Bb(2),a.kc("routerLink",t._id),a.Bb(1),a.Ec(t.HoVaTen),a.Bb(2),a.Ec(t.ChucDanh),a.Bb(2),a.Ec(t.PhongBan)}}var O,T,E,L=function(n){return{loading:n}},k=[{path:"",component:S},{path:"danhsach",component:(O=function(){function n(b,t){_classCallCheck(this,n),this.fb=b,this.plus=t,this.api="person/",this.loadMoreBtn=!1,this.loading=!0,this.dbList=[],this.main=this.fb.group({}),this.searchForm=this.fb.group({what:["",[u.u.minLength(3),u.u.maxLength(100)]]})}return _createClass(n,[{key:"ngOnInit",value:function(){this.get(),this.find()}},{key:"get",value:function(){var n=this;this.plus.httpPost(this.api+"find",{what:this.searchForm.value,perPage:10}).subscribe((function(b){n.dbList=b,n.loading=!1}))}},{key:"find",value:function(){var n=this;this.searchForm.valid?this.searchForm.valueChanges.pipe(Object(B.a)(1500)).subscribe((function(b){n.loading=!0,b.what=n.plus.removeAccents(b.what),n.plus.httpPost(n.api+"find",b).subscribe((function(b){n.loading=!1,b.length>0&&(n.dbList=b)}))})):this.plus.alertToasrt({war:"B\u1ea1n c\u1ea7n nh\u1eadp nhi\u1ec1u h\u01a1n 3 k\xfd t\u1ef1"})}},{key:"loadMore",value:function(){var n=this;this.loading=!0;var b=Math.ceil(this.dbList.length/10)+1,t=this.searchForm.value;t.what=this.plus.removeAccents(t.what),t.page=b,this.plus.httpPost(this.api+"find",t).subscribe((function(b){b.length>0?b.forEach((function(b){n.dbList.push(b)})):(n.plus.alertToasrt({msg:"Kh\xf4ng c\xf2n k\u1ebft qu\u1ea3 ph\xf9 h\u1ee3p \n Nh\u1eadp n\u1ed9i dung c\u1ea7n t\xecm c\u1ee5 th\u1ec3 h\u01a1n"}),n.loadMoreBtn=!1),n.loading=!1}))}}]),n}(),O.\u0275fac=function(n){return new(n||O)(a.Nb(u.c),a.Nb(o.a))},O.\u0275cmp=a.Hb({type:O,selectors:[["app-person-list"]],decls:23,vars:6,consts:[[1,"container"],[1,"form-group",3,"formGroup"],["type","text","placeholder","Nh\u1eadp th\xf4ng tin c\u1ea7n t\xecm","autocomplete","on","formControlName","what",1,"form-control",3,"ngClass","change"],["class","text-center text-primary",4,"ngIf"],[1,"table","table-striped","table-inverse","table-responsive"],[1,"thead-inverse"],[4,"ngFor","ngForOf"],["loadMoreBtn","",1,"text-center","*ngIf="],["type","button",1,"btn","btn-outline-primary",3,"click"],[1,"text-center","text-primary"],[1,"fa","fa-spinner","fa-spin",2,"font-size","36px"],[3,"routerLink"]],template:function(n,b){1&n&&(a.Sb(0,"div",0),a.Ob(1,"app-person"),a.Sb(2,"div",1),a.Sb(3,"input",2),a.ac("change",(function(){return b.find()})),a.Rb(),a.Rb(),a.Bc(4,N,2,0,"div",3),a.Sb(5,"table",4),a.Sb(6,"thead",5),a.Sb(7,"tr"),a.Sb(8,"th"),a.Dc(9,"S\u1ed1 hi\u1ec7u nh\xe2n s\u1ef1"),a.Rb(),a.Sb(10,"th"),a.Dc(11,"B\xed danh"),a.Rb(),a.Sb(12,"th"),a.Dc(13,"H\u1ecd v\xe0 t\xean"),a.Rb(),a.Sb(14,"th"),a.Dc(15,"Ch\u1ee9c danh"),a.Rb(),a.Sb(16,"th"),a.Dc(17,"Ph\xf2ng Ban"),a.Rb(),a.Rb(),a.Rb(),a.Sb(18,"tbody"),a.Bc(19,y,12,6,"tr",6),a.Rb(),a.Rb(),a.Sb(20,"div",7),a.Sb(21,"button",8),a.ac("click",(function(){return b.loadMore()})),a.Dc(22," K\u1ebft qu\u1ea3 kh\xe1c "),a.Rb(),a.Rb(),a.Rb()),2&n&&(a.Bb(2),a.jc("formGroup",b.searchForm),a.Bb(1),a.jc("ngClass",a.mc(4,L,b.loading)),a.Bb(1),a.jc("ngIf",b.loading),a.Bb(15),a.jc("ngForOf",b.dbList))},directives:[S,u.l,u.e,u.b,u.k,u.d,d.l,d.n,d.m,c.d],styles:[""]}),O)},{path:"import",component:C},{path:"danhsach/:id",component:r}],x=((T=function n(){_classCallCheck(this,n)}).\u0275mod=a.Lb({type:T}),T.\u0275inj=a.Kb({factory:function(n){return new(n||T)},imports:[[c.e.forChild(k)],c.e]}),T),P=t("ADsi"),M=((E=function n(){_classCallCheck(this,n)}).\u0275mod=a.Lb({type:E}),E.\u0275inj=a.Kb({factory:function(n){return new(n||E)},imports:[[P.ShareModule,x]]}),E)}}]);