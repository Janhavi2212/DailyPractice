ip=[1,2,3,4,5],k=2;

function rotateByK(ip,k){
    for(i=0;i<=k;i++){
        let temp=ip[0];
        for(j=0;j<ip.length-1;j++){
            ip[j]=ip[j+1]
        }
        ip[ip.length-1]=temp
    }
    return ip
}

console.log(rotateByK(ip,k));
