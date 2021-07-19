define(["exports","./when-b43ff45e","./Math-336da716","./Cartesian2-3c21ddb9","./Transforms-ffcbad88","./PolylineVolumeGeometryLibrary-ff75c3ae","./PolylinePipeline-1c467caa"],function(a,o,M,T,c,N,L){"use strict";var e={},O=new T.Cartesian3,p=new T.Cartesian3,m=new T.Cartesian3,f=new T.Cartesian3,R=[new T.Cartesian3,new T.Cartesian3],V=new T.Cartesian3,Q=new T.Cartesian3,U=new T.Cartesian3,G=new T.Cartesian3,I=new T.Cartesian3,q=new T.Cartesian3,j=new T.Cartesian3,k=new T.Cartesian3,F=new T.Cartesian3,H=new T.Cartesian3,d=new c.Quaternion,g=new c.Matrix3;function J(a,e,r,n,t){var i,s=T.Cartesian3.angleBetween(T.Cartesian3.subtract(e,a,O),T.Cartesian3.subtract(r,a,p)),o=n===N.CornerType.BEVELED?1:Math.ceil(s/M.CesiumMath.toRadians(5))+1,C=3*o,l=new Array(C);l[C-3]=r.x,l[C-2]=r.y,l[C-1]=r.z,i=t?c.Matrix3.fromQuaternion(c.Quaternion.fromAxisAngle(T.Cartesian3.negate(a,O),s/o,d),g):c.Matrix3.fromQuaternion(c.Quaternion.fromAxisAngle(a,s/o,d),g);var y=0;e=T.Cartesian3.clone(e,O);for(var u=0;u<o;u++)e=c.Matrix3.multiplyByVector(i,e,e),l[y++]=e.x,l[y++]=e.y,l[y++]=e.z;return l}function K(a,e,r,n){var t=O;return[(t=(n||(e=T.Cartesian3.negate(e,e)),T.Cartesian3.add(a,e,t))).x,t.y,t.z,r.x,r.y,r.z]}function W(a,e,r,n){for(var t=new Array(a.length),i=new Array(a.length),s=T.Cartesian3.multiplyByScalar(e,r,O),o=T.Cartesian3.negate(s,p),C=0,l=a.length-1,y=0;y<a.length;y+=3){var u=T.Cartesian3.fromArray(a,y,m),c=T.Cartesian3.add(u,o,f);t[C++]=c.x,t[C++]=c.y,t[C++]=c.z;var d=T.Cartesian3.add(u,s,f);i[l--]=d.z,i[l--]=d.y,i[l--]=d.x}return n.push(t,i),n}e.addAttribute=function(a,e,r,n){var t=e.x,i=e.y,s=e.z;o.defined(r)&&(a[r]=t,a[r+1]=i,a[r+2]=s),o.defined(n)&&(a[n]=s,a[n-1]=i,a[n-2]=t)};var X=new T.Cartesian3,Y=new T.Cartesian3;e.computePositions=function(a){var e=a.granularity,r=a.positions,n=a.ellipsoid,t=a.width/2,i=a.cornerType,s=a.saveAttributes,o=V,C=Q,l=U,y=G,u=I,c=q,d=j,p=k,m=F,f=H,g=[],h=s?[]:void 0,w=s?[]:void 0,z=r[0],x=r[1];C=T.Cartesian3.normalize(T.Cartesian3.subtract(x,z,C),C),o=n.geodeticSurfaceNormal(z,o),y=T.Cartesian3.normalize(T.Cartesian3.cross(o,C,y),y),s&&(h.push(y.x,y.y,y.z),w.push(o.x,o.y,o.z)),d=T.Cartesian3.clone(z,d),z=x,l=T.Cartesian3.negate(C,l);var v,P,A=[],B=r.length;for(v=1;v<B-1;v++){o=n.geodeticSurfaceNormal(z,o),x=r[v+1],C=T.Cartesian3.normalize(T.Cartesian3.subtract(x,z,C),C),u=T.Cartesian3.normalize(T.Cartesian3.add(C,l,u),u);var E=T.Cartesian3.multiplyByScalar(o,T.Cartesian3.dot(C,o),X);T.Cartesian3.subtract(C,E,E),T.Cartesian3.normalize(E,E);var S=T.Cartesian3.multiplyByScalar(o,T.Cartesian3.dot(l,o),Y);if(T.Cartesian3.subtract(l,S,S),T.Cartesian3.normalize(S,S),!M.CesiumMath.equalsEpsilon(Math.abs(T.Cartesian3.dot(E,S)),1,M.CesiumMath.EPSILON7)){u=T.Cartesian3.cross(u,o,u),u=T.Cartesian3.cross(o,u,u),u=T.Cartesian3.normalize(u,u);var b=t/Math.max(.25,T.Cartesian3.magnitude(T.Cartesian3.cross(u,l,O))),D=N.PolylineVolumeGeometryLibrary.angleIsGreaterThanPi(C,l,z,n);u=T.Cartesian3.multiplyByScalar(u,b,u),D?(p=T.Cartesian3.add(z,u,p),f=T.Cartesian3.add(p,T.Cartesian3.multiplyByScalar(y,t,f),f),m=T.Cartesian3.add(p,T.Cartesian3.multiplyByScalar(y,2*t,m),m),R[0]=T.Cartesian3.clone(d,R[0]),R[1]=T.Cartesian3.clone(f,R[1]),g=W(L.PolylinePipeline.generateArc({positions:R,granularity:e,ellipsoid:n}),y,t,g),s&&(h.push(y.x,y.y,y.z),w.push(o.x,o.y,o.z)),c=T.Cartesian3.clone(m,c),y=T.Cartesian3.normalize(T.Cartesian3.cross(o,C,y),y),m=T.Cartesian3.add(p,T.Cartesian3.multiplyByScalar(y,2*t,m),m),d=T.Cartesian3.add(p,T.Cartesian3.multiplyByScalar(y,t,d),d),i===N.CornerType.ROUNDED||i===N.CornerType.BEVELED?A.push({leftPositions:J(p,c,m,i,D)}):A.push({leftPositions:K(z,T.Cartesian3.negate(u,u),m,D)})):(m=T.Cartesian3.add(z,u,m),f=T.Cartesian3.add(m,T.Cartesian3.negate(T.Cartesian3.multiplyByScalar(y,t,f),f),f),p=T.Cartesian3.add(m,T.Cartesian3.negate(T.Cartesian3.multiplyByScalar(y,2*t,p),p),p),R[0]=T.Cartesian3.clone(d,R[0]),R[1]=T.Cartesian3.clone(f,R[1]),g=W(L.PolylinePipeline.generateArc({positions:R,granularity:e,ellipsoid:n}),y,t,g),s&&(h.push(y.x,y.y,y.z),w.push(o.x,o.y,o.z)),c=T.Cartesian3.clone(p,c),y=T.Cartesian3.normalize(T.Cartesian3.cross(o,C,y),y),p=T.Cartesian3.add(m,T.Cartesian3.negate(T.Cartesian3.multiplyByScalar(y,2*t,p),p),p),d=T.Cartesian3.add(m,T.Cartesian3.negate(T.Cartesian3.multiplyByScalar(y,t,d),d),d),i===N.CornerType.ROUNDED||i===N.CornerType.BEVELED?A.push({rightPositions:J(m,c,p,i,D)}):A.push({rightPositions:K(z,u,p,D)})),l=T.Cartesian3.negate(C,l)}z=x}return o=n.geodeticSurfaceNormal(z,o),R[0]=T.Cartesian3.clone(d,R[0]),R[1]=T.Cartesian3.clone(z,R[1]),g=W(L.PolylinePipeline.generateArc({positions:R,granularity:e,ellipsoid:n}),y,t,g),s&&(h.push(y.x,y.y,y.z),w.push(o.x,o.y,o.z)),i===N.CornerType.ROUNDED&&(P=function(a){var e=V,r=Q,n=U,t=a[1];r=T.Cartesian3.fromArray(a[1],t.length-3,r),n=T.Cartesian3.fromArray(a[0],0,n);var i=J(e=T.Cartesian3.midpoint(r,n,e),r,n,N.CornerType.ROUNDED,!1),s=a.length-1,o=a[s-1];return t=a[s],r=T.Cartesian3.fromArray(o,o.length-3,r),n=T.Cartesian3.fromArray(t,0,n),[i,J(e=T.Cartesian3.midpoint(r,n,e),r,n,N.CornerType.ROUNDED,!1)]}(g)),{positions:g,corners:A,lefts:h,normals:w,endPositions:P}},a.CorridorGeometryLibrary=e});
