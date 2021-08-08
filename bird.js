class Bird {
    constructor() {
        this.x = 300;
        this.y = height/ 2;
        this.size = 25;
        this.velocity = 0;
        this.gravity = 0.6;
        this.upForce = 15;
    }

    show() {
        fill(255, 255, 0);
        ellipse(this.x, this.y, this.size, this.size);
        ellipse(this.x-10, this.y-3, this.size-10, this.size-10);
        fill(255,165,0);
        ellipse(this.x+4, this.y+10, 25, 10);
    }

    jump() {
        this.velocity -= this.upForce;
    }

    update() {
        this.velocity += this.gravity;
        this.velocity *= 0.95;
        this.y += this.velocity;

        if(this.y > height - this.size/2) {
            this.y = height - this.size/2;
            this.velocity = 0; 
        }

        if(this.y < this.size/2) {
            this.y = this.size/2;
            this.velocity = 0; 
        }
    }
};