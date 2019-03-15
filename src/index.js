module.exports = function getZerosCount(number, base) {
  // your implementation
  var zerosCount,
    j = 0,
    i = 2,
    x=base,
    a = new Array(),
    b = new Array();
    d = new Array();
do {
      if (x % i === 0) {
      a.push(i);
      j++;
      x = x / i;
      }
      else
      {
      i++;
      }
      }
      while (i < x);
      a.push(i); //закончили разложение базы на простые множетели
      i=1;
      j=0;
      b[0]=a[0]
do { 
        if (b[0] ==x) { }
        else {
      if (b[i-1] % a[j] === 0) {
      b[i-1] = b[i-1]*a[j];
      j++;
      }
      else {
      b[i-1]=b[i-1]/a[j-1]
      b[i]=a[j]
      i++;
      }}}
      while (i < a.length);       // разложили на степени простых чисел
      var k=1,
      m=0;
      for (i=0;i<b.length;i++){
      k=a[i];
      d[i]=0;
do {
          m=Math.floor(number/k) ;
          d[i]=d[i]+m;
          k=k*a[i];
         } while (number/k>=1);
      };      
 zerosCount=d[0];
      for (i=1;i<d.length;i++)  {
         if (d[i]<zerosCount) {
             zerosCount=d[i];
      }      }                      // получили массив с количество нулем от каждой значимой цифры
    
  return zerosCount
}