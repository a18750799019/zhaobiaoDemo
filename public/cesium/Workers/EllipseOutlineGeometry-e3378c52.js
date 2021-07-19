define(["exports","./when-b43ff45e","./Check-d404a0fe","./Math-336da716","./Cartesian2-3c21ddb9","./Transforms-ffcbad88","./ComponentDatatype-8956ad9a","./GeometryAttribute-c9800e88","./GeometryAttributes-fbf888b4","./IndexDatatype-c5295474","./GeometryOffsetAttribute-9f7392ac","./EllipseGeometryLibrary-12504248"],function(e,A,t,_,g,v,x,E,M,C,G,L){"use strict";var O=new g.Cartesian3,u=new g.Cartesian3;var S=new v.BoundingSphere,V=new v.BoundingSphere;function c(e){var t=(e=A.defaultValue(e,A.defaultValue.EMPTY_OBJECT)).center,i=A.defaultValue(e.ellipsoid,g.Ellipsoid.WGS84),r=e.semiMajorAxis,a=e.semiMinorAxis,n=A.defaultValue(e.granularity,_.CesiumMath.RADIANS_PER_DEGREE),o=A.defaultValue(e.height,0),s=A.defaultValue(e.extrudedHeight,o);this._center=g.Cartesian3.clone(t),this._semiMajorAxis=r,this._semiMinorAxis=a,this._ellipsoid=g.Ellipsoid.clone(i),this._rotation=A.defaultValue(e.rotation,0),this._height=Math.max(s,o),this._granularity=n,this._extrudedHeight=Math.min(s,o),this._numberOfVerticalLines=Math.max(A.defaultValue(e.numberOfVerticalLines,16),0),this._offsetAttribute=e.offsetAttribute,this._workerName="createEllipseOutlineGeometry"}c.packedLength=g.Cartesian3.packedLength+g.Ellipsoid.packedLength+8,c.pack=function(e,t,i){return i=A.defaultValue(i,0),g.Cartesian3.pack(e._center,t,i),i+=g.Cartesian3.packedLength,g.Ellipsoid.pack(e._ellipsoid,t,i),i+=g.Ellipsoid.packedLength,t[i++]=e._semiMajorAxis,t[i++]=e._semiMinorAxis,t[i++]=e._rotation,t[i++]=e._height,t[i++]=e._granularity,t[i++]=e._extrudedHeight,t[i++]=e._numberOfVerticalLines,t[i]=A.defaultValue(e._offsetAttribute,-1),t};var m=new g.Cartesian3,h=new g.Ellipsoid,y={center:m,ellipsoid:h,semiMajorAxis:void 0,semiMinorAxis:void 0,rotation:void 0,height:void 0,granularity:void 0,extrudedHeight:void 0,numberOfVerticalLines:void 0,offsetAttribute:void 0};c.unpack=function(e,t,i){t=A.defaultValue(t,0);var r=g.Cartesian3.unpack(e,t,m);t+=g.Cartesian3.packedLength;var a=g.Ellipsoid.unpack(e,t,h);t+=g.Ellipsoid.packedLength;var n=e[t++],o=e[t++],s=e[t++],l=e[t++],u=e[t++],d=e[t++],f=e[t++],p=e[t];return A.defined(i)?(i._center=g.Cartesian3.clone(r,i._center),i._ellipsoid=g.Ellipsoid.clone(a,i._ellipsoid),i._semiMajorAxis=n,i._semiMinorAxis=o,i._rotation=s,i._height=l,i._granularity=u,i._extrudedHeight=d,i._numberOfVerticalLines=f,i._offsetAttribute=-1===p?void 0:p,i):(y.height=l,y.extrudedHeight=d,y.granularity=u,y.rotation=s,y.semiMajorAxis=n,y.semiMinorAxis=o,y.numberOfVerticalLines=f,y.offsetAttribute=-1===p?void 0:p,new c(y))},c.createGeometry=function(e){if(!(e._semiMajorAxis<=0||e._semiMinorAxis<=0)){var t=e._height,i=e._extrudedHeight,r=!_.CesiumMath.equalsEpsilon(t,i,0,_.CesiumMath.EPSILON2);e._center=e._ellipsoid.scaleToGeodeticSurface(e._center,e._center);var a,n={center:e._center,semiMajorAxis:e._semiMajorAxis,semiMinorAxis:e._semiMinorAxis,ellipsoid:e._ellipsoid,rotation:e._rotation,height:t,granularity:e._granularity,numberOfVerticalLines:e._numberOfVerticalLines};if(r)n.extrudedHeight=i,n.offsetAttribute=e._offsetAttribute,a=function(e){var t=e.center,i=e.ellipsoid,r=e.semiMajorAxis,a=g.Cartesian3.multiplyByScalar(i.geodeticSurfaceNormal(t,O),e.height,O);S.center=g.Cartesian3.add(t,a,S.center),S.radius=r,a=g.Cartesian3.multiplyByScalar(i.geodeticSurfaceNormal(t,a),e.extrudedHeight,a),V.center=g.Cartesian3.add(t,a,V.center),V.radius=r;var n=L.EllipseGeometryLibrary.computeEllipsePositions(e,!1,!0).outerPositions,o=new M.GeometryAttributes({position:new E.GeometryAttribute({componentDatatype:x.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:L.EllipseGeometryLibrary.raisePositionsToHeight(n,e,!0)})});n=o.position.values;var s=v.BoundingSphere.union(S,V),l=n.length/3;if(A.defined(e.offsetAttribute)){var u=new Uint8Array(l);if(e.offsetAttribute===G.GeometryOffsetAttribute.TOP)u=G.arrayFill(u,1,0,l/2);else{var d=e.offsetAttribute===G.GeometryOffsetAttribute.NONE?0:1;u=G.arrayFill(u,d)}o.applyOffset=new E.GeometryAttribute({componentDatatype:x.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:u})}var f=A.defaultValue(e.numberOfVerticalLines,16);f=_.CesiumMath.clamp(f,0,l/2);var p=C.IndexDatatype.createTypedArray(l,2*l+2*f);l/=2;var c,m,h=0;for(c=0;c<l;++c)p[h++]=c,p[h++]=(c+1)%l,p[h++]=c+l,p[h++]=(c+1)%l+l;if(0<f){var y=Math.min(f,l);m=Math.round(l/y);var b=Math.min(m*f,l);for(c=0;c<b;c+=m)p[h++]=c,p[h++]=c+l}return{boundingSphere:s,attributes:o,indices:p}}(n);else if(a=function(e){var t=e.center;u=g.Cartesian3.multiplyByScalar(e.ellipsoid.geodeticSurfaceNormal(t,u),e.height,u),u=g.Cartesian3.add(t,u,u);for(var i=new v.BoundingSphere(u,e.semiMajorAxis),r=L.EllipseGeometryLibrary.computeEllipsePositions(e,!1,!0).outerPositions,a=new M.GeometryAttributes({position:new E.GeometryAttribute({componentDatatype:x.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:L.EllipseGeometryLibrary.raisePositionsToHeight(r,e,!1)})}),n=r.length/3,o=C.IndexDatatype.createTypedArray(n,2*n),s=0,l=0;l<n;++l)o[s++]=l,o[s++]=(l+1)%n;return{boundingSphere:i,attributes:a,indices:o}}(n),A.defined(e._offsetAttribute)){var o=a.attributes.position.values.length,s=new Uint8Array(o/3),l=e._offsetAttribute===G.GeometryOffsetAttribute.NONE?0:1;G.arrayFill(s,l),a.attributes.applyOffset=new E.GeometryAttribute({componentDatatype:x.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:s})}return new E.Geometry({attributes:a.attributes,indices:a.indices,primitiveType:E.PrimitiveType.LINES,boundingSphere:a.boundingSphere,offsetAttribute:e._offsetAttribute})}},e.EllipseOutlineGeometry=c});
