function HouseKeeper(name,yearOfExperience,pengalaman){
    this.name = name;
    this.yearOfExperience = yearOfExperience;
    this.pengalaman = pengalaman;
    function cleaning(){
        
    }
}

var robi = new HouseKeeper("Robi",20,["menyapu","bersih"]);
console.log(robi.pengalaman[1])