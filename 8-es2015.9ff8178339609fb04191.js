(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{fj2Z:function(b,n,t){"use strict";t.r(n),t.d(n,"PersonModule",(function(){return E}));class i{}var e=t("COeT"),h=t("fXoL"),o=t("tyNb"),c=t("ofXK");let r=(()=>{class b{constructor(b,n){this.plus=b,this.route=n,this.person=new i,this.api="person/",this.loading=!0,this.loadMoreBtn=!1,this.dbList=[]}ngOnInit(){this.getById()}getById(){const b=this.route.snapshot.paramMap.get("id");this.plus.httpGet(this.api+b).subscribe(b=>{console.log(b),this.person=b})}}return b.\u0275fac=function(n){return new(n||b)(h.Nb(e.a),h.Nb(o.a))},b.\u0275cmp=h.Hb({type:b,selectors:[["app-person-info"]],decls:398,vars:64,consts:[[1,"container"],[1,"row"],[1,"col-sm-4"],[1,"col-sm-8"]],template:function(b,n){1&b&&(h.Sb(0,"div",0),h.Sb(1,"div",1),h.Sb(2,"div",2),h.Sb(3,"h6"),h.Dc(4,"S\u1ed1 hi\u1ec7u nh\xe2n s\u1ef1:"),h.Rb(),h.Rb(),h.Sb(5,"div",3),h.Sb(6,"h6"),h.Dc(7),h.Rb(),h.Rb(),h.Rb(),h.Ob(8,"hr"),h.Sb(9,"div",1),h.Sb(10,"div",2),h.Sb(11,"h6"),h.Dc(12,"B\xed danh:"),h.Rb(),h.Rb(),h.Sb(13,"div",3),h.Sb(14,"h6"),h.Dc(15),h.Rb(),h.Rb(),h.Rb(),h.Ob(16,"hr"),h.Sb(17,"div",1),h.Sb(18,"div",2),h.Sb(19,"h6"),h.Dc(20,"H\u1ecd v\xe0 t\xean:"),h.Rb(),h.Rb(),h.Sb(21,"div",3),h.Sb(22,"h6"),h.Dc(23),h.Rb(),h.Rb(),h.Rb(),h.Ob(24,"hr"),h.Sb(25,"div",1),h.Sb(26,"div",2),h.Sb(27,"h6"),h.Dc(28,"Ch\u1ee9c danh:"),h.Rb(),h.Rb(),h.Sb(29,"div",3),h.Sb(30,"h6"),h.Dc(31),h.Rb(),h.Rb(),h.Rb(),h.Ob(32,"hr"),h.Sb(33,"div",1),h.Sb(34,"div",2),h.Sb(35,"h6"),h.Dc(36,"Ch\u1ee9c danh 2:"),h.Rb(),h.Rb(),h.Sb(37,"div",3),h.Sb(38,"h6"),h.Dc(39),h.Rb(),h.Rb(),h.Rb(),h.Ob(40,"hr"),h.Sb(41,"div",1),h.Sb(42,"div",2),h.Sb(43,"h6"),h.Dc(44,"Ch\u1ee9c v\u1ee5 \u0110\u1ea3ng:"),h.Rb(),h.Rb(),h.Sb(45,"div",3),h.Sb(46,"h6"),h.Dc(47),h.Rb(),h.Rb(),h.Rb(),h.Ob(48,"hr"),h.Sb(49,"div",1),h.Sb(50,"div",2),h.Sb(51,"h6"),h.Dc(52,"Ch\u1ee9c v\u1ee5 \u0110o\xe0n th\u1ec3:"),h.Rb(),h.Rb(),h.Sb(53,"div",3),h.Sb(54,"h6"),h.Dc(55),h.Rb(),h.Rb(),h.Rb(),h.Ob(56,"hr"),h.Sb(57,"div",1),h.Sb(58,"div",2),h.Sb(59,"h6"),h.Dc(60,"T\u1ed5:"),h.Rb(),h.Rb(),h.Sb(61,"div",3),h.Sb(62,"h6"),h.Dc(63),h.Rb(),h.Rb(),h.Rb(),h.Ob(64,"hr"),h.Sb(65,"div",1),h.Sb(66,"div",2),h.Sb(67,"h6"),h.Dc(68,"Ph\xf2ng:"),h.Rb(),h.Rb(),h.Sb(69,"div",3),h.Sb(70,"h6"),h.Dc(71),h.Rb(),h.Rb(),h.Rb(),h.Ob(72,"hr"),h.Sb(73,"div",1),h.Sb(74,"div",2),h.Sb(75,"h6"),h.Dc(76,"Ph\xf2ng Ban:"),h.Rb(),h.Rb(),h.Sb(77,"div",3),h.Sb(78,"h6"),h.Dc(79),h.Rb(),h.Rb(),h.Rb(),h.Ob(80,"hr"),h.Sb(81,"div",1),h.Sb(82,"div",2),h.Sb(83,"h6"),h.Dc(84,"Ng\xe0y sinh:"),h.Rb(),h.Rb(),h.Sb(85,"div",3),h.Sb(86,"h6"),h.Dc(87),h.ec(88,"date"),h.Rb(),h.Rb(),h.Rb(),h.Ob(89,"hr"),h.Sb(90,"div",1),h.Sb(91,"div",2),h.Sb(92,"h6"),h.Dc(93,"Gi\u1edbi t\xednh:"),h.Rb(),h.Rb(),h.Sb(94,"div",3),h.Sb(95,"h6"),h.Dc(96),h.Rb(),h.Rb(),h.Rb(),h.Ob(97,"hr"),h.Sb(98,"div",1),h.Sb(99,"div",2),h.Sb(100,"h6"),h.Dc(101,"\u0110i\u1ec7n tho\u1ea1i:"),h.Rb(),h.Rb(),h.Sb(102,"div",3),h.Sb(103,"h6"),h.Dc(104),h.Rb(),h.Rb(),h.Rb(),h.Ob(105,"hr"),h.Sb(106,"div",1),h.Sb(107,"div",2),h.Sb(108,"h6"),h.Dc(109,"MSNV:"),h.Rb(),h.Rb(),h.Sb(110,"div",3),h.Sb(111,"h6"),h.Dc(112),h.Rb(),h.Rb(),h.Rb(),h.Ob(113,"hr"),h.Sb(114,"div",1),h.Sb(115,"div",2),h.Sb(116,"h6"),h.Dc(117,"D\xe2n t\u1ed9c:"),h.Rb(),h.Rb(),h.Sb(118,"div",3),h.Sb(119,"h6"),h.Dc(120),h.Rb(),h.Rb(),h.Rb(),h.Ob(121,"hr"),h.Sb(122,"div",1),h.Sb(123,"div",2),h.Sb(124,"h6"),h.Dc(125,"T\xf4n gi\xe1o:"),h.Rb(),h.Rb(),h.Sb(126,"div",3),h.Sb(127,"h6"),h.Dc(128),h.Rb(),h.Rb(),h.Rb(),h.Ob(129,"hr"),h.Sb(130,"div",1),h.Sb(131,"div",2),h.Sb(132,"h6"),h.Dc(133,"Email:"),h.Rb(),h.Rb(),h.Sb(134,"div",3),h.Sb(135,"h6"),h.Dc(136),h.Rb(),h.Rb(),h.Rb(),h.Ob(137,"hr"),h.Sb(138,"div",1),h.Sb(139,"div",2),h.Sb(140,"h6"),h.Dc(141,"S\u1ed1 ch\u1ee9ng minh nh\xe2n d\xe2n:"),h.Rb(),h.Rb(),h.Sb(142,"div",3),h.Sb(143,"h6"),h.Dc(144),h.Rb(),h.Rb(),h.Rb(),h.Ob(145,"hr"),h.Sb(146,"div",1),h.Sb(147,"div",2),h.Sb(148,"h6"),h.Dc(149,"Ng\xe0y c\u1ea5p CMND:"),h.Rb(),h.Rb(),h.Sb(150,"div",3),h.Sb(151,"h6"),h.Dc(152),h.ec(153,"date"),h.Rb(),h.Rb(),h.Rb(),h.Ob(154,"hr"),h.Sb(155,"div",1),h.Sb(156,"div",2),h.Sb(157,"h6"),h.Dc(158,"N\u01a1i c\u1ea5p CMND:"),h.Rb(),h.Rb(),h.Sb(159,"div",3),h.Sb(160,"h6"),h.Dc(161),h.Rb(),h.Rb(),h.Rb(),h.Ob(162,"hr"),h.Sb(163,"div",1),h.Sb(164,"div",2),h.Sb(165,"h6"),h.Dc(166,"Ch\xednh s\xe1ch:"),h.Rb(),h.Rb(),h.Sb(167,"div",3),h.Sb(168,"h6"),h.Dc(169),h.Rb(),h.Rb(),h.Rb(),h.Ob(170,"hr"),h.Sb(171,"div",1),h.Sb(172,"div",2),h.Sb(173,"h6"),h.Dc(174,"N\u01a1i sinh:"),h.Rb(),h.Rb(),h.Sb(175,"div",3),h.Sb(176,"h6"),h.Dc(177),h.Rb(),h.Rb(),h.Rb(),h.Ob(178,"hr"),h.Sb(179,"div",1),h.Sb(180,"div",2),h.Sb(181,"h6"),h.Dc(182,"Nguy\xean qu\xe1n:"),h.Rb(),h.Rb(),h.Sb(183,"div",3),h.Sb(184,"h6"),h.Dc(185),h.Rb(),h.Rb(),h.Rb(),h.Ob(186,"hr"),h.Sb(187,"div",1),h.Sb(188,"div",2),h.Sb(189,"h6"),h.Dc(190,"Th\u01b0\u1eddng tr\xfa:"),h.Rb(),h.Rb(),h.Sb(191,"div",3),h.Sb(192,"h6"),h.Dc(193),h.Rb(),h.Rb(),h.Rb(),h.Ob(194,"hr"),h.Sb(195,"div",1),h.Sb(196,"div",2),h.Sb(197,"h6"),h.Dc(198,"MSTCN:"),h.Rb(),h.Rb(),h.Sb(199,"div",3),h.Sb(200,"h6"),h.Dc(201),h.Rb(),h.Rb(),h.Rb(),h.Ob(202,"hr"),h.Sb(203,"div",1),h.Sb(204,"div",2),h.Sb(205,"h6"),h.Dc(206,"\u0110\u01a1n v\u1ecb:"),h.Rb(),h.Rb(),h.Sb(207,"div",3),h.Sb(208,"h6"),h.Dc(209),h.Rb(),h.Rb(),h.Rb(),h.Ob(210,"hr"),h.Sb(211,"div",1),h.Sb(212,"div",2),h.Sb(213,"h6"),h.Dc(214,"B\u1eadc l\u01b0\u01a1ng:"),h.Rb(),h.Rb(),h.Sb(215,"div",3),h.Sb(216,"h6"),h.Dc(217),h.Rb(),h.Rb(),h.Rb(),h.Ob(218,"hr"),h.Sb(219,"div",1),h.Sb(220,"div",2),h.Sb(221,"h6"),h.Dc(222,"H\u1ec7 s\u1ed1 l\u01b0\u01a1ng:"),h.Rb(),h.Rb(),h.Sb(223,"div",3),h.Sb(224,"h6"),h.Dc(225),h.Rb(),h.Rb(),h.Rb(),h.Ob(226,"hr"),h.Sb(227,"div",1),h.Sb(228,"div",2),h.Sb(229,"h6"),h.Dc(230,"Ng\u1ea1ch l\u01b0\u01a1ng:"),h.Rb(),h.Rb(),h.Sb(231,"div",3),h.Sb(232,"h6"),h.Dc(233),h.Rb(),h.Rb(),h.Rb(),h.Ob(234,"hr"),h.Sb(235,"div",1),h.Sb(236,"div",2),h.Sb(237,"h6"),h.Dc(238,"B\u1ea3ng l\u01b0\u01a1ng:"),h.Rb(),h.Rb(),h.Sb(239,"div",3),h.Sb(240,"h6"),h.Dc(241),h.Rb(),h.Rb(),h.Rb(),h.Ob(242,"hr"),h.Sb(243,"div",1),h.Sb(244,"div",2),h.Sb(245,"h6"),h.Dc(246,"TaiKhoanChuyenLuong:"),h.Rb(),h.Rb(),h.Sb(247,"div",3),h.Sb(248,"h6"),h.Dc(249),h.Rb(),h.Rb(),h.Rb(),h.Ob(250,"hr"),h.Sb(251,"div",1),h.Sb(252,"div",2),h.Sb(253,"h6"),h.Dc(254,"PhuCapHopDong:"),h.Rb(),h.Rb(),h.Sb(255,"div",3),h.Sb(256,"h6"),h.Dc(257),h.Rb(),h.Rb(),h.Rb(),h.Ob(258,"hr"),h.Sb(259,"div",1),h.Sb(260,"div",2),h.Sb(261,"h6"),h.Dc(262,"PCCV:"),h.Rb(),h.Rb(),h.Sb(263,"div",3),h.Sb(264,"h6"),h.Dc(265),h.Rb(),h.Rb(),h.Rb(),h.Ob(266,"hr"),h.Sb(267,"div",1),h.Sb(268,"div",2),h.Sb(269,"h6"),h.Dc(270,"PCTN:"),h.Rb(),h.Rb(),h.Sb(271,"div",3),h.Sb(272,"h6"),h.Dc(273),h.Rb(),h.Rb(),h.Rb(),h.Ob(274,"hr"),h.Sb(275,"div",1),h.Sb(276,"div",2),h.Sb(277,"h6"),h.Dc(278,"PCLD:"),h.Rb(),h.Rb(),h.Sb(279,"div",3),h.Sb(280,"h6"),h.Dc(281),h.Rb(),h.Rb(),h.Rb(),h.Ob(282,"hr"),h.Sb(283,"div",1),h.Sb(284,"div",2),h.Sb(285,"h6"),h.Dc(286,"V\u0103n ho\xe1 ph\u1ed5 th\xf4ng:"),h.Rb(),h.Rb(),h.Sb(287,"div",3),h.Sb(288,"h6"),h.Dc(289),h.Rb(),h.Rb(),h.Rb(),h.Ob(290,"hr"),h.Sb(291,"div",1),h.Sb(292,"div",2),h.Sb(293,"h6"),h.Dc(294,"H\u1ecdc v\u1ecb:"),h.Rb(),h.Rb(),h.Sb(295,"div",3),h.Sb(296,"h6"),h.Dc(297),h.Rb(),h.Rb(),h.Rb(),h.Ob(298,"hr"),h.Sb(299,"div",1),h.Sb(300,"div",2),h.Sb(301,"h6"),h.Dc(302,"Tr\xecnh \u0111\u1ed9 ch\xednh tr\u1ecb:"),h.Rb(),h.Rb(),h.Sb(303,"div",3),h.Sb(304,"h6"),h.Dc(305),h.Rb(),h.Rb(),h.Rb(),h.Ob(306,"hr"),h.Sb(307,"div",1),h.Sb(308,"div",2),h.Sb(309,"h6"),h.Dc(310,"Ng\xe0y v\xe0o ng\xe0nh:"),h.Rb(),h.Rb(),h.Sb(311,"div",3),h.Sb(312,"h6"),h.Dc(313),h.ec(314,"date"),h.Rb(),h.Rb(),h.Rb(),h.Ob(315,"hr"),h.Sb(316,"div",1),h.Sb(317,"div",2),h.Sb(318,"h6"),h.Dc(319,"Ng\xe0y d\u1ef1 b\u1ecb \u0110\u1ea3ng:"),h.Rb(),h.Rb(),h.Sb(320,"div",3),h.Sb(321,"h6"),h.Dc(322),h.ec(323,"date"),h.Rb(),h.Rb(),h.Rb(),h.Ob(324,"hr"),h.Sb(325,"div",1),h.Sb(326,"div",2),h.Sb(327,"h6"),h.Dc(328,"Ng\xe0y ch\xednh th\u1ee9c \u0110\u1ea3ng:"),h.Rb(),h.Rb(),h.Sb(329,"div",3),h.Sb(330,"h6"),h.Dc(331),h.ec(332,"date"),h.Rb(),h.Rb(),h.Rb(),h.Ob(333,"hr"),h.Sb(334,"div",1),h.Sb(335,"div",2),h.Sb(336,"h6"),h.Dc(337,"H\u1ec7:"),h.Rb(),h.Rb(),h.Sb(338,"div",3),h.Sb(339,"h6"),h.Dc(340),h.Rb(),h.Rb(),h.Rb(),h.Ob(341,"hr"),h.Sb(342,"div",1),h.Sb(343,"div",2),h.Sb(344,"h6"),h.Dc(345,"Tr\xecnh \u0111\u1ed9 cao nh\u1ea5t:"),h.Rb(),h.Rb(),h.Sb(346,"div",3),h.Sb(347,"h6"),h.Dc(348),h.Rb(),h.Rb(),h.Rb(),h.Ob(349,"hr"),h.Sb(350,"div",1),h.Sb(351,"div",2),h.Sb(352,"h6"),h.Dc(353,"Nh\xf3m ng\xe0nh:"),h.Rb(),h.Rb(),h.Sb(354,"div",3),h.Sb(355,"h6"),h.Dc(356),h.Rb(),h.Rb(),h.Rb(),h.Ob(357,"hr"),h.Sb(358,"div",1),h.Sb(359,"div",2),h.Sb(360,"h6"),h.Dc(361,"Ng\xe0nh ngh\u1ec1 \u0111\xe0o t\u1ea1o:"),h.Rb(),h.Rb(),h.Sb(362,"div",3),h.Sb(363,"h6"),h.Dc(364),h.Rb(),h.Rb(),h.Rb(),h.Ob(365,"hr"),h.Sb(366,"div",1),h.Sb(367,"div",2),h.Sb(368,"h6"),h.Dc(369,"V\u0103n b\u1eb1ng:"),h.Rb(),h.Rb(),h.Sb(370,"div",3),h.Sb(371,"h6"),h.Dc(372),h.Rb(),h.Rb(),h.Rb(),h.Ob(373,"hr"),h.Sb(374,"div",1),h.Sb(375,"div",2),h.Sb(376,"h6"),h.Dc(377,"Tin h\u1ecdc:"),h.Rb(),h.Rb(),h.Sb(378,"div",3),h.Sb(379,"h6"),h.Dc(380),h.Rb(),h.Rb(),h.Rb(),h.Ob(381,"hr"),h.Sb(382,"div",1),h.Sb(383,"div",2),h.Sb(384,"h6"),h.Dc(385,"Ngo\u1ea1i Ng\u1eef:"),h.Rb(),h.Rb(),h.Sb(386,"div",3),h.Sb(387,"h6"),h.Dc(388),h.Rb(),h.Rb(),h.Rb(),h.Ob(389,"hr"),h.Sb(390,"div",1),h.Sb(391,"div",2),h.Sb(392,"h6"),h.Dc(393,"Level:"),h.Rb(),h.Rb(),h.Sb(394,"div",3),h.Sb(395,"h6"),h.Dc(396),h.Rb(),h.Rb(),h.Rb(),h.Ob(397,"hr"),h.Rb()),2&b&&(h.Bb(7),h.Ec(n.person.SoHieuNhanSu),h.Bb(8),h.Ec(n.person.BiDanh),h.Bb(8),h.Ec(n.person.HoVaTen),h.Bb(8),h.Ec(n.person.ChucDanh),h.Bb(8),h.Ec(n.person.ChucDanh2),h.Bb(8),h.Ec(n.person.ChucVuDang),h.Bb(8),h.Ec(n.person.ChucVuDoanThe),h.Bb(8),h.Ec(n.person.To),h.Bb(8),h.Ec(n.person.Phong),h.Bb(8),h.Ec(n.person.PhongBan),h.Bb(8),h.Ec(h.gc(88,49,n.person.NgaySinh,"dd/MM/yyyy")),h.Bb(9),h.Ec(n.person.GioiTinh),h.Bb(8),h.Ec(n.person.DienThoai),h.Bb(8),h.Ec(n.person.MSNV),h.Bb(8),h.Ec(n.person.DanToc),h.Bb(8),h.Ec(n.person.TonGiao),h.Bb(8),h.Ec(n.person.Email),h.Bb(8),h.Ec(n.person.SoChungMinhNhanDan),h.Bb(8),h.Ec(h.gc(153,52,n.person.NgayCapCmnd,"dd/MM/yyyy")),h.Bb(9),h.Ec(n.person.NoiCapCmnd),h.Bb(8),h.Ec(n.person.ChinhSach),h.Bb(8),h.Ec(n.person.NoiSinh),h.Bb(8),h.Ec(n.person.NguyenQuan),h.Bb(8),h.Ec(n.person.ThuongTru),h.Bb(8),h.Ec(n.person.MSTCN),h.Bb(8),h.Ec(n.person.DonVi),h.Bb(8),h.Ec(n.person.BacLuong),h.Bb(8),h.Ec(n.person.HeSoLuong),h.Bb(8),h.Ec(n.person.NgachLuong),h.Bb(8),h.Ec(n.person.BangLuong),h.Bb(8),h.Ec(n.person.Taikhoanchuyenluong),h.Bb(8),h.Ec(n.person.Phucaphopdong),h.Bb(8),h.Ec(n.person.PCCV),h.Bb(8),h.Ec(n.person.PCTN),h.Bb(8),h.Ec(n.person.PCLD),h.Bb(8),h.Ec(n.person.VanHoaPhoThong),h.Bb(8),h.Ec(n.person.HocVi),h.Bb(8),h.Ec(n.person.TrinhDoChinhTri),h.Bb(8),h.Ec(h.gc(314,55,n.person.NgayVaoNganh,"dd/MM/yyyy")),h.Bb(9),h.Ec(h.gc(323,58,n.person.NgayDuBiDang,"dd/MM/yyyy")),h.Bb(9),h.Ec(h.gc(332,61,n.person.NgayChinhThucDang,"dd/MM/yyyy")),h.Bb(9),h.Ec(n.person.He),h.Bb(8),h.Ec(n.person.TrinhDoCaoNhat),h.Bb(8),h.Ec(n.person.NhomNganh),h.Bb(8),h.Ec(n.person.NganhNgheDaoTao),h.Bb(8),h.Ec(n.person.VanBang),h.Bb(8),h.Ec(n.person.TinHoc),h.Bb(8),h.Ec(n.person.NgoaiNgu),h.Bb(8),h.Ec(n.person.Level))},pipes:[c.e],styles:[""]}),b})();var a=t("EUZL"),s=t("3Pt+");let d=(()=>{class b{constructor(b,n){this.fb=b,this.plus=n,this.api="person/"}ngOnInit(){}getDashborad(){this.plus.httpGet(this.api+"dashboard").subscribe(b=>{console.log(b)})}onFocus(b,n){console.log("focus",n),document.getElementById(b).style.background="yellow"}onBlur(b,n){console.log("Blur",n.target.textContent),document.getElementById(b).style.background=""}}return b.\u0275fac=function(n){return new(n||b)(h.Nb(s.c),h.Nb(e.a))},b.\u0275cmp=h.Hb({type:b,selectors:[["app-person"]],decls:0,vars:0,template:function(b,n){},styles:["section[_ngcontent-%COMP%]{padding:20px 0}section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{text-align:center;color:#007b5e;margin-bottom:30px;text-transform:uppercase}#tabs[_ngcontent-%COMP%]{background:#007b5e}#tabs[_ngcontent-%COMP%], #tabs[_ngcontent-%COMP%]   h6.section-title[_ngcontent-%COMP%]{color:#eee}#tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item.show[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{color:#f3f3f3;background-color:transparent;border-color:transparent transparent #f3f3f3;border-bottom:4px solid!important;font-size:20px;font-weight:700}#tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem;color:#eee;font-size:20px}"]}),b})();function u(b,n){if(1&b){const b=h.Tb();h.Sb(0,"div"),h.Sb(1,"input",7,8),h.ac("change",(function(n){return h.vc(b),h.dc().readXlsx(n)})),h.Rb(),h.Sb(3,"label",9),h.ac("click",(function(){return h.vc(b),h.sc(2)})),h.Ob(4,"i",10),h.Dc(5," Ch\u1ecdn file "),h.Rb(),h.Rb()}}function S(b,n){if(1&b){const b=h.Tb();h.Sb(0,"button",3),h.ac("click",(function(){return h.vc(b),h.dc().checkImportData()})),h.Dc(1,"Ki\u1ec3m tra"),h.Rb()}}function R(b,n){if(1&b){const b=h.Tb();h.Sb(0,"button",3),h.ac("click",(function(){return h.vc(b),h.dc().import()})),h.Dc(1,"Nh\u1eadp d\u1eef li\u1ec7u"),h.Rb()}}function g(b,n){if(1&b){const b=h.Tb();h.Sb(0,"button",3),h.ac("click",(function(){return h.vc(b),h.dc().update()})),h.Dc(1,"C\u1eadp nh\u1eadt d\u1eef li\u1ec7u"),h.Rb()}}function p(b,n){1&b&&(h.Sb(0,"div",1),h.Ob(1,"i",11),h.Rb())}function l(b,n){if(1&b&&(h.Sb(0,"tr"),h.Sb(1,"td",15),h.Dc(2),h.Rb(),h.Sb(3,"td"),h.Dc(4),h.Rb(),h.Sb(5,"td"),h.Dc(6),h.Rb(),h.Rb()),2&b){const b=n.$implicit;h.Bb(2),h.Ec(b.name),h.Bb(2),h.Ec(b.header),h.Bb(2),h.Ec(b.value||"\u0110ang \u0111\u1ec3 tr\u1ed1ng")}}function v(b,n){if(1&b&&(h.Sb(0,"table",12),h.Sb(1,"thead",13),h.Sb(2,"tr"),h.Sb(3,"th"),h.Dc(4,"H\u1ecd v\xe0 t\xean"),h.Rb(),h.Sb(5,"th"),h.Dc(6,"C\u1ed9t b\u1ecb l\u1ed7i"),h.Rb(),h.Sb(7,"th"),h.Dc(8,"N\u1ed9i dung b\u1ea1n nh\u1eadp"),h.Rb(),h.Rb(),h.Rb(),h.Sb(9,"tbody"),h.Bc(10,l,7,3,"tr",14),h.Sb(11,"tr"),h.Ob(12,"td",15),h.Ob(13,"td"),h.Ob(14,"td"),h.Rb(),h.Rb(),h.Rb()),2&b){const b=h.dc();h.Bb(10),h.jc("ngForOf",b.err)}}let D=(()=>{class b{constructor(b,n,t){this.plus=b,this.fb=n,this.location=t,this.dataImport=[],this.dataJson=[],this.errData=[],this.err=[],this.dbList=[],this.send="",this.loading=!1,this.loadMoreBtn=!1,this.api="person/",this.person=this.fb.group({SoHieuNhanSu:[,[s.u.required,s.u.min(3),s.u.max(999999)]],BiDanh:[,[s.u.required,s.u.minLength(3),s.u.maxLength(7)]],HoVaTen:[,[s.u.required,s.u.max(10)]],ChucDanh:[,[s.u.required,s.u.minLength(3),s.u.maxLength(255)]],ChucDanh2:[,[s.u.required,s.u.minLength(3),s.u.maxLength(255)]],ChucVuDang:[,[]],ChucVuDoanThe:[,[]],To:[,[s.u.minLength(3),s.u.maxLength(255)]],Phong:[,[s.u.required,s.u.minLength(3),s.u.maxLength(255)]],PhongBan:[,[s.u.required,s.u.minLength(3),s.u.maxLength(255)]],NgaySinh:[,[s.u.required]],GioiTinh:[,[s.u.required,s.u.minLength(1),s.u.maxLength(50)]],DienThoai:[,[s.u.required,s.u.maxLength(15)]],MSNV:[,[s.u.required,s.u.maxLength(5)]],DanToc:[,[s.u.required,s.u.minLength(3),s.u.maxLength(255)]],TonGiao:[,[s.u.required,s.u.minLength(3),s.u.maxLength(255)]],Email:[,[s.u.required,s.u.minLength(3),s.u.maxLength(255)]],SoChungMinhNhanDan:[,[s.u.required,s.u.minLength(3),s.u.maxLength(255)]],NgayCapCmnd:[,[s.u.required]],NoiCapCmnd:[,[s.u.required,s.u.maxLength(255)]],ChinhSach:[,[s.u.maxLength(255)]],NoiSinh:[,[s.u.maxLength(255)]],NguyenQuan:[,[s.u.required,s.u.maxLength(255)]],ThuongTru:[,[s.u.required,s.u.maxLength(255)]],MSTCN:[,[s.u.required,s.u.maxLength(255)]],DonVi:[,[s.u.required,s.u.maxLength(255)]],BacLuong:[,[s.u.required,s.u.maxLength(255)]],HeSoLuong:[,[s.u.required,s.u.maxLength(255)]],NgachLuong:[,[s.u.required]],BangLuong:[,[s.u.required]],Taikhoanchuyenluong:[,[s.u.required]],Phucaphopdong:[,[]],PCCV:[,[]],PCTN:[,[]],PCLD:[,[]],VanHoaPhoThong:[,[]],HocVi:[,[]],TrinhDoChinhTri:[,[]],NgayVaoNganh:[,[]],NgayDuBiDang:[,[]],NgayChinhThucDang:[,[]],He:[,[]],TrinhDoCaoNhat:[,[]],NhomNganh:[,[]],NganhNgheDaoTao:[,[]],VanBang:[,[]],TinHoc:[,[]],NgoaiNgu:[,[]],Level:[,[s.u.required,s.u.max(10)]]})}ngOnInit(){}readXlsx(b){if("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"===b.target.files[0].type){this.loading=!0,this.dataJson=[],this.dataImport=[];let n=b.target;const t=new FileReader;t.onload=b=>{const n=a.read(b.target.result,{type:"binary"});this.dataImport=a.utils.sheet_to_json(n.Sheets[n.SheetNames[0]],{header:1}),this.loading=!1},t.readAsBinaryString(n.files[0]),n=null}else this.plus.alertToasrt({war:"B\u1ea1n ch\u1ec9 \u0111\u01b0\u1ee3c ch\u1ecdn file excel"}),this.loading=!1}checkImportData(){this.reset();const b=this.dataImport.length,n=this.dataImport[0];for(let t=2;t<b;t++){const b=this.dataImport[t],i={SoHieuNhanSu:b[1],BiDanh:`${b[2]}`,HoVaTen:b[3],ChucDanh:b[4],ChucDanh2:b[5],ChucVuDang:b[6],ChucVuDoanThe:b[7],To:b[8],Phong:b[9],PhongBan:b[10],NgaySinh:this.plus.ExcelDateToJSDate(b[11]),GioiTinh:b[12],DienThoai:b[13],MSNV:`${b[14]}`,DanToc:b[15],TonGiao:b[16],Email:b[17],SoChungMinhNhanDan:b[18],NgayCapCmnd:this.plus.ExcelDateToJSDate(b[19]),NoiCapCmnd:b[20],ChinhSach:b[21],NoiSinh:b[22],NguyenQuan:b[23],ThuongTru:b[24],MSTCN:`${b[25]}`,DonVi:b[26],BacLuong:b[27],HeSoLuong:b[28],NgachLuong:b[29],BangLuong:b[30],Taikhoanchuyenluong:b[31],Phucaphopdong:b[32],PCCV:b[33],PCTN:b[34],PCLD:b[35],VanHoaPhoThong:b[36],HocVi:b[37],TrinhDoChinhTri:b[38],NgayVaoNganh:this.plus.ExcelDateToJSDate(b[39]),NgayDuBiDang:this.plus.ExcelDateToJSDate(b[40]),NgayChinhThucDang:this.plus.ExcelDateToJSDate(b[41]),He:b[42],TrinhDoCaoNhat:b[43],NhomNganh:b[44],NganhNgheDaoTao:b[45],VanBang:b[46],TinHoc:b[47],NgoaiNgu:b[48],Level:b[49]};if(this.person.patchValue(i),this.person.valid){const b=this.plus.addKeyWord(i);this.dataJson.push(i),console.log(b)}else this.plus.getFormValidationErrors(this.person,t).forEach(b=>{const e={name:i.HoVaTen,header:n[Object.keys(i).indexOf(b.KeyControl)+1],value:i[b.KeyControl]};console.log(t),this.err.push(e)}),this.errData.push(i)}}import(){if(this.err.length>0)this.plus.alertToasrt({err:"B\u1ea1n h\xe3y s\u1eeda l\u1ed7i file tr\u01b0\u1edbc khi nh\u1eadp d\u1eef li\u1ec7u!"}),this.plus.go("/nhansu/import");else{const b=JSON.stringify(this.dataJson);this.plus.httpPost(this.api+"import",b).subscribe(b=>{console.log(b)})}}update(){}reset(){this.err=[],this.dataJson=[],this.errData=[],this.err=[],this.dbList=[],this.dataJson=[]}refresh(){this.location.back(),this.location.forward()}}return b.\u0275fac=function(n){return new(n||b)(h.Nb(e.a),h.Nb(s.c),h.Nb(c.j))},b.\u0275cmp=h.Hb({type:b,selectors:[["app-person-import"]],decls:12,vars:6,consts:[[1,"container"],[1,"text-center","text-primary"],[4,"ngIf"],["type","button",1,"btn","btn-primary","mx-2",3,"click"],["type","button","class","btn btn-primary mx-2",3,"click",4,"ngIf"],["class","text-center text-primary",4,"ngIf"],["class","table table-inverse",4,"ngIf"],["hidden","","id","file-upload","type","file","multiple","false",3,"change"],["fileInput",""],["for","file-upload",1,"btn","btn-outline-primary",3,"click"],[1,"fa","fa-cloud-upload"],[1,"fa","fa-spinner","fa-spin",2,"font-size","36px"],[1,"table","table-inverse"],[1,"thead-inverse"],[4,"ngFor","ngForOf"],["scope","row"]],template:function(b,n){1&b&&(h.Sb(0,"div",0),h.Ob(1,"app-person"),h.Sb(2,"h5",1),h.Dc(3,"Nh\u1eadp nh\xe2n s\u1ef1 t\u1eeb excel"),h.Rb(),h.Bc(4,u,6,0,"div",2),h.Sb(5,"button",3),h.ac("click",(function(){return n.refresh()})),h.Dc(6,"L\xe0m l\u1ea1i"),h.Rb(),h.Bc(7,S,2,0,"button",4),h.Bc(8,R,2,0,"button",4),h.Bc(9,g,2,0,"button",4),h.Bc(10,p,2,0,"div",5),h.Bc(11,v,15,1,"table",6),h.Rb()),2&b&&(h.Bb(4),h.jc("ngIf",0===n.dataJson.length&&0===n.err.length),h.Bb(3),h.jc("ngIf",n.dataImport.length>0),h.Bb(1),h.jc("ngIf",0===n.err.length&&n.dataJson.length>0),h.Bb(1),h.jc("ngIf",0===n.err.length&&n.dataJson.length>0),h.Bb(1),h.jc("ngIf",n.loading),h.Bb(1),h.jc("ngIf",0!==n.err.length))},directives:[d,c.n,c.m],styles:[""]}),b})();var m=t("Kj3r");function f(b,n){1&b&&(h.Sb(0,"div",9),h.Ob(1,"i",10),h.Rb())}function B(b,n){if(1&b&&(h.Sb(0,"tr"),h.Sb(1,"td"),h.Dc(2),h.Rb(),h.Sb(3,"td"),h.Dc(4),h.Rb(),h.Sb(5,"td"),h.Sb(6,"a",11),h.Dc(7),h.Rb(),h.Rb(),h.Sb(8,"td"),h.Dc(9),h.Rb(),h.Sb(10,"td"),h.Dc(11),h.Rb(),h.Rb()),2&b){const b=n.$implicit;h.Bb(2),h.Ec(b.SoHieuNhanSu),h.Bb(2),h.Ec(b.BiDanh),h.Bb(2),h.kc("routerLink",b._id),h.Bb(1),h.Ec(b.HoVaTen),h.Bb(2),h.Ec(b.ChucDanh),h.Bb(2),h.Ec(b.PhongBan)}}const N=function(b){return{loading:b}};let C=(()=>{class b{constructor(b,n){this.fb=b,this.plus=n,this.api="person/",this.loadMoreBtn=!1,this.loading=!0,this.dbList=[],this.main=this.fb.group({}),this.searchForm=this.fb.group({what:["",[s.u.minLength(3),s.u.maxLength(100)]]})}ngOnInit(){this.get(),this.find()}get(){this.plus.httpPost(this.api+"find",{what:this.searchForm.value,perPage:10}).subscribe(b=>{this.dbList=b,this.loading=!1})}find(){this.searchForm.valid?this.searchForm.valueChanges.pipe(Object(m.a)(1500)).subscribe(b=>{this.loading=!0,b.what=this.plus.removeAccents(b.what),this.plus.httpPost(this.api+"find",b).subscribe(b=>{this.loading=!1,b.length>0&&(this.dbList=b)})}):this.plus.alertToasrt({war:"B\u1ea1n c\u1ea7n nh\u1eadp nhi\u1ec1u h\u01a1n 3 k\xfd t\u1ef1"})}loadMore(){this.loading=!0;const b=Math.ceil(this.dbList.length/10)+1,n=this.searchForm.value;n.what=this.plus.removeAccents(n.what),n.page=b,this.plus.httpPost(this.api+"find",n).subscribe(b=>{b.length>0?b.forEach(b=>{this.dbList.push(b)}):(this.plus.alertToasrt({msg:"Kh\xf4ng c\xf2n k\u1ebft qu\u1ea3 ph\xf9 h\u1ee3p \n Nh\u1eadp n\u1ed9i dung c\u1ea7n t\xecm c\u1ee5 th\u1ec3 h\u01a1n"}),this.loadMoreBtn=!1),this.loading=!1})}}return b.\u0275fac=function(n){return new(n||b)(h.Nb(s.c),h.Nb(e.a))},b.\u0275cmp=h.Hb({type:b,selectors:[["app-person-list"]],decls:23,vars:6,consts:[[1,"container"],[1,"form-group",3,"formGroup"],["type","text","placeholder","Nh\u1eadp th\xf4ng tin c\u1ea7n t\xecm","autocomplete","on","formControlName","what",1,"form-control",3,"ngClass","change"],["class","text-center text-primary",4,"ngIf"],[1,"table","table-striped","table-inverse","table-responsive"],[1,"thead-inverse"],[4,"ngFor","ngForOf"],["loadMoreBtn","",1,"text-center","*ngIf="],["type","button",1,"btn","btn-outline-primary",3,"click"],[1,"text-center","text-primary"],[1,"fa","fa-spinner","fa-spin",2,"font-size","36px"],[3,"routerLink"]],template:function(b,n){1&b&&(h.Sb(0,"div",0),h.Ob(1,"app-person"),h.Sb(2,"div",1),h.Sb(3,"input",2),h.ac("change",(function(){return n.find()})),h.Rb(),h.Rb(),h.Bc(4,f,2,0,"div",3),h.Sb(5,"table",4),h.Sb(6,"thead",5),h.Sb(7,"tr"),h.Sb(8,"th"),h.Dc(9,"S\u1ed1 hi\u1ec7u nh\xe2n s\u1ef1"),h.Rb(),h.Sb(10,"th"),h.Dc(11,"B\xed danh"),h.Rb(),h.Sb(12,"th"),h.Dc(13,"H\u1ecd v\xe0 t\xean"),h.Rb(),h.Sb(14,"th"),h.Dc(15,"Ch\u1ee9c danh"),h.Rb(),h.Sb(16,"th"),h.Dc(17,"Ph\xf2ng Ban"),h.Rb(),h.Rb(),h.Rb(),h.Sb(18,"tbody"),h.Bc(19,B,12,6,"tr",6),h.Rb(),h.Rb(),h.Sb(20,"div",7),h.Sb(21,"button",8),h.ac("click",(function(){return n.loadMore()})),h.Dc(22," K\u1ebft qu\u1ea3 kh\xe1c "),h.Rb(),h.Rb(),h.Rb()),2&b&&(h.Bb(2),h.jc("formGroup",n.searchForm),h.Bb(1),h.jc("ngClass",h.mc(4,N,n.loading)),h.Bb(1),h.jc("ngIf",n.loading),h.Bb(15),h.jc("ngForOf",n.dbList))},directives:[d,s.l,s.e,s.b,s.k,s.d,c.l,c.n,c.m,o.d],styles:[""]}),b})();const y=[{path:"",component:C},{path:"danhsach",component:C},{path:"import",component:D},{path:"nhansu/:id",component:r}];let O=(()=>{class b{}return b.\u0275mod=h.Lb({type:b}),b.\u0275inj=h.Kb({factory:function(n){return new(n||b)},imports:[[o.e.forChild(y)],o.e]}),b})();var T=t("ADsi");let E=(()=>{class b{}return b.\u0275mod=h.Lb({type:b}),b.\u0275inj=h.Kb({factory:function(n){return new(n||b)},imports:[[T.ShareModule,O]]}),b})()}}]);