const Color = function(r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;
    // console.log(this);
}



Color.prototype.rgba = function(a = 1.0){
    const {r,g,b} = this;
    return `rgba(${r},${g},${b},${a})`
}

const color1 = new Color(1,2,3);