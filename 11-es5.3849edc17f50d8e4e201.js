function _defineProperty(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{fj2Z:function(n,t,e){"use strict";e.r(t),e.d(t,"PersonModule",(function(){return M}));var i,b,o=function n(){_classCallCheck(this,n)},a=e("COeT"),r=e("fXoL"),c=e("tyNb"),h=e("ofXK"),s=((i=function(){function n(t,e){_classCallCheck(this,n),this.plus=t,this.route=e,this.person=new o,this.api="person/",this.collection="personInfo",this.loading=!0,this.loadMoreBtn=!1,this.dbList=[],this.group=[{id:"CoBan",info:"C\u01a1 b\u1ea3n"},{id:"DaoTao",info:"\u0110\xe0o t\u1ea1o"},{id:"Luong",info:"Th\xf4ng tin l\u01b0\u01a1ng"}]}return _createClass(n,[{key:"ngOnInit",value:function(){this.getById()}},{key:"getById",value:function(){var n=this;this.plus.load();var t=this.route.snapshot.paramMap.get("id");this.plus.IDB_GetByKey(this.collection,t).subscribe((function(e){if(e)return n.plus.alertToasrt(e),n.plus.loaded(),n.person=e;n.plus.httpGet(n.api+t).subscribe((function(t){n.plus.IDB_Add(n.collection,t),n.person=t,n.plus.loaded()}),(function(t){n.plus.alertError(),n.plus.loaded()}))}))}},{key:"arr_Filter1",value:function(){this.dbList.filter((function(n){console.log(n)}))}},{key:"update",value:function(n,t,e){var i=_defineProperty({},t,n);console.log(i),e!==n&&this.plus.httpPut(this.api+"update",i).subscribe((function(n){console.log(n)}))}}]),n}()).\u0275fac=function(n){return new(n||i)(r.Nb(a.a),r.Nb(c.a))},i.\u0275cmp=r.Hb({type:i,selectors:[["app-person-info"]],decls:248,vars:32,consts:[[1,"container","my-3"],["role","tablist",1,"nav","nav-pills","mb-5","justify-content-center"],[1,"nav-item"],["data-toggle","pill","href","#coban",1,"nav-link","active"],["data-toggle","pill","href","#daotao",1,"nav-link"],["data-toggle","pill","href","#luong",1,"nav-link"],[1,"tab-content"],["id","coban","role","tabpanel",1,"tab-pane","fade","show","active"],[1,"row"],[1,"col-sm-4"],[1,"col-sm-8"],["id","daotao","role","tabpanel",1,"tab-pane","fade","show"],["id","luong","role","tabpanel",1,"tab-pane","fade","show"]],template:function(n,t){1&n&&(r.Tb(0,"div",0),r.Tb(1,"ul",1),r.Tb(2,"li",2),r.Tb(3,"a",3),r.Bc(4,"C\u01a1 B\u1ea3n"),r.Sb(),r.Sb(),r.Tb(5,"li",2),r.Tb(6,"a",4),r.Bc(7,"\u0110\xe0o t\u1ea1o"),r.Sb(),r.Sb(),r.Tb(8,"li",2),r.Tb(9,"a",5),r.Bc(10,"L\u01b0\u01a1ng"),r.Sb(),r.Sb(),r.Sb(),r.Tb(11,"div",6),r.Tb(12,"div",7),r.Tb(13,"div",8),r.Tb(14,"div",9),r.Tb(15,"h6"),r.Bc(16,"S\u1ed1 hi\u1ec7u nh\xe2n s\u1ef1:"),r.Sb(),r.Sb(),r.Tb(17,"div",10),r.Tb(18,"h6"),r.Bc(19),r.Sb(),r.Sb(),r.Sb(),r.Ob(20,"hr"),r.Tb(21,"div",8),r.Tb(22,"div",9),r.Tb(23,"h6"),r.Bc(24,"B\xed danh:"),r.Sb(),r.Sb(),r.Tb(25,"div",10),r.Tb(26,"h6"),r.Bc(27),r.Sb(),r.Sb(),r.Sb(),r.Ob(28,"hr"),r.Tb(29,"div",8),r.Tb(30,"div",9),r.Tb(31,"h6"),r.Bc(32,"H\u1ecd v\xe0 t\xean:"),r.Sb(),r.Sb(),r.Tb(33,"div",10),r.Tb(34,"h6"),r.Bc(35),r.Sb(),r.Sb(),r.Sb(),r.Ob(36,"hr"),r.Tb(37,"div",8),r.Tb(38,"div",9),r.Tb(39,"h6"),r.Bc(40,"Ch\u1ee9c danh:"),r.Sb(),r.Sb(),r.Tb(41,"div",10),r.Tb(42,"h6"),r.Bc(43),r.Sb(),r.Sb(),r.Sb(),r.Ob(44,"hr"),r.Tb(45,"div",8),r.Tb(46,"div",9),r.Tb(47,"h6"),r.Bc(48,"Ch\u1ee9c danh 2:"),r.Sb(),r.Sb(),r.Tb(49,"div",10),r.Tb(50,"h6"),r.Bc(51),r.Sb(),r.Sb(),r.Sb(),r.Ob(52,"hr"),r.Tb(53,"div",8),r.Tb(54,"div",9),r.Tb(55,"h6"),r.Bc(56,"Ch\u1ee9c v\u1ee5 \u0110\u1ea3ng:"),r.Sb(),r.Sb(),r.Tb(57,"div",10),r.Tb(58,"h6"),r.Bc(59),r.Sb(),r.Sb(),r.Sb(),r.Ob(60,"hr"),r.Tb(61,"div",8),r.Tb(62,"div",9),r.Tb(63,"h6"),r.Bc(64,"Ch\u1ee9c v\u1ee5 \u0110o\xe0n th\u1ec3:"),r.Sb(),r.Sb(),r.Tb(65,"div",10),r.Tb(66,"h6"),r.Bc(67),r.Sb(),r.Sb(),r.Sb(),r.Ob(68,"hr"),r.Tb(69,"div",8),r.Tb(70,"div",9),r.Tb(71,"h6"),r.Bc(72,"T\u1ed5:"),r.Sb(),r.Sb(),r.Tb(73,"div",10),r.Tb(74,"h6"),r.Bc(75),r.Sb(),r.Sb(),r.Sb(),r.Ob(76,"hr"),r.Tb(77,"div",8),r.Tb(78,"div",9),r.Tb(79,"h6"),r.Bc(80,"Ph\xf2ng:"),r.Sb(),r.Sb(),r.Tb(81,"div",10),r.Tb(82,"h6"),r.Bc(83),r.Sb(),r.Sb(),r.Sb(),r.Ob(84,"hr"),r.Tb(85,"div",8),r.Tb(86,"div",9),r.Tb(87,"h6"),r.Bc(88,"Ph\xf2ng Ban:"),r.Sb(),r.Sb(),r.Tb(89,"div",10),r.Tb(90,"h6"),r.Bc(91),r.Sb(),r.Sb(),r.Sb(),r.Ob(92,"hr"),r.Tb(93,"div",8),r.Tb(94,"div",9),r.Tb(95,"h6"),r.Bc(96,"Ng\xe0y sinh:"),r.Sb(),r.Sb(),r.Tb(97,"div",10),r.Tb(98,"h6"),r.Bc(99),r.fc(100,"date"),r.Sb(),r.Sb(),r.Sb(),r.Ob(101,"hr"),r.Tb(102,"div",8),r.Tb(103,"div",9),r.Tb(104,"h6"),r.Bc(105,"Gi\u1edbi t\xednh:"),r.Sb(),r.Sb(),r.Tb(106,"div",10),r.Tb(107,"h6"),r.Bc(108),r.Sb(),r.Sb(),r.Sb(),r.Ob(109,"hr"),r.Tb(110,"div",8),r.Tb(111,"div",9),r.Tb(112,"h6"),r.Bc(113,"\u0110i\u1ec7n tho\u1ea1i:"),r.Sb(),r.Sb(),r.Tb(114,"div",10),r.Tb(115,"h6"),r.Bc(116),r.Sb(),r.Sb(),r.Sb(),r.Ob(117,"hr"),r.Sb(),r.Tb(118,"div",11),r.Tb(119,"div",8),r.Tb(120,"div",9),r.Tb(121,"h6"),r.Bc(122,"H\u1ec7:"),r.Sb(),r.Sb(),r.Tb(123,"div",10),r.Tb(124,"h6"),r.Bc(125),r.Sb(),r.Sb(),r.Sb(),r.Ob(126,"hr"),r.Tb(127,"div",8),r.Tb(128,"div",9),r.Tb(129,"h6"),r.Bc(130,"Tr\xecnh \u0111\u1ed9 cao nh\u1ea5t:"),r.Sb(),r.Sb(),r.Tb(131,"div",10),r.Tb(132,"h6"),r.Bc(133),r.Sb(),r.Sb(),r.Sb(),r.Ob(134,"hr"),r.Tb(135,"div",8),r.Tb(136,"div",9),r.Tb(137,"h6"),r.Bc(138,"Nh\xf3m ng\xe0nh:"),r.Sb(),r.Sb(),r.Tb(139,"div",10),r.Tb(140,"h6"),r.Bc(141),r.Sb(),r.Sb(),r.Sb(),r.Ob(142,"hr"),r.Tb(143,"div",8),r.Tb(144,"div",9),r.Tb(145,"h6"),r.Bc(146,"Ng\xe0nh ngh\u1ec1 \u0111\xe0o t\u1ea1o:"),r.Sb(),r.Sb(),r.Tb(147,"div",10),r.Tb(148,"h6"),r.Bc(149),r.Sb(),r.Sb(),r.Sb(),r.Ob(150,"hr"),r.Tb(151,"div",8),r.Tb(152,"div",9),r.Tb(153,"h6"),r.Bc(154,"V\u0103n b\u1eb1ng:"),r.Sb(),r.Sb(),r.Tb(155,"div",10),r.Tb(156,"h6"),r.Bc(157),r.Sb(),r.Sb(),r.Sb(),r.Ob(158,"hr"),r.Tb(159,"div",8),r.Tb(160,"div",9),r.Tb(161,"h6"),r.Bc(162,"Tin h\u1ecdc:"),r.Sb(),r.Sb(),r.Tb(163,"div",10),r.Tb(164,"h6"),r.Bc(165),r.Sb(),r.Sb(),r.Sb(),r.Ob(166,"hr"),r.Tb(167,"div",8),r.Tb(168,"div",9),r.Tb(169,"h6"),r.Bc(170,"Ngo\u1ea1i Ng\u1eef:"),r.Sb(),r.Sb(),r.Tb(171,"div",10),r.Tb(172,"h6"),r.Bc(173),r.Sb(),r.Sb(),r.Sb(),r.Ob(174,"hr"),r.Sb(),r.Tb(175,"div",12),r.Tb(176,"div",8),r.Tb(177,"div",9),r.Tb(178,"h6"),r.Bc(179,"B\u1eadc l\u01b0\u01a1ng:"),r.Sb(),r.Sb(),r.Tb(180,"div",10),r.Tb(181,"h6"),r.Bc(182),r.Sb(),r.Sb(),r.Sb(),r.Ob(183,"hr"),r.Tb(184,"div",8),r.Tb(185,"div",9),r.Tb(186,"h6"),r.Bc(187,"H\u1ec7 s\u1ed1 l\u01b0\u01a1ng:"),r.Sb(),r.Sb(),r.Tb(188,"div",10),r.Tb(189,"h6"),r.Bc(190),r.Sb(),r.Sb(),r.Sb(),r.Ob(191,"hr"),r.Tb(192,"div",8),r.Tb(193,"div",9),r.Tb(194,"h6"),r.Bc(195,"Ng\u1ea1ch l\u01b0\u01a1ng:"),r.Sb(),r.Sb(),r.Tb(196,"div",10),r.Tb(197,"h6"),r.Bc(198),r.Sb(),r.Sb(),r.Sb(),r.Ob(199,"hr"),r.Tb(200,"div",8),r.Tb(201,"div",9),r.Tb(202,"h6"),r.Bc(203,"B\u1ea3ng l\u01b0\u01a1ng:"),r.Sb(),r.Sb(),r.Tb(204,"div",10),r.Tb(205,"h6"),r.Bc(206),r.Sb(),r.Sb(),r.Sb(),r.Ob(207,"hr"),r.Tb(208,"div",8),r.Tb(209,"div",9),r.Tb(210,"h6"),r.Bc(211,"TaiKhoanChuyenLuong:"),r.Sb(),r.Sb(),r.Tb(212,"div",10),r.Tb(213,"h6"),r.Bc(214),r.Sb(),r.Sb(),r.Sb(),r.Ob(215,"hr"),r.Tb(216,"div",8),r.Tb(217,"div",9),r.Tb(218,"h6"),r.Bc(219,"PhuCapHopDong:"),r.Sb(),r.Sb(),r.Tb(220,"div",10),r.Tb(221,"h6"),r.Bc(222),r.Sb(),r.Sb(),r.Sb(),r.Ob(223,"hr"),r.Tb(224,"div",8),r.Tb(225,"div",9),r.Tb(226,"h6"),r.Bc(227,"PCCV:"),r.Sb(),r.Sb(),r.Tb(228,"div",10),r.Tb(229,"h6"),r.Bc(230),r.Sb(),r.Sb(),r.Sb(),r.Ob(231,"hr"),r.Tb(232,"div",8),r.Tb(233,"div",9),r.Tb(234,"h6"),r.Bc(235,"PCTN:"),r.Sb(),r.Sb(),r.Tb(236,"div",10),r.Tb(237,"h6"),r.Bc(238),r.Sb(),r.Sb(),r.Sb(),r.Ob(239,"hr"),r.Tb(240,"div",8),r.Tb(241,"div",9),r.Tb(242,"h6"),r.Bc(243,"PCLD:"),r.Sb(),r.Sb(),r.Tb(244,"div",10),r.Tb(245,"h6"),r.Bc(246),r.Sb(),r.Sb(),r.Sb(),r.Ob(247,"hr"),r.Sb(),r.Sb(),r.Sb()),2&n&&(r.Cb(19),r.Cc(t.person.SoHieuNhanSu),r.Cb(8),r.Cc(t.person.BiDanh),r.Cb(8),r.Cc(t.person.HoVaTen),r.Cb(8),r.Cc(t.person.ChucDanh),r.Cb(8),r.Cc(t.person.ChucDanh2),r.Cb(8),r.Cc(t.person.ChucVuDang),r.Cb(8),r.Cc(t.person.ChucVuDoanThe),r.Cb(8),r.Cc(t.person.To),r.Cb(8),r.Cc(t.person.Phong),r.Cb(8),r.Cc(t.person.PhongBan),r.Cb(8),r.Cc(r.hc(100,29,t.person.NgaySinh,"dd/MM/yyyy")),r.Cb(9),r.Cc(t.person.GioiTinh),r.Cb(8),r.Cc(t.person.DienThoai),r.Cb(9),r.Cc(t.person.He),r.Cb(8),r.Cc(t.person.TrinhDoCaoNhat),r.Cb(8),r.Cc(t.person.NhomNganh),r.Cb(8),r.Cc(t.person.NganhNgheDaoTao),r.Cb(8),r.Cc(t.person.VanBang),r.Cb(8),r.Cc(t.person.TinHoc),r.Cb(8),r.Cc(t.person.NgoaiNgu),r.Cb(9),r.Cc(t.person.BacLuong),r.Cb(8),r.Cc(t.person.HeSoLuong),r.Cb(8),r.Cc(t.person.NgachLuong),r.Cb(8),r.Cc(t.person.BangLuong),r.Cb(8),r.Cc(t.person.Taikhoanchuyenluong),r.Cb(8),r.Cc(t.person.Phucaphopdong),r.Cb(8),r.Cc(t.person.PCCV),r.Cb(8),r.Cc(t.person.PCTN),r.Cb(8),r.Cc(t.person.PCLD))},pipes:[h.d],styles:[".nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#777}"]}),i),l=e("mrSG"),u=e("EUZL"),d=e("3Pt+"),p=((b=function(){function n(t,e){_classCallCheck(this,n),this.fb=t,this.plus=e,this.api="person/"}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"getDashborad",value:function(){this.plus.httpGet(this.api+"dashboard").subscribe((function(n){console.log(n)}))}},{key:"onFocus",value:function(n,t){console.log("focus",t),document.getElementById(n).style.background="yellow"}},{key:"onBlur",value:function(n,t){console.log("Blur",t.target.textContent),document.getElementById(n).style.background=""}}]),n}()).\u0275fac=function(n){return new(n||b)(r.Nb(d.c),r.Nb(a.a))},b.\u0275cmp=r.Hb({type:b,selectors:[["app-person"]],decls:0,vars:0,template:function(n,t){},styles:["section[_ngcontent-%COMP%]{padding:20px 0}section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{text-align:center;color:#007b5e;margin-bottom:30px;text-transform:uppercase}#tabs[_ngcontent-%COMP%]{background:#007b5e}#tabs[_ngcontent-%COMP%], #tabs[_ngcontent-%COMP%]   h6.section-title[_ngcontent-%COMP%]{color:#eee}#tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item.show[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{color:#f3f3f3;background-color:transparent;border-color:transparent transparent #f3f3f3;border-bottom:4px solid!important;font-size:20px;font-weight:700}#tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem;color:#eee;font-size:20px}"]}),b);function g(n,t){if(1&n){var e=r.Ub();r.Tb(0,"div"),r.Tb(1,"input",7,8),r.bc("change",(function(n){return r.tc(e),r.ec().readXlsx(n)})),r.Sb(),r.Tb(3,"label",9),r.bc("click",(function(){return r.tc(e),r.sc(2)})),r.Ob(4,"i",10),r.Bc(5," Ch\u1ecdn file "),r.Sb(),r.Sb()}}function T(n,t){if(1&n){var e=r.Ub();r.Tb(0,"button",3),r.bc("click",(function(){return r.tc(e),r.ec().checkImportData()})),r.Bc(1,"Ki\u1ec3m tra"),r.Sb()}}function S(n,t){if(1&n){var e=r.Ub();r.Tb(0,"button",3),r.bc("click",(function(){return r.tc(e),r.ec().import()})),r.Bc(1,"Nh\u1eadp d\u1eef li\u1ec7u"),r.Sb()}}function f(n,t){if(1&n){var e=r.Ub();r.Tb(0,"button",3),r.bc("click",(function(){return r.tc(e),r.ec().update()})),r.Bc(1,"C\u1eadp nh\u1eadt d\u1eef li\u1ec7u"),r.Sb()}}function v(n,t){1&n&&(r.Tb(0,"div",1),r.Ob(1,"i",11),r.Sb())}function C(n,t){if(1&n&&(r.Tb(0,"tr"),r.Tb(1,"td",15),r.Bc(2),r.Sb(),r.Tb(3,"td"),r.Bc(4),r.Sb(),r.Tb(5,"td"),r.Bc(6),r.Sb(),r.Sb()),2&n){var e=t.$implicit;r.Cb(2),r.Cc(e.name),r.Cb(2),r.Cc(e.header),r.Cb(2),r.Cc(e.value||"\u0110ang \u0111\u1ec3 tr\u1ed1ng")}}function m(n,t){if(1&n&&(r.Tb(0,"table",12),r.Tb(1,"thead",13),r.Tb(2,"tr"),r.Tb(3,"th"),r.Bc(4,"H\u1ecd v\xe0 t\xean"),r.Sb(),r.Tb(5,"th"),r.Bc(6,"C\u1ed9t b\u1ecb l\u1ed7i"),r.Sb(),r.Tb(7,"th"),r.Bc(8,"N\u1ed9i dung b\u1ea1n nh\u1eadp"),r.Sb(),r.Sb(),r.Sb(),r.Tb(9,"tbody"),r.zc(10,C,7,3,"tr",14),r.Tb(11,"tr"),r.Ob(12,"td",15),r.Ob(13,"td"),r.Ob(14,"td"),r.Sb(),r.Sb(),r.Sb()),2&n){var e=r.ec();r.Cb(10),r.kc("ngForOf",e.err)}}var B,y=((B=function(){function n(t,e,i){_classCallCheck(this,n),this.plus=t,this.fb=e,this.location=i,this.dataImport=[],this.dataJson=[],this.errData=[],this.err=[],this.dbList=[],this.send="",this.loading=!1,this.loadMoreBtn=!1,this.api="person/",this.person=this.fb.group({SoHieuNhanSu:[,[d.q.required,d.q.min(3),d.q.max(999999)]],BiDanh:[,[d.q.required,d.q.minLength(3),d.q.maxLength(7)]],HoVaTen:[,[d.q.required,d.q.max(10)]],ChucDanh:[,[d.q.required,d.q.minLength(3),d.q.maxLength(255)]],ChucDanh2:[,[d.q.required,d.q.minLength(3),d.q.maxLength(255)]],ChucVuDang:[,[]],ChucVuDoanThe:[,[]],To:[,[d.q.minLength(3),d.q.maxLength(255)]],Phong:[,[d.q.required,d.q.minLength(3),d.q.maxLength(255)]],PhongBan:[,[d.q.required,d.q.minLength(3),d.q.maxLength(255)]],NgaySinh:[,[d.q.required]],GioiTinh:[,[d.q.required,d.q.minLength(1),d.q.maxLength(50)]],DienThoai:[,[d.q.required,d.q.maxLength(15)]],MSNV:[,[d.q.required,d.q.maxLength(5)]],DanToc:[,[d.q.required,d.q.minLength(3),d.q.maxLength(255)]],TonGiao:[,[d.q.required,d.q.minLength(3),d.q.maxLength(255)]],Email:[,[d.q.required,d.q.minLength(3),d.q.maxLength(255)]],SoChungMinhNhanDan:[,[d.q.required,d.q.minLength(3),d.q.maxLength(255)]],NgayCapCmnd:[,[d.q.required]],NoiCapCmnd:[,[d.q.required,d.q.maxLength(255)]],ChinhSach:[,[d.q.maxLength(255)]],NoiSinh:[,[d.q.maxLength(255)]],NguyenQuan:[,[d.q.required,d.q.maxLength(255)]],ThuongTru:[,[d.q.required,d.q.maxLength(255)]],MSTCN:[,[d.q.required,d.q.maxLength(255)]],DonVi:[,[d.q.required,d.q.maxLength(255)]],BacLuong:[,[d.q.required,d.q.maxLength(255)]],HeSoLuong:[,[d.q.required,d.q.maxLength(255)]],NgachLuong:[,[d.q.required]],BangLuong:[,[d.q.required]],Taikhoanchuyenluong:[,[d.q.required]],Phucaphopdong:[,[]],PCCV:[,[]],PCTN:[,[]],PCLD:[,[]],VanHoaPhoThong:[,[]],HocVi:[,[]],TrinhDoChinhTri:[,[]],NgayVaoNganh:[,[]],NgayDuBiDang:[,[]],NgayChinhThucDang:[,[]],He:[,[]],TrinhDoCaoNhat:[,[]],NhomNganh:[,[]],NganhNgheDaoTao:[,[]],VanBang:[,[]],TinHoc:[,[]],NgoaiNgu:[,[]],Level:[,[d.q.required,d.q.max(10)]]})}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"readXlsx",value:function(n){var t=this;if("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"===n.target.files[0].type){this.loading=!0,this.dataJson=[],this.dataImport=[];var e=n.target,i=new FileReader;i.onload=function(n){var e=u.read(n.target.result,{type:"binary"});t.dataImport=u.utils.sheet_to_json(e.Sheets[e.SheetNames[0]],{header:1}),t.loading=!1},i.readAsBinaryString(e.files[0]),e=null}else this.plus.alertToasrt({war:"B\u1ea1n ch\u1ec9 \u0111\u01b0\u1ee3c ch\u1ecdn file excel"}),this.loading=!1}},{key:"checkImportData",value:function(){var n=this;this.reset();for(var t=this.dataImport.length,e=this.dataImport[0],i=function(t){var i=n.dataImport[t],b={SoHieuNhanSu:i[1],BiDanh:"".concat(i[2]),HoVaTen:i[3],ChucDanh:i[4],ChucDanh2:i[5],ChucVuDang:i[6],ChucVuDoanThe:i[7],To:i[8],Phong:i[9],PhongBan:i[10],NgaySinh:n.plus.ExcelDateToJSDate(i[11]),GioiTinh:i[12],DienThoai:i[13],MSNV:"".concat(i[14]),DanToc:i[15],TonGiao:i[16],Email:i[17],SoChungMinhNhanDan:i[18],NgayCapCmnd:n.plus.ExcelDateToJSDate(i[19]),NoiCapCmnd:i[20],ChinhSach:i[21],NoiSinh:i[22],NguyenQuan:i[23],ThuongTru:i[24],MSTCN:"".concat(i[25]),DonVi:i[26],BacLuong:i[27],HeSoLuong:i[28],NgachLuong:i[29],BangLuong:i[30],Taikhoanchuyenluong:i[31],Phucaphopdong:i[32],PCCV:i[33],PCTN:i[34],PCLD:i[35],VanHoaPhoThong:i[36],HocVi:i[37],TrinhDoChinhTri:i[38],NgayVaoNganh:n.plus.ExcelDateToJSDate(i[39]),NgayDuBiDang:n.plus.ExcelDateToJSDate(i[40]),NgayChinhThucDang:n.plus.ExcelDateToJSDate(i[41]),He:i[42],TrinhDoCaoNhat:i[43],NhomNganh:i[44],NganhNgheDaoTao:i[45],VanBang:i[46],TinHoc:i[47],NgoaiNgu:i[48],Level:i[49]};if(n.person.patchValue(b),n.person.valid){var o=n.plus.addKeyWord(b);n.dataJson.push(b),console.log(o)}else n.plus.getFormValidationErrors(n.person,t).forEach((function(i){var o={name:b.HoVaTen,header:e[Object.keys(b).indexOf(i.KeyControl)+1],value:b[i.KeyControl]};console.log(t),n.err.push(o)})),n.errData.push(b)},b=2;b<t;b++)i(b)}},{key:"import",value:function(){if(this.err.length>0)this.plus.alertToasrt({err:"B\u1ea1n h\xe3y s\u1eeda l\u1ed7i file tr\u01b0\u1edbc khi nh\u1eadp d\u1eef li\u1ec7u!"}),this.plus.go("/nhansu/import");else{var n=JSON.stringify(this.dataJson);this.plus.httpPost(this.api+"import",n).subscribe((function(n){console.log(n)}))}}},{key:"update",value:function(){return Object(l.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(this.err.length>0)){n.next=2;break}return n.abrupt("return",(this.plus.alertToasrt({err:"B\u1ea1n h\xe3y s\u1eeda l\u1ed7i file tr\u01b0\u1edbc khi nh\u1eadp d\u1eef li\u1ec7u!"}),this.plus.go("/nhansu/import")));case 2:if(n.t0=this.dataJson.length>0,!n.t0){n.next=6;break}return n.next=6,this.plus.sleep(5e3);case 6:case"end":return n.stop()}}),n,this)})))}},{key:"reset",value:function(){this.err=[],this.dataJson=[],this.errData=[],this.err=[],this.dbList=[],this.dataJson=[]}},{key:"refresh",value:function(){this.location.back(),this.location.forward()}}]),n}()).\u0275fac=function(n){return new(n||B)(r.Nb(a.a),r.Nb(d.c),r.Nb(h.i))},B.\u0275cmp=r.Hb({type:B,selectors:[["app-person-import"]],decls:12,vars:6,consts:[[1,"container"],[1,"text-center","text-primary"],[4,"ngIf"],["type","button",1,"btn","btn-primary","mx-2",3,"click"],["type","button","class","btn btn-primary mx-2",3,"click",4,"ngIf"],["class","text-center text-primary",4,"ngIf"],["class","table table-inverse",4,"ngIf"],["hidden","","id","file-upload","type","file","multiple","false",3,"change"],["fileInput",""],["for","file-upload",1,"btn","btn-outline-primary",3,"click"],[1,"fa","fa-cloud-upload"],[1,"fa","fa-spinner","fa-spin",2,"font-size","36px"],[1,"table","table-inverse"],[1,"thead-inverse"],[4,"ngFor","ngForOf"],["scope","row"]],template:function(n,t){1&n&&(r.Tb(0,"div",0),r.Ob(1,"app-person"),r.Tb(2,"h5",1),r.Bc(3,"Nh\u1eadp nh\xe2n s\u1ef1 t\u1eeb excel"),r.Sb(),r.zc(4,g,6,0,"div",2),r.Tb(5,"button",3),r.bc("click",(function(){return t.refresh()})),r.Bc(6,"L\xe0m l\u1ea1i"),r.Sb(),r.zc(7,T,2,0,"button",4),r.zc(8,S,2,0,"button",4),r.zc(9,f,2,0,"button",4),r.zc(10,v,2,0,"div",5),r.zc(11,m,15,1,"table",6),r.Sb()),2&n&&(r.Cb(4),r.kc("ngIf",0===t.dataJson.length&&0===t.err.length),r.Cb(3),r.kc("ngIf",t.dataImport.length>0),r.Cb(1),r.kc("ngIf",0===t.err.length&&t.dataJson.length>0),r.Cb(1),r.kc("ngIf",0===t.err.length&&t.dataJson.length>0),r.Cb(1),r.kc("ngIf",t.loading),r.Cb(1),r.kc("ngIf",0!==t.err.length))},directives:[p,h.m,h.l],styles:[""]}),B),q=e("Kj3r");function N(n,t){if(1&n&&(r.Tb(0,"tr"),r.Tb(1,"td"),r.Bc(2),r.Sb(),r.Tb(3,"td"),r.Bc(4),r.Sb(),r.Tb(5,"td"),r.Tb(6,"a",9),r.Bc(7),r.Sb(),r.Sb(),r.Tb(8,"td"),r.Bc(9),r.Sb(),r.Tb(10,"td"),r.Bc(11),r.Sb(),r.Sb()),2&n){var e=t.$implicit;r.Cb(2),r.Cc(e.SoHieuNhanSu),r.Cb(2),r.Cc(e.BiDanh),r.Cb(2),r.lc("routerLink",e._id),r.Cb(1),r.Cc(e.HoVaTen),r.Cb(2),r.Cc(e.ChucDanh),r.Cb(2),r.Cc(e.PhongBan)}}function k(n,t){if(1&n){var e=r.Ub();r.Tb(0,"table",4),r.Tb(1,"thead",5),r.Tb(2,"tr"),r.Tb(3,"th"),r.Bc(4,"S\u1ed1 hi\u1ec7u nh\xe2n s\u1ef1"),r.Sb(),r.Tb(5,"th"),r.Bc(6,"B\xed danh"),r.Sb(),r.Tb(7,"th"),r.Bc(8,"H\u1ecd v\xe0 t\xean"),r.Sb(),r.Tb(9,"th"),r.Bc(10,"Ch\u1ee9c danh"),r.Sb(),r.Tb(11,"th"),r.Bc(12,"Ph\xf2ng Ban"),r.Sb(),r.Sb(),r.Sb(),r.Tb(13,"tbody"),r.zc(14,N,12,6,"tr",6),r.Sb(),r.Tb(15,"div",7),r.Tb(16,"button",8),r.bc("click",(function(){return r.tc(e),r.ec().loadMore()})),r.Bc(17," K\u1ebft qu\u1ea3 kh\xe1c "),r.Sb(),r.Sb(),r.Sb()}if(2&n){var i=r.ec();r.Cb(14),r.kc("ngForOf",i.dbList)}}var L,D,O,P=[{path:"",component:p},{path:"danhsach",component:(L=function(){function n(t,e){_classCallCheck(this,n),this.fb=t,this.plus=e,this.api="person/",this.collection="person",this.loadMoreBtn=!1,this.dbList=[],this.main=this.fb.group({}),this.searchForm=this.fb.group({what:["",[d.q.minLength(3),d.q.maxLength(100)]]})}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.find(),this.plus.IDB_GetAll(this.collection).subscribe((function(t){0==n.dbList.length&&(console.log(n.dbList),n.get()),n.dbList=t}))}},{key:"clear",value:function(){this.plus.IDB_Clear()}},{key:"get",value:function(){var n=this;this.plus.load(),this.plus.httpPost(this.api+"find",{what:this.searchForm.value,perPage:10}).subscribe((function(t){n.dbList=t,n.plus.IDB_AddMany(n.collection,t),n.plus.loaded()}))}},{key:"find",value:function(){var n=this;this.searchForm.valid?this.searchForm.valueChanges.pipe(Object(q.a)(1500)).subscribe((function(t){n.plus.load(),t.what=n.plus.removeAccents(t.what),n.plus.httpPost(n.api+"find",t).subscribe((function(t){console.log(t),n.plus.IDB_AddMany(n.collection,t),t.length>0&&(n.dbList=t,n.plus.IDB_AddMany(n.collection,t),n.plus.loaded())}),(function(t){n.plus.loaded(),n.plus.alertToasrt({err:"L\u1ed7i k\u1ebft n\u1ed1i\nVui l\xf2ng th\u1eed l\u1ea1i!"})}))})):this.plus.alertToasrt({war:"B\u1ea1n c\u1ea7n nh\u1eadp nhi\u1ec1u h\u01a1n 3 k\xfd t\u1ef1"})}},{key:"loadMore",value:function(){var n=this;console.log(this.plus.loading),this.plus.load();var t=Math.ceil(this.dbList.length/10)+1,e=this.searchForm.value;e.what=this.plus.removeAccents(e.what),e.page=t,this.plus.httpPost(this.api+"find",e).subscribe((function(t){t.length>0?t.forEach((function(t){n.dbList.push(t),n.plus.IDB_Add(n.collection,t)})):(n.plus.alertToasrt({msg:"Kh\xf4ng c\xf2n k\u1ebft qu\u1ea3 ph\xf9 h\u1ee3p \n Nh\u1eadp n\u1ed9i dung c\u1ea7n t\xecm c\u1ee5 th\u1ec3 h\u01a1n"}),n.loadMoreBtn=!1),n.plus.loaded()}))}}]),n}(),L.\u0275fac=function(n){return new(n||L)(r.Nb(d.c),r.Nb(a.a))},L.\u0275cmp=r.Hb({type:L,selectors:[["app-person-list"]],decls:4,vars:2,consts:[[1,"container","my-5"],[1,"form-group",3,"formGroup"],["type","text","placeholder","Nh\u1eadp th\xf4ng tin c\u1ea7n t\xecm","autocomplete","on","formControlName","what",1,"form-control",3,"change"],["class","table table-striped table-inverse table-responsive",4,"ngIf"],[1,"table","table-striped","table-inverse","table-responsive"],[1,"thead-inverse"],[4,"ngFor","ngForOf"],["loadMoreBtn","",1,"text-center","*ngIf="],["type","button",1,"btn","btn-outline-primary",3,"click"],[3,"routerLink"]],template:function(n,t){1&n&&(r.Tb(0,"div",0),r.Tb(1,"div",1),r.Tb(2,"input",2),r.bc("change",(function(){return t.find()})),r.Sb(),r.Sb(),r.zc(3,k,18,1,"table",3),r.Sb()),2&n&&(r.Cb(1),r.kc("formGroup",t.searchForm),r.Cb(2),r.kc("ngIf",t.dbList.length>0))},directives:[d.j,d.e,d.b,d.i,d.d,h.m,h.l,c.d],styles:[""]}),L)},{path:"danhsach/:id",component:s},{path:"import",component:y}],x=((D=function n(){_classCallCheck(this,n)}).\u0275mod=r.Lb({type:D}),D.\u0275inj=r.Kb({factory:function(n){return new(n||D)},imports:[[c.e.forChild(P)],c.e]}),D),_=e("ADsi"),M=((O=function n(){_classCallCheck(this,n)}).\u0275mod=r.Lb({type:O}),O.\u0275inj=r.Kb({factory:function(n){return new(n||O)},imports:[[_.ShareModule,x]]}),O)}}]);