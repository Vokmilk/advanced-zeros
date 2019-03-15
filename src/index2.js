var zerosCount,
j = 0,
i = 2,
base=169,
number=54022488;
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
i=1;
j=0;
b[0]=a[0]
if (a[a.length]==a[a.length-1]){
    do { 
        if (b[0] == base) {}
    else {
       
    if (b[i-1] % a[j] === 0){
    b[i-1] = b[i-1]*a[j];
    j++;
    }
    else {
    b[i-1]=b[i-1]/a[j-1]
    b[i]=a[j]
    i++;
    }}}
    while (i < a.length-1 );
        
}
else {
do { 
    if (b[0] == base) {}
else {
   
if (b[i-1] % a[j] === 0){
b[i-1] = b[i-1]*a[j];
j++;
}
else {
b[i-1]=b[i-1]/a[j-1]
b[i]=a[j]
i++;
}}}
while (i < a.length ); 
}
alert("простые множители в степени"+b) // разложили на степени простых чисел
var k=1,
m=0;
for (i=0;i<b.length;i++){
k=a[i];
d[i]=0;
do {
    m=Math.floor(number/k) ;
    d[i]=d[i]+m;
    k=k*a[i];
    alert(d);
    alert(k);
} while (number/k>1);
};

alert('значимый массив'+d);
var zerosCount=d[0];
for (i=1;i<d.length;i++)  {
   if (d[i]<zerosCount) {
       zerosCount=d[i];
}
}                      // получили массив с количество нулем от каждой значимой цифры

alert(zerosCount)