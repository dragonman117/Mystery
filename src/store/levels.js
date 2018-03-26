class Level{

	constructor(){
		this.dirs = ['r','l','u','d'];
	}

    getRandomDir(){
        sel = Math.floor(Math.random() * 3);
        return this.dirs[sel]
    }

    getNRandomDirs(n){
        res = [];
        for(let i = 0; i < n; i ++){
            res.push(this.getRandomDir())
        }
        return res
    }

    genLevel(){
        st = this.getNRandomDirs(4);
        one = st.concat(this.getNRandomDirs(2));
        two = one.concat(this.getNRandomDirs(2));
        three = two.concat(this.getNRandomDirs(2));
        four = three.concat(this.getNRandomDirs(2));
        five = four. concat(this.getNRandomDirs(2));
        return [st, one, two, three, four, five]
    }
}

export default Level