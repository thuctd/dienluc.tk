function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"8CQa":function(n,t,e){"use strict";e.r(t),e.d(t,"TrambienapModule",(function(){return O}));var r=e("ifHL"),o=e("ofXK"),a=e("tyNb"),b=e("3Pt+"),i=e("COeT"),c=e("fXoL"),l=e("4tfM");function u(n,t){1&n&&(c.Tb(0,"button",32),c.Cc(1,"L\u01b0u"),c.Sb())}function d(n,t){if(1&n){var e=c.Ub();c.Tb(0,"button",33),c.bc("click",(function(){return c.uc(e),c.fc().editable()})),c.Cc(1,"S\u1eeda"),c.Sb()}}function p(n,t){if(1&n){var e=c.Ub();c.Tb(0,"button",33),c.bc("click",(function(){return c.uc(e),c.fc().import()})),c.Cc(1,"import"),c.Sb()}}function s(n,t){if(1&n){var e=c.Ub();c.Tb(0,"button",33),c.bc("click",(function(){return c.uc(e),c.fc().onPaste()})),c.Cc(1,"Pacth"),c.Sb()}}function C(n,t){if(1&n){var e=c.Ub();c.Tb(0,"div",34),c.Tb(1,"app-parse-excel-clipboard",35),c.bc("excel",(function(n){return c.uc(e),c.fc().onPaste(n)})),c.Sb(),c.Sb()}}var m,y,f,T,S=((m=function(){function n(t,e){_classCallCheck(this,n),this.plus=t,this.fb=e,this.opt="tba/edit",this.api="tba",this.readonly=!0,this.main=this.fb.group({MaTram:[,[b.q.required]],TenTram:[,[b.q.required]],CongSuat:[,[b.q.required]],DienAp:[,[b.q.required]],ViTri:[,[]],SoPha:[,[]],SoMba:[,[]],HieuMCCB:[,[]],IdmMCCB:[,[]],NacMCCB:[,[]],CapSuatXuong:[,[]],CapSuatLen:[,[]],MaPK:[,[b.q.required]],Tuyen:[,[b.q.required]],PhaDauNoi:[,[]],SoHuu:[,[]],NgayLapDat:[,[]],ToQuanLy:[,[]],GhiChu:[,[]],NhatKyThiCong:[,[]],TonTai:[,[]]})}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"checkPer",value:function(n){return this.plus.checkPer(this.opt,n)}},{key:"editable",value:function(){this.readonly=!this.readonly}},{key:"import",value:function(){var n=localStorage.getItem("parser"),t={data:this.plus.encrypt(n)};console.log(t),this.plus.httpPost(this.api+"/import",t).subscribe((function(n){console.log(n)}))}},{key:"onPaste",value:function(n){var t={CapSuatLen:"",CapSuatXuong:"",CongSuat:200,DienAp:"12,7/0,22-0,44",GhiChu:"",HieuMccb:"ABB",IdmMccb:"400",MaPk:"PK05000033179001",MaTram:210500001,NacMccb:"1",NgayLapDat:new Date("13/11/2006"),NhatKyThiCong:"Thay MBA x\xec d\u1ea7u 24/11/15",PhaDauNoi:"A",SoHuu:"DL",SoMba:"2",SoPha:"1",TenTram:"C\u1ecc D\u1ea6U 1",ToQuanLy:"Xu\xe2n H\u01b0ng",Tuyen:"478-Xu\xe2n h\u01b0ng",ViTri:"478/22/270/10/8T"};this.main.patchValue(t)}}]),n}()).\u0275fac=function(n){return new(n||m)(c.Nb(i.a),c.Nb(b.c))},m.\u0275cmp=c.Hb({type:m,selectors:[["app-edit-tba"]],decls:113,vars:26,consts:[[1,"container"],[1,"text-center","text-primary","bg-white"],[3,"formGroup"],[1,"form-row"],[1,"form-group","col-md-6"],[1,"input-group","mb-3"],[1,"input-group-prepend"],[1,"input-group-text"],["type","number","formControlName","MaTram",1,"form-control",3,"readOnly"],["type","text","formControlName","TenTram",1,"form-control",3,"readOnly"],["type","number","formControlName","CongSuat",1,"form-control",3,"readOnly"],["type","text","formControlName","ViTri",1,"form-control",3,"readOnly"],["type","number","formControlName","SoMba",1,"form-control",3,"readOnly"],["type","text","formControlName","HieuMCCB",1,"form-control",3,"readOnly"],["type","number","formControlName","IdmMCCB",1,"form-control",3,"readOnly"],["type","number","formControlName","NacMCCB",1,"form-control",3,"readOnly"],["type","text","formControlName","CapSuatXuong",1,"form-control",3,"readOnly"],["type","text","formControlName","CapSuatLen",1,"form-control",3,"readOnly"],["type","text","formControlName","MaPK",1,"form-control",3,"readOnly"],["type","text","formControlName","Tuyen",1,"form-control",3,"readOnly"],["type","text","formControlName","PhaDauNoi",1,"form-control",3,"readOnly"],["type","number","formControlName","SoPha",1,"form-control",3,"readOnly"],["type","text","formControlName","SoHuu",1,"form-control",3,"readOnly"],["type","date","formControlName","NgayLapDat",1,"form-control",3,"readOnly"],["type","text","formControlName","ToQuanLy",1,"form-control",3,"readOnly"],["type","text","formControlName","GhiChu",1,"form-control",3,"readOnly"],["type","text","formControlName","NhatKyThiCong",1,"form-control",3,"readOnly"],["type","text","formControlName","TonTai",1,"form-control",3,"readOnly"],[1,"text-center"],["class","btn btn-outline-primary mx-3",4,"ngIf"],["class","btn btn-outline-warning mx-3",3,"click",4,"ngIf"],["class","import",4,"ngIf"],[1,"btn","btn-outline-primary","mx-3"],[1,"btn","btn-outline-warning","mx-3",3,"click"],[1,"import"],[3,"excel"]],template:function(n,t){1&n&&(c.Tb(0,"div",0),c.Tb(1,"h3",1),c.Cc(2," Th\xf4ng tin tr\u1ea1m bi\u1ebfn \xe1p"),c.Sb(),c.Tb(3,"form",2),c.Tb(4,"div",3),c.Tb(5,"div",4),c.Tb(6,"div",5),c.Tb(7,"div",6),c.Tb(8,"span",7),c.Cc(9,"M\xe3 tr\u1ea1m"),c.Sb(),c.Sb(),c.Ob(10,"input",8),c.Sb(),c.Tb(11,"div",5),c.Tb(12,"div",6),c.Tb(13,"span",7),c.Cc(14,"T\xean tr\u1ea1m"),c.Sb(),c.Sb(),c.Ob(15,"input",9),c.Sb(),c.Tb(16,"div",5),c.Tb(17,"div",6),c.Tb(18,"span",7),c.Cc(19,"C\xf4ng su\u1ea5t"),c.Sb(),c.Sb(),c.Ob(20,"input",10),c.Sb(),c.Tb(21,"div",5),c.Tb(22,"div",6),c.Tb(23,"span",7),c.Cc(24,"V\u1ecb tr\xed"),c.Sb(),c.Sb(),c.Ob(25,"input",11),c.Sb(),c.Tb(26,"div",5),c.Tb(27,"div",6),c.Tb(28,"span",7),c.Cc(29,"S\u1ed1 MBA"),c.Sb(),c.Sb(),c.Ob(30,"input",12),c.Sb(),c.Tb(31,"div",5),c.Tb(32,"div",6),c.Tb(33,"span",7),c.Cc(34,"Hi\u1ec7u MCCB"),c.Sb(),c.Sb(),c.Ob(35,"input",13),c.Sb(),c.Tb(36,"div",5),c.Tb(37,"div",6),c.Tb(38,"span",7),c.Cc(39,"Idm MCCB"),c.Sb(),c.Sb(),c.Ob(40,"input",14),c.Sb(),c.Tb(41,"div",5),c.Tb(42,"div",6),c.Tb(43,"span",7),c.Cc(44,"N\u1ea5c MCCB"),c.Sb(),c.Sb(),c.Ob(45,"input",15),c.Sb(),c.Tb(46,"div",5),c.Tb(47,"div",6),c.Tb(48,"span",7),c.Cc(49,"C\xe1p su\u1ea5t xu\u1ed1ng"),c.Sb(),c.Sb(),c.Ob(50,"input",16),c.Sb(),c.Tb(51,"div",5),c.Tb(52,"div",6),c.Tb(53,"span",7),c.Cc(54,"C\xe1p su\u1ea5t l\xean"),c.Sb(),c.Sb(),c.Ob(55,"input",17),c.Sb(),c.Sb(),c.Tb(56,"div",4),c.Tb(57,"div",5),c.Tb(58,"div",6),c.Tb(59,"span",7),c.Cc(60,"M\xe3 PK"),c.Sb(),c.Sb(),c.Ob(61,"input",18),c.Sb(),c.Tb(62,"div",5),c.Tb(63,"div",6),c.Tb(64,"span",7),c.Cc(65,"Tuy\u1ebfn"),c.Sb(),c.Sb(),c.Ob(66,"input",19),c.Sb(),c.Tb(67,"div",5),c.Tb(68,"div",6),c.Tb(69,"span",7),c.Cc(70,"Pha \u0111\u1ea5u n\u1ed1i"),c.Sb(),c.Sb(),c.Ob(71,"input",20),c.Sb(),c.Tb(72,"div",5),c.Tb(73,"div",6),c.Tb(74,"span",7),c.Cc(75,"S\u1ed1 Pha"),c.Sb(),c.Sb(),c.Ob(76,"input",21),c.Sb(),c.Tb(77,"div",5),c.Tb(78,"div",6),c.Tb(79,"span",7),c.Cc(80,"S\u1edf h\u1eefu"),c.Sb(),c.Sb(),c.Ob(81,"input",22),c.Sb(),c.Tb(82,"div",5),c.Tb(83,"div",6),c.Tb(84,"span",7),c.Cc(85,"Ng\xe0y l\u1eafp \u0111\u1eb7t"),c.Sb(),c.Sb(),c.Ob(86,"input",23),c.Sb(),c.Tb(87,"div",5),c.Tb(88,"div",6),c.Tb(89,"span",7),c.Cc(90,"T\u1ed5 qu\u1ea3n l\xfd"),c.Sb(),c.Sb(),c.Ob(91,"input",24),c.Sb(),c.Tb(92,"div",5),c.Tb(93,"div",6),c.Tb(94,"span",7),c.Cc(95,"Ghi ch\xfa"),c.Sb(),c.Sb(),c.Ob(96,"input",25),c.Sb(),c.Tb(97,"div",5),c.Tb(98,"div",6),c.Tb(99,"span",7),c.Cc(100,"Nh\u1eadt k\xfd thi c\xf4ng"),c.Sb(),c.Sb(),c.Ob(101,"input",26),c.Sb(),c.Tb(102,"div",5),c.Tb(103,"div",6),c.Tb(104,"span",7),c.Cc(105,"T\u1ed3n t\u1ea1i"),c.Sb(),c.Sb(),c.Ob(106,"input",27),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Tb(107,"div",28),c.Ac(108,u,2,0,"button",29),c.Ac(109,d,2,0,"button",30),c.Ac(110,p,2,0,"button",30),c.Ac(111,s,2,0,"button",30),c.Sb(),c.Sb(),c.Ac(112,C,2,0,"div",31)),2&n&&(c.Cb(3),c.lc("formGroup",t.main),c.Cb(7),c.lc("readOnly",t.readonly),c.Cb(5),c.lc("readOnly",t.readonly),c.Cb(5),c.lc("readOnly",t.readonly),c.Cb(5),c.lc("readOnly",t.readonly),c.Cb(5),c.lc("readOnly",t.readonly),c.Cb(5),c.lc("readOnly",t.readonly),c.Cb(5),c.lc("readOnly",t.readonly),c.Cb(5),c.lc("readOnly",t.readonly),c.Cb(5),c.lc("readOnly",t.readonly),c.Cb(5),c.lc("readOnly",t.readonly),c.Cb(6),c.lc("readOnly",t.readonly),c.Cb(5),c.lc("readOnly",t.readonly),c.Cb(5),c.lc("readOnly",t.readonly),c.Cb(5),c.lc("readOnly",t.readonly),c.Cb(5),c.lc("readOnly",t.readonly),c.Cb(5),c.lc("readOnly",t.readonly),c.Cb(5),c.lc("readOnly",t.readonly),c.Cb(5),c.lc("readOnly",t.readonly),c.Cb(5),c.lc("readOnly",t.readonly),c.Cb(5),c.lc("readOnly",t.readonly),c.Cb(2),c.lc("ngIf",t.checkPer(2)),c.Cb(1),c.lc("ngIf",t.checkPer(2)),c.Cb(1),c.lc("ngIf",t.checkPer(4)),c.Cb(1),c.lc("ngIf",t.checkPer(4)),c.Cb(1),c.lc("ngIf",t.checkPer(2)))},directives:[b.s,b.j,b.e,b.m,b.b,b.i,b.d,o.m,l.a],styles:[""]}),m),h=[{path:"",component:(y=function(){function n(t){_classCallCheck(this,n),this.plus=t,this.db=null,this.verDB=1,this.dbName="tba",this.collection=["list","info","mba"],this.api="tba"}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.plus.IDB_InitDB(this.dbName,this.verDB,this.collection).subscribe((function(t){return n.db=t}))}}]),n}(),y.\u0275fac=function(n){return new(n||y)(c.Nb(i.a))},y.\u0275cmp=c.Hb({type:y,selectors:[["app-trambienap"]],decls:2,vars:0,template:function(n,t){1&n&&(c.Tb(0,"p"),c.Cc(1,"trambienap works!"),c.Sb())},styles:[""]}),y)},{path:"edit",component:S}],v=((T=function n(){_classCallCheck(this,n)}).\u0275mod=c.Lb({type:T}),T.\u0275inj=c.Kb({factory:function(n){return new(n||T)},imports:[[a.e.forChild(h)],a.e]}),T),O=((f=function n(){_classCallCheck(this,n)}).\u0275mod=c.Lb({type:f}),f.\u0275inj=c.Kb({factory:function(n){return new(n||f)},imports:[[o.b,v,r.UltisModule,b.n]]}),f)}}]);