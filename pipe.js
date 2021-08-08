class Pipe {
    constructor() {
        this.top = random(height/4, height/2);
        this.bottom = random(height/4, height/3);
        this.x = width;
        this.w = 30;
        this.speed = 5;
        this.highlight = false;
    }

    passedBird(bird) {
        if(bird.x > this.x && bird.x < this.x + this.w)
            return true;
        return false;
    }

    hits(bird){
        if(bird.y < this.top || bird.y > height - this.bottom){
            if(bird.x > this.x && bird.x < this.x + this.w){
                this.highlight = true;
                return true;
            }
        }
        this.highlight = false;
        return false;
    }

    show() {
        fill(0,255,0);
        if(this.highlight)
            fill(255, 0, 0);
        rect(this.x, 0, this.w, this.top); 
        rect(this.x, height - this.bottom, this.w, this.bottom); 
        fill(255);
    }

    update(level) {
        this.x -= this.speed * level;
    }

    offscreen() {
        if(this.x < -this.w){
            return true;
        }
        else{
            return false;
        }
    }
};
