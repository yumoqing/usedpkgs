_jsload2&&_jsload2('vectordrawlib', 'function Gf(a){this.$H=o;this.k=x.object.extend(a||{},{Ch:o});Hc.call(this,this.k);this.yg={};this.loaded=q;this.Et=p;this.WB=q;this.VJ={road:"rd",water:"wt",building:"bd",land:"ld",government:"gv",point:"pts"};this.QE={market:"mt",food:"fd",communications:"cm",hotel:"ht",attractions:"at",recreation:"rc"}}Gf.prototype=new Hc; Gf.prototype.ra=function(a){if(!this.loaded){this.loaded=o;var b=this;b.map=a;b.cb=b.map.cb;b.map=a;b.Tw=q;b.vK=p;b.oe="df";b.k.poiElements&&b.k.poiElements.name&&(b.oe=b.QE[b.k.poiElements.name]);b.Qe=b.k.style||"normal";b.hn=b.k.styleStr||p;b.aq=200;b.ze=p;b.Zd=0;b.xb=this.cb.Kn(0);b.Nd=this.cb.Kn(10);b.cb.ld.appendChild(this.xb);b.cb.ld.appendChild(this.Nd);b.cb.xb=b.xb;b.cb.Nd=this.Nd;b.Jb=new z.VectorDrawLib;b.fs="";b.k.features&&(b.fs=b.SW(b.k.features));b.Jb.lC=b.Qe;b.Xl();b.Qe&&"normal"!== b.Qe||b.hn&&0<b.hn.length?b.Nt(b.Qe,b.hn,function(){b.map.addEventListener("click",function(a){b.Zd++;if(b.Zd===1)b.ze=setTimeout(function(){b.qu(a);b.Zd=0},b.aq);else{clearTimeout(b.ze);b.Zd=0;return q}});b.xb.innerHTML="";b.Nd.innerHTML="";b.$d(o)}):(b.$d(),b.map.addEventListener("click",function(a){b.Zd++;if(b.Zd===1){if(!a.ab)b.ze=setTimeout(function(){b.qu(a);b.Zd=0},b.aq)}else{clearTimeout(b.ze);b.Zd=0;return q}}));b.map.K.lj&&(G()&&b.Gf==j)&&(b.Gf=new z.sG(b.map),b.map.Ja(b.Gf))}}; x.extend(Gf.prototype,{Xl:function(){var a=this;setTimeout(function(){a.map.addEventListener("poilayervisiblechange",function(b){a.rV(b)});a.map.addEventListener("moveend",function(){a.$d()});a.map.addEventListener("zoomend",function(){a.my();a.Tw=q;a.$d(o)});a.map.addEventListener("onresize",function(){a.$d()});Va()&&(a.map.addEventListener("onmoving",function(){a.$d()}),a.map.addEventListener("onmaptypechange",function(){a.$d()}));a.map.addEventListener("mousemove",function(b){a.map.Vb()&&a.DC(b)})}, 1);a.map.addEventListener("setcustomstyles",function(b){a.mC(b.target)})},SW:function(a){for(var b="",c=0,d=a.length;c<d;c++)b=b+this.VJ[a[c]]+",";b&&(this.Jb.bi=b);return b},Nt:function(a,b,c){if(this.map.Vb()){var d=this,e=z.Ac+"custom/",f;b&&0<b.length?(f="setStyle_"+b.length,e+="mapstyle?styles="+encodeURIComponent(b)):(f="setStyle_"+a,e+="getstyle?customid="+a);f+=this.map.ba;window[f]=function(b,e){var k=x.extend({},d.Jb.nz);d.Jb.Fb=x.extend(k,b);k=z.Db.re(d.Jb.Fb["3181"][1]);d.map.K.xo=k;d.map.Na().style.backgroundColor= k;c(a);d.map.dispatchEvent(new O("onsetmapstylesuccess",e));delete window[f]};pa(e+("&callback="+f+"&udt=20150116"),q)}},NN:function(a){if(this.map.Vb()){for(var b="",c=0,d=a.length;c<d;c++)b=b+(this.VJ[a[c]]||"")+",";b==this.fs&&""==!b||(""==b&&(b="no"),this.fs=b,this.Jb.bi=b,this.Jb.Bs({bg:this.fx(this.xb),poi:this.fx(this.Nd)},this.cb,this.oe))}},VN:function(a){if(a.name&&this.QE[a.name]){var b=this.QE[a.name];if(a.styles.visibility==o&&this.oe!==b&&-1<this.fs.indexOf("pts")){this.oe=b;if(this.Nd)for(var c= [],d=[],a=this.Nd.childNodes,b=0,e=a.length;b<e;b++){var f=a[b].id.split("_");c.push([f[1],f[2]]);d.push(a[b])}this.Jb.VC(c,d,this.oe,this.cb,p)}}},Ip:function(a){var b=this;b.Nt(a.style,a.styleStr,function(a){b.Qe=a;b.my();b.Jb.lC=b.Qe;var a=b.Jb.Ks,d;for(d in a)delete a[d];"df"!==b.oe&&b.aE();b.XE()})},V3:function(a){var b=this,c=[],d=[],e=a.clickFea;b.vK=e;if(a.type){var f=x.$(e.tileId),g=e.tileId;if(b.oe==a.type){var i=Math.pow(2,18-b.map.Oa);b.f0();b.yg[g]={canvas:f,fea:e.fea};b.YK(e,i);var c= this.yg,k;for(k in c)d=x.$(k).getContext("2d"),b.Jb.jm(d,c[k].fea,i,o);return}b.my();b.oe=a.type;b.yg[g]={canvas:f,fea:e.fea};b.YK(e,i)}else{b.nu();if("df"==b.oe)return;b.my();b.oe="df"}if(b.Nd){i=b.Nd.childNodes;k=0;for(a=i.length;k<a;k++)f=i[k].id.split("_"),c.push([f[f.length-3],f[f.length-2]]),d.push(i[k])}b.WB||(b.map.addEventListener("onclickicondrawed",function(a){var c=a.tarPoi.id;b.Tw=o;b.yg&&b.yg[c]&&(b.yg[c].fea=a.tarPoi.fea)}),b.WB=o);"df"==b.oe?b.nu():b.aE();b.Jb.VC(c,d,b.oe,b.cb,e)}, f0:function(){var a=this.yg,b=Math.pow(2,18-this.map.Oa),c;for(c in a)this.Jb.jm(a[c].canvas.getContext("2d"),a[c].fea,b,q);for(var d in a)delete a[d]},my:function(){var a=this.yg;try{for(var b in a)delete a[b]}catch(c){}},YK:function(a){var b=a.tileId.split("_"),c=b.length,d=parseInt(b[c-3]),e=parseInt(b[c-2]),c=parseInt(b[c-1]),f=d-1,g=d+1,i=e-1,k=e+1,l=this.map.ba.replace(/^TANGRAM_/,""),b=x.$(l+"_poi_"+f+"_"+e+"_"+c),e=x.$(l+"_poi_"+g+"_"+e+"_"+c),m=x.$(l+"_poi_"+d+"_"+i+"_"+c),d=x.$(l+"_poi_"+ d+"_"+k+"_"+c),n=x.$(l+"_poi_"+f+"_"+i+"_"+c),f=x.$(l+"_poi_"+f+"_"+k+"_"+c),i=x.$(l+"_poi_"+g+"_"+i+"_"+c),c=x.$(l+"_poi_"+g+"_"+k+"_"+c);b&&this.lk(b,a.fea);e&&this.lk(e,a.fea);m&&this.lk(m,a.fea);d&&this.lk(d,a.fea);n&&this.lk(n,a.fea);f&&this.lk(f,a.fea);i&&this.lk(i,a.fea);c&&this.lk(c,a.fea)},lk:function(a,b){var c=this.sQ(a.Xd,b[5].u);c&&(this.yg[a.id]={canvas:a,fea:c})},sQ:function(a,b){try{if(a.length)for(var c=0,d=a.length;c<d;c++){var e=a[c];if(e[5]&&e[5].u&&e[5].u==b)return e}}catch(f){}}, rV:function(a){a.visible==q?(this.cb.ld.removeChild(this.Nd),this.oe=""):(this.cb.ld.appendChild(this.Nd),a=this.cb.wm(this.Nd),this.Jb.VC(a.r4,a.q4,this.oe,this.cb))},$d:function(a){this.map.fa();if(this.map.Vb()){this.xb.style.display="block";this.Nd.style.display="block";this.S_(this.xb,this.Nd);this.cb.wK={};var b=this.cb.wm(this.xb,"bg");poiVectorObj=this.cb.wm(this.Nd,"poi");for(var c in this.yg)x.$(c)||delete this.yg[c];this.Jb.Bs({bg:b,poi:poiVectorObj,isZoomMap:a?o:q},this.cb,this.oe)}else{a= this.xb;b=this.Nd;a.style.display="none";b.style.display="none";c=a.childNodes.length;for(c-=1;0<=c;c--){var d=a.childNodes[c];a.removeChild(d)}c=b.childNodes.length;for(c-=1;0<=c;c--)d=b.childNodes[c],b.removeChild(d)}},fx:function(a){if(a){for(var b=[],a=a.childNodes,c=0,d=a.length;c<d;c++){var e=a[c].id.split("_");b.push([e[e.length-3],e[e.length-2],a[c]])}return b}},XE:function(){this.map.Vb()&&this.Jb.Bs({bg:this.fx(this.xb),poi:this.fx(this.Nd)},this.cb,this.oe)},S_:function(a,b){var c=q;if(a)for(var d= a.childNodes,e=0,f=d.length;e<f;e++)if(d[e].Ze==o){c=o;break}if(!c){c=b.childNodes;d=0;for(f=c.length;d<f;d++)c[d].Ze=q}},qu:function(a){this.map.K.lj&&(a=this.qs(a),this.map.K.xw?this.map.K.xw(a):this.Nb(a))},Nb:function(a){a?(Va()&&this.Pz(a),G()&&this.Gf&&this.Gf.switchTo(a)):G()&&this.Gf&&this.Gf.U()},DC:function(a){this.map.K.lj&&(this.qs(a)?(this.map.platform.style.cursor="pointer",this.map.R.Nx=o):(this.map.R.Nx=q,this.map.platform.style.cursor!=this.map.K.Xb&&0==this.map.R.Pe.length&&(this.map.platform.style.cursor= this.map.K.Xb)))},Pz:function(a){(a=a.uid)&&dd.bb(s(),{qt:"inf",uid:a,operate:"mapclick",clicktype:"vector"})},UG:function(a,b,c){var d=this;if(b&&b.content){var e=b.content,f=e.pano||0,c=d.map.wb(c.point);if(!g)var g={};g.isFromMPC=o;var i=e.addr,g=e.street_id||"";if(1==e.poiType||3==e.poiType)i=P.unique(i.split(";")).join("; ");var k=e.tel;k&&(k=k.replace(/,/g,", "));d.Sq(e.cla);var l=M("div",{style:"font-size:12px;padding:5px 0;overflow:hidden;*zoom:1;"}),b=q;f&&(360>d.map.height?b=o:(f=[],f.push("<div class=\'panoInfoBox\' id=\'panoInfoBox\' title=\'"+ e.name+"\\u5916\\u666f\' title=\'\\u67e5\\u770b\\u5168\\u666f\' >"),f.push("<img filter = \'pano_thumnail_img\' class=\'pano_thumnail_img\' width=323 height=101 border=\'0\' alt=\'"+e.name+"\\u5916\\u666f\' src=\'"+(z.url.proto+z.url.domain.pano[0]+"/pr/?qt=poiprv&uid="+g+"&width=323&height=101&quality=80&fovx=200")+"\' id=\'pano_"+a+"\'/>"),f.push("<div filter = \'panoInfoBoxTitleBg\' class=\'panoInfoBoxTitleBg\'></div><a href=\'javascript:void(0)\' filter=\'panoInfoBoxTitleContent\' class=\'panoInfoBoxTitleContent\' >\\u8fdb\\u5165\\u5168\\u666f&gt;&gt;</a>"), f.push("</div>"),l.innerHTML=f.join("")));i&&(f=M("p",{style:"padding:0;margin:0;line-height:18px;font-size:12px;color:#4d4d4d;"}),f.innerHTML="\\u5730\\u5740\\uff1a"+i,l.appendChild(f));k&&(f=M("p",{style:"padding:0;margin:0;line-height:18px;font-size:12px;color:#4d4d4d;"}),f.innerHTML="\\u7535\\u8bdd\\uff1a"+k,l.appendChild(f));e.tag&&(k=M("p",{style:"padding:0;margin:0;line-height:18px;font-size:12px;color:#4d4d4d;color:#7f7f7f;"}),k.innerHTML="\\u6807\\u7b7e\\uff1a"+e.tag,l.appendChild(k));a="http://api.map.baidu.com/place/detail?uid="+ a+"&output=html&source=jsapi&operate=mapclick&clicktype=vector";k="<div style=\'height:26px;\'><a href=\'"+a+"\' target=\'_blank\' style=\'font-size:14px;color:#4d4d4d;font-weight:bold;text-decoration:none;\' onmouseover=\'this.style.textDecoration=\\"underline\\";this.style.color=\\"#3d6dcc\\"\' onmouseout =\'this.style.textDecoration=\\"none\\";this.style.color=\\"#4d4d4d\\"\'>"+e.name+"</a>";a=new tc(l,{width:322,enableSearchTool:o,title:k+("<a href=\'"+a+"\' target=\'_blank\' style=\'font-size:12px;color:#3d6dcc;margin-left:5px;text-decoration:none;\' onmouseover=\'this.style.textDecoration=\\"underline\\"\' onmouseout =\'this.style.textDecoration=\\"none\\"\'>\\u8be6\\u60c5&raquo;</a>")+ "</div>",enableParano:b});b&&(a.street_id=g);a.addEventListener("open",function(){var a=x.$("panoInfoBox");if(a){var b=e.street_id||"";d.ZV("click",function(){Ra(5052);d.Aq(b)},a,"pano_thumnail_img|panoInfoBoxTitleBg|panoInfoBoxTitleContent")}});this.map.Nb(a,c)}},Aq:function(a){var b=z.sg("pano","scape/")[0],c=this,d=(new Date).getTime(),e="Pano"+d;z[e]=function(a){var b=c.map.qm(),a=a.content[0];b.rc(a.poiinfo.PID);b.show();b.Mc({heading:a.poiinfo.Dir,pitch:a.poiinfo.Pitch})};d=(new Date).getTime(); pa(b+("?qt=poi&udt=20131021&uid="+a+"&t="+d+"&fn=BMap."+e),q)},Sq:function(a){for(var b=[],c=0,d=a.length;c<d;c++)b.push(a[c][1]),c<d-1&&b.push(", ");return b.join("")},qs:function(a){var b=this.Nd.getElementsByTagName("canvas"),c=a.offsetX,d=a.offsetY,e=j,f=j;this.map.Bb();for(var f=this.map.pa().k.Pb,g=0,i=b.length;g<i;g++){var k=this.Qf(b[g]);if(c>k.left&&c<=k.left+f&&d>k.top&&d<=k.top+f){e=b[g];break}}if(e==j||e.Xd==j)return q;f=e.Xd;b=0;for(i=f.length;b<i;b++){var c=f[b],d=c[0],g=c[1],l=this.Jb.Fb[c[3]]|| window.Fb[c[3]],m=l[0],l=this.Jb.Ss(l,this.Jb.Fb[c[4]]||window.Fb[c[4]])[1],n=c[5]||{};if(l==j||"empty"==l)break;if(2!=m&&(3!=m&&4!=m&&0<l.length&&n.u)&&(iconX=g[0]+k.left,iconY=g[1]+k.top,a.offsetX>=iconX-15&&a.offsetX<=iconX+15&&a.offsetY>=iconY-15&&a.offsetY<=iconY+15))return{type:c[5].c||"",name:d,uid:n.u||"",point:{x:iconX,y:iconY},clickFea:{tileId:e.id,tile:e,fea:c}}}return q},Mx:function(){return/M040/i.test(navigator.userAgent)},Qf:function(a){for(var b=a.offsetLeft,c=a.offsetTop,a=a.offsetParent;a&& a!=this.map.Na();)b+=a.offsetLeft,c+=a.offsetTop,a=a.offsetParent;return{top:c,left:b}},mC:function(a){if(this.map.Vb()){this.map.pa().k.$b=18;var a=this.Et=a,b;for(b in a)switch(b){case "style":this.Ip(a);break;case "styleStr":this.Ip(a);break;case "features":this.NN(a[b]);break;case "poiElements":this.VN(a[b])}}},aE:function(){this.nu();"dark"==this.Qe?x.D.Ua(this.xb,"light_gray_background"):x.D.Ua(this.xb,"gray_background")},nu:function(){x.D.Sb(this.xb,"gray_background");x.D.Sb(this.xb,"light_gray_background")}, ZV:function(a,b,c,d){var e=this;c.Lm||(c.Lm=[],c.handle={});c.Lm.push({filter:d,lm:b});c.handle[a]||(c.addEventListener(a,function(a){for(var b=a.target;b!=c;){e.Gb(c.Lm,function(c,d){RegExp(d.filter).test(b.getAttribute("filter"))&&d.lm.call(b,a,b.getAttribute("filter"))});b=b.parentNode}},q),c.handle[a]=o)},Gb:function(a,b){for(var c=0,d=a.length;c<d;c++)b(c,a[c])}});window.VectorLayer=Gf;Hf=1;If=2;Jf=3;Kf=4;Lf=5; function Nf(){this.Gm=q;this.ct=[z.url.proto+z.url.domain.TILE_ONLINE_URLS[1]+"/"];this.QF=[z.url.proto+z.url.domain.TILE_ONLINE_URLS[1]+"/gvd/?",z.url.proto+z.url.domain.TILE_ONLINE_URLS[2]+"/gvd/?",z.url.proto+z.url.domain.TILE_ONLINE_URLS[3]+"/gvd/?",z.url.proto+z.url.domain.TILE_ONLINE_URLS[4]+"/gvd/?"];this.cb=p;this.pk={};this.map=p;this.We=this.jj=0;this.bi=p;this.Fb=window.Fb;this.nz=x.extend({},window.Fb);this.cm={dark:{backColor:"#2D2D2D",textColor:"#bfbfbf",iconUrl:"vector/dicons"},normal:{backColor:"#F3F1EC", textColor:"#c61b1b",iconUrl:"vector/nicons_hd"},light:{backColor:"#EBF8FC",textColor:"#017fb4",iconUrl:"vector/licons"}};this.Ks={};this.lp=o;this.nk=p;this.Yl=/.*GT-I9300.*Version\\/\\d+.*Safari\\/\\d+\\.\\d+$/ig.test(navigator.userAgent)||/baiduboxapp/ig.test(navigator.userAgent)} Nf.prototype={Bs:function(a,b,c){this.fO=(new Date).getTime();var d=a.bg,e=a.poi;this.FF=d.length;this.jj=0;this.We=d.length;this.gK();this.Gm||(this.Gm=o,this.map=b.map,this.cb=b,this.yc=this.map.K.devicePixelRatio,0<this.We&&(this.Pb=parseInt(d[0][2].style.width,10)));this.map.Bb();this.hO=0;this.SE=c;b=this.map.Oa;this.Ym=Math.pow(2,18-b);this.Gj?this.Gj.length=0:this.Gj=[];this.map.dispatchEvent(new O("onvectorbegin"));if(this.FF<=e.length)var f=0,g=this.We;else f=0,g=e.length;for(;f<g;f++)d[f][2].Ze= q,e[f][2].Ze=q,d[f][2].nq=(new Date).getTime(),e[f][2].nq=(new Date).getTime(),this.gy(d[f][0],d[f][1],d[f][2],b,e[f][2]||p,c,a.isZoomMap)},gK:function(){for(var a in this.pk)delete this.pk[a]},VC:function(a,b,c,d,e){this.Gj?this.Gj.length=0:this.Gj=[];this.fO=(new Date).getTime();var d=this.map.Oa,f=this.map.Ka(),f=new H(f.lng,f.lat);this.SE=c;this.nk=e;for(var e=0,g=a.length;e<g;e++){b[e].nq=(new Date).getTime();var i=a[e][0],k=a[e][1],l="_"+parseInt(i+""+k+""+d).toString(36);"df"==c&&this.pk[l]? (i=this.pk[l],b[e].Xd=i,this.nj(b[e]),this.Io(i,b[e],d,p,f,d)):this.gy(i,k,b[e],d,p,c)}},gy:function(a,b,c,d,e,f){var g=this,i=g.QF,k=Math.abs(parseInt(a,10)+parseInt(b,10))%i.length,l="x="+a+"&y="+b+"&z="+d,m=g.map.ba.replace(/^TANGRAM_/,""),n="undefined"!=typeof TVC?TVC.QJ.I4:{},t=n.version?n.version:"002",n=n.ou?n.ou:"20150601",v="",w=m+(0>a?"_":"")+(0>b?"$":"")+parseInt(Math.abs(a)+""+Math.abs(b)+""+d,10).toString(36);if(c&&e)if(g.bi)if("no"==g.bi)v="&layers=&features="+g.bi,c.Xd=p,e.Xd=p,this.Yl? (f=c.getContext("2d"),a=e.getContext("2d"),f.canvas.width=f.canvas.width,a.canvas.width=a.canvas.width,a=f=p):(g.nj(c),g.nj(e)),g.We=0;else if(-1<g.bi.indexOf("pts"))if("pts,"==g.bi)c.Xd=p,this.Yl?(v=c.getContext("2d"),v.canvas.width=v.canvas.width,v=p):g.nj(c),v="&layers="+f;else{g.We<2*g.FF&&(g.We*=2);a=g.bi.split(",");b="";v=0;for(m=a.length;v<m;v++)"pts"!=a[v]&&""!=a[v]&&(b=a[v]+","+b);v="&layers=bg,"+f+"&features="+b;b=a=p}else e.Xd=p,this.Yl?(v=e.getContext("2d"),v.canvas.width=v.canvas.width, v=p):g.nj(e),v="&layers=bg&features="+g.bi;else v="&layers=bg,"+f;else v="&layers="+f;var i=(i[k]?i[0]:i[k])+"qt=lgvd&"+l+"&styles=pl"+v+"&f=mwebapp&v="+t+"&udt="+n+"&fn=BMap."+w,k=g.map.Ka(),y=new H(k.lng,k.lat),C=g.map.fa();z[w]=function(a){var b=a.content;if(b){c.lq=(new Date).getTime();e&&(e.lq=(new Date).getTime());var f=g.map,a=f.Ka(),f=f.fa();if(!a.nb(y)||f!=C){delete z[w];return}var a={},i;for(i in b)"df"==i&&(g.pk[w]=b[i]),a[i]=b[i];for(var k in a){i=a;for(var b=k,f=a[k],l=0,m=f.length;l< m;l++)for(var n=f[l][1],t=0,v=0,Ea=0,Ua=n.length/2;Ea<Ua;Ea++)t+=n[2*Ea]/10,v+=n[2*Ea+1]/10,n[2*Ea]=t,n[2*Ea+1]=v;i[b]=f;"bg"==k?c.mq=(new Date).getTime():e?e.mq=(new Date).getTime():c.mq=(new Date).getTime()}for(var Qa in a)"bg"==Qa?(c.Xd=a[Qa],c&&g.nj(c),g.Io(a[Qa],c,d,p,y,C)):e!==p?(e.Xd=a[Qa],g.nj(e),g.Io(a[Qa],e,d,p,y,C)):(c.Xd=a[Qa],c&&g.nj(c),g.Io(a[Qa],c,d,p,y,C))}delete z[w]};pa(i)},nj:function(a){var a=a.getContext("2d"),b=this.Pb*this.yc;this.Yl||(a.save(),a.clearRect(0,0,b,b),a.restore())}, TC:function(a,b,c){a.fillStyle=c;a.fillRect(0,0,b,b)},Io:function(a,b,c,d,e,f){b.WU=(new Date).getTime();var g=b.getContext("2d"),i=0;this.Yl?(g.canvas.width=g.canvas.width,g.scale(this.yc,this.yc)):1<this.yc&&!b.lg&&(g.scale(this.yc,this.yc),b.lg=o);g.textBaseline="bottom";-1<b.id.indexOf("bg")&&this.map.K.xo&&this.TC(g,this.Pb,this.map.K.xo);for(var k=this.lp,l=a.length,d=0,m=this.Fb;d<l;d++){var n=a[d],t=m[n[3]]||window.Fb[n[3]],v=m[n[4]]||window.Fb[n[4]];n.tc=t;n.Pc=v;if(t[0]==Jf)i++,this.jm(g, n,p,f);else break}b.VU=(new Date).getTime();n=this.map.Ka();c=this.map.fa();if(n.nb(e)&&c==f){b.wZ=(new Date).getTime();for(var w=[];d<l;d++){var n=a[d],t=m[n[3]]||window.Fb[n[3]],v=m[n[4]]||window.Fb[n[4]];n.tc=t;n.Pc=v;17<=c&&(t[5]&&0<t[5].length&&1==t[5][0]&&6==t[5][1]&&v&&0<v.length)&&(t[5].length=0,t[6]=0,v[6]=0);if(t[0]==If)i++,w.push(n);else break}this.dF(g,w,c,this.Ym);b.vZ=(new Date).getTime();n=this.map.Ka();c=this.map.fa();if(n.nb(e)&&c==f){for(b.WY=(new Date).getTime();d<l;d++)n=a[d], t=m[n[3]]||window.Fb[n[3]],v=m[n[4]]||window.Fb[n[4]],n.tc=t,n.Pc=v,n[5]&&n[5].u&&this.nk&&n[5].c==this.nk.fea[5].c?("df"!==this.nk.fea[5].c?this.jm(g,n,this.Ym,o,f):n[5].u==this.nk.fea[5].u?this.jm(g,n,this.Ym,o,f):this.jm(g,n,this.Ym,q,f),n[5].u==this.nk.fea[5].u&&(c=new O("onclickicondrawed"),c.tarPoi={id:b.id,fea:n,equal:this.DV(n[1],this.nk.fea[1])},this.map.dispatchEvent(c))):this.jm(g,n,this.Ym,q,f),i++;b.Ze=o;this.oZ();a=(new Date).getTime();b.VY=a;b.BG=a;a=b.lq-b.nq;f=b.mq-b.lq;__drawTime= b.BG-b.mq;this.Gj.push({id:b.id,downLoadTime:a,parseDataTime:f,drawTime:__drawTime,restRate:i+"/"+d,areaTime:b.VU-b.WU,roadTime:b.vZ-b.wZ,otherTime:b.VY-b.WY,timeline:{start:b.nq,downLoadComplete:b.lq,parseComplete:b.mq,drawComplete:b.BG}});this.hO++;1==this.hO&&this.map.dispatchEvent(new O("onfirstvectorloaded"));if(this.We==this.jj){if(k){this.lp=q;for(d=b=0;i=this.Gj[d];d++)b+=i.drawTime;this.map.Bb();z.An("cus.fire","time",{z_vectorfirstdrawtime:b})}d=(new Date).getTime()-this.fO;c=new O("onvectorloaded"); c.FF=this.We;c.s4=d;c.n4=this.Gj;this.map.dispatchEvent(c);this.map.dispatchEvent(new O("ontilesloaded"))}}}},oZ:function(){this.jj++;2>=this.We-this.jj&&this.map.dispatchEvent(new O("onallvectorloaded"))},DV:function(a,b){var c=q;if(a.length&&b.length&&a.length==b.length){for(var d=0,e=a.length;d<e&&a[d]===b[d];d++);d==e&&(c=o)}return c},jm:function(a,b,c,d,e){switch(b.tc[0]){case Jf:this.Ww(a,b,e);break;case If:this.pe(a,b[1],b.tc,b.Pc,b[2],c);break;case Kf:this.SC(a,b);break;default:this.UC(a, b,d)}},Ww:function(a,b,c){var d=b.tc,e=d[2],b=b[1];a.fillStyle=z.Db.re(d[1]);a.beginPath();a.moveTo(b[0],b[1]);for(var d=2,f=b.length;d<f;d+=2)a.lineTo(b[d],b[d+1]);a.closePath();a.fill();0<e.length&&(a.strokeStyle=a.fillStyle,a.lineWidth=12<=c?3:e[3],a.stroke())},pe:function(a,b,c,d,e,f){if(c||d){var g=z.Db.re,i=z.Db.lx,k=z.Db.mx;if(this.it(c,d))firstColor=backColor=(g=d&&d[5]&&0<d[5].length?o:q)?z.Db.re(c[1]):"rgba(0, 0, 0, 0)",backLineWidth=c[2],foreLineWidth=g?d[2]:c[2],intervalLen=g?d[5][0]: c[5][0],intervalColor=z.Db.re(g?d[1]:c[1]),c=Math.round(e/f),z.Db.pW(a,b,intervalLen,backLineWidth,foreLineWidth,firstColor,c,backColor,intervalColor);else if(1==c[7])a.strokeStyle=g(c[1]),a.fillStyle=a.strokeStyle,a.lineWidth=c[2],a.lineCap=i(c[3]),a.lineJoin=k(c[4]),z.Db.JK(a,b,a.lineWidth);else{a.beginPath();a.moveTo(b[0],b[1]);e=2;for(f=b.length;e<f;e+=2)a.lineTo(b[e],b[e+1]);a.strokeStyle=g(c[1]);a.lineCap=i(c[3]);a.lineJoin=k(c[4]);a.lineWidth=c[2];a.stroke();d&&(a.strokeStyle=g(d[1]),a.lineWidth= d[2],a.lineCap=i(d[3]),a.lineJoin=k(d[4]),a.stroke())}}},SC:function(a,b){var c=b[1],d=b.tc,e=z.Db.re,f=e(d[1]),g=e(d[2]),i=d[4],e=e(i[1]),i=i[2],d=d[5];z.Db.WC(a,c,0,d,0,f,g,e,i)},UC:function(a,b,c){a.save();var d=b[1],e=b[0],f=b[2],b=this.Ss(b.tc,b.Pc),g=b[1],i=0;if(!("undefined"==typeof g||"number"==typeof g)){var k=-1<g.indexOf("biaopai");g.indexOf("ditie");if(0<g.length){var l="undefined"!=typeof TVC?TVC.QJ.a0:{},l=this.ct[g.length%this.ct.length]+this.cm.normal.iconUrl+"/"+g+".png?v="+(l.version? l.version:"002")+"&udt="+(l.ou?l.ou:"201500601"),m=new Image,n=d[0],t=d[1];2<d.length&&(i+=2);var v=this;if(k)(function(a,b,c,d,e,f,g,i,k,l,n){m.onload=function(){c.drawImage(this,a-this.width/4,b-this.height/4,this.width/2,this.height/2);v.Cs(c,d,e,f,g,i,k,l,n);m.onload=p;delete m.onload;m=p}})(n,t,a,d,b,f,e,g,i,k,c),m.src=l;else{var w=v.Ks[g];w?a.drawImage(w,n-w.width/4,t-w.height/4,w.width/2,w.height/2):(function(b,c,d){m.onload=function(){a.drawImage(this,b-this.width/4,c-this.height/4,this.width/ 2,this.height/2);d&&(v.Ks[g]=m);m.onload=p;delete m.onload;m=p}}(n,t,v.lp),m.src=l)}}!k&&(b[2]&&0<b[2].length)&&this.Cs(a,d,b,f,e,g,i,k,c)}a.restore()},Cs:function(a,b,c,d,e,f,g,i,k){var l=z.Db.re,m=c[2];if(e&&0<m.length){var n=[],c=m[2],t=m[3],v=m[4],m=m[5];n.push(z.Db.rL(v));n.push(c+"px");i||n.push("Helvetica Neue,Arial,Hiragino Sans GB,\\u9ed1\\u4f53,sans-serif");a.font=n.join(" ");a.fillStyle=k?"#c61b1b":l(t);if(k=z.Db.bM(v))a.strokeStyle=l(m),a.lineWidth=i?0.5:2;for(var f=-1<f.indexOf("biaopai_xiandao"), n=e.split("\\\\"),t=0,w=n.length,y=b.length;t<w&&g<y;t++){var C=b[g],A=b[g+1],e=n[t],e=a.measureText(e).width,D=c,g=g+2;10<d&&350>d&&this.OF(a,C,A,d);var B=1;z.Db.aM(v)&&(z.Db.XK(a,C-e/2,A-D/2,e,D,{fillStyle:l(m)}),B=0);f?(a.save(),a.scale(0.9,0.9),k&&a.strokeText(n[t],(C-e/2+1)/0.9,(A+D/2+1)/0.9),a.fillText(n[t],(C-e/2+1)/0.9,(A+D/2+1)/0.9),a.restore()):(B=i?2:B,k&&a.strokeText(n[t],C-e/2,A+D/2+B),a.fillText(n[t],C-e/2,A+D/2+B))}}},Ss:function(a,b){var c=[Hf,"",[]];a&&(a[0]==Lf?c[2]=a:c=a);b&&(b[0]== Lf?c[2]=b:c[1]=b[1]);return c},OF:function(a,b,c,d){d=d/180*Math.PI;cv=Math.cos(d);sv=Math.sin(d);yy=xx=cv;xy=sv;yx=-sv;x0=b-b*cv-c*sv;y0=c+b*sv-c*cv;a.transform(xx,yx,xy,yy,x0,y0)},dF:function(a,b,c,d){if(16>=c)for(var c=0,e=b.length;c<e;){for(var f=b[c],g=this.Ws(f.tc,f.Pc),f=c+1;f<e;f++){var i=b[f];if(g!=this.Ws(i.tc,i.Pc))break}for(var k=c;k<f;k++){var l=b[k],m=l[1],g=l.tc,i=l.Pc;this.it(g,i)?l.jE=o:this.pe(a,m,g,q)}for(k=c;k<f;k++)l=b[k],l.jE?this.pe(a,l[1],l.tc,l.Pc,l[2],d):this.pe(a,l[1],l.Pc, q);c=f}else{c=0;for(e=b.length;c<e;c++)f=b[c],g=f.tc,i=f.Pc,k=g[6]&1?o:q,i&&!k&&(k=i[6]&1?o:q),k?f.sE=o:this.pe(a,f[1],g,q);c=0;for(e=b.length;c<e;c++)f=b[c],g=f.tc,i=f.Pc,f.sE?this.pe(a,f[1],g,i,f[2],d):this.pe(a,f[1],i,q)}},Ws:function(a,b){if(!b)return 0;var c=a[6],d=b[6];if(1==c||1==d)return 1;switch(c){case 2:return 2==d?1:0;case 4:case 6:case 8:case 10:return 4<=d&&10>=d?1:0;default:return 0}},it:function(a,b){return a&&0<a.length&&0<a[5].length||b&&0<b.length&&0<b[5].length?o:q}}; z.VectorDrawLib=Nf; ');
