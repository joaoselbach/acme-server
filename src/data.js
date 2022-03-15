const verbs = [
    'Armário',
    'Navio',
    'Mala',
    'Base',
    'Hidroavião',
    'Revista',
    'Carretel',
    'Minissaia',
    'Tamborim',
    'Andador',
    'Geladeira',
    'Estátua',
    'Rolo',
    'Crachá',
    'Peneira',
    'Bafômetro',
    'Desentupidor',
    'Guarda-chuva',
    'Espanador',
    'Escudo',
    'Raquete',
    'Vaso sanitário',
    'Lancheira',
    'Cofre',
    'Helióstato',
    'Medalha',
    'Foguete',
    'Lata',
    'Sintetizador',
    'Grampo',
    'Bucha',
    'Catraca',
    'Alfinete',
    'Caneca',
    'Fita',
    'Moeda',
    'Gel',
    'Maquete',
    'Interfone',
    'Gaveta',
    'Helicóptero',
    'Vela de cera',
    'Quimono',
    'Necessaire',
    'Machado',
    'Tecido',
    'Vareta de freio',
    'Obra de arte',
    'Canga'
  ];
  
  const adjectives = [
    'prepotente',
    'valioso',
    'legítimo',
    'desleixado',
    'Natural',
    'inteligente',
    'disciplinado',
    'louvável',
    'amargurado',
    'honesto',
    'odioso',
    'vergonhoso',
    'horroroso',
    'magnífico',
    'gordo',
    'romântico',
    'sublime',
    'mesquinho',
    'injusto',
    'medroso',
    'otário',
    'quente',
    'intenso',
    'Sábio',
    'zeloso',
    'desapegado',
    'faceiro',
    'companheiro',
    'empenhado',
    'espantoso',
    'traidor',
    'perfeccionista',
    'Qualificado',
    'feio',
    'tolerante',
    'orgulhoso',
    'ignorante',
    'lutador',
    'desejado',
    'exigente',
    'nostálgico',
    'próspero',
    'compreensivo',
    'excelente',
    'estourado',
    'malvado',
    'windsurfista',
    'falso',
    'melhor',
    'terno'
  ];
  
  //Vai gerar um objeto contendo o ID, Nome (composto por verbo + adjetivo), Preço e Imagem (Lorem Picsum)
  export default function handleProducts(quantidade) {
    const products = [];
  
    while (products.length < quantidade) {
      const adjectivesIndex = Math.floor(Math.random() * adjectives.length);
      const verbsIndex = Math.floor(Math.random() * verbs.length);

      //Concatena o verbo e o adjetivo para formar o nome
      const name = `${verbs[verbsIndex]} ${adjectives[adjectivesIndex]}`;
  
      //Verifica se existe um produto com o mesmo nome
      const exist = products.find(product => product.name === name);

      //Descrição
      const description = "Lorem ipsum dolor sit amet."

      //Geração do preço e formatação para BRL
      const price = Math.abs((10 + name.length) * (500 - description.length) / (3 - name.length));
      const formatedPrice = Intl.NumberFormat(`pt-BR`, { currency: 'BRL', style: 'currency' }).format(price);

      //Geração da imagem com tamanho fixo de 300x300
      const id = products.length + 1;
      const url = `https://picsum.photos/id/${id}/300/300`
      const largeUrl = `https://picsum.photos/id/${id}/530/600`
  
      //Verifica se existe um produto com o mesmo nome antes de prosseguir com a inserção
      if (!exist) {
        products.push({
          id: products.length + 1, 
          name,
          description,
          price,
          formatedPrice,
          image: url,
          largeImage: largeUrl,
        });
      }
    }
  
    return products;
  }
  
  //Inicia função
  const products = handleProducts(20);
  
  