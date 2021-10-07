
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (specimenNum, dna) => {
   return {
    specimenNum: specimenNum,
    dna: dna,
    mutate(){
      let newDna = this.dna;
      let i = Math.floor(Math.random() * newDna.length - 1);
      let currentBase = newDna[i];
      let newBase;
      do {
        newBase = returnRandBase;
      }
      while (currentBase === newBase);
      newDna[i] = newBase;
      return newDna;
    },
  compareDNA(pAequorObject) {
  let newCount = 0;
  for (i = 0; i < this.dna.length; i++) {
    if (this.dna[i] === pAequorObject.dna[i]){
      return newCount++;
    }
  }
  let newPercentage = Math.floor((newCount / this.dna.length) * 100);
  return `Result: Specimen ${specimenNum} and Specimen ${pAequorObject.specimenNum} have ${newPercentage}% in common.`;
  },
  willLikelySurvive() {
    let oldCount = 0;
    for (i = 0; i < this.dna.length; i++){ if (this.dna[i] === 'C' || this.dna[i] === 'G') {
      oldCount++;
    }
    } let countPercentage = Math.floor((count / this.dna.length) * 100);
    let willLikelySurvive = () => {
     if (countPercentage >= 60){
      return true;
    } else {
      return false;
    } return willLikelySurvive;
    }
  },
  pAequorInstances() {
  let pAequorInstances = this.dna;
  for (i = 0; i < pAequorInstances.length; i++){
    if (pAequorInstances[i] === 'A')
    {pAequorInstances[i] === 'T';} 
    else if (pAequorInstances[i] === 'T')
    {pAequorInstances[i] === 'A'}
    else if (pAequorInstances[i] === 'C'){pAequorInstances[i] === 'G'}
    else if (pAequorInstances[i] === 'G'){pAequorInstances[i] === 'C'}
  } return pAequorInstances;
  }
   }
  }