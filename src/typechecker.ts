/**
* This code was taken from Lab 4 from CSC-312. I will make edits when given the chance
*/

import * as L from './lang'

/**
 * Checks to ensure that the types are accurate to the expression that 
 * has been given in the parameters
 */
export function typecheck(e: L.Exp): L.Typ {
  switch(e.tag){
    //Checks num
    case 'zahl':
      return L.tynat
    //Checks bool
    case 'bool':
      return L.tybool
    //Checks not
    case 'nicht':
      let enot = e.exp
      if(enot.tag === 'bool'){
        return L.tybool
      }else{
        throw new Error("Inkompatibel typ: nicht")
      }
    //Checks plus
    case 'plus':
      let eplus1 = e.e1
      let eplus2 = e.e2
      if(eplus1.tag === "zahl" && eplus2.tag === 'zahl'){
        return L.tynat
      } else {
        throw new Error("Inkompatibel typ: plus")
      }
    //Checks equals
    case 'gleich':
      let eeq1 = e.e1
      let eeq2 = e.e2
      if(eeq1.tag === 'bool' && eeq2.tag === 'bool'){
        return L.tybool 
      } else if ( eeq1.tag === 'zahl' && eeq2.tag === 'zahl'){
        return L.tynat
      } else {
        throw new Error("Inkompatibel typ: gleich")
      }
    //Checks and
    case 'und':
      let eand1 = e.e1
      let eand2 = e.e2
      if (eand1.tag === 'bool' && eand2.tag === 'bool'){
        return L.tybool
      } else {
        throw new Error("Inkompatibel typ: und")
      }
    //Checks or
    case 'sonst':
      let eor1 = e.e1
       let eor2 = e.e2
      if (eor1.tag === 'bool' && eor2.tag === 'bool'){
         return L.tybool
      }else {
        throw new Error("Inkompatibel typ: sonst")
      }
    //Checks if
    case 'ob':
      let eif1 = e.e1
       if(eif1.tag === 'bool'){
        return L.tybool 
      } else {
        throw new Error("Inkompatibel typ: ob")
      }
    //Checks default 
    default: 
       throw new Error("Nicht ein gültig Ausdruck")
    }
}
