_jsload2&&_jsload2('convertor', 'x.extend(jc.prototype,{UP:function(){for(var a=0,b=this.Pa.length;a<b;a++){var c=this.Pa[a];this[c.method].apply(this,c.arguments)}delete this.Pa},translate:function(a,b,c,d){b=b||1;c=c||5;if(10<a.length)d&&d({status:25});else{var e=z.Ac+"geoconv/v1/?coords=";x.Gb(a,function(a){e+=a.lng+","+a.lat+";"});e=e.replace(/;$/gi,"");e=e+"&from="+b+"&to="+c+"&ak="+qa;pa(e,function(a){if(0===a.status){var b=[];x.Gb(a.result,function(a){b.push(new z.Point(a.x,a.y))});delete a.result;a.points=b}d&&d(a)})}}}); ');
