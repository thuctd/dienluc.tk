function _defineProperty(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{fj2Z:function(n,t,e){"use strict";e.r(t),e.d(t,"PersonModule",(function(){return I}));var i,b,a=function n(){_classCallCheck(this,n)},o=e("COeT"),s=e("fXoL"),r=e("tyNb"),c=e("ofXK"),h=((i=function(){function n(t,e){_classCallCheck(this,n),this.plus=t,this.route=e,this.person=new a,this.api="person",this.db=null,this.dbName="person",this.collection="person",this.dbList=[]}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.plus.IDB_InitDB(this.api).subscribe((function(t){console.log("dbName person"),n.db=t;var e=n.route.snapshot.paramMap.get("id");n.plus.IDB_DB_GetByKey(n.db,n.collection,e).subscribe((function(i){if(i)return n.plus.loaded(),n.person=i;n.plus.httpGet(n.api+e).subscribe((function(e){n.plus.IDB_DB_Add(t,n.collection,e),n.person=e,n.plus.loaded()}),(function(t){n.plus.alertError(),n.plus.loaded()}))})),n.getById()}))}},{key:"getById",value:function(){var n=this;this.plus.load();var t=this.route.snapshot.paramMap.get("id");console.log(t),this.plus.sleep(1e3),this.plus.IDB_DB_GetByKey(this.db,this.collection,t).subscribe((function(e){if(e)return n.plus.alertToasrt(e),n.plus.loaded(),n.person=e;n.plus.httpGet(n.api+t).subscribe((function(t){n.plus.IDB_DB_Add(n.db,n.collection,t),n.person=t,n.plus.loaded()}),(function(t){n.plus.alertError(),n.plus.loaded()}))}))}},{key:"arr_Filter1",value:function(){this.dbList.filter((function(n){console.log(n)}))}},{key:"update",value:function(n,t,e){var i=_defineProperty({},t,n);console.log(i),e!==n&&this.plus.httpPut(this.api+"update",i).subscribe((function(n){console.log(n)}))}}]),n}()).\u0275fac=function(n){return new(n||i)(s.Nb(o.a),s.Nb(r.a))},i.\u0275cmp=s.Hb({type:i,selectors:[["app-person-info"]],decls:248,vars:32,consts:[[1,"container","my-3"],["role","tablist",1,"nav","nav-pills","mb-5","justify-content-center"],[1,"nav-item"],["data-toggle","pill","href","#coban",1,"nav-link","active"],["data-toggle","pill","href","#daotao",1,"nav-link"],["data-toggle","pill","href","#luong",1,"nav-link"],[1,"tab-content"],["id","coban","role","tabpanel",1,"tab-pane","fade","show","active"],[1,"row"],[1,"col-sm-4"],[1,"col-sm-8"],["id","daotao","role","tabpanel",1,"tab-pane","fade","show"],["id","luong","role","tabpanel",1,"tab-pane","fade","show"]],template:function(n,t){1&n&&(s.Tb(0,"div",0),s.Tb(1,"ul",1),s.Tb(2,"li",2),s.Tb(3,"a",3),s.Dc(4,"C\u01a1 B\u1ea3n"),s.Sb(),s.Sb(),s.Tb(5,"li",2),s.Tb(6,"a",4),s.Dc(7,"\u0110\xe0o t\u1ea1o"),s.Sb(),s.Sb(),s.Tb(8,"li",2),s.Tb(9,"a",5),s.Dc(10,"L\u01b0\u01a1ng"),s.Sb(),s.Sb(),s.Sb(),s.Tb(11,"div",6),s.Tb(12,"div",7),s.Tb(13,"div",8),s.Tb(14,"div",9),s.Tb(15,"h6"),s.Dc(16,"S\u1ed1 hi\u1ec7u nh\xe2n s\u1ef1:"),s.Sb(),s.Sb(),s.Tb(17,"div",10),s.Tb(18,"h6"),s.Dc(19),s.Sb(),s.Sb(),s.Sb(),s.Ob(20,"hr"),s.Tb(21,"div",8),s.Tb(22,"div",9),s.Tb(23,"h6"),s.Dc(24,"B\xed danh:"),s.Sb(),s.Sb(),s.Tb(25,"div",10),s.Tb(26,"h6"),s.Dc(27),s.Sb(),s.Sb(),s.Sb(),s.Ob(28,"hr"),s.Tb(29,"div",8),s.Tb(30,"div",9),s.Tb(31,"h6"),s.Dc(32,"H\u1ecd v\xe0 t\xean:"),s.Sb(),s.Sb(),s.Tb(33,"div",10),s.Tb(34,"h6"),s.Dc(35),s.Sb(),s.Sb(),s.Sb(),s.Ob(36,"hr"),s.Tb(37,"div",8),s.Tb(38,"div",9),s.Tb(39,"h6"),s.Dc(40,"Ch\u1ee9c danh:"),s.Sb(),s.Sb(),s.Tb(41,"div",10),s.Tb(42,"h6"),s.Dc(43),s.Sb(),s.Sb(),s.Sb(),s.Ob(44,"hr"),s.Tb(45,"div",8),s.Tb(46,"div",9),s.Tb(47,"h6"),s.Dc(48,"Ch\u1ee9c danh 2:"),s.Sb(),s.Sb(),s.Tb(49,"div",10),s.Tb(50,"h6"),s.Dc(51),s.Sb(),s.Sb(),s.Sb(),s.Ob(52,"hr"),s.Tb(53,"div",8),s.Tb(54,"div",9),s.Tb(55,"h6"),s.Dc(56,"Ch\u1ee9c v\u1ee5 \u0110\u1ea3ng:"),s.Sb(),s.Sb(),s.Tb(57,"div",10),s.Tb(58,"h6"),s.Dc(59),s.Sb(),s.Sb(),s.Sb(),s.Ob(60,"hr"),s.Tb(61,"div",8),s.Tb(62,"div",9),s.Tb(63,"h6"),s.Dc(64,"Ch\u1ee9c v\u1ee5 \u0110o\xe0n th\u1ec3:"),s.Sb(),s.Sb(),s.Tb(65,"div",10),s.Tb(66,"h6"),s.Dc(67),s.Sb(),s.Sb(),s.Sb(),s.Ob(68,"hr"),s.Tb(69,"div",8),s.Tb(70,"div",9),s.Tb(71,"h6"),s.Dc(72,"T\u1ed5:"),s.Sb(),s.Sb(),s.Tb(73,"div",10),s.Tb(74,"h6"),s.Dc(75),s.Sb(),s.Sb(),s.Sb(),s.Ob(76,"hr"),s.Tb(77,"div",8),s.Tb(78,"div",9),s.Tb(79,"h6"),s.Dc(80,"Ph\xf2ng:"),s.Sb(),s.Sb(),s.Tb(81,"div",10),s.Tb(82,"h6"),s.Dc(83),s.Sb(),s.Sb(),s.Sb(),s.Ob(84,"hr"),s.Tb(85,"div",8),s.Tb(86,"div",9),s.Tb(87,"h6"),s.Dc(88,"Ph\xf2ng Ban:"),s.Sb(),s.Sb(),s.Tb(89,"div",10),s.Tb(90,"h6"),s.Dc(91),s.Sb(),s.Sb(),s.Sb(),s.Ob(92,"hr"),s.Tb(93,"div",8),s.Tb(94,"div",9),s.Tb(95,"h6"),s.Dc(96,"Ng\xe0y sinh:"),s.Sb(),s.Sb(),s.Tb(97,"div",10),s.Tb(98,"h6"),s.Dc(99),s.gc(100,"date"),s.Sb(),s.Sb(),s.Sb(),s.Ob(101,"hr"),s.Tb(102,"div",8),s.Tb(103,"div",9),s.Tb(104,"h6"),s.Dc(105,"Gi\u1edbi t\xednh:"),s.Sb(),s.Sb(),s.Tb(106,"div",10),s.Tb(107,"h6"),s.Dc(108),s.Sb(),s.Sb(),s.Sb(),s.Ob(109,"hr"),s.Tb(110,"div",8),s.Tb(111,"div",9),s.Tb(112,"h6"),s.Dc(113,"\u0110i\u1ec7n tho\u1ea1i:"),s.Sb(),s.Sb(),s.Tb(114,"div",10),s.Tb(115,"h6"),s.Dc(116),s.Sb(),s.Sb(),s.Sb(),s.Ob(117,"hr"),s.Sb(),s.Tb(118,"div",11),s.Tb(119,"div",8),s.Tb(120,"div",9),s.Tb(121,"h6"),s.Dc(122,"H\u1ec7:"),s.Sb(),s.Sb(),s.Tb(123,"div",10),s.Tb(124,"h6"),s.Dc(125),s.Sb(),s.Sb(),s.Sb(),s.Ob(126,"hr"),s.Tb(127,"div",8),s.Tb(128,"div",9),s.Tb(129,"h6"),s.Dc(130,"Tr\xecnh \u0111\u1ed9 cao nh\u1ea5t:"),s.Sb(),s.Sb(),s.Tb(131,"div",10),s.Tb(132,"h6"),s.Dc(133),s.Sb(),s.Sb(),s.Sb(),s.Ob(134,"hr"),s.Tb(135,"div",8),s.Tb(136,"div",9),s.Tb(137,"h6"),s.Dc(138,"Nh\xf3m ng\xe0nh:"),s.Sb(),s.Sb(),s.Tb(139,"div",10),s.Tb(140,"h6"),s.Dc(141),s.Sb(),s.Sb(),s.Sb(),s.Ob(142,"hr"),s.Tb(143,"div",8),s.Tb(144,"div",9),s.Tb(145,"h6"),s.Dc(146,"Ng\xe0nh ngh\u1ec1 \u0111\xe0o t\u1ea1o:"),s.Sb(),s.Sb(),s.Tb(147,"div",10),s.Tb(148,"h6"),s.Dc(149),s.Sb(),s.Sb(),s.Sb(),s.Ob(150,"hr"),s.Tb(151,"div",8),s.Tb(152,"div",9),s.Tb(153,"h6"),s.Dc(154,"V\u0103n b\u1eb1ng:"),s.Sb(),s.Sb(),s.Tb(155,"div",10),s.Tb(156,"h6"),s.Dc(157),s.Sb(),s.Sb(),s.Sb(),s.Ob(158,"hr"),s.Tb(159,"div",8),s.Tb(160,"div",9),s.Tb(161,"h6"),s.Dc(162,"Tin h\u1ecdc:"),s.Sb(),s.Sb(),s.Tb(163,"div",10),s.Tb(164,"h6"),s.Dc(165),s.Sb(),s.Sb(),s.Sb(),s.Ob(166,"hr"),s.Tb(167,"div",8),s.Tb(168,"div",9),s.Tb(169,"h6"),s.Dc(170,"Ngo\u1ea1i Ng\u1eef:"),s.Sb(),s.Sb(),s.Tb(171,"div",10),s.Tb(172,"h6"),s.Dc(173),s.Sb(),s.Sb(),s.Sb(),s.Ob(174,"hr"),s.Sb(),s.Tb(175,"div",12),s.Tb(176,"div",8),s.Tb(177,"div",9),s.Tb(178,"h6"),s.Dc(179,"B\u1eadc l\u01b0\u01a1ng:"),s.Sb(),s.Sb(),s.Tb(180,"div",10),s.Tb(181,"h6"),s.Dc(182),s.Sb(),s.Sb(),s.Sb(),s.Ob(183,"hr"),s.Tb(184,"div",8),s.Tb(185,"div",9),s.Tb(186,"h6"),s.Dc(187,"H\u1ec7 s\u1ed1 l\u01b0\u01a1ng:"),s.Sb(),s.Sb(),s.Tb(188,"div",10),s.Tb(189,"h6"),s.Dc(190),s.Sb(),s.Sb(),s.Sb(),s.Ob(191,"hr"),s.Tb(192,"div",8),s.Tb(193,"div",9),s.Tb(194,"h6"),s.Dc(195,"Ng\u1ea1ch l\u01b0\u01a1ng:"),s.Sb(),s.Sb(),s.Tb(196,"div",10),s.Tb(197,"h6"),s.Dc(198),s.Sb(),s.Sb(),s.Sb(),s.Ob(199,"hr"),s.Tb(200,"div",8),s.Tb(201,"div",9),s.Tb(202,"h6"),s.Dc(203,"B\u1ea3ng l\u01b0\u01a1ng:"),s.Sb(),s.Sb(),s.Tb(204,"div",10),s.Tb(205,"h6"),s.Dc(206),s.Sb(),s.Sb(),s.Sb(),s.Ob(207,"hr"),s.Tb(208,"div",8),s.Tb(209,"div",9),s.Tb(210,"h6"),s.Dc(211,"TaiKhoanChuyenLuong:"),s.Sb(),s.Sb(),s.Tb(212,"div",10),s.Tb(213,"h6"),s.Dc(214),s.Sb(),s.Sb(),s.Sb(),s.Ob(215,"hr"),s.Tb(216,"div",8),s.Tb(217,"div",9),s.Tb(218,"h6"),s.Dc(219,"PhuCapHopDong:"),s.Sb(),s.Sb(),s.Tb(220,"div",10),s.Tb(221,"h6"),s.Dc(222),s.Sb(),s.Sb(),s.Sb(),s.Ob(223,"hr"),s.Tb(224,"div",8),s.Tb(225,"div",9),s.Tb(226,"h6"),s.Dc(227,"PCCV:"),s.Sb(),s.Sb(),s.Tb(228,"div",10),s.Tb(229,"h6"),s.Dc(230),s.Sb(),s.Sb(),s.Sb(),s.Ob(231,"hr"),s.Tb(232,"div",8),s.Tb(233,"div",9),s.Tb(234,"h6"),s.Dc(235,"PCTN:"),s.Sb(),s.Sb(),s.Tb(236,"div",10),s.Tb(237,"h6"),s.Dc(238),s.Sb(),s.Sb(),s.Sb(),s.Ob(239,"hr"),s.Tb(240,"div",8),s.Tb(241,"div",9),s.Tb(242,"h6"),s.Dc(243,"PCLD:"),s.Sb(),s.Sb(),s.Tb(244,"div",10),s.Tb(245,"h6"),s.Dc(246),s.Sb(),s.Sb(),s.Sb(),s.Ob(247,"hr"),s.Sb(),s.Sb(),s.Sb()),2&n&&(s.Cb(19),s.Ec(t.person.SoHieuNhanSu),s.Cb(8),s.Ec(t.person.BiDanh),s.Cb(8),s.Ec(t.person.HoVaTen),s.Cb(8),s.Ec(t.person.ChucDanh),s.Cb(8),s.Ec(t.person.ChucDanh2),s.Cb(8),s.Ec(t.person.ChucVuDang),s.Cb(8),s.Ec(t.person.ChucVuDoanThe),s.Cb(8),s.Ec(t.person.To),s.Cb(8),s.Ec(t.person.Phong),s.Cb(8),s.Ec(t.person.PhongBan),s.Cb(8),s.Ec(s.ic(100,29,t.person.NgaySinh,"dd/MM/yyyy")),s.Cb(9),s.Ec(t.person.GioiTinh),s.Cb(8),s.Ec(t.person.DienThoai),s.Cb(9),s.Ec(t.person.He),s.Cb(8),s.Ec(t.person.TrinhDoCaoNhat),s.Cb(8),s.Ec(t.person.NhomNganh),s.Cb(8),s.Ec(t.person.NganhNgheDaoTao),s.Cb(8),s.Ec(t.person.VanBang),s.Cb(8),s.Ec(t.person.TinHoc),s.Cb(8),s.Ec(t.person.NgoaiNgu),s.Cb(9),s.Ec(t.person.BacLuong),s.Cb(8),s.Ec(t.person.HeSoLuong),s.Cb(8),s.Ec(t.person.NgachLuong),s.Cb(8),s.Ec(t.person.BangLuong),s.Cb(8),s.Ec(t.person.Taikhoanchuyenluong),s.Cb(8),s.Ec(t.person.Phucaphopdong),s.Cb(8),s.Ec(t.person.PCCV),s.Cb(8),s.Ec(t.person.PCTN),s.Cb(8),s.Ec(t.person.PCLD))},pipes:[c.d],styles:[".nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#777}"]}),i),l=e("mrSG"),u=e("EUZL"),d=e("3Pt+"),p=((b=function(){function n(t,e){_classCallCheck(this,n),this.fb=t,this.plus=e,this.db=null,this.dbName="person",this.api="person"}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.plus.IDB_InitDB(this.dbName).subscribe((function(t){n.db=t}))}},{key:"getDashborad",value:function(){this.plus.httpGet(this.api+"dashboard").subscribe((function(n){console.log(n)}))}},{key:"onFocus",value:function(n,t){console.log("focus",t),document.getElementById(n).style.background="yellow"}},{key:"onBlur",value:function(n,t){console.log("Blur",t.target.textContent),document.getElementById(n).style.background=""}}]),n}()).\u0275fac=function(n){return new(n||b)(s.Nb(d.c),s.Nb(o.a))},b.\u0275cmp=s.Hb({type:b,selectors:[["app-person"]],decls:0,vars:0,template:function(n,t){},styles:["section[_ngcontent-%COMP%]{padding:20px 0}section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{text-align:center;color:#007b5e;margin-bottom:30px;text-transform:uppercase}#tabs[_ngcontent-%COMP%]{background:#007b5e}#tabs[_ngcontent-%COMP%], #tabs[_ngcontent-%COMP%]   h6.section-title[_ngcontent-%COMP%]{color:#eee}#tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item.show[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{color:#f3f3f3;background-color:transparent;border-color:transparent transparent #f3f3f3;border-bottom:4px solid!important;font-size:20px;font-weight:700}#tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem;color:#eee;font-size:20px}"]}),b);function g(n,t){if(1&n){var e=s.Ub();s.Tb(0,"div"),s.Tb(1,"input",7,8),s.bc("change",(function(n){return s.uc(e),s.fc().readXlsx(n)})),s.Sb(),s.Tb(3,"label",9),s.bc("click",(function(){return s.uc(e),s.tc(2)})),s.Ob(4,"i",10),s.Dc(5," Ch\u1ecdn file "),s.Sb(),s.Sb()}}function T(n,t){if(1&n){var e=s.Ub();s.Tb(0,"button",3),s.bc("click",(function(){return s.uc(e),s.fc().checkImportData()})),s.Dc(1,"Ki\u1ec3m tra"),s.Sb()}}function S(n,t){if(1&n){var e=s.Ub();s.Tb(0,"button",3),s.bc("click",(function(){return s.uc(e),s.fc().import()})),s.Dc(1,"Nh\u1eadp d\u1eef li\u1ec7u"),s.Sb()}}function f(n,t){if(1&n){var e=s.Ub();s.Tb(0,"button",3),s.bc("click",(function(){return s.uc(e),s.fc().update()})),s.Dc(1,"C\u1eadp nh\u1eadt d\u1eef li\u1ec7u"),s.Sb()}}function v(n,t){1&n&&(s.Tb(0,"div",1),s.Ob(1,"i",11),s.Sb())}function D(n,t){if(1&n&&(s.Tb(0,"tr"),s.Tb(1,"td",15),s.Dc(2),s.Sb(),s.Tb(3,"td"),s.Dc(4),s.Sb(),s.Tb(5,"td"),s.Dc(6),s.Sb(),s.Sb()),2&n){var e=t.$implicit;s.Cb(2),s.Ec(e.name),s.Cb(2),s.Ec(e.header),s.Cb(2),s.Ec(e.value||"\u0110ang \u0111\u1ec3 tr\u1ed1ng")}}function m(n,t){if(1&n&&(s.Tb(0,"table",12),s.Tb(1,"thead",13),s.Tb(2,"tr"),s.Tb(3,"th"),s.Dc(4,"H\u1ecd v\xe0 t\xean"),s.Sb(),s.Tb(5,"th"),s.Dc(6,"C\u1ed9t b\u1ecb l\u1ed7i"),s.Sb(),s.Tb(7,"th"),s.Dc(8,"N\u1ed9i dung b\u1ea1n nh\u1eadp"),s.Sb(),s.Sb(),s.Sb(),s.Tb(9,"tbody"),s.Bc(10,D,7,3,"tr",14),s.Tb(11,"tr"),s.Ob(12,"td",15),s.Ob(13,"td"),s.Ob(14,"td"),s.Sb(),s.Sb(),s.Sb()),2&n){var e=s.fc();s.Cb(10),s.lc("ngForOf",e.err)}}var C,y=((C=function(){function n(t,e,i){_classCallCheck(this,n),this.plus=t,this.fb=e,this.location=i,this.dataImport=[],this.dataJson=[],this.errData=[],this.err=[],this.dbList=[],this.send="",this.loading=!1,this.loadMoreBtn=!1,this.api="person/",this.person=this.fb.group({SoHieuNhanSu:[,[d.s.required,d.s.min(3),d.s.max(999999)]],BiDanh:[,[d.s.required,d.s.minLength(3),d.s.maxLength(7)]],HoVaTen:[,[d.s.required,d.s.max(10)]],ChucDanh:[,[d.s.required,d.s.minLength(3),d.s.maxLength(255)]],ChucDanh2:[,[d.s.required,d.s.minLength(3),d.s.maxLength(255)]],ChucVuDang:[,[]],ChucVuDoanThe:[,[]],To:[,[d.s.minLength(3),d.s.maxLength(255)]],Phong:[,[d.s.required,d.s.minLength(3),d.s.maxLength(255)]],PhongBan:[,[d.s.required,d.s.minLength(3),d.s.maxLength(255)]],NgaySinh:[,[d.s.required]],GioiTinh:[,[d.s.required,d.s.minLength(1),d.s.maxLength(50)]],DienThoai:[,[d.s.required,d.s.maxLength(15)]],MSNV:[,[d.s.required,d.s.maxLength(5)]],DanToc:[,[d.s.required,d.s.minLength(3),d.s.maxLength(255)]],TonGiao:[,[d.s.required,d.s.minLength(3),d.s.maxLength(255)]],Email:[,[d.s.required,d.s.minLength(3),d.s.maxLength(255)]],SoChungMinhNhanDan:[,[d.s.required,d.s.minLength(3),d.s.maxLength(255)]],NgayCapCmnd:[,[d.s.required]],NoiCapCmnd:[,[d.s.required,d.s.maxLength(255)]],ChinhSach:[,[d.s.maxLength(255)]],NoiSinh:[,[d.s.maxLength(255)]],NguyenQuan:[,[d.s.required,d.s.maxLength(255)]],ThuongTru:[,[d.s.required,d.s.maxLength(255)]],MSTCN:[,[d.s.required,d.s.maxLength(255)]],DonVi:[,[d.s.required,d.s.maxLength(255)]],BacLuong:[,[d.s.required,d.s.maxLength(255)]],HeSoLuong:[,[d.s.required,d.s.maxLength(255)]],NgachLuong:[,[d.s.required]],BangLuong:[,[d.s.required]],Taikhoanchuyenluong:[,[d.s.required]],Phucaphopdong:[,[]],PCCV:[,[]],PCTN:[,[]],PCLD:[,[]],VanHoaPhoThong:[,[]],HocVi:[,[]],TrinhDoChinhTri:[,[]],NgayVaoNganh:[,[]],NgayDuBiDang:[,[]],NgayChinhThucDang:[,[]],He:[,[]],TrinhDoCaoNhat:[,[]],NhomNganh:[,[]],NganhNgheDaoTao:[,[]],VanBang:[,[]],TinHoc:[,[]],NgoaiNgu:[,[]],Level:[,[d.s.required,d.s.max(10)]]})}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"readXlsx",value:function(n){var t=this;if("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"===n.target.files[0].type){this.loading=!0,this.dataJson=[],this.dataImport=[];var e=n.target,i=new FileReader;i.onload=function(n){var e=u.read(n.target.result,{type:"binary"});t.dataImport=u.utils.sheet_to_json(e.Sheets[e.SheetNames[0]],{header:1}),t.loading=!1},i.readAsBinaryString(e.files[0]),e=null}else this.plus.alertToasrt({war:"B\u1ea1n ch\u1ec9 \u0111\u01b0\u1ee3c ch\u1ecdn file excel"}),this.loading=!1}},{key:"checkImportData",value:function(){var n=this;this.reset();for(var t=this.dataImport.length,e=this.dataImport[0],i=function(t){var i=n.dataImport[t],b={SoHieuNhanSu:i[1],BiDanh:"".concat(i[2]),HoVaTen:i[3],ChucDanh:i[4],ChucDanh2:i[5],ChucVuDang:i[6],ChucVuDoanThe:i[7],To:i[8],Phong:i[9],PhongBan:i[10],NgaySinh:n.plus.ExcelDateToJSDate(i[11]),GioiTinh:i[12],DienThoai:i[13],MSNV:"".concat(i[14]),DanToc:i[15],TonGiao:i[16],Email:i[17],SoChungMinhNhanDan:i[18],NgayCapCmnd:n.plus.ExcelDateToJSDate(i[19]),NoiCapCmnd:i[20],ChinhSach:i[21],NoiSinh:i[22],NguyenQuan:i[23],ThuongTru:i[24],MSTCN:"".concat(i[25]),DonVi:i[26],BacLuong:i[27],HeSoLuong:i[28],NgachLuong:i[29],BangLuong:i[30],Taikhoanchuyenluong:i[31],Phucaphopdong:i[32],PCCV:i[33],PCTN:i[34],PCLD:i[35],VanHoaPhoThong:i[36],HocVi:i[37],TrinhDoChinhTri:i[38],NgayVaoNganh:n.plus.ExcelDateToJSDate(i[39]),NgayDuBiDang:n.plus.ExcelDateToJSDate(i[40]),NgayChinhThucDang:n.plus.ExcelDateToJSDate(i[41]),He:i[42],TrinhDoCaoNhat:i[43],NhomNganh:i[44],NganhNgheDaoTao:i[45],VanBang:i[46],TinHoc:i[47],NgoaiNgu:i[48],Level:i[49]};if(n.person.patchValue(b),n.person.valid){var a=n.plus.addKeyWord(b);n.dataJson.push(b),console.log(a)}else n.plus.getFormValidationErrors(n.person,t).forEach((function(i){var a={name:b.HoVaTen,header:e[Object.keys(b).indexOf(i.KeyControl)+1],value:b[i.KeyControl]};console.log(t),n.err.push(a)})),n.errData.push(b)},b=2;b<t;b++)i(b)}},{key:"import",value:function(){if(this.err.length>0)this.plus.alertToasrt({err:"B\u1ea1n h\xe3y s\u1eeda l\u1ed7i file tr\u01b0\u1edbc khi nh\u1eadp d\u1eef li\u1ec7u!"}),this.plus.go("/nhansu/import");else{var n=JSON.stringify(this.dataJson);this.plus.httpPost(this.api+"import",n).subscribe((function(n){console.log(n)}))}}},{key:"update",value:function(){return Object(l.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(this.err.length>0)){n.next=2;break}return n.abrupt("return",(this.plus.alertToasrt({err:"B\u1ea1n h\xe3y s\u1eeda l\u1ed7i file tr\u01b0\u1edbc khi nh\u1eadp d\u1eef li\u1ec7u!"}),this.plus.go("/nhansu/import")));case 2:if(n.t0=this.dataJson.length>0,!n.t0){n.next=6;break}return n.next=6,this.plus.sleep(5e3);case 6:case"end":return n.stop()}}),n,this)})))}},{key:"reset",value:function(){this.err=[],this.dataJson=[],this.errData=[],this.err=[],this.dbList=[],this.dataJson=[]}},{key:"refresh",value:function(){this.location.back(),this.location.forward()}}]),n}()).\u0275fac=function(n){return new(n||C)(s.Nb(o.a),s.Nb(d.c),s.Nb(c.i))},C.\u0275cmp=s.Hb({type:C,selectors:[["app-person-import"]],decls:12,vars:6,consts:[[1,"container"],[1,"text-center","text-primary"],[4,"ngIf"],["type","button",1,"btn","btn-primary","mx-2",3,"click"],["type","button","class","btn btn-primary mx-2",3,"click",4,"ngIf"],["class","text-center text-primary",4,"ngIf"],["class","table table-inverse",4,"ngIf"],["hidden","","id","file-upload","type","file","multiple","false",3,"change"],["fileInput",""],["for","file-upload",1,"btn","btn-outline-primary",3,"click"],[1,"fa","fa-cloud-upload"],[1,"fa","fa-spinner","fa-spin",2,"font-size","36px"],[1,"table","table-inverse"],[1,"thead-inverse"],[4,"ngFor","ngForOf"],["scope","row"]],template:function(n,t){1&n&&(s.Tb(0,"div",0),s.Ob(1,"app-person"),s.Tb(2,"h5",1),s.Dc(3,"Nh\u1eadp nh\xe2n s\u1ef1 t\u1eeb excel"),s.Sb(),s.Bc(4,g,6,0,"div",2),s.Tb(5,"button",3),s.bc("click",(function(){return t.refresh()})),s.Dc(6,"L\xe0m l\u1ea1i"),s.Sb(),s.Bc(7,T,2,0,"button",4),s.Bc(8,S,2,0,"button",4),s.Bc(9,f,2,0,"button",4),s.Bc(10,v,2,0,"div",5),s.Bc(11,m,15,1,"table",6),s.Sb()),2&n&&(s.Cb(4),s.lc("ngIf",0===t.dataJson.length&&0===t.err.length),s.Cb(3),s.lc("ngIf",t.dataImport.length>0),s.Cb(1),s.lc("ngIf",0===t.err.length&&t.dataJson.length>0),s.Cb(1),s.lc("ngIf",0===t.err.length&&t.dataJson.length>0),s.Cb(1),s.lc("ngIf",t.loading),s.Cb(1),s.lc("ngIf",0!==t.err.length))},directives:[p,c.m,c.l],styles:[""]}),C),N=e("Kj3r");function B(n,t){if(1&n&&(s.Tb(0,"tr"),s.Tb(1,"td"),s.Dc(2),s.Sb(),s.Tb(3,"td"),s.Dc(4),s.Sb(),s.Tb(5,"td"),s.Tb(6,"a",9),s.Dc(7),s.Sb(),s.Sb(),s.Tb(8,"td"),s.Dc(9),s.Sb(),s.Tb(10,"td"),s.Dc(11),s.Sb(),s.Sb()),2&n){var e=t.$implicit;s.Cb(2),s.Ec(e.SoHieuNhanSu),s.Cb(2),s.Ec(e.BiDanh),s.Cb(2),s.mc("routerLink",e._id),s.Cb(1),s.Ec(e.HoVaTen),s.Cb(2),s.Ec(e.ChucDanh),s.Cb(2),s.Ec(e.PhongBan)}}function L(n,t){if(1&n){var e=s.Ub();s.Tb(0,"table",4),s.Tb(1,"thead",5),s.Tb(2,"tr"),s.Tb(3,"th"),s.Dc(4,"S\u1ed1 hi\u1ec7u nh\xe2n s\u1ef1"),s.Sb(),s.Tb(5,"th"),s.Dc(6,"B\xed danh"),s.Sb(),s.Tb(7,"th"),s.Dc(8,"H\u1ecd v\xe0 t\xean"),s.Sb(),s.Tb(9,"th"),s.Dc(10,"Ch\u1ee9c danh"),s.Sb(),s.Tb(11,"th"),s.Dc(12,"Ph\xf2ng Ban"),s.Sb(),s.Sb(),s.Sb(),s.Tb(13,"tbody"),s.Bc(14,B,12,6,"tr",6),s.Sb(),s.Tb(15,"div",7),s.Tb(16,"button",8),s.bc("click",(function(){return s.uc(e),s.fc().loadMore()})),s.Dc(17," K\u1ebft qu\u1ea3 kh\xe1c "),s.Sb(),s.Sb(),s.Sb()}if(2&n){var i=s.fc();s.Cb(14),s.lc("ngForOf",i.dbList)}}var k,O,_,P=[{path:"",component:p},{path:"danhsach",component:(k=function(){function n(t,e){_classCallCheck(this,n),this.fb=t,this.plus=e,this.db=null,this.dbName="person",this.collection="person",this.api="person",this.loadMoreBtn=!1,this.dbList=[],this.main=this.fb.group({}),this.searchForm=this.fb.group({what:["",[d.s.minLength(3),d.s.maxLength(100)]]})}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.find(),this.plus.IDB_InitDB(this.dbName).subscribe((function(t){n.plus.load(),n.db=t,n.plus.IDB_DB_GetAll(t,n.collection).subscribe((function(t){0==t.length&&n.get(),n.dbList=t,n.plus.loaded()}))}))}},{key:"clear",value:function(){this.plus.IDB_DB_DeleteDB(this.dbName)}},{key:"get",value:function(){var n=this;this.plus.load(),this.plus.httpPost(this.api+"/find",{what:this.searchForm.value,perPage:10}).subscribe((function(t){n.dbList=n.plus.decrypt(t.data),n.plus.IDB_DB_Add(n.db,n.collection,n.dbList),n.plus.loaded()}))}},{key:"find",value:function(){var n=this;this.searchForm.valid?this.searchForm.valueChanges.pipe(Object(N.a)(1500)).subscribe((function(t){n.plus.load(),t.what=n.plus.removeAccents(t.what),n.plus.httpPost(n.api+"/find",t).subscribe((function(t){console.log(t),n.plus.IDB_DB_Add(n.db,n.collection,t),t.length>0&&(n.dbList=t,n.plus.IDB_DB_Add(n.db,n.collection,t),n.plus.loaded())}),(function(t){n.plus.loaded(),n.plus.alertToasrt({err:"L\u1ed7i k\u1ebft n\u1ed1i\nVui l\xf2ng th\u1eed l\u1ea1i!"})}))})):this.plus.alertToasrt({war:"B\u1ea1n c\u1ea7n nh\u1eadp nhi\u1ec1u h\u01a1n 3 k\xfd t\u1ef1"})}},{key:"loadMore",value:function(){var n=this;console.log(this.plus.loading),this.plus.load();var t=Math.ceil(this.dbList.length/10)+1,e=this.searchForm.value;e.what=this.plus.removeAccents(e.what),e.page=t,this.plus.httpPost(this.api+"/find",e).subscribe((function(t){t.data?(n.dbList=n.dbList.concat(n.plus.decrypt(t.data)),n.plus.IDB_DB_Add(n.db,n.collection,n.dbList),n.plus.loaded()):(n.plus.alertToasrt({msg:"Kh\xf4ng c\xf2n k\u1ebft qu\u1ea3 ph\xf9 h\u1ee3p \n Nh\u1eadp n\u1ed9i dung c\u1ea7n t\xecm c\u1ee5 th\u1ec3 h\u01a1n"}),n.loadMoreBtn=!1),n.plus.loaded()}))}}]),n}(),k.\u0275fac=function(n){return new(n||k)(s.Nb(d.c),s.Nb(o.a))},k.\u0275cmp=s.Hb({type:k,selectors:[["app-person-list"]],decls:4,vars:2,consts:[[1,"container","my-5"],[1,"form-group",3,"formGroup"],["type","text","placeholder","Nh\u1eadp th\xf4ng tin c\u1ea7n t\xecm","autocomplete","on","formControlName","what",1,"form-control",3,"change"],["class","table table-striped table-inverse table-responsive",4,"ngIf"],[1,"table","table-striped","table-inverse","table-responsive"],[1,"thead-inverse"],[4,"ngFor","ngForOf"],["loadMoreBtn","",1,"text-center","*ngIf="],["type","button",1,"btn","btn-outline-primary",3,"click"],[3,"routerLink"]],template:function(n,t){1&n&&(s.Tb(0,"div",0),s.Tb(1,"div",1),s.Tb(2,"input",2),s.bc("change",(function(){return t.find()})),s.Sb(),s.Sb(),s.Bc(3,L,18,1,"table",3),s.Sb()),2&n&&(s.Cb(1),s.lc("formGroup",t.searchForm),s.Cb(2),s.lc("ngIf",t.dbList.length>0))},directives:[d.k,d.e,d.b,d.j,d.d,c.m,c.l,r.d],styles:[""]}),k)},{path:"danhsach/:id",component:h},{path:"import",component:y}],x=((O=function n(){_classCallCheck(this,n)}).\u0275mod=s.Lb({type:O}),O.\u0275inj=s.Kb({factory:function(n){return new(n||O)},imports:[[r.e.forChild(P)],r.e]}),O),E=e("ADsi"),I=((_=function n(){_classCallCheck(this,n)}).\u0275mod=s.Lb({type:_}),_.\u0275inj=s.Kb({factory:function(n){return new(n||_)},imports:[[E.ShareModule,x]]}),_)}}]);