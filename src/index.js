module.exports = function getZerosCount(number, base) {
  // your implementation
  var zerosCount,
    j = 0,
    i = 2,
    x=base,
    a = new Array(), 
   d = new Array();
do {
if (base % i === 0)
{
a.push(i);
j++;
base = base / i;
}
else
{
i++;
}}
while (i < base);
if(x != 2) {
  a.push(i);};

 //закончили разложение базы на простые множетели

for (i=a.length-1;i>=0;i--) {
    count=1;
    
    d[i]=0

    if (a[i]==a[i-1])
    { j=i;
        do {       count=count+1;
         j--} while (a[j]==a[j-1])
    };
k=a[i];
    do {
        m=Math.floor(number/k) ;
        d[i]=d[i]+m;
        k=k*a[i];
    } while (number/k>1);
    d[i]=Math.floor(d[i]/count);}
var zerosCount=d[0];
for (i=1;i<d.length;i++)  {
   if (d[i]<zerosCount) {
       zerosCount=d[i];
}
}                      // получили массив с количество нулем от каждой значимой цифры
  return zerosCount
}