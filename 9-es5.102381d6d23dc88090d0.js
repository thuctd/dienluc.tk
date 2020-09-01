function _defineProperty(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{fj2Z:function(n,t,e){"use strict";e.r(t),e.d(t,"PersonModule",(function(){return M}));var i,o,b,a=function n(){_classCallCheck(this,n)},r=e("COeT"),c=e("fXoL"),h=e("tyNb"),s=e("ofXK"),l=((i=function(){function n(t,e){_classCallCheck(this,n),this.plus=t,this.route=e,this.person=new a,this.api="person/",this.collection="personInfo",this.loading=!0,this.loadMoreBtn=!1,this.dbList=[],this.group=[{id:"CoBan",info:"C\u01a1 b\u1ea3n"},{id:"DaoTao",info:"\u0110\xe0o t\u1ea1o"},{id:"Luong",info:"Th\xf4ng tin l\u01b0\u01a1ng"}]}return _createClass(n,[{key:"ngOnInit",value:function(){this.getById()}},{key:"getById",value:function(){var n=this;this.plus.load();var t=this.route.snapshot.paramMap.get("id");this.plus.IDB_GetByKey(this.collection,t).subscribe((function(e){if(console.log(e),e)return console.log("IDB"),n.plus.loaded(),n.person=e;n.plus.httpGet(n.api+t).subscribe((function(t){console.log("http"),n.plus.IDB_Add(n.collection,t),console.log(t),n.person=t,n.plus.alertToasrt(t)}),(function(t){n.plus.alertError()}))}))}},{key:"arr_Filter1",value:function(){this.dbList.filter((function(n){console.log(n)}))}},{key:"update",value:function(n,t,e){var i=_defineProperty({},t,n);console.log(i),e!==n&&this.plus.httpPut(this.api+"update",i).subscribe((function(n){console.log(n)}))}}]),n}()).\u0275fac=function(n){return new(n||i)(c.Nb(r.a),c.Nb(h.a))},i.\u0275cmp=c.Hb({type:i,selectors:[["app-person-info"]],decls:248,vars:32,consts:[[1,"container","my-3"],["role","tablist",1,"nav","nav-pills","mb-5","justify-content-center"],[1,"nav-item"],["data-toggle","pill","href","#coban",1,"nav-link","active"],["data-toggle","pill","href","#daotao",1,"nav-link"],["data-toggle","pill","href","#luong",1,"nav-link"],[1,"tab-content"],["id","coban","role","tabpanel",1,"tab-pane","fade","show","active"],[1,"row"],[1,"col-sm-4"],[1,"col-sm-8"],["id","daotao","role","tabpanel",1,"tab-pane","fade","show"],["id","luong","role","tabpanel",1,"tab-pane","fade","show"]],template:function(n,t){1&n&&(c.Tb(0,"div",0),c.Tb(1,"ul",1),c.Tb(2,"li",2),c.Tb(3,"a",3),c.Bc(4,"C\u01a1 B\u1ea3n"),c.Sb(),c.Sb(),c.Tb(5,"li",2),c.Tb(6,"a",4),c.Bc(7,"\u0110\xe0o t\u1ea1o"),c.Sb(),c.Sb(),c.Tb(8,"li",2),c.Tb(9,"a",5),c.Bc(10,"L\u01b0\u01a1ng"),c.Sb(),c.Sb(),c.Sb(),c.Tb(11,"div",6),c.Tb(12,"div",7),c.Tb(13,"div",8),c.Tb(14,"div",9),c.Tb(15,"h6"),c.Bc(16,"S\u1ed1 hi\u1ec7u nh\xe2n s\u1ef1:"),c.Sb(),c.Sb(),c.Tb(17,"div",10),c.Tb(18,"h6"),c.Bc(19),c.Sb(),c.Sb(),c.Sb(),c.Ob(20,"hr"),c.Tb(21,"div",8),c.Tb(22,"div",9),c.Tb(23,"h6"),c.Bc(24,"B\xed danh:"),c.Sb(),c.Sb(),c.Tb(25,"div",10),c.Tb(26,"h6"),c.Bc(27),c.Sb(),c.Sb(),c.Sb(),c.Ob(28,"hr"),c.Tb(29,"div",8),c.Tb(30,"div",9),c.Tb(31,"h6"),c.Bc(32,"H\u1ecd v\xe0 t\xean:"),c.Sb(),c.Sb(),c.Tb(33,"div",10),c.Tb(34,"h6"),c.Bc(35),c.Sb(),c.Sb(),c.Sb(),c.Ob(36,"hr"),c.Tb(37,"div",8),c.Tb(38,"div",9),c.Tb(39,"h6"),c.Bc(40,"Ch\u1ee9c danh:"),c.Sb(),c.Sb(),c.Tb(41,"div",10),c.Tb(42,"h6"),c.Bc(43),c.Sb(),c.Sb(),c.Sb(),c.Ob(44,"hr"),c.Tb(45,"div",8),c.Tb(46,"div",9),c.Tb(47,"h6"),c.Bc(48,"Ch\u1ee9c danh 2:"),c.Sb(),c.Sb(),c.Tb(49,"div",10),c.Tb(50,"h6"),c.Bc(51),c.Sb(),c.Sb(),c.Sb(),c.Ob(52,"hr"),c.Tb(53,"div",8),c.Tb(54,"div",9),c.Tb(55,"h6"),c.Bc(56,"Ch\u1ee9c v\u1ee5 \u0110\u1ea3ng:"),c.Sb(),c.Sb(),c.Tb(57,"div",10),c.Tb(58,"h6"),c.Bc(59),c.Sb(),c.Sb(),c.Sb(),c.Ob(60,"hr"),c.Tb(61,"div",8),c.Tb(62,"div",9),c.Tb(63,"h6"),c.Bc(64,"Ch\u1ee9c v\u1ee5 \u0110o\xe0n th\u1ec3:"),c.Sb(),c.Sb(),c.Tb(65,"div",10),c.Tb(66,"h6"),c.Bc(67),c.Sb(),c.Sb(),c.Sb(),c.Ob(68,"hr"),c.Tb(69,"div",8),c.Tb(70,"div",9),c.Tb(71,"h6"),c.Bc(72,"T\u1ed5:"),c.Sb(),c.Sb(),c.Tb(73,"div",10),c.Tb(74,"h6"),c.Bc(75),c.Sb(),c.Sb(),c.Sb(),c.Ob(76,"hr"),c.Tb(77,"div",8),c.Tb(78,"div",9),c.Tb(79,"h6"),c.Bc(80,"Ph\xf2ng:"),c.Sb(),c.Sb(),c.Tb(81,"div",10),c.Tb(82,"h6"),c.Bc(83),c.Sb(),c.Sb(),c.Sb(),c.Ob(84,"hr"),c.Tb(85,"div",8),c.Tb(86,"div",9),c.Tb(87,"h6"),c.Bc(88,"Ph\xf2ng Ban:"),c.Sb(),c.Sb(),c.Tb(89,"div",10),c.Tb(90,"h6"),c.Bc(91),c.Sb(),c.Sb(),c.Sb(),c.Ob(92,"hr"),c.Tb(93,"div",8),c.Tb(94,"div",9),c.Tb(95,"h6"),c.Bc(96,"Ng\xe0y sinh:"),c.Sb(),c.Sb(),c.Tb(97,"div",10),c.Tb(98,"h6"),c.Bc(99),c.fc(100,"date"),c.Sb(),c.Sb(),c.Sb(),c.Ob(101,"hr"),c.Tb(102,"div",8),c.Tb(103,"div",9),c.Tb(104,"h6"),c.Bc(105,"Gi\u1edbi t\xednh:"),c.Sb(),c.Sb(),c.Tb(106,"div",10),c.Tb(107,"h6"),c.Bc(108),c.Sb(),c.Sb(),c.Sb(),c.Ob(109,"hr"),c.Tb(110,"div",8),c.Tb(111,"div",9),c.Tb(112,"h6"),c.Bc(113,"\u0110i\u1ec7n tho\u1ea1i:"),c.Sb(),c.Sb(),c.Tb(114,"div",10),c.Tb(115,"h6"),c.Bc(116),c.Sb(),c.Sb(),c.Sb(),c.Ob(117,"hr"),c.Sb(),c.Tb(118,"div",11),c.Tb(119,"div",8),c.Tb(120,"div",9),c.Tb(121,"h6"),c.Bc(122,"H\u1ec7:"),c.Sb(),c.Sb(),c.Tb(123,"div",10),c.Tb(124,"h6"),c.Bc(125),c.Sb(),c.Sb(),c.Sb(),c.Ob(126,"hr"),c.Tb(127,"div",8),c.Tb(128,"div",9),c.Tb(129,"h6"),c.Bc(130,"Tr\xecnh \u0111\u1ed9 cao nh\u1ea5t:"),c.Sb(),c.Sb(),c.Tb(131,"div",10),c.Tb(132,"h6"),c.Bc(133),c.Sb(),c.Sb(),c.Sb(),c.Ob(134,"hr"),c.Tb(135,"div",8),c.Tb(136,"div",9),c.Tb(137,"h6"),c.Bc(138,"Nh\xf3m ng\xe0nh:"),c.Sb(),c.Sb(),c.Tb(139,"div",10),c.Tb(140,"h6"),c.Bc(141),c.Sb(),c.Sb(),c.Sb(),c.Ob(142,"hr"),c.Tb(143,"div",8),c.Tb(144,"div",9),c.Tb(145,"h6"),c.Bc(146,"Ng\xe0nh ngh\u1ec1 \u0111\xe0o t\u1ea1o:"),c.Sb(),c.Sb(),c.Tb(147,"div",10),c.Tb(148,"h6"),c.Bc(149),c.Sb(),c.Sb(),c.Sb(),c.Ob(150,"hr"),c.Tb(151,"div",8),c.Tb(152,"div",9),c.Tb(153,"h6"),c.Bc(154,"V\u0103n b\u1eb1ng:"),c.Sb(),c.Sb(),c.Tb(155,"div",10),c.Tb(156,"h6"),c.Bc(157),c.Sb(),c.Sb(),c.Sb(),c.Ob(158,"hr"),c.Tb(159,"div",8),c.Tb(160,"div",9),c.Tb(161,"h6"),c.Bc(162,"Tin h\u1ecdc:"),c.Sb(),c.Sb(),c.Tb(163,"div",10),c.Tb(164,"h6"),c.Bc(165),c.Sb(),c.Sb(),c.Sb(),c.Ob(166,"hr"),c.Tb(167,"div",8),c.Tb(168,"div",9),c.Tb(169,"h6"),c.Bc(170,"Ngo\u1ea1i Ng\u1eef:"),c.Sb(),c.Sb(),c.Tb(171,"div",10),c.Tb(172,"h6"),c.Bc(173),c.Sb(),c.Sb(),c.Sb(),c.Ob(174,"hr"),c.Sb(),c.Tb(175,"div",12),c.Tb(176,"div",8),c.Tb(177,"div",9),c.Tb(178,"h6"),c.Bc(179,"B\u1eadc l\u01b0\u01a1ng:"),c.Sb(),c.Sb(),c.Tb(180,"div",10),c.Tb(181,"h6"),c.Bc(182),c.Sb(),c.Sb(),c.Sb(),c.Ob(183,"hr"),c.Tb(184,"div",8),c.Tb(185,"div",9),c.Tb(186,"h6"),c.Bc(187,"H\u1ec7 s\u1ed1 l\u01b0\u01a1ng:"),c.Sb(),c.Sb(),c.Tb(188,"div",10),c.Tb(189,"h6"),c.Bc(190),c.Sb(),c.Sb(),c.Sb(),c.Ob(191,"hr"),c.Tb(192,"div",8),c.Tb(193,"div",9),c.Tb(194,"h6"),c.Bc(195,"Ng\u1ea1ch l\u01b0\u01a1ng:"),c.Sb(),c.Sb(),c.Tb(196,"div",10),c.Tb(197,"h6"),c.Bc(198),c.Sb(),c.Sb(),c.Sb(),c.Ob(199,"hr"),c.Tb(200,"div",8),c.Tb(201,"div",9),c.Tb(202,"h6"),c.Bc(203,"B\u1ea3ng l\u01b0\u01a1ng:"),c.Sb(),c.Sb(),c.Tb(204,"div",10),c.Tb(205,"h6"),c.Bc(206),c.Sb(),c.Sb(),c.Sb(),c.Ob(207,"hr"),c.Tb(208,"div",8),c.Tb(209,"div",9),c.Tb(210,"h6"),c.Bc(211,"TaiKhoanChuyenLuong:"),c.Sb(),c.Sb(),c.Tb(212,"div",10),c.Tb(213,"h6"),c.Bc(214),c.Sb(),c.Sb(),c.Sb(),c.Ob(215,"hr"),c.Tb(216,"div",8),c.Tb(217,"div",9),c.Tb(218,"h6"),c.Bc(219,"PhuCapHopDong:"),c.Sb(),c.Sb(),c.Tb(220,"div",10),c.Tb(221,"h6"),c.Bc(222),c.Sb(),c.Sb(),c.Sb(),c.Ob(223,"hr"),c.Tb(224,"div",8),c.Tb(225,"div",9),c.Tb(226,"h6"),c.Bc(227,"PCCV:"),c.Sb(),c.Sb(),c.Tb(228,"div",10),c.Tb(229,"h6"),c.Bc(230),c.Sb(),c.Sb(),c.Sb(),c.Ob(231,"hr"),c.Tb(232,"div",8),c.Tb(233,"div",9),c.Tb(234,"h6"),c.Bc(235,"PCTN:"),c.Sb(),c.Sb(),c.Tb(236,"div",10),c.Tb(237,"h6"),c.Bc(238),c.Sb(),c.Sb(),c.Sb(),c.Ob(239,"hr"),c.Tb(240,"div",8),c.Tb(241,"div",9),c.Tb(242,"h6"),c.Bc(243,"PCLD:"),c.Sb(),c.Sb(),c.Tb(244,"div",10),c.Tb(245,"h6"),c.Bc(246),c.Sb(),c.Sb(),c.Sb(),c.Ob(247,"hr"),c.Sb(),c.Sb(),c.Sb()),2&n&&(c.Cb(19),c.Cc(t.person.SoHieuNhanSu),c.Cb(8),c.Cc(t.person.BiDanh),c.Cb(8),c.Cc(t.person.HoVaTen),c.Cb(8),c.Cc(t.person.ChucDanh),c.Cb(8),c.Cc(t.person.ChucDanh2),c.Cb(8),c.Cc(t.person.ChucVuDang),c.Cb(8),c.Cc(t.person.ChucVuDoanThe),c.Cb(8),c.Cc(t.person.To),c.Cb(8),c.Cc(t.person.Phong),c.Cb(8),c.Cc(t.person.PhongBan),c.Cb(8),c.Cc(c.hc(100,29,t.person.NgaySinh,"dd/MM/yyyy")),c.Cb(9),c.Cc(t.person.GioiTinh),c.Cb(8),c.Cc(t.person.DienThoai),c.Cb(9),c.Cc(t.person.He),c.Cb(8),c.Cc(t.person.TrinhDoCaoNhat),c.Cb(8),c.Cc(t.person.NhomNganh),c.Cb(8),c.Cc(t.person.NganhNgheDaoTao),c.Cb(8),c.Cc(t.person.VanBang),c.Cb(8),c.Cc(t.person.TinHoc),c.Cb(8),c.Cc(t.person.NgoaiNgu),c.Cb(9),c.Cc(t.person.BacLuong),c.Cb(8),c.Cc(t.person.HeSoLuong),c.Cb(8),c.Cc(t.person.NgachLuong),c.Cb(8),c.Cc(t.person.BangLuong),c.Cb(8),c.Cc(t.person.Taikhoanchuyenluong),c.Cb(8),c.Cc(t.person.Phucaphopdong),c.Cb(8),c.Cc(t.person.PCCV),c.Cb(8),c.Cc(t.person.PCTN),c.Cb(8),c.Cc(t.person.PCLD))},pipes:[s.d],styles:[".nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#777}"]}),i),u=e("mrSG"),d=e("EUZL"),p=e("3Pt+"),g=((b=function(){function n(){_classCallCheck(this,n),this.request=window.indexedDB.open("dienluc",1),this.db=null,this.collection="person",this.init()}return _createClass(n,[{key:"init",value:function(){var n=this,t=this.request;t.onupgradeneeded=function(e){n.db=t.result,n.db.createObjectStore(n.collection,{autoIncrement:!0})}}},{key:"addData",value:function(n){this.init(),this.db.transaction(this.collection,"readwrite").objectStore("collectionName").add(n)}}]),n}()).\u0275fac=function(n){return new(n||b)},b.\u0275prov=c.Jb({token:b,factory:b.\u0275fac,providedIn:"root"}),b),T=((o=function(){function n(t,e,i){_classCallCheck(this,n),this.fb=t,this.plus=e,this.person=i,this.api="person/"}return _createClass(n,[{key:"ngOnInit",value:function(){this.person.init()}},{key:"getDashborad",value:function(){this.plus.httpGet(this.api+"dashboard").subscribe((function(n){console.log(n)}))}},{key:"onFocus",value:function(n,t){console.log("focus",t),document.getElementById(n).style.background="yellow"}},{key:"onBlur",value:function(n,t){console.log("Blur",t.target.textContent),document.getElementById(n).style.background=""}}]),n}()).\u0275fac=function(n){return new(n||o)(c.Nb(p.c),c.Nb(r.a),c.Nb(g))},o.\u0275cmp=c.Hb({type:o,selectors:[["app-person"]],decls:0,vars:0,template:function(n,t){},styles:["section[_ngcontent-%COMP%]{padding:20px 0}section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{text-align:center;color:#007b5e;margin-bottom:30px;text-transform:uppercase}#tabs[_ngcontent-%COMP%]{background:#007b5e}#tabs[_ngcontent-%COMP%], #tabs[_ngcontent-%COMP%]   h6.section-title[_ngcontent-%COMP%]{color:#eee}#tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item.show[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{color:#f3f3f3;background-color:transparent;border-color:transparent transparent #f3f3f3;border-bottom:4px solid!important;font-size:20px;font-weight:700}#tabs[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem;color:#eee;font-size:20px}"]}),o);function S(n,t){if(1&n){var e=c.Ub();c.Tb(0,"div"),c.Tb(1,"input",7,8),c.bc("change",(function(n){return c.tc(e),c.ec().readXlsx(n)})),c.Sb(),c.Tb(3,"label",9),c.bc("click",(function(){return c.tc(e),c.sc(2)})),c.Ob(4,"i",10),c.Bc(5," Ch\u1ecdn file "),c.Sb(),c.Sb()}}function f(n,t){if(1&n){var e=c.Ub();c.Tb(0,"button",3),c.bc("click",(function(){return c.tc(e),c.ec().checkImportData()})),c.Bc(1,"Ki\u1ec3m tra"),c.Sb()}}function v(n,t){if(1&n){var e=c.Ub();c.Tb(0,"button",3),c.bc("click",(function(){return c.tc(e),c.ec().import()})),c.Bc(1,"Nh\u1eadp d\u1eef li\u1ec7u"),c.Sb()}}function C(n,t){if(1&n){var e=c.Ub();c.Tb(0,"button",3),c.bc("click",(function(){return c.tc(e),c.ec().update()})),c.Bc(1,"C\u1eadp nh\u1eadt d\u1eef li\u1ec7u"),c.Sb()}}function m(n,t){1&n&&(c.Tb(0,"div",1),c.Ob(1,"i",11),c.Sb())}function B(n,t){if(1&n&&(c.Tb(0,"tr"),c.Tb(1,"td",15),c.Bc(2),c.Sb(),c.Tb(3,"td"),c.Bc(4),c.Sb(),c.Tb(5,"td"),c.Bc(6),c.Sb(),c.Sb()),2&n){var e=t.$implicit;c.Cb(2),c.Cc(e.name),c.Cb(2),c.Cc(e.header),c.Cb(2),c.Cc(e.value||"\u0110ang \u0111\u1ec3 tr\u1ed1ng")}}function y(n,t){if(1&n&&(c.Tb(0,"table",12),c.Tb(1,"thead",13),c.Tb(2,"tr"),c.Tb(3,"th"),c.Bc(4,"H\u1ecd v\xe0 t\xean"),c.Sb(),c.Tb(5,"th"),c.Bc(6,"C\u1ed9t b\u1ecb l\u1ed7i"),c.Sb(),c.Tb(7,"th"),c.Bc(8,"N\u1ed9i dung b\u1ea1n nh\u1eadp"),c.Sb(),c.Sb(),c.Sb(),c.Tb(9,"tbody"),c.zc(10,B,7,3,"tr",14),c.Tb(11,"tr"),c.Ob(12,"td",15),c.Ob(13,"td"),c.Ob(14,"td"),c.Sb(),c.Sb(),c.Sb()),2&n){var e=c.ec();c.Cb(10),c.kc("ngForOf",e.err)}}var q,k=((q=function(){function n(t,e,i){_classCallCheck(this,n),this.plus=t,this.fb=e,this.location=i,this.dataImport=[],this.dataJson=[],this.errData=[],this.err=[],this.dbList=[],this.send="",this.loading=!1,this.loadMoreBtn=!1,this.api="person/",this.person=this.fb.group({SoHieuNhanSu:[,[p.q.required,p.q.min(3),p.q.max(999999)]],BiDanh:[,[p.q.required,p.q.minLength(3),p.q.maxLength(7)]],HoVaTen:[,[p.q.required,p.q.max(10)]],ChucDanh:[,[p.q.required,p.q.minLength(3),p.q.maxLength(255)]],ChucDanh2:[,[p.q.required,p.q.minLength(3),p.q.maxLength(255)]],ChucVuDang:[,[]],ChucVuDoanThe:[,[]],To:[,[p.q.minLength(3),p.q.maxLength(255)]],Phong:[,[p.q.required,p.q.minLength(3),p.q.maxLength(255)]],PhongBan:[,[p.q.required,p.q.minLength(3),p.q.maxLength(255)]],NgaySinh:[,[p.q.required]],GioiTinh:[,[p.q.required,p.q.minLength(1),p.q.maxLength(50)]],DienThoai:[,[p.q.required,p.q.maxLength(15)]],MSNV:[,[p.q.required,p.q.maxLength(5)]],DanToc:[,[p.q.required,p.q.minLength(3),p.q.maxLength(255)]],TonGiao:[,[p.q.required,p.q.minLength(3),p.q.maxLength(255)]],Email:[,[p.q.required,p.q.minLength(3),p.q.maxLength(255)]],SoChungMinhNhanDan:[,[p.q.required,p.q.minLength(3),p.q.maxLength(255)]],NgayCapCmnd:[,[p.q.required]],NoiCapCmnd:[,[p.q.required,p.q.maxLength(255)]],ChinhSach:[,[p.q.maxLength(255)]],NoiSinh:[,[p.q.maxLength(255)]],NguyenQuan:[,[p.q.required,p.q.maxLength(255)]],ThuongTru:[,[p.q.required,p.q.maxLength(255)]],MSTCN:[,[p.q.required,p.q.maxLength(255)]],DonVi:[,[p.q.required,p.q.maxLength(255)]],BacLuong:[,[p.q.required,p.q.maxLength(255)]],HeSoLuong:[,[p.q.required,p.q.maxLength(255)]],NgachLuong:[,[p.q.required]],BangLuong:[,[p.q.required]],Taikhoanchuyenluong:[,[p.q.required]],Phucaphopdong:[,[]],PCCV:[,[]],PCTN:[,[]],PCLD:[,[]],VanHoaPhoThong:[,[]],HocVi:[,[]],TrinhDoChinhTri:[,[]],NgayVaoNganh:[,[]],NgayDuBiDang:[,[]],NgayChinhThucDang:[,[]],He:[,[]],TrinhDoCaoNhat:[,[]],NhomNganh:[,[]],NganhNgheDaoTao:[,[]],VanBang:[,[]],TinHoc:[,[]],NgoaiNgu:[,[]],Level:[,[p.q.required,p.q.max(10)]]})}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"readXlsx",value:function(n){var t=this;if("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"===n.target.files[0].type){this.loading=!0,this.dataJson=[],this.dataImport=[];var e=n.target,i=new FileReader;i.onload=function(n){var e=d.read(n.target.result,{type:"binary"});t.dataImport=d.utils.sheet_to_json(e.Sheets[e.SheetNames[0]],{header:1}),t.loading=!1},i.readAsBinaryString(e.files[0]),e=null}else this.plus.alertToasrt({war:"B\u1ea1n ch\u1ec9 \u0111\u01b0\u1ee3c ch\u1ecdn file excel"}),this.loading=!1}},{key:"checkImportData",value:function(){var n=this;this.reset();for(var t=this.dataImport.length,e=this.dataImport[0],i=function(t){var i=n.dataImport[t],o={SoHieuNhanSu:i[1],BiDanh:"".concat(i[2]),HoVaTen:i[3],ChucDanh:i[4],ChucDanh2:i[5],ChucVuDang:i[6],ChucVuDoanThe:i[7],To:i[8],Phong:i[9],PhongBan:i[10],NgaySinh:n.plus.ExcelDateToJSDate(i[11]),GioiTinh:i[12],DienThoai:i[13],MSNV:"".concat(i[14]),DanToc:i[15],TonGiao:i[16],Email:i[17],SoChungMinhNhanDan:i[18],NgayCapCmnd:n.plus.ExcelDateToJSDate(i[19]),NoiCapCmnd:i[20],ChinhSach:i[21],NoiSinh:i[22],NguyenQuan:i[23],ThuongTru:i[24],MSTCN:"".concat(i[25]),DonVi:i[26],BacLuong:i[27],HeSoLuong:i[28],NgachLuong:i[29],BangLuong:i[30],Taikhoanchuyenluong:i[31],Phucaphopdong:i[32],PCCV:i[33],PCTN:i[34],PCLD:i[35],VanHoaPhoThong:i[36],HocVi:i[37],TrinhDoChinhTri:i[38],NgayVaoNganh:n.plus.ExcelDateToJSDate(i[39]),NgayDuBiDang:n.plus.ExcelDateToJSDate(i[40]),NgayChinhThucDang:n.plus.ExcelDateToJSDate(i[41]),He:i[42],TrinhDoCaoNhat:i[43],NhomNganh:i[44],NganhNgheDaoTao:i[45],VanBang:i[46],TinHoc:i[47],NgoaiNgu:i[48],Level:i[49]};if(n.person.patchValue(o),n.person.valid){var b=n.plus.addKeyWord(o);n.dataJson.push(o),console.log(b)}else n.plus.getFormValidationErrors(n.person,t).forEach((function(i){var b={name:o.HoVaTen,header:e[Object.keys(o).indexOf(i.KeyControl)+1],value:o[i.KeyControl]};console.log(t),n.err.push(b)})),n.errData.push(o)},o=2;o<t;o++)i(o)}},{key:"import",value:function(){if(this.err.length>0)this.plus.alertToasrt({err:"B\u1ea1n h\xe3y s\u1eeda l\u1ed7i file tr\u01b0\u1edbc khi nh\u1eadp d\u1eef li\u1ec7u!"}),this.plus.go("/nhansu/import");else{var n=JSON.stringify(this.dataJson);this.plus.httpPost(this.api+"import",n).subscribe((function(n){console.log(n)}))}}},{key:"update",value:function(){return Object(u.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(this.err.length>0)){n.next=2;break}return n.abrupt("return",(this.plus.alertToasrt({err:"B\u1ea1n h\xe3y s\u1eeda l\u1ed7i file tr\u01b0\u1edbc khi nh\u1eadp d\u1eef li\u1ec7u!"}),this.plus.go("/nhansu/import")));case 2:if(n.t0=this.dataJson.length>0,!n.t0){n.next=6;break}return n.next=6,this.plus.sleep(5e3);case 6:case"end":return n.stop()}}),n,this)})))}},{key:"reset",value:function(){this.err=[],this.dataJson=[],this.errData=[],this.err=[],this.dbList=[],this.dataJson=[]}},{key:"refresh",value:function(){this.location.back(),this.location.forward()}}]),n}()).\u0275fac=function(n){return new(n||q)(c.Nb(r.a),c.Nb(p.c),c.Nb(s.i))},q.\u0275cmp=c.Hb({type:q,selectors:[["app-person-import"]],decls:12,vars:6,consts:[[1,"container"],[1,"text-center","text-primary"],[4,"ngIf"],["type","button",1,"btn","btn-primary","mx-2",3,"click"],["type","button","class","btn btn-primary mx-2",3,"click",4,"ngIf"],["class","text-center text-primary",4,"ngIf"],["class","table table-inverse",4,"ngIf"],["hidden","","id","file-upload","type","file","multiple","false",3,"change"],["fileInput",""],["for","file-upload",1,"btn","btn-outline-primary",3,"click"],[1,"fa","fa-cloud-upload"],[1,"fa","fa-spinner","fa-spin",2,"font-size","36px"],[1,"table","table-inverse"],[1,"thead-inverse"],[4,"ngFor","ngForOf"],["scope","row"]],template:function(n,t){1&n&&(c.Tb(0,"div",0),c.Ob(1,"app-person"),c.Tb(2,"h5",1),c.Bc(3,"Nh\u1eadp nh\xe2n s\u1ef1 t\u1eeb excel"),c.Sb(),c.zc(4,S,6,0,"div",2),c.Tb(5,"button",3),c.bc("click",(function(){return t.refresh()})),c.Bc(6,"L\xe0m l\u1ea1i"),c.Sb(),c.zc(7,f,2,0,"button",4),c.zc(8,v,2,0,"button",4),c.zc(9,C,2,0,"button",4),c.zc(10,m,2,0,"div",5),c.zc(11,y,15,1,"table",6),c.Sb()),2&n&&(c.Cb(4),c.kc("ngIf",0===t.dataJson.length&&0===t.err.length),c.Cb(3),c.kc("ngIf",t.dataImport.length>0),c.Cb(1),c.kc("ngIf",0===t.err.length&&t.dataJson.length>0),c.Cb(1),c.kc("ngIf",0===t.err.length&&t.dataJson.length>0),c.Cb(1),c.kc("ngIf",t.loading),c.Cb(1),c.kc("ngIf",0!==t.err.length))},directives:[T,s.m,s.l],styles:[""]}),q),N=e("Kj3r");function L(n,t){if(1&n&&(c.Tb(0,"tr"),c.Tb(1,"td"),c.Bc(2),c.Sb(),c.Tb(3,"td"),c.Bc(4),c.Sb(),c.Tb(5,"td"),c.Tb(6,"a",9),c.Bc(7),c.Sb(),c.Sb(),c.Tb(8,"td"),c.Bc(9),c.Sb(),c.Tb(10,"td"),c.Bc(11),c.Sb(),c.Sb()),2&n){var e=t.$implicit;c.Cb(2),c.Cc(e.SoHieuNhanSu),c.Cb(2),c.Cc(e.BiDanh),c.Cb(2),c.lc("routerLink",e._id),c.Cb(1),c.Cc(e.HoVaTen),c.Cb(2),c.Cc(e.ChucDanh),c.Cb(2),c.Cc(e.PhongBan)}}function D(n,t){if(1&n){var e=c.Ub();c.Tb(0,"table",4),c.Tb(1,"thead",5),c.Tb(2,"tr"),c.Tb(3,"th"),c.Bc(4,"S\u1ed1 hi\u1ec7u nh\xe2n s\u1ef1"),c.Sb(),c.Tb(5,"th"),c.Bc(6,"B\xed danh"),c.Sb(),c.Tb(7,"th"),c.Bc(8,"H\u1ecd v\xe0 t\xean"),c.Sb(),c.Tb(9,"th"),c.Bc(10,"Ch\u1ee9c danh"),c.Sb(),c.Tb(11,"th"),c.Bc(12,"Ph\xf2ng Ban"),c.Sb(),c.Sb(),c.Sb(),c.Tb(13,"tbody"),c.zc(14,L,12,6,"tr",6),c.Sb(),c.Tb(15,"div",7),c.Tb(16,"button",8),c.bc("click",(function(){return c.tc(e),c.ec().loadMore()})),c.Bc(17," K\u1ebft qu\u1ea3 kh\xe1c "),c.Sb(),c.Sb(),c.Sb()}if(2&n){var i=c.ec();c.Cb(14),c.kc("ngForOf",i.dbList)}}var O,P,x,_=[{path:"",component:T},{path:"danhsach",component:(O=function(){function n(t,e){_classCallCheck(this,n),this.fb=t,this.plus=e,this.api="person/",this.collection="person",this.loadMoreBtn=!1,this.dbList=[],this.main=this.fb.group({}),this.searchForm=this.fb.group({what:["",[p.q.minLength(3),p.q.maxLength(100)]]})}return _createClass(n,[{key:"ngOnInit",value:function(){this.find(),this.get(),this.dbList=this.plus.IDB_GetAll(this.collection)}},{key:"clear",value:function(){this.plus.IDB_Clear()}},{key:"get",value:function(){var n=this;this.plus.load(),this.plus.httpPost(this.api+"find",{what:this.searchForm.value,perPage:10}).subscribe((function(t){n.dbList=t,n.plus.loaded()}))}},{key:"find",value:function(){var n=this;this.searchForm.valid?this.searchForm.valueChanges.pipe(Object(N.a)(1500)).subscribe((function(t){n.plus.load(),t.what=n.plus.removeAccents(t.what),n.plus.httpPost(n.api+"find",t).subscribe((function(t){console.log(t),n.plus.IDB_AddMany(n.collection,t),t.length>0&&(n.dbList=t,n.plus.IDB_AddMany(n.collection,t),n.plus.loaded())}),(function(t){n.plus.loaded(),n.plus.alertToasrt({err:"L\u1ed7i k\u1ebft n\u1ed1i\nVui l\xf2ng th\u1eed l\u1ea1i!"})}))})):this.plus.alertToasrt({war:"B\u1ea1n c\u1ea7n nh\u1eadp nhi\u1ec1u h\u01a1n 3 k\xfd t\u1ef1"})}},{key:"loadMore",value:function(){var n=this;console.log(this.plus.loading),this.plus.load();var t=Math.ceil(this.dbList.length/10)+1,e=this.searchForm.value;e.what=this.plus.removeAccents(e.what),e.page=t,this.plus.httpPost(this.api+"find",e).subscribe((function(t){t.length>0?t.forEach((function(t){n.dbList.push(t),n.plus.IDB_Add(n.collection,t)})):(n.plus.alertToasrt({msg:"Kh\xf4ng c\xf2n k\u1ebft qu\u1ea3 ph\xf9 h\u1ee3p \n Nh\u1eadp n\u1ed9i dung c\u1ea7n t\xecm c\u1ee5 th\u1ec3 h\u01a1n"}),n.loadMoreBtn=!1),n.plus.loaded()}))}}]),n}(),O.\u0275fac=function(n){return new(n||O)(c.Nb(p.c),c.Nb(r.a))},O.\u0275cmp=c.Hb({type:O,selectors:[["app-person-list"]],decls:4,vars:2,consts:[[1,"container","my-5"],[1,"form-group",3,"formGroup"],["type","text","placeholder","Nh\u1eadp th\xf4ng tin c\u1ea7n t\xecm","autocomplete","on","formControlName","what",1,"form-control",3,"change"],["class","table table-striped table-inverse table-responsive",4,"ngIf"],[1,"table","table-striped","table-inverse","table-responsive"],[1,"thead-inverse"],[4,"ngFor","ngForOf"],["loadMoreBtn","",1,"text-center","*ngIf="],["type","button",1,"btn","btn-outline-primary",3,"click"],[3,"routerLink"]],template:function(n,t){1&n&&(c.Tb(0,"div",0),c.Tb(1,"div",1),c.Tb(2,"input",2),c.bc("change",(function(){return t.find()})),c.Sb(),c.Sb(),c.zc(3,D,18,1,"table",3),c.Sb()),2&n&&(c.Cb(1),c.kc("formGroup",t.searchForm),c.Cb(2),c.kc("ngIf",t.dbList.length>0))},directives:[p.j,p.e,p.b,p.i,p.d,s.m,s.l,h.d],styles:[""]}),O)},{path:"danhsach/:id",component:l},{path:"import",component:k}],w=((P=function n(){_classCallCheck(this,n)}).\u0275mod=c.Lb({type:P}),P.\u0275inj=c.Kb({factory:function(n){return new(n||P)},imports:[[h.e.forChild(_)],h.e]}),P),I=e("ADsi"),M=((x=function n(){_classCallCheck(this,n)}).\u0275mod=c.Lb({type:x}),x.\u0275inj=c.Kb({factory:function(n){return new(n||x)},imports:[[I.ShareModule,w]]}),x)}}]);