(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{jkDv:function(t,e,s){"use strict";s.r(e),s.d(e,"AdminModule",(function(){return U}));var i=s("bSW0"),c=s("ofXK"),n=s("COeT"),r=s("3Pt+"),b=s("Kj3r"),a=s("fXoL");function h(t,e){if(1&t){const t=a.Ub();a.Tb(0,"tr"),a.Tb(1,"td"),a.Tb(2,"i",9),a.bc("click",(function(){a.uc(t);const s=e.$implicit;return a.fc().del(s._id)})),a.Sb(),a.Sb(),a.Tb(3,"td"),a.Dc(4),a.Sb(),a.Tb(5,"td"),a.Dc(6),a.Sb(),a.Tb(7,"td"),a.Dc(8),a.gc(9,"date"),a.Sb(),a.Tb(10,"td",7),a.Dc(11),a.Sb(),a.Sb()}if(2&t){const t=e.$implicit;a.Cb(4),a.Ec(t.api),a.Cb(2),a.Ec(t.ip),a.Cb(2),a.Ec(a.ic(9,4,t.date,"dd/MM/yyyy HH:MM")),a.Cb(3),a.Ec(t.data)}}let o=(()=>{class t{constructor(t,e){this.plus=t,this.fb=e,this.api="log",this.data=[],this.searchForm=this.fb.group({what:["",[r.s.minLength(3),r.s.maxLength(100)]]})}ngOnInit(){this.init(),this.find()}init(){this.plus.httpGet(this.api).subscribe(t=>{const e=this.plus.decrypt(t.data);this.data=this.plus.sortArr(e,"date")})}del(t){this.plus.httpDelete(this.api,t).subscribe(t=>{console.log(t),this.plus.alertSuccess()})}find(){this.searchForm.valid?this.searchForm.valueChanges.pipe(Object(b.a)(1500)).subscribe(t=>{this.plus.httpPost(this.api+"/find",t,!1).subscribe(t=>{const e=this.plus.decrypt(t.data);console.log(e),this.data=this.plus.decrypt(t.data)},t=>{this.plus.loaded(),this.plus.alertToasrt({err:"L\u1ed7i k\u1ebft n\u1ed1i\nVui l\xf2ng th\u1eed l\u1ea1i!"})})}):this.plus.alertToasrt({war:"B\u1ea1n c\u1ea7n nh\u1eadp nhi\u1ec1u h\u01a1n 3 k\xfd t\u1ef1"})}}return t.\u0275fac=function(e){return new(e||t)(a.Nb(n.a),a.Nb(r.c))},t.\u0275cmp=a.Hb({type:t,selectors:[["app-log"]],decls:20,vars:2,consts:[[1,"container"],[1,"text-center","text-danger"],[1,"form-group",3,"formGroup"],["type","text","placeholder","Nh\u1eadp th\xf4ng tin c\u1ea7n t\xecm","autocomplete","on","formControlName","what",1,"form-control",3,"change"],[1,"table","table-hover"],[1,"thead-inverse"],[1,"w-10"],[1,"w-70"],[4,"ngFor","ngForOf"],[1,"fa","fa-trash",3,"click"]],template:function(t,e){1&t&&(a.Tb(0,"div",0),a.Tb(1,"h5",1),a.Dc(2," LOG "),a.Sb(),a.Tb(3,"div",2),a.Tb(4,"input",3),a.bc("change",(function(){return e.find()})),a.Sb(),a.Sb(),a.Tb(5,"table",4),a.Tb(6,"thead",5),a.Tb(7,"tr"),a.Tb(8,"th",6),a.Dc(9,"Del"),a.Sb(),a.Tb(10,"th",6),a.Dc(11,"Ip"),a.Sb(),a.Tb(12,"th",6),a.Dc(13,"Api"),a.Sb(),a.Tb(14,"th",6),a.Dc(15,"Time"),a.Sb(),a.Tb(16,"th",7),a.Dc(17,"Data"),a.Sb(),a.Sb(),a.Sb(),a.Tb(18,"tbody"),a.Bc(19,h,12,7,"tr",8),a.Sb(),a.Sb(),a.Sb()),2&t&&(a.Cb(3),a.lc("formGroup",e.searchForm),a.Cb(16),a.lc("ngForOf",e.data))},directives:[r.k,r.e,r.b,r.j,r.d,c.k],pipes:[c.d],styles:[""]}),t})();var l=s("tyNb");let u=(()=>{class t{constructor(t){this.plus=t,this.db=null,this.api="admin"}ngOnInit(){this.plus.IDB_InitDB(this.api).subscribe(t=>{this.db=t})}}return t.\u0275fac=function(e){return new(e||t)(a.Nb(n.a))},t.\u0275cmp=a.Hb({type:t,selectors:[["app-admin"]],decls:0,vars:0,template:function(t,e){},styles:[""]}),t})();var p=function(t){return t[t.ADMIN=1]="ADMIN",t[t.PERSON=2]="PERSON",t[t.EMAIL=3]="EMAIL",t[t.DAOTAO=4]="DAOTAO",t[t.VERHICLE=5]="VERHICLE",t}({}),d=s("AytR");function f(t,e){if(1&t){const t=a.Ub();a.Tb(0,"tr"),a.Tb(1,"th",16),a.Dc(2),a.Sb(),a.Tb(3,"td"),a.Dc(4),a.Sb(),a.Tb(5,"td"),a.Dc(6),a.Sb(),a.Tb(7,"td"),a.Dc(8),a.Sb(),a.Tb(9,"td"),a.Tb(10,"input",17),a.bc("click",(function(s){a.uc(t);const i=e.$implicit;return a.fc(3).onSelect(i.api,1,s)})),a.Sb(),a.Sb(),a.Tb(11,"td"),a.Tb(12,"input",17),a.bc("click",(function(s){a.uc(t);const i=e.$implicit;return a.fc(3).onSelect(i.api,2,s)})),a.Sb(),a.Sb(),a.Tb(13,"td"),a.Tb(14,"input",17),a.bc("click",(function(s){a.uc(t);const i=e.$implicit;return a.fc(3).onSelect(i.api,4,s)})),a.Sb(),a.Sb(),a.Tb(15,"td"),a.Tb(16,"input",17),a.bc("click",(function(s){a.uc(t);const i=e.$implicit;return a.fc(3).onSelect(i.api,7,s)})),a.Sb(),a.Sb(),a.Sb()}if(2&t){const t=e.$implicit,s=a.fc().$implicit,i=a.fc(2);a.Cb(2),a.Fc(" ",s.label," "),a.Cb(2),a.Fc(" ",t.link," "),a.Cb(2),a.Fc(" ",t.label," "),a.Cb(2),a.Fc(" ",t.api," "),a.Cb(2),a.lc("checked",i.checked(t.api,1)),a.Cb(2),a.lc("checked",i.checked(t.api,2)),a.Cb(2),a.lc("checked",i.checked(t.api,4)),a.Cb(2),a.lc("checked",i.checked(t.api,7))}}function m(t,e){if(1&t&&(a.Tb(0,"tbody"),a.Bc(1,f,17,8,"tr",15),a.Sb()),2&t){const t=e.$implicit;a.Cb(1),a.lc("ngForOf",t.sub)}}function S(t,e){if(1&t&&(a.Tb(0,"table",13),a.Tb(1,"thead"),a.Tb(2,"tr"),a.Tb(3,"th",14),a.Dc(4,"Module"),a.Sb(),a.Tb(5,"th",14),a.Dc(6,"Link"),a.Sb(),a.Tb(7,"th",14),a.Dc(8,"App"),a.Sb(),a.Tb(9,"th",14),a.Dc(10,"api"),a.Sb(),a.Tb(11,"th",14),a.Dc(12,"Read"),a.Sb(),a.Tb(13,"th",14),a.Dc(14,"Write"),a.Sb(),a.Tb(15,"th",14),a.Dc(16,"Delete"),a.Sb(),a.Tb(17,"th",14),a.Dc(18,"Root"),a.Sb(),a.Sb(),a.Sb(),a.Bc(19,m,2,1,"tbody",15),a.Sb()),2&t){const t=a.fc();a.Cb(19),a.lc("ngForOf",t.permissions)}}const T=function(t,e){return{"btn-success":t,"btn-danger":e}};let g=(()=>{class t{constructor(t,e,s,i){this.fb=t,this.plus=e,this.route=s,this.location=i,this.PERMISSION=p,this.name="",this.permissions=d.a.nav,this.api="user",this.perUser={}}ngOnInit(){this.getById()}getById(){this.plus.load();const t=this.route.snapshot.paramMap.get("id");this.plus.httpGet("user/"+t).subscribe(t=>{this.user=t,this.perUser=t.opt,this.status=t.status,this.fullName=t.fullName,this.depart=t.depart,this.unit=t.unit,this.name=t.displayName+" - "+t.email,console.log(this.user),this.plus.loaded()},t=>this.plus.alertError())}update(){this.user.opt=this.perUser,this.user.status=this.status,this.user.fullName=this.fullName,this.user.depart=this.depart,this.user.unit=this.unit,this.plus.httpPut(this.api,this.user).subscribe(t=>{this.plus.alertToasrt(t)})}onSelect(t,e,s){const i={};if(i[t]=e,s.target.checked)this.perUser=Object.assign(Object.assign({},this.perUser),i);else switch(e){case 1:this.perUser[t]=0;break;case 2:this.perUser[t]=1;break;case 4:this.perUser[t]=2;break;case 7:this.perUser[t]=4;break;default:this.perUser[t]=0}console.log(this.perUser)}checked(t,e){return!!(this.perUser&&this.perUser[t]>=e)}deletePer(){this.perUser={}}lockUser(){let t=this.user;t.status=this.status,this.plus.httpPut(this.api,t).subscribe(t=>{this.plus.alertToasrt(t)})}goBack(){this.location.back()}checkPer(t,e){return this.plus.checkPer(t,e)}}return t.\u0275fac=function(e){return new(e||t)(a.Nb(r.c),a.Nb(n.a),a.Nb(l.a),a.Nb(c.h))},t.\u0275cmp=a.Hb({type:t,selectors:[["app-permission"]],decls:30,vars:10,consts:[[1,"container"],[1,"text-center","text-primary","my-5"],[1,"per2"],[1,"in"],[1,"input-group","mb-3"],[1,"input-group-prepend"],[1,"input-group-text"],["type","text",1,"form-control",3,"ngModel","ngModelChange"],["class","table table-hover",4,"ngIf"],[1,"text-center"],["type","button",1,"btn",3,"ngClass","click"],["type","button",1,"btn","btn-outline-primary","mx-3",3,"click"],["type","button",1,"btn","btn-outline-warning","mx-3",3,"click"],[1,"table","table-hover"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],["type","checkbox",1,"form-check-input",3,"checked","click"]],template:function(t,e){1&t&&(a.Tb(0,"div",0),a.Tb(1,"h4",1),a.Dc(2),a.Sb(),a.Tb(3,"div",2),a.Tb(4,"div",3),a.Tb(5,"div",4),a.Tb(6,"div",5),a.Tb(7,"span",6),a.Dc(8,"H\u1ecd v\xe0 t\xean"),a.Sb(),a.Sb(),a.Tb(9,"input",7),a.bc("ngModelChange",(function(t){return e.fullName=t})),a.Sb(),a.Sb(),a.Tb(10,"div",4),a.Tb(11,"div",5),a.Tb(12,"span",6),a.Dc(13,"Ph\xf2ng ban"),a.Sb(),a.Sb(),a.Tb(14,"input",7),a.bc("ngModelChange",(function(t){return e.depart=t})),a.Sb(),a.Sb(),a.Tb(15,"div",4),a.Tb(16,"div",5),a.Tb(17,"span",6),a.Dc(18,"\u0110\u01a1n v\u1ecb"),a.Sb(),a.Sb(),a.Tb(19,"input",7),a.bc("ngModelChange",(function(t){return e.unit=t})),a.Sb(),a.Sb(),a.Sb(),a.Bc(20,S,20,1,"table",8),a.Tb(21,"div",9),a.Tb(22,"button",10),a.bc("click",(function(){return e.status=!e.status})),a.Dc(23),a.Sb(),a.Tb(24,"button",11),a.bc("click",(function(){return e.update()})),a.Dc(25,"Save"),a.Sb(),a.Tb(26,"button",11),a.bc("click",(function(){return e.deletePer()})),a.Dc(27,"Clear"),a.Sb(),a.Tb(28,"button",12),a.bc("click",(function(){return e.goBack()})),a.Dc(29,"Back"),a.Sb(),a.Sb(),a.Sb(),a.Sb()),2&t&&(a.Cb(2),a.Fc("User: ",e.name,""),a.Cb(7),a.lc("ngModel",e.fullName),a.Cb(5),a.lc("ngModel",e.depart),a.Cb(5),a.lc("ngModel",e.unit),a.Cb(1),a.lc("ngIf",e.user),a.Cb(2),a.lc("ngClass",a.qc(7,T,1==e.status,0==e.status)),a.Cb(1),a.Fc(" ",1==e.status?"On":"Off"," "))},directives:[r.b,r.j,r.m,c.l,c.j,c.k],styles:[""]}),t})();var k=s("tk/3");let D=(()=>{class t{constructor(t,e){this.plus=t,this.http=e,this.httpOptions=this.plus.getHeader(),this.apiUrl=this.plus.getApiUrl("per/"),this.collection="permission"}getPer(){return this.http.get(this.apiUrl,this.httpOptions)}createPer(t){return this.http.post(this.apiUrl,t,this.httpOptions)}updatePer(t){return this.http.put(this.apiUrl,t,this.httpOptions)}deletePer(t){return this.http.delete(this.apiUrl+t,this.httpOptions)}}return t.\u0275fac=function(e){return new(e||t)(a.Xb(n.a),a.Xb(k.a))},t.\u0275prov=a.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const v=function(t,e){return{"btn-success":t,"btn-danger":e}};function C(t,e){if(1&t){const t=a.Ub();a.Tb(0,"tr"),a.Tb(1,"td"),a.Dc(2),a.Sb(),a.Tb(3,"td"),a.Tb(4,"a",8),a.Dc(5),a.Sb(),a.Sb(),a.Tb(6,"td"),a.Tb(7,"button",9),a.Dc(8),a.Sb(),a.Sb(),a.Tb(9,"td"),a.Dc(10),a.Sb(),a.Tb(11,"td"),a.Tb(12,"a",8),a.Ob(13,"i",10),a.Sb(),a.Tb(14,"i",11),a.bc("click",(function(){a.uc(t);const s=e.$implicit;return a.fc().deleteUsr(s._id)})),a.Sb(),a.Sb(),a.Sb()}if(2&t){const t=e.$implicit;a.Cb(2),a.Ec(t.usr),a.Cb(2),a.mc("routerLink",t._id),a.Cb(1),a.Ec(t.displayName),a.Cb(2),a.lc("ngClass",a.qc(7,v,1==t.status,0==t.status)),a.Cb(1),a.Fc(" ",t.status?"On":"Off"," "),a.Cb(2),a.Ec(t.email),a.Cb(2),a.mc("routerLink",t._id)}}const y=[{path:"",component:u},{path:"user",component:(()=>{class t{constructor(t,e,s){this.plus=t,this.perSV=e,this.fb=s,this.api="user",this.permissions=[],this.userPermiss=[],this.searchForm=this.fb.group({what:["",r.s.minLength(3)]}),this.main=this.fb.group({usr:[,[r.s.required,r.s.min(3),r.s.max(100)]],pwd:[,[r.s.required,r.s.min(8),r.s.max(100)]],level:[,[r.s.min(3),r.s.max(6)]],displayName:[,[r.s.min(3),r.s.max(100)]],email:[,[]],phoneNumber:[,[]],title:[,[]],depart:[,[]],unit:[,[]],note:[,[]],fullName:[,[r.s.min(3),r.s.max(100)]],SoHieuNhanSu:[,[]],BiDanh:[,[]],ChucDanh:[,[]],BoPhanLamViec:[,[]]})}ngOnInit(){this.find(),this.getUsrs()}getUsrs(){this.plus.load(),this.plus.httpGet(this.api+"/page/1").subscribe(t=>{this.users=t,this.plus.loaded()})}onEdit(t){this.userPermiss=[];const e=t;e.level.forEach(t=>(delete t._id,this.userPermiss.push(t.label))),this.editUsr=e}deleteUsr(t){this.plus.httpDelete(this.api,t).subscribe(t=>{this.plus.alertToasrt(t)})}update(){const t=this.editUsr;delete t.__v,this.plus.httpPut(this.api,t).subscribe(t=>{this.plus.alertToasrt(t)})}checkAll(t){this.editUsr.level=t.target.checked?this.permissions:[]}find(){this.searchForm.valid&&this.searchForm.valueChanges.pipe(Object(b.a)(1500)).subscribe(t=>{this.plus.loaded(),t.what.length<2||(t.what=this.plus.removeAccents(t.what),this.plus.httpPost(this.api,t,!1).subscribe(t=>{this.users=t},t=>this.plus.alertError()))})}}return t.\u0275fac=function(e){return new(e||t)(a.Nb(n.a),a.Nb(D),a.Nb(r.c))},t.\u0275cmp=a.Hb({type:t,selectors:[["app-user-list"]],decls:18,vars:1,consts:[[1,"container-fluid"],[1,"row"],[1,"table","table-hover","table-inverse"],[1,"thead-inverse"],[1,"text-center"],[1,"text-primary"],[1,"fa","fa-refresh",3,"click"],[4,"ngFor","ngForOf"],[3,"routerLink"],["type","button",1,"btn",3,"ngClass"],[1,"fa","fa-pencil","text-success"],[1,"fa","fa-trash","text-danger",3,"click"]],template:function(t,e){1&t&&(a.Dc(0,"."),a.Tb(1,"div",0),a.Tb(2,"div",1),a.Tb(3,"table",2),a.Tb(4,"thead",3),a.Tb(5,"tr"),a.Tb(6,"th",4),a.Dc(7,"T\xe0i kho\u1ea3n"),a.Sb(),a.Tb(8,"th",4),a.Dc(9,"T\xean"),a.Sb(),a.Tb(10,"th",4),a.Dc(11,"Tr\u1ea1ng th\xe1i"),a.Sb(),a.Tb(12,"th",4),a.Dc(13,"Email"),a.Sb(),a.Tb(14,"th",5),a.Tb(15,"i",6),a.bc("click",(function(){return e.ngOnInit()})),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Tb(16,"tbody"),a.Bc(17,C,15,10,"tr",7),a.Sb(),a.Sb(),a.Sb(),a.Sb()),2&t&&(a.Cb(17),a.lc("ngForOf",e.users))},directives:[c.k,l.d,c.j],styles:[""]}),t})()},{path:"user/:id",component:g},{path:"per",component:g},{path:"log",component:o}];let O=(()=>{class t{}return t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({factory:function(e){return new(e||t)},imports:[[l.e.forChild(y)],l.e]}),t})(),U=(()=>{class t{}return t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({factory:function(e){return new(e||t)},imports:[[c.b,O,r.f,r.p,i.a,r.f]]}),t})()}}]);