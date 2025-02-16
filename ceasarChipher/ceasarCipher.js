export default function ceasarCipher(str, shift) {
    const firstLowerCaseChar = 97;
    const lastLowerCaseChar = 122;
    const firstUpperCaseChar = 65;
    const lastUpperCaseChar = 90;
    let encrypted = '';
    
    for (let i = 0; i < str.length; i++) {
        let currentePosition = str.charCodeAt(i);
        let newPosition = currentePosition + shift;
        
        if (currentePosition >= firstLowerCaseChar && currentePosition <= lastLowerCaseChar) {
            if (newPosition > lastLowerCaseChar) {
                newPosition = (firstLowerCaseChar - 1 + (newPosition - lastLowerCaseChar));
                encrypted += String.fromCharCode(newPosition);
            } else {
                encrypted += String.fromCharCode(newPosition)
            }
        } else if (currentePosition >= firstUpperCaseChar && currentePosition <= lastUpperCaseChar) {
            if (newPosition > lastUpperCaseChar ) {
                newPosition = (firstUpperCaseChar - 1 + (newPosition - lastUpperCaseChar ));
                encrypted += String.fromCharCode(newPosition);
            } else {
                encrypted += String.fromCharCode(newPosition)
            }
        } else {
            encrypted += String.fromCharCode(currentePosition);
        }
    }
                                                                                                                                                                                                                                                                                                    
    return encrypted;
}