var zerosCount,
j = 0,
i = 2,
base=10,
number=10;
a = new Array(),
b = new Array();
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
a.push(i);
alert("простые множители"+a); //закончили разложение базы на простые множетели

for (i=a.length;i>=0;i--) {
    count=1;
    
    d[i]=0
alert( "входное д"+d[i]);
alert("входное к"+k);
    if (a[i]==a[i-1]){
 alert( "a[]i "+a[i]);
 alert( "a[i-1]"+a[i-1]);
 alert("совпадает до прибавления"+count);
       count=count+1;
 alert("совпадает после прибавления"+count);
    };
k=a[i];
alert("входное к "+k);
    do {
        m=Math.floor(number/k) ;
        d[i]=d[i]+m;
        k=k*a[i];
        alert( "считем количество нулей"+d);
        alert("будем делить на"+k);
    } while (number/k>1);
 alert("совпадает"+count);
    d[i]=d[i]/count;
    alert("итоговое д "+d)
}

alert('значимый массив'+d);
var zerosCount=d[0];
for (i=1;i<d.length;i++)  {
   if (d[i]<zerosCount) {
       zerosCount=d[i];
}
}                      // получили массив с количество нулем от каждой значимой цифры

alert('количество нулей'+ zerosCount)
