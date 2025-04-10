var maxArea = function(height) {
    let maxA=0,s=0,e=height.length-1;
    while(s<e){
        area=Math.min(height[s],height[e])*(e-s);
        maxA=Math.max(maxA,area);
        if(height[s]<height[e]){
            s++
        } else {
            e--
        }
    }
    return maxA
};