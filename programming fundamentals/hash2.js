function Encryption(string){
    string =string.toLowerCase();
    let alphabet=[" ","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let encryptionAlphabet= [" ","1#","2#","3#","4#","5#","6#","7#","8#","9#","10#","11#","12#","13#","14#","15#","16#","17#","18#","19#","20#","21#","22#","23#","24#","25#","26#"];
    let encryptedWord="";
    for (i=0;i<string.length;i++){
        for (j=0;j<alphabet.length;j++){
            if (alphabet[j]==string[i]){
                encryptedWord=encryptedWord+encryptionAlphabet[j];
            }
        }
    }

    return encryptedWord;
}


function decryption (string){
    let strArr= string.split("#");
    let alphabet=[" ","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let encryptionAlphabet= [" ","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26"];
    let decryptedWord="";
    for (i=0;i<strArr.length;i++){
        for (j=0;j<alphabet.length;j++){
            if (strArr[i]==encryptionAlphabet[j]){
                decryptedWord+=alphabet[j];
            }
        }
    }
        return decryptedWord;

}
let hash = Encryption("hello");  //assign return value of Ecryption() to hash
console.log(hash);
let hashBack = decryption(hash); //assign return value of decryption() to hashBack
console.log(hashBack);

if(hashBack == "hello")
{
    return true;
}
return false;