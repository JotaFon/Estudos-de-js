        var variavel1 = 100;
        let variavel2 = 200;

        console.log('variavel 1: ' + variavel1);
        console.log('variavel 2: ' + variavel2);
        
        console.log('..::If::..');
            if(true){
            variavel1 = 10;
            variavel2 = 20;
            console.log('Variavel 1:' + variavel1);
            console.log('Variavel 2:' + variavel2);

            var variavel3 = 30;
            let variavel4 = 40;
            }
            console.log('Variavel 3:' + variavel3);
            //console.log('Variavel 4:' + variavel4);

            const c1 = 123456;
            console.log('..::If Else::..');

            let fruta = 'morango';
            if (fruta === 'morango'){
                console.log('A fruta possui a cor vermelha');
            }
            else if (fruta === 'abacaxi'){
                console.log('A fruta possui a cor amarela');
            }
            else if (fruta === 'limão'){
                console.log('A fruta possui a cor verde');
            }

            console.log('..::Switch case::..');
            switch(fruta){
                case'morango':
                console.log('A fruta é vermelha');
                break;
                case'abacaxi':
                console.log('A fruta é amarela');
                break;
                case'limão':
                console.log('A fruta é verde');
                break;
            }

            console.log('..::For::..');

            for(cont = 0; cont < 10; cont++){
                console.log('O valor de cont é: ' + cont);
            }
            console.log('<<For quebrado>>')
            for(cont = 0; cont < 10; cont++){
                if(cont == 5) continue;
                console.log('O valor de cont é: ' + cont);
            }

            console.log('..::While::..');
            while(true){
                if(cont == 50) break;
                console.log('Exucutando while');
                cont++;
            }
            console.log('..::Do while::..');
            cont = 1;
            do{
                console.log('Valor de cont: ' + cont);
                cont++
            }while(cont < 5);

            console.log('..::Função::..');
            function primeira_funcao(){
                console.log('Entrou na primeira função!');
            }
            primeira_funcao();

            function soma(valor_a, valor_b){
                let resultado = valor_a + valor_b;
                console.log('O resultado da soma é: ' + resultado);
            }
            soma(3, 5);