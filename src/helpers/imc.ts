export type Level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[];
    yourImc?: number;
}

export const levels: Level[] = [
    //criando os niveis com objetos
    { title: 'Magreza', color: '#96A3AB', icon: 'down', imc:[0, 18.5] },
    { title: 'Normal', color: '#0EAD69', icon: 'up', imc:[18.6, 24.9] },
    { title: 'Sobrepeso', color: '#E2B039', icon: 'down', imc:[25, 30] },
    { title: 'Obesidade', color: '#C3423F', icon: 'down', imc:[30.1, 99]}
];

export const calculateImc = (height: number, weight: number) => {
    const imc = weight / (height * height);

    for(let i in levels) {
        if (imc >=levels[i].imc[0] && imc < levels[i].imc[1]) {
            /*Depois do calculo feito o level se altera, nesse caso faz uma
             copia e assim  o level permanesse*/
            let leveCopy = {...levels[i]};

            leveCopy.yourImc = parseFloat(imc.toFixed(2));
            return leveCopy;
        }
    }

    return null;
}