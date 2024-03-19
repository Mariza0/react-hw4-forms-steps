import { Hex } from './HexToRgba';

export const ValidInput = ({ name }: { name: Hex }) => {

    const regExp = /^#([0-9A-Fa-f]{1,2}){3}$/;
  
    if (regExp.test(name)) {
        
        return true
    }
    else return false
}
